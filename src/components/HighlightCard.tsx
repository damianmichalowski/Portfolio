import React from 'react'

interface HighlightCardProps {
  tag: string
  title: string
  bullets: string[]
}

const HighlightCard: React.FC<HighlightCardProps> = ({
  tag,
  title,
  bullets,
}) => {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/20 p-5">
      <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-neutral-500">
        {tag}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <ul className="mt-3 space-y-1 text-sm leading-relaxed text-gray-600 dark:text-neutral-400">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  )
}

export default HighlightCard
