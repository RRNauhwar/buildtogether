import { useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
  Github,
  Linkedin,
  Twitter,
} from 'lucide-react'
import { CONTACT_INFO } from '@/lib/data'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'

interface FormValues {
  name: string
  email: string
  company: string
  budget: string
  message: string
}

const contactItems = [
  { icon: Mail, label: 'Email', value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
  { icon: Phone, label: 'Phone', value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
  { icon: MessageCircle, label: 'WhatsApp', value: CONTACT_INFO.whatsapp, href: '#' },
  { icon: MapPin, label: 'Office', value: CONTACT_INFO.office, href: '#' },
]

const socials = [
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Github, label: 'GitHub', href: 'https://github.com' },
]

const budgets = ['< $10k', '$10k – $25k', '$25k – $50k', '$50k+']

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    // Simulate an async submission (wire up to your API/email service)
    await new Promise((r) => setTimeout(r, 1200))
    // eslint-disable-next-line no-console
    console.log('Consultation request:', data)
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-white py-24 lg:py-32">
      <div className="container-px grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left: contact info */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
              Contact
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Let's start a conversation
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-ink-muted">
              Tell us about your idea and we'll get back within one business day
              with next steps and a free clarity session.
            </p>
          </Reveal>

          <div className="mt-10 space-y-4">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lift"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <item.icon size={20} />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-ink-soft">
                    {item.label}
                  </p>
                  <p className="text-[0.95rem] font-semibold text-ink">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white text-ink-muted transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600 hover:shadow-soft"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="gradient-border rounded-2xl bg-white p-7 shadow-lift sm:p-9"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" error={errors.name?.message}>
                <input
                  type="text"
                  placeholder="Jane Founder"
                  aria-invalid={!!errors.name}
                  className={inputCls(!!errors.name)}
                  {...register('name', { required: 'Name is required' })}
                />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <input
                  type="email"
                  placeholder="jane@company.com"
                  aria-invalid={!!errors.email}
                  className={inputCls(!!errors.email)}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Enter a valid email',
                    },
                  })}
                />
              </Field>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Company" error={errors.company?.message}>
                <input
                  type="text"
                  placeholder="Company name"
                  className={inputCls(!!errors.company)}
                  {...register('company')}
                />
              </Field>
              <Field label="Budget" error={errors.budget?.message}>
                <select
                  aria-invalid={!!errors.budget}
                  defaultValue=""
                  className={cn(inputCls(!!errors.budget), 'appearance-none bg-white')}
                  {...register('budget', { required: 'Select a budget range' })}
                >
                  <option value="" disabled>
                    Select a range
                  </option>
                  {budgets.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="Message" error={errors.message?.message}>
              <textarea
                rows={4}
                placeholder="Tell us about your project…"
                aria-invalid={!!errors.message}
                className={cn(inputCls(!!errors.message), 'resize-none')}
                {...register('message', {
                  required: 'Please tell us a little about your project',
                  minLength: { value: 10, message: 'Please add a bit more detail' },
                })}
              />
            </Field>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting || submitted}
              rightIcon={
                isSubmitting ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : submitted ? (
                  <CheckCircle2 size={18} />
                ) : (
                  <Send size={18} />
                )
              }
            >
              {isSubmitting ? 'Sending…' : submitted ? 'Message Sent!' : 'Submit'}
            </Button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center gap-2 text-sm font-medium text-emerald-600"
              >
                <CheckCircle2 size={16} /> Thanks! We'll be in touch within one business day.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-ink">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs font-medium text-red-500">{error}</span>}
    </label>
  )
}

function inputCls(hasError: boolean) {
  return cn(
    'w-full rounded-xl border bg-slate-50/60 px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink-soft transition-all',
    'focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-500/10',
    hasError ? 'border-red-300 focus:border-red-400 focus:ring-red-500/10' : 'border-slate-200',
  )
}
