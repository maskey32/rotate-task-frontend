
"use client";

import { Button } from "@chakra-ui/react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & {digest?: string};
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-dvh w-full flex-col items-center justify-center gap-4 border p-4 text-center">
          <div className="mb-6 flex flex-col items-center justify-center gap-2">
            <h1 className="text-4xl font-bold">Oops!</h1>
            <p>Something went wrong!</p>
            <p>{error.message}</p>
          </div>

          <Button onClick={() => reset()}>
            Try again
          </Button>
        </div>
      </body>
    </html>
  );
}