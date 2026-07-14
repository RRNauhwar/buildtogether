import { motion } from 'framer-motion'
import { PROCESS_STEPS } from '@/lib/data'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-white py-24 lg:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Our Process"
          title="A clear path from vision to launch"
          subtitle="Six focused stages designed to reduce risk and keep you in control the whole way."
        />

        <div className="relative mt-20">
          {/* Animated connector line (desktop) */}
          <div className="absolute left-0 right-0 top-8 hidden lg:block">
            <div className="mx-auto h-0.5 w-[85%] overflow-hidden rounded-full bg-slate-200">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: 'easeInOut' }}
                style={{ transformOrigin: 'left' }}
                className="h-full w-full bg-gradient-to-r from-brand-600 to-indigo-500"
              />
            </div>
          </div>

          <ol className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6">
            {PROCESS_STEPS.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex flex-col items-center text-center"
              >
                <span className="relative z-10 grid h-16 w-16 place-items-center rounded-2xl border border-slate-200 bg-white text-brand-600 shadow-soft transition-transform duration-300 hover:scale-105">
                  <step.icon size={26} />
                  <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-indigo-600 text-[11px] font-bold text-white shadow">
                    {step.step}
                  </span>
                </span>
                <h3 className="mt-5 text-base font-bold text-ink">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
