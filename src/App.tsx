import { Analytics } from '@vercel/analytics/react'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Features from './components/Features'
import Works from './components/Works'
import Process from './components/Process'
import Toolkit from './components/Toolkit'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <Stats />
      <div id="about">
        <About />
      </div>
      <Features />
      <Works />
      <div id="process">
        <Process />
      </div>
      <div id="toolkit">
        <Toolkit />
      </div>
      <Footer />
      <Analytics />
    </main>
  )
}
