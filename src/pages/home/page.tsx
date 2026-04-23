import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Testimonials from './components/Testimonials';
import ServiceAreas from './components/ServiceAreas';
import ProcessTimeline from './components/ProcessTimeline';
import MidCTA from './components/MidCTA';
import FAQ from './components/FAQ';
import Gallery from './components/Gallery';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import SeoMeta from '../../components/SeoMeta';

export default function Home() {
  return (
    <main className="font-inter">
      <SeoMeta page="home" />
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <About />
      <MidCTA />
      <Testimonials />
      <ServiceAreas />
      <ProcessTimeline />
      <Gallery />
      <FAQ />
      <LeadForm />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
