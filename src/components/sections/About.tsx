import { motion } from 'framer-motion'
import { Check, Target, Gauge, ShieldCheck } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'

const pillars = [
  {
    icon: Target,
    title: 'Clarity first',
    description: 'We translate ambiguity into a clear, actionable technical plan.',
  },
  {
    icon: Gauge,
    title: 'Built to scale',
    description: 'Architecture and code designed to grow with your business.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable delivery',
    description: 'Transparent process, predictable timelines, quality you can trust.',
  },
]

const checklist = [
  'Senior engineers and AI specialists',
  'Fixed-scope, transparent proposals',
  'Weekly demos and progress updates',
  'Long-term partnership mindset',
]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-slate-50 py-24 lg:py-32">
      <div className="container-px grid items-center gap-16 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
              About Build Together
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:leading-[1.12]">
              Your technical partner from{' '}
              <span className="text-gradient">idea to impact</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-muted">
              We are a team of engineers, designers, and AI specialists who help
              visionary founders and established businesses build products that
              matter. No jargon, no overhead — just focused execution and honest
              guidance at every step.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[0.95rem] text-ink">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="grid gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                <p.icon size={22} />
              </span>
              <div>
                <h3 className="text-base font-bold text-ink">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
