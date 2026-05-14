import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { ArrowRight, ArrowUpRight, X } from 'lucide-react'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

interface Project {
  id: string
  title: string
  category: string
  year: string
  pdf: string
}

const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Urban Umbrella',
    category: 'Infrastructure · Brand site',
    year: '2026',
    pdf: '/p1.pdf',
  },
  {
    id: 'p2',
    title: 'Eight Strands Literacy',
    category: 'Education platform',
    year: '2025',
    pdf: '/p2.pdf',
  },
  {
    id: 'p3',
    title: 'Bluefyn',
    category: 'SaaS · Product UI',
    year: '2026',
    pdf: '/p3.pdf',
  },
  {
    id: 'p4',
    title: 'PineX',
    category: 'Finance · Web app',
    year: '2026',
    pdf: '/p4.pdf',
  },
  {
    id: 'p5',
    title: 'Block Horizon',
    category: 'Trading · Product UI',
    year: '2025',
    pdf: '/p5.pdf',
  },
]

interface CardProps {
  project: Project
  index: number
  onOpen: (p: Project) => void
}

function ProjectCard({ project, index, onOpen }: CardProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.button
      ref={ref}
      onClick={() => onOpen(project)}
      initial={{ y: 30, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative w-full text-left bg-[#101010] hover:bg-[#161616] transition-colors rounded-2xl overflow-hidden border border-white/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#1a1a1a]">
        <iframe
          src={`${project.pdf}#page=1&toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
          className="absolute inset-0 w-full h-full pointer-events-none"
          title={project.title}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight className="w-4 h-4 text-primary" />
        </div>
      </div>

      <div className="p-5 md:p-6 flex items-end justify-between gap-4">
        <div className="min-w-0">
          <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-1">
            {project.category}
          </p>
          <h3 className="text-primary text-base sm:text-lg md:text-xl font-medium truncate">
            {project.title}
          </h3>
        </div>
        <span className="text-gray-500 text-xs sm:text-sm shrink-0">
          {project.year}
        </span>
      </div>
    </motion.button>
  )
}

interface ModalProps {
  project: Project | null
  onClose: () => void
}

function ProjectModal({ project, onClose }: ModalProps) {
  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl h-full bg-[#101010] rounded-2xl overflow-hidden flex flex-col"
          >
            <header className="flex items-center justify-between gap-4 px-5 sm:px-7 py-4 border-b border-white/10 shrink-0">
              <div className="min-w-0">
                <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-[0.2em]">
                  {project.category} · {project.year}
                </p>
                <h2 className="text-primary text-base sm:text-lg md:text-xl font-medium truncate">
                  {project.title}
                </h2>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={project.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 text-primary text-xs sm:text-sm border border-white/15 rounded-full px-3 py-1.5 hover:bg-white/5 transition-colors"
                >
                  Open in new tab
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center text-primary"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </header>

            <div className="flex-1 bg-[#1a1a1a] overflow-hidden">
              <iframe
                src={project.pdf}
                title={project.title}
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Works() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section
      id="works"
      className="bg-black py-24 md:py-32 px-4 md:px-6 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 md:mb-20 flex flex-col items-center gap-1">
          <WordsPullUpMultiStyle
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal"
            segments={[
              { text: 'My recent', className: 'text-primary' },
              { text: 'works.', className: 'italic font-serif text-primary' },
            ]}
          />
          <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-4 max-w-md">
            A small selection of websites, product UI, and brand work shipped
            over the last two years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={setActive} />
          ))}
        </div>

        <div className="flex justify-center mt-12 md:mt-16">
          <a
            href="https://dribbble.com/rezwandesign"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 hover:gap-3 transition-all bg-primary rounded-full pl-5 sm:pl-6 pr-1.5 py-1.5"
          >
            <span className="text-black font-medium text-sm sm:text-base">
              View more work
            </span>
            <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowRight
                className="w-4 h-4 sm:w-5 sm:h-5"
                style={{ color: '#E1E0CC' }}
              />
            </span>
          </a>
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
