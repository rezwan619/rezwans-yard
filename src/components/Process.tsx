import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

interface Step {
  num: string
  title: string
  desc: string
}

const STEPS: Step[] = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Brief teardown, competitor scan, and heuristic review of the existing site. Where conversion leaks, where the brand under-delivers.',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Moodboards, sitemap, then high-fidelity Figma — built on auto-layout components and variables so the system scales with the brand.',
  },
  {
    num: '03',
    title: 'Iterate',
    desc: 'A/B-tested heroes, sharper CTAs, friction removed from the funnel. Decisions backed by user-behaviour analysis, not opinion.',
  },
  {
    num: '04',
    title: 'Ship',
    desc: 'Pixel and content QA against the Webflow or WordPress build. Most projects live inside a one-month window from kickoff to launch.',
  },
]

interface RowProps {
  step: Step
  index: number
}

function StepRow({ step, index }: RowProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ y: 30, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 border-t border-white/10 group"
    >
      <div className="col-span-2 md:col-span-1">
        <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-gray-500 group-hover:text-primary transition-colors">
          {step.num}
        </p>
      </div>
      <div className="col-span-10 md:col-span-3">
        <h3 className="text-primary text-xl sm:text-2xl md:text-3xl font-medium">
          {step.title}
        </h3>
      </div>
      <div className="col-span-12 md:col-span-7 md:col-start-6">
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl">
          {step.desc}
        </p>
      </div>
    </motion.div>
  )
}

export default function Process() {
  return (
    <section className="bg-black py-24 md:py-32 px-4 md:px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20 flex flex-col items-center gap-1">
          <WordsPullUpMultiStyle
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal"
            segments={[
              { text: 'How the', className: 'text-primary' },
              { text: 'work', className: 'italic font-serif text-primary' },
              { text: 'gets made.', className: 'text-primary' },
            ]}
          />
          <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-4 max-w-md">
            Four phases. One designer accountable end-to-end. No surprises at
            handoff.
          </p>
        </div>

        <div className="border-b border-white/10">
          {STEPS.map((s, i) => (
            <StepRow key={s.num} step={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
