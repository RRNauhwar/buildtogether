import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { scrollToId } from '@/lib/utils'

export function CTA() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-indigo-600 px-6 py-16 text-center shadow-glow sm:px-16 sm:py-20"
        >
          {/* Decorative blobs + grid */}
          <div className="pointer-events-none absolute inset-0 bg-grid-slate bg-[size:36px_36px] opacity-[0.12]" />
          <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl animate-float-slow" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl animate-float-slow [animation-delay:2s]" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Build Together?
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-brand-50/90">
              Let's transform your idea into reality. Book a free consultation and
              get a clear technical roadmap — no strings attached.
            </p>
            <div className="mt-9 flex justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => scrollToId('#contact')}
                rightIcon={<ArrowRight size={18} />}
                className="bg-white text-brand-700 hover:text-brand-800"
              >
                Book Free Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
