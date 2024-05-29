"use client";

import { PropsWithChildren, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ClerkProvider } from "@clerk/nextjs";
import { ThirdwebProvider } from "thirdweb/react";
import { UserProvider } from "@/context/UserContext";

const Providers = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ClerkProvider>
        <ThirdwebProvider>
          <UserProvider>
            {children}
          </UserProvider>
        </ThirdwebProvider>
      </ClerkProvider>
    </QueryClientProvider>
  );
};

export default Providers;
