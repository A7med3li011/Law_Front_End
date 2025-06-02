import AboutUs from "./sections/AboutUs.jsx";
import FAQ from "./sections/FAQ.jsx";
import Features from "./sections/Features.jsx";
import Footer from "./sections/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import HowItWorks from "./sections/HowItWorks.jsx";
import LandingNavbar from "./sections/LandingNavbar.jsx";
import Partaners from "./sections/Partaners.jsx";
import Testimonials from "./sections/Testimonials.jsx";

export default function Landing() {
  return (
    <>
      <div
        className="w-full max-w-[1500px] mx-auto px-8 sm:px-6 lg:px-8 py-4 lg:py-6 space-y-8"
        dir="rtl"
      >
        <LandingNavbar />
        <Hero />
        <Partaners />
        <Features />
        <AboutUs />
        <HowItWorks />
        {/* <Testimonials /> */}
        <FAQ />
      </div>
      <Footer />
    </>
  );
}
