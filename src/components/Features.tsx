import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check } from 'lucide-react'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

interface CardProps {
  index: number
  children: React.ReactNode
  className?: string
}

function AnimatedCard({ index, children, className = '' }: CardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative overflow-hidden rounded-2xl lg:h-full ${className}`}
    >
      {children}
    </motion.div>
  )
}

interface IconCardProps {
  index: number
  num: string
  title: string
  icon: string
  items: { title: string; desc: string }[]
}

function IconCard({ index, num, title, icon, items }: IconCardProps) {
  return (
    <AnimatedCard index={index} className="bg-[#212121] p-6 md:p-7 flex flex-col min-h-[420px]">
      <img
        src={icon}
        alt=""
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover mb-6"
      />
      <h3 className="text-primary text-lg sm:text-xl font-medium mb-1">
        {title}
      </h3>
      <p className="text-gray-500 text-xs mb-6">{num}</p>

      <ul className="flex-1 space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3">
            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-primary text-sm font-medium leading-tight">
                {item.title}
              </p>
              <p className="text-gray-400 text-xs mt-0.5 leading-snug">
                {item.desc}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </AnimatedCard>
  )
}

export default function Features() {
  return (
    <section className="relative min-h-screen bg-black py-24 md:py-32 px-4 md:px-6 overflow-hidden">
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-14 md:mb-20 flex flex-col items-center gap-1">
          <WordsPullUpMultiStyle
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal"
            segments={[
              {
                text: 'Studio-grade workflows for serious brands.',
                className: 'text-primary',
              },
            ]}
          />
          <WordsPullUpMultiStyle
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal"
            segments={[
              {
                text: 'Built for clarity. Powered by craft.',
                className: 'text-gray-500',
              },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:h-[480px] gap-3 sm:gap-2 md:gap-1">
          <AnimatedCard index={0} className="min-h-[420px]">
            <video
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="relative h-full flex items-end p-6 md:p-7">
              <p
                className="text-lg sm:text-xl font-medium leading-tight"
                style={{ color: '#E1E0CC' }}
              >
                Your design canvas.
              </p>
            </div>
          </AnimatedCard>

          <IconCard
            index={1}
            num="01"
            title="Figma Design System."
            icon="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85"
            items={[
              {
                title: 'Auto-layout components',
                desc: 'Reusable building blocks across every page.',
              },
              {
                title: 'Variables and tokens',
                desc: 'Color, spacing, and type scale managed centrally.',
              },
              {
                title: 'Variants and states',
                desc: 'Hover, focus, disabled — every state designed once.',
              },
              {
                title: '~40% faster production',
                desc: 'Shipped on real client work at Loudface.',
              },
            ]}
          />

          <IconCard
            index={2}
            num="02"
            title="Conversion Audits."
            icon="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85"
            items={[
              {
                title: 'Heuristic reviews',
                desc: 'Hierarchy, CTA clarity, and friction mapping.',
              },
              {
                title: 'A/B-tested heroes',
                desc: 'Variants shipped with measurable lift in signups.',
              },
              {
                title: 'Funnel teardowns',
                desc: 'Behaviour analysis to scope the right redesign.',
              },
            ]}
          />

          <IconCard
            index={3}
            num="03"
            title="AI-Augmented Workflow."
            icon="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85"
            items={[
              {
                title: 'Claude + v0 prototyping',
                desc: 'From Figma to working code for fast review.',
              },
              {
                title: 'Midjourney moodboards',
                desc: 'On-brand concept visuals in the first hour.',
              },
              {
                title: 'Figma AI and Make',
                desc: 'Variants and layouts generated in-tool.',
              },
            ]}
          />
        </div>
      </div>
    </section>
  )
}
