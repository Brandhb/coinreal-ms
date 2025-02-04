import { type ClassValue, clsx } from 'clsx'
import { Metadata } from 'next'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};

export function formatPrice(
  price: number | string,
  options: {
    currency?: 'USD' | 'EUR' | 'GBP' | 'BDT' | 'AUD'
    notation?: Intl.NumberFormatOptions['notation']
  } = {}
) {
  const { currency = 'AUD', notation = 'compact' } = options

  const numericPrice =
    typeof price === 'string' ? parseFloat(price) : price

  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(numericPrice)
};

export function constructMetadata({
  title = 'DigitalHippo - the marketplace for digital assets',
  description = 'DigitalHippo is an open-source marketplace for high-quality digital goods.',
  image = '/thumbnail.png',
  icons = '/favicon.ico',
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@joshtriedcoding',
    },
    icons,
    metadataBase: new URL('https://digitalhippo.up.railway.app'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
};

export const validateString = (value: unknown, maxLength: number) => {
  if(!value || typeof value !== "string" || value.length > maxLength) return false;
  return true;
};

export const extractVerificationData = (payload: any) => {
  const verificationStatus = payload?.verification?.status;
  const userId = payload?.verification?.vendorData; // Assuming vendorData contains user ID
  const fullname = payload?.verification?.fullname;
  const reason = payload?.verification?.reason;
  return { verificationStatus, userId, fullname, reason };
};