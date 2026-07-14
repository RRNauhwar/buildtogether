import { forwardRef, useRef, useState, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface Ripple {
  id: number
  x: number
  y: number
  size: number
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  children: ReactNode
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

const base =
  'relative inline-flex items-center justify-center gap-2 font-semibold rounded-full overflow-hidden transition-all duration-300 will-change-transform disabled:opacity-60 disabled:pointer-events-none select-none'

const variants: Record<Variant, string> = {
  primary:
    'text-white bg-gradient-to-br from-brand-600 to-indigo-600 shadow-lift hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'text-ink bg-white border border-slate-200 shadow-soft hover:border-brand-300 hover:-translate-y-0.5 hover:text-brand-700',
  ghost: 'text-ink hover:bg-slate-100',
}

const sizes: Record<Size, string> = {
  sm: 'text-sm px-4 py-2',
  md: 'text-[0.95rem] px-5 py-2.5',
  lg: 'text-base px-7 py-3.5',
}

/**
 * Premium button with ripple micro-interaction and hover lift.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', className, children, leftIcon, rightIcon, onClick, ...props },
  ref,
) {
  const [ripples, setRipples] = useState<Ripple[]>([])
  const nextId = useRef(0)

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const btn = e.currentTarget
    const rect = btn.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const id = nextId.current++
    const ripple: Ripple = {
      id,
      x: e.clientX - rect.left - size / 2,
      y: e.clientY - rect.top - size / 2,
      size,
    }
    setRipples((prev) => [...prev, ripple])
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id))
    }, 600)
    onClick?.(e)
  }

  return (
    <button
      ref={ref}
      onClick={handleClick}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {leftIcon}
      <span className="relative z-10">{children}</span>
      {rightIcon}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute rounded-full bg-white/40 animate-[ripple_0.6s_ease-out]"
          style={{
            left: r.x,
            top: r.y,
            width: r.size,
            height: r.size,
          }}
        />
      ))}
    </button>
  )
})
