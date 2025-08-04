import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Error 404: Page Not Found!",
};

export default function ErrorNotFound() {
  return (
    <main className="flex min-h-dvh flex-col">
      <div className="max-w-8xl mx-auto p-6 lg:p-8 mb-12 flex flex-1 flex-col items-center justify-center text-center">
        <h1 className="mb-3 text-2xl font-semibold sm:text-3xl">404: Page Not Found</h1>
        <p className="mb-6 max-w-sm text-sm opacity-80 sm:text-base">
          The page you are looking for does not exist.
        </p>
      </div>
    </main>
  );
}