import { CLIENT_LOGOS } from '@/lib/data'

export function ClientLogos() {
  // Duplicate the list so the marquee loops seamlessly
  const items = [...CLIENT_LOGOS, ...CLIENT_LOGOS]

  return (
    <section className="border-y border-slate-100 bg-white py-12" aria-label="Our clients">
      <div className="container-px">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
          Our Clients
        </p>
      </div>

      <div className="group relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-16 group-hover:[animation-play-state:paused]">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap text-2xl font-bold tracking-tight text-slate-300 transition-colors hover:text-brand-500"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
