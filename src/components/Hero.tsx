import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import WordsPullUp from './WordsPullUp'

const NAV_ITEMS = [
  { label: 'Work', href: '#works' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Toolkit', href: '#toolkit' },
  { label: 'Contact', href: '#contact' },
]

export default function Hero() {
  return (
    <section className="h-screen w-full p-4 md:p-6 bg-black">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

        <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8">
          <ul className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-[10px] sm:text-xs md:text-sm transition-colors"
                  style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = '#E1E0CC')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)')
                  }
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 md:px-14 pb-8 md:pb-12">
          <div className="grid grid-cols-12 gap-4 md:gap-8 items-end">
            <div className="col-span-12 lg:col-span-8">
              <WordsPullUp
                text="Rezwan's yard"
                className="text-[13vw] font-medium leading-[0.85] tracking-[-0.07em]"
                style={{ color: '#E1E0CC' }}
              />
            </div>

            <div className="col-span-12 lg:col-span-4 flex flex-col gap-5 lg:pb-6">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-primary/70 text-xs sm:text-sm md:text-base"
                style={{ lineHeight: 1.2 }}
              >
                Rezwan's yard is the working studio of Rezwan Islam Nahid — a
                senior product designer with deep UX/UI expertise, crafting
                conversion-led product interfaces and websites in Figma for
                e-commerce, SaaS, finance, and hospitality brands. Six years of
                agency work, shipped under tight one-month timelines.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <a
                  href="/Rezwan_Islam_Nahid_CV.pdf"
                  download
                  className="group inline-flex items-center gap-2 hover:gap-3 transition-all bg-primary rounded-full pl-5 sm:pl-6 pr-1.5 py-1.5"
                >
                  <span className="text-black font-medium text-sm sm:text-base">
                    Download CV
                  </span>
                  <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowRight
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      style={{ color: '#E1E0CC' }}
                    />
                  </span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
