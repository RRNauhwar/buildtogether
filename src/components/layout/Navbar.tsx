import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/data'
import { cn, scrollToId } from '@/lib/utils'
import { useActiveSection } from '@/hooks/useActiveSection'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(NAV_LINKS.map((l) => l.href))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  function go(href: string) {
    setOpen(false)
    scrollToId(href)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'py-2.5' : 'py-4',
      )}
    >
      <nav className="container-px">
        <div
          className={cn(
            'flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5',
            scrolled
              ? 'glass border border-slate-200/80 shadow-soft'
              : 'border border-transparent',
          )}
        >
          <button
            onClick={() => go('#home')}
            className="flex items-center gap-2.5"
            aria-label="Build Together home"
          >
            <Logo />
            <span className="text-lg font-extrabold tracking-tight text-ink">
              Build <span className="text-gradient">Together</span>
            </span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => go(link.href)}
                  className={cn(
                    'rounded-full px-3.5 py-2 text-sm font-medium transition-colors',
                    active === link.href
                      ? 'text-brand-700'
                      : 'text-ink-muted hover:text-ink',
                  )}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button size="sm" onClick={() => go('#contact')}>
              Book Free Consultation
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-xl p-2 text-ink hover:bg-slate-100 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="container-px lg:hidden"
          >
            <div className="mt-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-lift">
              <ul className="flex flex-col">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => go(link.href)}
                      className={cn(
                        'w-full rounded-xl px-4 py-3 text-left text-[0.95rem] font-medium transition-colors',
                        active === link.href
                          ? 'bg-brand-50 text-brand-700'
                          : 'text-ink-muted hover:bg-slate-50 hover:text-ink',
                      )}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
              <Button className="mt-3 w-full" onClick={() => go('#contact')}>
                Book Free Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
