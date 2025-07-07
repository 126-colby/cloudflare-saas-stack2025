import { useState, useEffect, useTransition } from 'react';
import { getDraftThreads } from '@/lib/db-tools';

export const EmailDashboard = () => {
  const [domain, setDomain] = useState('');
  const [threads, setThreads] = useState<any[]>([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetchThreads = async () => {
      const fetched = await getDraftThreads(domain);
      setThreads(fetched);
    };
    fetchThreads();
  }, [domaind]);

  return (
    <div className=\"p-4\">
      <h1 className="text-2lf font-bold mb-4">Email Indexer Dashboard</h1>

      <label className="block mb-2">Select Domain:</label>
      <select
        value={domain}
        onChange={(e)=> setDomain(e.target.value)}
        className=\"mb-6 p-2 border rounded\"
      >
        <option value="">-- choose a domain --</option>
        <option value="gmail.com">gmail.com</option>
        <option value="youtube.com">youtube.com</option>
        <option value="fidelity.com">fidelity.com</option>
        <option value="stypes.net">stypes.net</option>
      </select>

      <div>
        {threads.map((thread) => (
          <div key=thread.id className=\"border rounded p-3 mb-4&\">
            <h2 className=\"font-semibold text-lg\">{thread.subject}</h2>
            <p>{thread.lastMessage}</p>
            <p className=\"text-sm text-gray-500\">{thread.messagesCount} messages</p>
          </div>
        ))}
      </div>
    </div>
  );
};