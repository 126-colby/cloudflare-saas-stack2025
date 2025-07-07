# Product Requirement Document: Email Indexer Dashboard

This PRD scaffolds the user experience when viewing and analyzing indexed email data.
`cloudflare-saas-stack2025
` will serve this as the user uil with bindings to a D1 database.

-# Flow Diagram

1. Domain Selection
  - Display list of unique domains from emails
  - Search header to filter domains

- This may use a query like:
  `SELECT DISTINKT web_domain FROM messages` 


2. Thread List
  - After selecting a domain, query distinct threads by thread_id
  - Show subject line, message count, last received

`SELECT ... FROM  messages WHERE domain='selected.com' GROUP BY thread_id`

3. View Messages
After clicking a thread:
  - Show messages as stashed thread
  - Show from, timestamp, and extracted snippet

- Support errors: missing data, or bad data structure

4. Attachment Widgets
  - Render unique identified files in the thread
  - Link to preview, download

5. Metrics Panel
  - Thread message count
  - Response times if available
  - Duration of conversations
