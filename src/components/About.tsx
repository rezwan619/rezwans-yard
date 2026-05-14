import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

const BODY_TEXT =
  'Over the last six years, I have worked with clients across the UAE, UK, US, Australia, and Europe — shipping conversion-led websites in Figma for SaaS, Fintech, E-commerce, Education, Trading, and Hospitality brands.'

interface AnimatedLetterProps {
  char: string
  progress: MotionValue<number>
  range: [number, number]
}

function AnimatedLetter({ char, progress, range }: AnimatedLetterProps) {
  const opacity = useTransform(progress, range, [0.2, 1])
  return (
    <motion.span style={{ opacity }} className="inline">
      {char}
    </motion.span>
  )
}

export default function About() {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const chars = BODY_TEXT.split('')

  return (
    <section className="bg-black py-24 md:py-32 px-4 md:px-6">
      <div className="bg-[#101010] rounded-2xl md:rounded-[2rem] max-w-6xl mx-auto px-6 sm:px-10 md:px-16 py-20 md:py-28 text-center">
        <p className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-8 md:mb-12">
          Visual design
        </p>

        <WordsPullUpMultiStyle
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9]"
          segments={[
            { text: 'I am Rezwan Islam Nahid,', className: 'font-normal' },
            {
              text: 'a senior web designer.',
              className: 'italic font-serif font-normal',
            },
            {
              text: 'I have skills in Figma, UX research, design systems, and conversion-focused design.',
              className: 'font-normal',
            },
          ]}
        />

        <p
          ref={ref}
          className="mt-10 md:mt-14 text-xs sm:text-sm md:text-base max-w-3xl mx-auto"
          style={{ color: '#DEDBC8', lineHeight: 1.6 }}
        >
          {chars.map((c, i) => {
            const charProgress = i / chars.length
            return (
              <AnimatedLetter
                key={i}
                char={c}
                progress={scrollYProgress}
                range={[
                  Math.max(0, charProgress - 0.1),
                  Math.min(1, charProgress + 0.05),
                ]}
              />
            )
          })}
        </p>
      </div>
    </section>
  )
}
