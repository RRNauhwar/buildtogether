import { Github, Linkedin, Twitter, Instagram } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { scrollToId } from '@/lib/utils'

const columns = [
  {
    title: 'Services',
    links: [
      'Product Development',
      'AI Enablement',
      'Automation',
      'Tech Mentorship',
    ],
  },
  {
    title: 'Company',
    links: ['About', 'Process', 'Industries', 'Testimonials'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Case Studies', 'Privacy Policy', 'Terms of Service'],
  },
]

const socials = [
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Github, label: 'GitHub', href: 'https://github.com' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
]

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-px py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <button
              onClick={() => scrollToId('#home')}
              className="flex items-center gap-2.5"
              aria-label="Build Together home"
            >
              <Logo />
              <span className="text-lg font-extrabold tracking-tight text-ink">
                Build <span className="text-gradient">Together</span>
              </span>
            </button>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Technical clarity, AI expertise, and engineering execution to
              transform your ideas into scalable digital products.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-ink-muted transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600 hover:shadow-soft"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-ink">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="link-underline text-sm text-ink-muted transition-colors hover:text-brand-600"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
          <p className="text-sm text-ink-soft">
            © {new Date().getFullYear()} Build Together. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-ink-soft">
            <a href="#" className="hover:text-ink">
              Privacy
            </a>
            <a href="#" className="hover:text-ink">
              Terms
            </a>
            <a href="#" className="hover:text-ink">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
