import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { EventsSection } from "@/components/events-section"
import { CalendarSection } from "@/components/calendar-section"
import { SpaceSection } from "@/components/space-section"
import { BeersSection } from "@/components/beers-section"
import { MenuSection } from "@/components/menu-section"
import { InstagramSection } from "@/components/instagram-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <EventsSection />
        <CalendarSection />
        <SpaceSection />
        <BeersSection />
        <MenuSection />
        <InstagramSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
