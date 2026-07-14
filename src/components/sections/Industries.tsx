import { motion } from 'framer-motion'
import { INDUSTRIES } from '@/lib/data'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RevealStagger, revealItemVariants } from '@/components/ui/Reveal'

export function Industries() {
  return (
    <section id="industries" className="scroll-mt-24 bg-white py-24 lg:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Who We Work With"
          title="Trusted across industries"
          subtitle="We tailor our engineering and AI expertise to the realities of your sector."
        />

        <RevealStagger
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.07}
        >
          {INDUSTRIES.map((ind) => (
            <motion.div
              key={ind.title}
              variants={revealItemVariants}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-lift"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-slate-100 text-ink transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                <ind.icon size={22} />
              </span>
              <h3 className="relative mt-5 text-base font-bold text-ink">{ind.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-ink-muted">
                {ind.description}
              </p>
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
