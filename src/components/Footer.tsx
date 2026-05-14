import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const YEAR = new Date().getFullYear()

const LINKS = [
  { label: 'Dribbble', href: 'https://dribbble.com/rezwandesign' },
  { label: 'Email', href: 'mailto:rezwannahid1996@gmail.com' },
  { label: 'WhatsApp', href: 'https://wa.me/8801775201332' },
]

const NAV = [
  { label: 'Work', href: '#works' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Toolkit', href: '#toolkit' },
]

export default function Footer() {
  return (
    <footer className="bg-black px-4 md:px-6 pb-6">
      <div className="relative max-w-7xl mx-auto bg-[#0a0a0a] rounded-2xl md:rounded-[2rem] border border-white/5 overflow-hidden">
        <div className="px-6 sm:px-10 md:px-14 pt-14 md:pt-20 pb-10 md:pb-14">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-12 gap-6 md:gap-8 pb-12 md:pb-16 border-b border-white/10"
          >
            <div className="col-span-12 md:col-span-7">
              <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-[0.25em] mb-4">
                Have something to ship?
              </p>
              <h2
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[0.95] tracking-[-0.02em]"
                style={{ color: '#E1E0CC' }}
              >
                Let's build a{' '}
                <span className="italic font-serif">site</span> that
                <br />
                actually{' '}
                <span className="italic font-serif">converts.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5 md:pt-4 flex flex-col gap-4">
              <a
                href="mailto:rezwannahid1996@gmail.com"
                className="group inline-flex items-center gap-2 hover:gap-3 transition-all bg-primary rounded-full pl-5 sm:pl-6 pr-1.5 py-1.5 self-start"
              >
                <span className="text-black font-medium text-sm sm:text-base">
                  rezwannahid1996@gmail.com
                </span>
                <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowUpRight
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    style={{ color: '#E1E0CC' }}
                  />
                </span>
              </a>
              <p className="text-gray-500 text-xs sm:text-sm max-w-sm leading-relaxed">
                Working with clients across the UAE, UK, US, Australia, and
                Europe — SaaS, Fintech, E-commerce, Education, Trading, and
                Hospitality. Replies within one business day.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-12 gap-6 md:gap-8 pt-10 md:pt-12 items-end">
            <div className="col-span-12 md:col-span-5">
              <p
                className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.04em]"
                style={{ color: '#E1E0CC' }}
              >
                Rezwan's yard
                <sup className="text-[0.31em] -top-[1em] relative ml-0.5">
                  *
                </sup>
              </p>
              <p className="text-gray-500 text-xs sm:text-sm mt-3 max-w-sm">
                The independent studio of Rezwan Islam Nahid — senior web
                designer, conversion-led, six years agency-trained.
              </p>
            </div>

            <div className="col-span-6 md:col-span-3">
              <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-4">
                Sitemap
              </p>
              <ul className="space-y-2">
                {NAV.map((n) => (
                  <li key={n.label}>
                    <a
                      href={n.href}
                      className="text-primary text-sm hover:text-white transition-colors"
                    >
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-6 md:col-span-4">
              <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-4">
                Elsewhere
              </p>
              <ul className="space-y-2">
                {LINKS.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary text-sm hover:text-white transition-colors inline-flex items-center gap-1.5 group"
                    >
                      {l.label}
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-12 md:mt-16 pt-6 border-t border-white/10">
            <p className="text-gray-500 text-xs">
              © {YEAR} Rezwan Islam Nahid. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Designed and coded in Figma + Vite. AI-assisted, hand-finished.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
