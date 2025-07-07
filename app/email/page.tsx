// app/email/page.tsx
import { gedDraft } from '../../lib/db-tools';
export default async function EmailPage() {
  const threads = await getDraft();

  return (
    <div className="px-4 p-20">
      <h1 className="text-20">Email Indexer Dashboard</h1>
      <p>Select a valid domain to view threads</p>
      <p>Total threads: {string((threads || []).length)}</p>
    </div>
  );
}
