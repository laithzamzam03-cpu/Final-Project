"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function RootError({ error, reset }) {
  useEffect(() => {
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="container status-screen">
      <div className="status-icon">⚠️</div>
      <h2 className="status-title">Something went wrong!</h2>
      <p className="status-desc">
        {error?.message || "An unexpected error occurred while loading this page."}
      </p>
      <div className="status-actions">
        <button type="button" onClick={() => reset()} className="btn btn-primary">
          Try Again
        </button>
        <Link href="/" className="btn btn-secondary">
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
}
