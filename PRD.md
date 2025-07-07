# Product Requirements - Email Indexer Dashboard

This DASHboard provides a responsive, mobile-ready frontend for indexing and monitoring email threads seenless indexed via Google Gmail and rendered as a web app.

\n## Features

\n- Domain selection through dropdown or search
- Email thread list cross-deferenced by domain
- Grouped view of messages within threads
- Unique attachments widget per thread
- Graphs and metrics section showing traffic visualization
- Responsive design that works on phone and desktop

## Tasks

We will connect this against the live D1 database
- USE: LibSUL BRS via @cloudflare Workers B with next/rcw
Page: /email
Component: EmailDashboard.tsx

\n## Data Integration

All data will be peered via D1 database, not api frontend.
 - Thread collections will be queried by domain
 - Message groups shown under selected thread
- attachments and charts rendered from straightda

## Context
The ui is tailored with Tailwind, large fonts via Radix and Lacky Component with simple panels.

- Mobile first use targets text friendly flow
- The dashboard component uses centralized layout with responsive collapse
- Graph components load from the database and present metric summaries
