"use client";

import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { useState } from "react";
import { ParticlesComponent } from "./components/particles";

type ProvidersProps = React.PropsWithChildren;

export function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 10 * 1000,
            refetchInterval: 10 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={null}>
        <ParticlesComponent />
        <div>
          {children}
          <div id="bottom" />
        </div>
        <ReactQueryDevtools />
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
