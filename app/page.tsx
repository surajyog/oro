import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { Team } from "@/components/sections/team";
import { Testimonials } from "@/components/sections/testimonials";
import { Appointment } from "@/components/sections/appointment";
import { Insurance } from "@/components/sections/insurance";
import { Location } from "@/components/sections/location";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Team />
      <Testimonials />
      <Appointment />
      <Insurance />
      <Location />
      <Footer />
    </main>
  );
}
