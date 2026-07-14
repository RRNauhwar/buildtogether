import { motion } from 'framer-motion'
import {
  ArrowRight,
  Sparkles,
  BarChart3,
  Cloud,
  Workflow,
  Database,
  Brain,
  TrendingUp,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { scrollToId } from '@/lib/utils'

const floatingIcons = [
  { icon: Brain, label: 'AI', className: 'left-[-4%] top-[14%]', delay: 0 },
  { icon: Cloud, label: 'Cloud', className: 'right-[-3%] top-[8%]', delay: 0.6 },
  { icon: BarChart3, label: 'Analytics', className: 'left-[-6%] bottom-[22%]', delay: 1.2 },
  { icon: Workflow, label: 'Automation', className: 'right-[-6%] bottom-[16%]', delay: 0.9 },
  { icon: Database, label: 'Database', className: 'right-[8%] top-[46%]', delay: 1.6 },
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pb-28">
      {/* Animated background grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-slate bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]" />
      {/* Floating gradient blobs */}
      <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full bg-brand-400/25 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute right-0 top-40 -z-10 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl animate-float-slow [animation-delay:2s]" />

      <div className="container-px grid items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
        {/* Left copy */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-700"
          >
            <Sparkles size={14} />
            AI-Native Product Studio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="mt-6 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Simplifying Technology for{' '}
            <span className="text-gradient">Visionary Founders</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-muted"
          >
            You have the vision. We provide the technical clarity, AI expertise,
            and engineering execution to transform your ideas into scalable
            digital products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button
              size="lg"
              onClick={() => scrollToId('#contact')}
              rightIcon={<ArrowRight size={18} />}
            >
              Book Free Clarity Session
            </Button>
            <Button size="lg" variant="secondary" onClick={() => scrollToId('#services')}>
              Explore Services
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex items-center gap-6 text-sm text-ink-soft"
          >
            <div className="flex -space-x-2">
              {['from-blue-500 to-indigo-500', 'from-emerald-500 to-teal-500', 'from-fuchsia-500 to-purple-500', 'from-amber-500 to-orange-500'].map(
                (g, i) => (
                  <span
                    key={i}
                    className={`h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br ${g}`}
                  />
                ),
              )}
            </div>
            <p>
              Trusted by <span className="font-semibold text-ink">50+ founders</span> worldwide
            </p>
          </motion.div>
        </div>

        {/* Right dashboard illustration */}
        <HeroDashboard />
      </div>
    </section>
  )
}

function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-lg"
    >
      {/* Main dashboard card */}
      <div className="gradient-border relative rounded-2xl bg-white p-5 shadow-glow">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <span className="text-xs font-medium text-ink-soft">buildtogether.app</span>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-sm text-ink-soft">Monthly Revenue</p>
            <p className="text-2xl font-extrabold text-ink">$248,900</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
            <TrendingUp size={13} /> +24.8%
          </span>
        </div>

        {/* Animated bar chart */}
        <div className="mt-6 flex h-32 items-end justify-between gap-2">
          {[42, 66, 38, 82, 54, 92, 70].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.8, delay: 0.6 + i * 0.08, ease: 'easeOut' }}
              className="w-full rounded-lg bg-gradient-to-t from-brand-600 to-indigo-400"
            />
          ))}
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { label: 'Users', value: '12.4k' },
            { label: 'Uptime', value: '99.9%' },
            { label: 'Latency', value: '48ms' },
          ].map((s) => (
            <div key={s.label} className="rounded-xl bg-slate-50 p-3 text-center">
              <p className="text-sm font-bold text-ink">{s.value}</p>
              <p className="text-[11px] text-ink-soft">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating AI icon chips */}
      {floatingIcons.map((item) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 + item.delay * 0.15 }}
          className={`absolute ${item.className} z-10`}
        >
          <div
            className="flex animate-float items-center gap-2 rounded-2xl border border-slate-100 bg-white/90 px-3.5 py-2.5 shadow-lift backdrop-blur"
            style={{ animationDelay: `${item.delay}s` }}
          >
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-indigo-600 text-white">
              <item.icon size={16} />
            </span>
            <span className="text-xs font-semibold text-ink">{item.label}</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
