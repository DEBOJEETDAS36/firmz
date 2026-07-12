import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { AboutUs } from "@/components/about-us";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { ContactUs } from "@/components/contact-us";
import { LocationMap } from "@/components/location-map";
import { Footer } from "@/components/footer";
import { ChatBot } from "@/components/ChatBot";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <Testimonials />
      <FAQ />
      <ContactUs />
      <LocationMap />
      <Footer />
      <ChatBot />
    </main>
  );
}
