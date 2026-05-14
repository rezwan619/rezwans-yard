import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Stat {
  label: string
  value: string
  desc: string
}

const STATS: Stat[] = [
  {
    label: 'Delivered',
    value: '80+',
    desc: 'Projects shipped across e-commerce, SaaS, finance, and hospitality.',
  },
  {
    label: 'Lift',
    value: '+35%',
    desc: 'Average uplift in client signups and conversion after A/B-tested redesigns.',
  },
  {
    label: 'Faster',
    value: '40%',
    desc: 'Production speed-up from reusable Figma design systems.',
  },
  {
    label: 'Tenure',
    value: '6+',
    desc: 'Years of agency-grade UI/UX and conversion-led design.',
  },
]

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-black px-4 md:px-6 pb-24 md:pb-32">
      <div
        ref={ref}
        className="max-w-7xl mx-auto bg-[#0a0a0a] rounded-2xl md:rounded-[2rem] border border-white/5 px-6 sm:px-10 md:px-14 py-12 md:py-16"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-0">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ y: 24, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative px-2 lg:px-8 ${
                i > 0 ? 'lg:border-l lg:border-white/10' : ''
              }`}
            >
              <p className="text-gray-500 text-xs sm:text-sm mb-4">
                {s.label}
              </p>
              <p
                className="font-serif italic text-5xl sm:text-6xl md:text-7xl leading-none mb-5"
                style={{ color: '#E1E0CC' }}
              >
                {s.value}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm max-w-[16rem] leading-snug">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
