"use client";

// IMPORTS -
import { config } from "@/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense, useState } from "react";
import { Loader } from "@/components/others/loader";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
          },
        },
      })
  );

  return (
    <Suspense fallback={<Loader />}>
      <QueryClientProvider client={queryClient}>
        {children}
        {!config.IS_PRODUCTION && <ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>
    </Suspense>
  );
};

export default Providers;
