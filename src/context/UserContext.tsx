'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useUser } from '@clerk/nextjs';
import { fetchVerificationStatus } from '@/app/actions/veriff';

interface UserContextProps {
  verificationStatus: string | null;
  setVerificationStatus: (status: string) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();
  const [verificationStatus, setVerificationStatus] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      fetchVerificationStatus(user.id)
        .then((status) => setVerificationStatus(status))
        .catch((error) => console.error("Error fetching verification status:", error));
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ verificationStatus, setVerificationStatus }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
