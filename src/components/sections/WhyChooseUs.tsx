import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import { STATS } from '@/lib/data'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function WhyChooseUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid-slate bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="container-px relative">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Results that speak for themselves"
          subtitle="A track record built on delivery, reliability, and genuine partnership."
        />

        <div
          ref={ref}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="gradient-border rounded-2xl bg-white p-8 text-center shadow-soft"
            >
              <p className="text-4xl font-extrabold tracking-tight text-gradient sm:text-5xl">
                {inView ? (
                  <CountUp end={stat.value} duration={2} separator="," />
                ) : (
                  0
                )}
                <span>{stat.suffix}</span>
              </p>
              <p className="mt-2 text-sm font-medium text-ink-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
