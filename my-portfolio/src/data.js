// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Konstantinos Bousinis',
  title: 'Salesforce Developer & AI Engineer',
  location: 'Athens, Greece',
  email: 'kostasmpous@gmail.com',
  status: 'Based in Athens · remote-friendly',
  lede:
    'I build on Salesforce Consumer Goods Cloud for international FMCG brands, and I build the agent infrastructure that puts LLMs to work on top of it: skills platforms, multi-model routing and LLM evaluation.',
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

// area: 'ai' | 'salesforce' | 'data'  — url is optional; cards without one are not clickable.
export const projects = [
  {
    title: 'Dispute Copilot',
    area: 'ai',
    year: '2026',
    context: 'PayPal AI Hackathon',
    desc: 'An AI agent that helps PayPal merchants work through payment disputes: it gathers the evidence, drafts the response and keeps the merchant in the loop.',
    tags: ['AI agents', 'LLMs', 'Python'],
    icon: 'shield',
  },
  {
    title: 'Calibr',
    area: 'ai',
    year: '2026',
    context: 'H0 Hackathon',
    desc: 'A platform for collecting human preferences and calibrating LLM-as-judge evaluators against them, so automated scores can be trusted.',
    tags: ['LLM evaluation', 'Aurora DSQL', 'PostgreSQL'],
    icon: 'gauge',
  },
  {
    title: 'Skills lifecycle platform',
    area: 'ai',
    year: '2026',
    context: 'Agent infrastructure',
    desc: 'A versioned registry for AI agent skills with a Draft → Published → Deprecated flow, a GitHub App backend and a CLI for publishing.',
    tags: ['FastAPI', 'PostgreSQL', 'GitHub App'],
    icon: 'layers',
  },
  {
    title: 'Future of AI search: vectors & RAG',
    area: 'data',
    year: '2025',
    context: 'Talk & live demo',
    desc: 'A talk and live demo on vector search and retrieval-augmented generation, built on Pinecone and the Anthropic API.',
    tags: ['RAG', 'Pinecone', 'Claude'],
    icon: 'search',
  },
]

export const experience = [
  {
    role: 'Salesforce Developer',
    org: 'Peak & Peak',
    period: 'Mar 2026 – Present',
    summary:
      'Develop and support Consumer Goods Cloud for international FMCG brands: Apex, SOQL, triggers, approval workflows and CGC data models. Diagnose production incidents end to end, tune managed-package batch jobs, and review technical designs before they are built.',
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
  'Alongside that I build AI agents and the tooling around them, and I compete in AI hackathons. Most Salesforce developers only list Agentforce and most AI engineers have never met a governor limit. I like working where those two worlds meet.',
]

export const education = [
  { title: 'MSc, Data & Knowledge Management', meta: 'In progress' },
  { title: 'BSc, Applied Informatics', meta: 'University of Macedonia' },
]

export const certifications = [
  'Agentforce Specialist',
  'Platform Developer I',
  'Platform App Builder',
  'Administrator',
  'AI Associate',
]

export const skills = [
  'Apex', 'LWC', 'SOQL', 'Flow', 'Agentforce', 'Consumer Goods Cloud',
  'Python', 'FastAPI', 'PostgreSQL', 'LLM APIs', 'RAG', 'MCP', 'LangGraph', 'AWS',
]
