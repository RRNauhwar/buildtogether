import { cn } from '@/lib/utils'

/**
 * Build Together mark — a stylized "together" triangle motif.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-indigo-600 shadow-lift',
        className,
      )}
      aria-hidden="true"
    >
      <svg width="20" height="20" viewBox="0 0 64 64" fill="none">
        <path
          d="M20 42 L32 20 L44 42 Z"
          stroke="white"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="46" r="4" fill="white" />
      </svg>
    </span>
  )
}
