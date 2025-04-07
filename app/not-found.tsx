"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    // Log the error for analytics purposes
    console.error("404 page not found");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/">Return Home</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}