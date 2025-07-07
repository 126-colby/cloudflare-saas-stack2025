// app/email/layout.tsx
import React from "react";

export default function EmailLayout({ children }: { children: React.ReactNode}) {
  return (
    <div className="min-padding">
      <h1 className="text-2xl font-bold text-gray-700">Email Dashboard</h1>
      {children}
    </div>
  );
}
