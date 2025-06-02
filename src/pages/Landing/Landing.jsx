import AboutUs from "./sections/AboutUs.jsx";
import FAQ from "./sections/FAQ.jsx";
import Features from "./sections/Features.jsx";
import Footer from "./sections/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import HowItWorks from "./sections/HowItWorks.jsx";
import LandingNavbar from "./sections/LandingNavbar.jsx";
import Partaners from "./sections/Partaners.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Logo from "./sections/Logo.jsx";
export default function Landing() {
  return (
    <div>
      <LandingNavbar />
      <Hero />
      <Logo />
      <Partaners />
      <Features />
      <AboutUs />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
