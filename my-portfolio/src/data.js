// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Konstantinos Bousinis',
  title: 'Salesforce Developer',
  location: 'Athens, Greece',
  email: 'kostasmpous@gmail.com',
  status: 'Based in Athens · remote-friendly',
  headline: { before: 'Salesforce developer.', em: '', after: '' },
  lede:
    'I build and support Salesforce for international brands, from Consumer Goods Cloud and Apex to billing integrations. I also design AI solutions that run inside Salesforce or connect to it, so teams get value from AI without leaving their CRM.',
  meta: [
    { strong: '5+ years', text: 'on Salesforce' },
    { strong: '5', text: 'Salesforce certifications' },
    { strong: '', text: 'Athens, Greece' },
  ],
  links: {
    github: 'https://github.com/kostasmpous',
    linkedin: 'https://www.linkedin.com/in/konstantinos-bous/',
  },
}

// area: 'salesforce' | 'ai' | 'data'  — url is optional; cards without one are not clickable.
export const projects = [
  {
    title: 'Consumer Goods Cloud for FMCG brands',
    area: 'salesforce',
    year: '2026',
    context: 'Consumer Goods Cloud',
    desc: 'Development and support for international FMCG brands: approval workflows, triggers, managed-package batch jobs tuned around governor limits, and production issues traced end to end.',
    tags: ['Apex', 'SOQL', 'CGC data model'],
    icon: 'cloud',
  },
  {
    title: 'Salesforce ↔ Zuora billing integration',
    area: 'salesforce',
    year: '2023 – 2026',
    context: 'Automotive client',
    desc: 'The Salesforce side of a billing integration with Zuora for an automotive client, built with an Agile delivery team at Deloitte Digital.',
    tags: ['Async Apex', 'LWC', 'Flow'],
    icon: 'plug',
  },
  {
    title: 'Dispute Copilot',
    area: 'ai',
    year: '2026',
    context: 'PayPal AI Hackathon',
    desc: 'An AI agent that helps merchants work through payment disputes: it gathers the evidence, drafts the response and keeps a person in the loop before anything is sent.',
    tags: ['AI agents', 'LLMs', 'Python'],
    icon: 'shield',
  },
  {
    title: 'Calibr',
    area: 'ai',
    year: '2026',
    context: 'H0 Hackathon',
    desc: 'A tool for checking that AI-generated answers can be trusted: it collects human ratings and tunes automated evaluators to agree with them.',
    tags: ['LLM evaluation', 'PostgreSQL', 'AWS'],
    icon: 'gauge',
  },
]

export const experience = [
  {
    role: 'Salesforce Developer',
    org: 'Peak & Peak',
    period: 'Mar 2026 – Present',
    summary:
      'Develop and support Consumer Goods Cloud for international FMCG brands: Apex, SOQL, triggers, approval workflows and CGC data models. Diagnose production incidents end to end, tune managed-package batch jobs, review technical designs before they are built, and help bring AI tooling into the delivery team.',
  },
  {
    role: 'Consultant',
    org: 'Deloitte Digital',
    period: 'Jul 2023 – Mar 2026',
    summary:
      'Built the Salesforce side of a Zuora billing integration for an automotive client with Apex, asynchronous Apex, LWC, Flow and SOQL, inside an Agile delivery team.',
  },
  {
    role: 'Business Analyst',
    org: 'Deloitte Digital',
    period: 'Nov 2020 – Jul 2023',
    summary:
      'Joined through the Salesforce Developer Bootcamp and earned Platform Developer I and App Builder in the first three months. Gathered requirements and tested the billing integration. Mandatory military service (IT support) Nov 2021 – Nov 2022.',
  },
]

export const about = [
  'I started on Salesforce through a developer bootcamp at Deloitte Digital and spent the next years integrating billing platforms for automotive clients. Today I work on Consumer Goods Cloud, where the interesting problems are in data models, batch jobs and the bugs nobody else can reproduce.',
  'More and more of my work is about bringing AI into Salesforce: Agentforce, LLMs connected through Apex and APIs, and the checks that make their answers reliable. I care about AI that fits the org it lives in and respects its data, security and limits.',
]

export const education = [
  { title: 'MSc, Data & Knowledge Management', meta: 'In progress' },
  { title: 'BSc, Applied Informatics', meta: 'University of Macedonia' },
]

export const certifications = [
  'Platform Developer I',
  'Platform App Builder',
  'Administrator',
  'Agentforce Specialist',
  'AI Associate',
]

export const skills = [
  'Apex', 'LWC', 'SOQL', 'Flow', 'Async Apex', 'Consumer Goods Cloud',
  'Integrations', 'Agentforce', 'LLM APIs', 'RAG', 'Python', 'PostgreSQL',
]
