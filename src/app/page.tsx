import Hero from "@/components/Hero";
import CoreServices from "@/components/CoreServices";
import Workflow from "@/components/Workflow";
import WhyChooseUs from "@/components/WhyChooseUs"; // Import new component
import Consultation from "@/components/Consultation";
import ExpertServices from "@/components/ExpertServices";
import Portfolio from "@/components/Portfolio";
import TrustedClients from "@/components/TrustedClients";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <CoreServices />
      <Consultation />
      <ExpertServices />
      <Portfolio />
      <TrustedClients />
      <Testimonials />
      <Workflow />
      <WhyChooseUs />
    </div>
  );
}