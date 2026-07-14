import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SERVICES } from '@/lib/data'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RevealStagger, revealItemVariants } from '@/components/ui/Reveal'

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-24 lg:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Our Services"
          title="Everything you need to build and scale"
          subtitle="From first idea to production and beyond — a single partner across strategy, design, engineering, and AI."
        />

        <RevealStagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <motion.article
              key={service.title}
              variants={revealItemVariants}
              className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-lift"
            >
              {/* Gradient glow on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-50/0 to-brand-50/0 opacity-0 transition-opacity duration-300 group-hover:from-brand-50/60 group-hover:opacity-100" />

              <div className="relative">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-indigo-600 text-white shadow-lift transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon size={26} />
                </span>

                <h3 className="mt-6 text-lg font-bold text-ink">{service.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">
                  {service.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Learn more
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </motion.article>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
