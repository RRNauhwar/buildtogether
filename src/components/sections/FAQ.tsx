import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { FAQS } from '@/lib/data'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { cn } from '@/lib/utils'

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-slate-50 py-24 lg:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers to common questions"
          subtitle="Everything you might want to know about working with us."
        />

        <div className="mx-auto mt-14 max-w-3xl space-y-4">
          {FAQS.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={faq.question}
                className={cn(
                  'overflow-hidden rounded-2xl border bg-white transition-colors',
                  isOpen ? 'border-brand-200 shadow-soft' : 'border-slate-200',
                )}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-ink">
                    {faq.question}
                  </span>
                  <span
                    className={cn(
                      'grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300',
                      isOpen
                        ? 'rotate-45 bg-brand-600 text-white'
                        : 'bg-slate-100 text-ink-muted',
                    )}
                  >
                    <Plus size={18} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-6 pb-6 text-[0.95rem] leading-relaxed text-ink-muted">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
