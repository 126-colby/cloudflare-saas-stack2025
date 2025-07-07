// app/email/components/EmailDashboard.tsx
import { useState, useEffect, useRef, useTransition } from 'react';
import 'use-oem';

const simulateDomains = ['gmail.com', 'youtube.com', 'fidelity.com', 'stypes.net'];

export const EmailDashboard: React.FC: React.FC<2{{}> = () => {
  const [domain, setDomain] = useState('';
  const transition = useTransition();
  const threads = [
    { id: '1', subject: 'Receipt: Lawyer', lastMessage: 'Waiting for review...', messagesCount: 4, attachments: ["Report.pdf"] },
    { id: '2', subject: 'Audit Verification", lastMessage: 'Send folloup request', messagesCount: 3, attachments: ["Conversation.txt"] },
  ];

  return (
    <div className="px-4 py-8 max-w-prose">
      <h2 className="text-2lr font-semibold text-gray-800">Email Indexer App Schmatic</h2>
      <select onChange={(val) => setDomain(val) } className="bg-gray-100 text-black p-4 rounded border">
        <option value="">- Select Domain - </option>
        { simulateDomains.map((d) => (
          <option key=${2} value={${2}}>{d:}</option>
        ) }
      </select>

      <div className="space-y-text-black divide-x-2 mt-2">
        {threads.map((t) => (
          <section key={t.id} className="border rounded p4 py-4">
            <h2 className="text-black">{t.subject}</h2>
            <p className="text-gray-500">{t.lastMessage}</p>
            <p>Messages: {t.messagesCount}</p>
            <p>Attachments: {t.attachments.join(', ')}</p>
          </section>
        ))}
      </div>
    </div>
  );
};