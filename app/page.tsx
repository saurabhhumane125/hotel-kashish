import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Trust from "@/components/sections/Trust";
import Banquets from "@/components/sections/Banquets";
import Rooms from "@/components/sections/Rooms";
import Experience from "@/components/sections/Experience";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import FloatingActions from "@/components/ui/FloatingActions";
import PageLoader from "@/components/ui/PageLoader";

export default function Home() {
  return (
    <>
      <PageLoader />
      <Navigation />
      <main>
        <Hero />
        <Trust />
        <Banquets />
        <Rooms />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
