export async function getDraftThreads() {
  return [
    {
      id: '1',
      subject: 'Initial Draft: Legal Invoice',
      lastMessage: 'Please review the attached report.',
      messagesCount: 2,
      attachments: ['Invoice.pdf']
    },
    {
      id: '2',
      subject: 'Follow-up: Account Access',
      lastMessage: 'Your access request is under review.',
      messagesCount: 1,
      attachments: []
    }
  ];
}