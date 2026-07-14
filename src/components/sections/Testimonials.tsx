import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/data'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { cn } from '@/lib/utils'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = TESTIMONIALS.length

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count])
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [paused, next])

  const active = TESTIMONIALS[index]

  return (
    <section
      id="testimonials"
      className="scroll-mt-24 bg-slate-50 py-24 lg:py-32"
    >
      <div className="container-px">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by the founders we build with"
          subtitle="Real words from real partners who trusted us with their vision."
        />

        <div
          className="relative mx-auto mt-16 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="gradient-border rounded-2xl bg-white p-8 shadow-soft sm:p-12"
            >
              <Quote className="text-brand-200" size={44} />
              <div className="mt-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-5 text-pretty text-xl font-medium leading-relaxed text-ink sm:text-2xl">
                “{active.review}”
              </p>
              <footer className="mt-8 flex items-center gap-4">
                <span
                  className={cn(
                    'grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br text-lg font-bold text-white',
                    active.accent,
                  )}
                >
                  {active.initials}
                </span>
                <div>
                  <p className="font-bold text-ink">{active.name}</p>
                  <p className="text-sm text-ink-muted">
                    {active.role}, {active.company}
                  </p>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-ink-muted shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn(
                    'h-2.5 rounded-full transition-all duration-300',
                    i === index ? 'w-8 bg-brand-600' : 'w-2.5 bg-slate-300 hover:bg-slate-400',
                  )}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-ink-muted shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
