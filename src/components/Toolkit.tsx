import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

interface ToolGroup {
  label: string
  tools: string[]
}

const GROUPS: ToolGroup[] = [
  {
    label: 'Design',
    tools: [
      'Figma',
      'Auto-layout',
      'Variables',
      'Components',
      'Prototyping',
      'Design systems',
    ],
  },
  {
    label: 'Build',
    tools: [
      'Webflow',
      'WordPress',
      'TailwindCSS',
      'HTML / CSS',
      'JavaScript',
      'Bootstrap',
    ],
  },
  {
    label: 'AI workflow',
    tools: [
      'Claude',
      'Cursor',
      'v0',
      'Midjourney',
      'Sora',
      'Figma AI / Make',
    ],
  },
  {
    label: 'Practice',
    tools: [
      'UX research',
      'Heuristic review',
      'A/B testing',
      'CRO',
      'Wireframing',
      'Client comms',
    ],
  },
]

interface ColumnProps {
  group: ToolGroup
  index: number
}

function ToolColumn({ group, index }: ColumnProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ y: 24, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-5 pb-4 border-b border-white/10">
        {group.label}
      </p>
      <ul className="space-y-2.5">
        {group.tools.map((t) => (
          <li
            key={t}
            className="text-primary text-sm sm:text-base font-medium"
          >
            {t}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function Toolkit() {
  return (
    <section className="bg-black py-24 md:py-32 px-4 md:px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20 flex flex-col items-center gap-1">
          <WordsPullUpMultiStyle
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal"
            segments={[
              { text: 'The', className: 'text-primary' },
              { text: 'toolkit.', className: 'italic font-serif text-primary' },
            ]}
          />
          <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-4 max-w-md">
            What's open on the second monitor every day — design, build, and
            the AI layer that compresses the cycle.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-16">
          {GROUPS.map((g, i) => (
            <ToolColumn key={g.label} group={g} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
