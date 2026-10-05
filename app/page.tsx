import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Experience } from '@/components/experience'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { Services } from '@/components/services'
import { TechStack } from '@/components/tech-stack'
import { Testimonials } from '@/components/testimonials'
import { Work } from '@/components/work'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Services />
        <TechStack />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
