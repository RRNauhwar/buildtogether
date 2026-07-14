import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { BLOG_POSTS } from '@/lib/data'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RevealStagger, revealItemVariants } from '@/components/ui/Reveal'

export function Blog() {
  return (
    <section id="blogs" className="scroll-mt-24 bg-white py-24 lg:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Latest Insights"
          title="Ideas, guides, and lessons from the field"
          subtitle="Practical thinking on product, engineering, and applied AI."
        />

        <RevealStagger className="mt-16 grid gap-7 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <motion.article
              key={post.title}
              variants={revealItemVariants}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              {/* Cover image placeholder (gradient) */}
              <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${post.gradient}`}>
                <div className="absolute inset-0 bg-grid-slate bg-[size:20px_20px] opacity-20" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">
                  {post.category}
                </span>
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-4 text-xs text-ink-soft">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={13} /> {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={13} /> {post.readTime}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-bold leading-snug text-ink transition-colors group-hover:text-brand-700">
                  {post.title}
                </h3>
                <a
                  href="#"
                  className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand-600"
                >
                  Read More
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </motion.article>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
