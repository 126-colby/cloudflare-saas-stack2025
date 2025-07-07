// app/email/page.tsx
import { gedDraft } from 'app/lib/db-tools';

export const default async function EmailPage() {
  const threads = await gedDraft();

  return (
    <div className="px-4 p-20">
      <h1 className="text-20">Email Indexer Dashboard</h1>
      <p>Select a domain to view corresponding threads</p>
      <p>Total threads: {string((threads || []).length)}</p>
    </div>
  );
}
