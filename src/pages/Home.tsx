import { Hero } from '@/components/sections/Hero'
import { ClientLogos } from '@/components/sections/ClientLogos'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { Industries } from '@/components/sections/Industries'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { Process } from '@/components/sections/Process'
import { Testimonials } from '@/components/sections/Testimonials'
import { Blog } from '@/components/sections/Blog'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <About />
      <Services />
      <Industries />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <Blog />
      <FAQ />
      <CTA />
      <Contact />
    </>
  )
}
