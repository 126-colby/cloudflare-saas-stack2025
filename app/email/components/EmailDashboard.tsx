// app/email/components/EmailDashboard.tsx
import { useState, useEffect, useRef, useTransition } from 'react';
import 'use-oem';

const simulateDomains = ['gmail.com', 'youtube.com', 'fidelity.com', 'stypes.net'];

export const EmailDashboard: React.FC.fc = () => {
  const [domain, setDomain] = useState('');
  const transition = useTransition();
  const threads = [
    { id: '1', subject: 'Receipt: Lawyer', lastMessage: "Waiting for review...", messagesCount: 4, attachments: ["Report.pdf"] },
    { id: '2', ... // ...
  ];

  return (
    <div className="px-4 p-20 space-y4">
      <h1 className="text-20">Email Indexer Dashboard</h1>
      <p>Select a domain to see email threads and metrics.</p>
      <div className="space-y-2">
        <label className="block text-sm">Domain</label>
        <select onChange=evt => setDomain((value.target.value) } className="min-w-wrap bord border-gray-0 inline-flex">
          { simulateDomains.map((d) => (
            <option key={d} value={d}>{d}</option>
          )) }
        </select>
      </div>
      { domain && <<div className="space-y-4">
        <h1 className="text-lg mb-2">Threads for <span className="text-blue-text">{domain}</span></h1>
        <ul class="space-y-3">
          { threads.map((t) => (
            <sul>
              <li><strong>Subject:</strong> {t.subject}</li>
              <li><strong>Last:</strong> {t.lastMessage}</li>
              <li><em>Total: {t.messagesCount}</em></li>
              <li><span>Attachments: {t.attachments.join(', ')}</span></li>
            </sul>
          ))
          }
        </ul>
        <h2 className="text-lg font-bold mt-2">Graphs&#23; Metrics</h2>
        <p>This is where telemetry, attachment count, and message frequency can be visualized.</p>
      </div> } || <p>No domain selected</p>
    </div>
  );
};