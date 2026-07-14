import {
  Lightbulb,
  Laptop,
  Sparkles,
  Workflow,
  Database,
  Users,
  Rocket,
  Home,
  HeartPulse,
  GraduationCap,
  Landmark,
  Megaphone,
  ShoppingCart,
  Factory,
  PhoneCall,
  Compass,
  PenTool,
  Code2,
  LifeBuoy,
  type LucideIcon,
} from 'lucide-react'

export interface NavLink {
  label: string
  href: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Blogs', href: '#blogs' },
  { label: 'Contact', href: '#contact' },
]

export interface Service {
  icon: LucideIcon
  title: string
  description: string
}

export const SERVICES: Service[] = [
  {
    icon: Lightbulb,
    title: 'Idea Conceptualization & Tech Roadmap',
    description:
      'Transform your idea into a validated roadmap with architecture planning, MVP strategy, and technology recommendations.',
  },
  {
    icon: Laptop,
    title: 'End-to-End Product Development',
    description:
      'Complete design, frontend, backend, cloud deployment, testing, and launch.',
  },
  {
    icon: Sparkles,
    title: 'AI Enablement & Smart Features',
    description:
      'LLM integrations, AI chatbots, recommendation engines, RAG systems, and workflow automation.',
  },
  {
    icon: Workflow,
    title: 'Automation & Systems Setup',
    description:
      'Connect your business tools and automate repetitive workflows using AI and modern integrations.',
  },
  {
    icon: Database,
    title: 'Database Management & Analytics',
    description:
      'Secure database design, dashboards, reporting, and business intelligence solutions.',
  },
  {
    icon: Users,
    title: 'Tech Mentorship',
    description:
      'Dedicated technical guidance, architecture reviews, product strategy, and ongoing consulting.',
  },
]

export interface Industry {
  icon: LucideIcon
  title: string
  description: string
}

export const INDUSTRIES: Industry[] = [
  { icon: Rocket, title: 'Startups', description: 'MVPs, fundraising demos, and rapid iteration to product-market fit.' },
  { icon: Home, title: 'Family Businesses', description: 'Digitize operations and modernize legacy processes with care.' },
  { icon: HeartPulse, title: 'Healthcare', description: 'Compliant, secure platforms for patients, clinics, and providers.' },
  { icon: GraduationCap, title: 'Education', description: 'Engaging learning platforms, LMS, and student analytics.' },
  { icon: Landmark, title: 'Finance', description: 'Robust fintech solutions with security and reliability at the core.' },
  { icon: Megaphone, title: 'Marketing', description: 'Automation, analytics dashboards, and growth tooling.' },
  { icon: ShoppingCart, title: 'E-commerce', description: 'High-converting storefronts, payments, and inventory systems.' },
  { icon: Factory, title: 'Manufacturing', description: 'IoT, process automation, and operational intelligence.' },
]

export interface Stat {
  value: number
  suffix: string
  label: string
}

export const STATS: Stat[] = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 24, suffix: '/7', label: 'Support' },
]

export interface ProcessStep {
  icon: LucideIcon
  step: string
  title: string
  description: string
}

export const PROCESS_STEPS: ProcessStep[] = [
  { icon: PhoneCall, step: '01', title: 'Discovery Call', description: 'We listen to your vision, goals, and constraints.' },
  { icon: Compass, step: '02', title: 'Product Strategy', description: 'Roadmap, architecture, and scope definition.' },
  { icon: PenTool, step: '03', title: 'Design', description: 'Wireframes and polished, on-brand UI/UX.' },
  { icon: Code2, step: '04', title: 'Development', description: 'Agile engineering with continuous delivery.' },
  { icon: Rocket, step: '05', title: 'Launch', description: 'Testing, deployment, and go-to-market.' },
  { icon: LifeBuoy, step: '06', title: 'Support', description: 'Ongoing maintenance and iterative growth.' },
]

export interface Testimonial {
  name: string
  company: string
  role: string
  review: string
  initials: string
  accent: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Chen',
    company: 'NovaHealth',
    role: 'Founder & CEO',
    review:
      'Build Together turned our vague idea into a polished product in weeks. Their AI expertise gave us features we did not think were possible at our stage.',
    initials: 'SC',
    accent: 'from-blue-500 to-indigo-500',
  },
  {
    name: 'Marcus Rivera',
    company: 'LedgerFlow',
    role: 'CTO',
    review:
      'The technical clarity they brought to our architecture saved us months. Communication was flawless and delivery was ahead of schedule.',
    initials: 'MR',
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'Amara Okafor',
    company: 'BrightLearn',
    role: 'Product Lead',
    review:
      'From strategy to launch, they felt like a true partner. Our platform scaled smoothly to thousands of users without a hiccup.',
    initials: 'AO',
    accent: 'from-fuchsia-500 to-purple-500',
  },
]

export interface BlogPost {
  title: string
  date: string
  category: string
  readTime: string
  gradient: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'How to Validate Your Startup Idea Before Writing Code',
    date: 'Jul 2, 2026',
    category: 'Strategy',
    readTime: '6 min read',
    gradient: 'from-blue-500 via-indigo-500 to-purple-500',
  },
  {
    title: 'RAG Systems: Bringing Real Knowledge to Your AI Products',
    date: 'Jun 18, 2026',
    category: 'AI',
    readTime: '8 min read',
    gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
  },
  {
    title: 'Choosing the Right Tech Stack for Scalable Products',
    date: 'Jun 4, 2026',
    category: 'Engineering',
    readTime: '5 min read',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
  },
]

export interface FAQItem {
  question: string
  answer: string
}

export const FAQS: FAQItem[] = [
  {
    question: 'How much does a typical project cost?',
    answer:
      'Pricing depends on scope and complexity. After a free clarity session we provide a transparent, fixed-scope proposal. Most MVPs range from a focused sprint to a multi-month engagement, and we always align cost to the value delivered.',
  },
  {
    question: 'How long does it take to launch an MVP?',
    answer:
      'Most MVPs launch within 6 to 12 weeks depending on feature scope. We work in agile sprints so you see progress every week and can adjust priorities as we go.',
  },
  {
    question: 'Can you add AI features to my existing product?',
    answer:
      'Absolutely. We integrate LLMs, chatbots, RAG systems, recommendation engines, and automation into existing codebases, with a focus on reliability, cost control, and measurable impact.',
  },
  {
    question: 'What kind of support do you offer after launch?',
    answer:
      'We offer 24/7 monitoring and flexible support plans covering bug fixes, performance tuning, security updates, and ongoing feature development as your product grows.',
  },
  {
    question: 'Do you handle maintenance and scaling?',
    answer:
      'Yes. We design for scale from day one and offer ongoing maintenance, infrastructure optimization, and architecture reviews to keep your product fast and reliable as usage grows.',
  },
]

export const CLIENT_LOGOS: string[] = [
  'Nexora',
  'Quantly',
  'Stratos',
  'Vertex',
  'Lumina',
  'Orbit',
  'Cadence',
  'Nimbus',
]

export interface ContactInfo {
  email: string
  phone: string
  whatsapp: string
  office: string
}

export const CONTACT_INFO: ContactInfo = {
  email: 'hello@buildtogether.dev',
  phone: '+1 (555) 012-3456',
  whatsapp: '+1 (555) 987-6543',
  office: 'Remote-first · San Francisco, CA',
}
