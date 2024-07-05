'use server';
import axios, { AxiosResponse } from 'axios';

import { db } from "@/lib/db";
import { redis } from '@/lib/redis';
import { extractVerificationData } from "@/lib/utils";
import { sendEmail } from './sendEmail';

const baseUrl: string | undefined = process.env.NEXT_PUBLIC_VERIFF_BASE_URL;
const token: string | undefined = process.env.NEXT_PUBLIC_VERIFF_API_KEY;

interface Person {
  firstName: string;
  lastName: string;
}

interface Verification {
  person: Person;
  vendorData: string;
}

export const getVeriffLink = async (firstName: string, lastName: string): Promise<any> => {
  if (!baseUrl || !token) throw new Error('Base URL or API token is undefined');
  
  const verification: Verification = {
    person: { firstName, lastName },
    vendorData: '228',
  };

  const headers = {
    'Content-Type': 'application/json',
    'X-AUTH-CLIENT': token,
  };

  const res: AxiosResponse<any> = await axios.post(`${baseUrl}/v1/sessions`, verification, { headers });

  return res.data;
};

export const checkVeriffSession = async (sessionId: string): Promise<any> => {
  if (!baseUrl || !token) throw new Error('Base URL or API token is undefined');

  const headers = {
    'Content-Type': 'application/json',
    'X-AUTH-CLIENT': token,
  };

  const res: AxiosResponse<any> = await axios.get(`${baseUrl}/v1/sessions/${sessionId}/decision`, { headers });

  return res.data;
};

export const handleVeriffEvent = async (payload: any) => {
  const { verificationStatus, userId, fullname, reason } = extractVerificationData(payload);

  if (!verificationStatus || !userId) {
    throw new Error("Invalid webhook payload");
  }

  if (verificationStatus) {
    await updateUserVerificationStatus(userId, verificationStatus);
    // message, name, senderEmail
    await sendEmail({message: 'message', name: fullname, reason, senderEmail: 'senderEmail'}, 'verification');
  }
};

const updateUserVerificationStatus = async (userId: string, verificationStatus: string) => {
  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });

  if (!user) {
    await db.user.create({
      data: {
        clerkUserId: userId,
        name: "",
        email: "",
        veriffStatus: verificationStatus,
      },
    });
  } else {
    await db.user.update({
      where: {
        clerkUserId: userId,
      },
      data: {
        veriffStatus: verificationStatus,
        updatedAt: new Date(),
      },
    });
  }

  console.log(`User with ID: ${userId} updated with verification status: ${verificationStatus}`);
};

// Function to fetch user's verification status from the database
export const fetchVerificationStatus = async (userId: string): Promise<string> => {
  try {
    // Fetch the user from the database
    const cacheKey = `userId:${userId}`;
    let status = await redis.get(cacheKey);
  
    if (status) {
      console.log(`Cache hit for user ${userId}`);
      return status as string;
    }
  
    console.log(`Cache miss for user ${userId}. Fetching from database...`);
    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
      select: {
        veriffStatus: true,
      },
    });

    // If user exists, return the verification status
    if (user) {
      await redis.set(cacheKey, status, { ex: 3600 }); // Cache for 1 hour
      return user.veriffStatus || ""; // Return the verification status or an empty string if not available
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    console.error("Error fetching verification status - ", error);
    throw new Error(`Failed to fetch verification status: ${error}`);
  }
}



