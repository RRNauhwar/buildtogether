/** Lightweight classnames joiner (no external dependency). */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}

/** Smoothly scroll to an in-page anchor, accounting for the sticky navbar. */
export function scrollToId(id: string) {
  const el = document.querySelector(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
