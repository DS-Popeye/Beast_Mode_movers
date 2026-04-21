import InnerHeader from '../../components/feature/InnerHeader';
import Footer from '../home/components/Footer';
import MidCTA from '../home/components/MidCTA';
import ServiceAreas from '../home/components/ServiceAreas';
import ProcessTimeline from '../home/components/ProcessTimeline';
import Gallery from '../home/components/Gallery';
import FAQ from '../home/components/FAQ';
import LeadForm from '../home/components/LeadForm';
import FloatingCTA from '../home/components/FloatingCTA';
import AboutHero from './components/AboutHero';
import AboutStats from './components/AboutStats';
import AboutValues from './components/AboutValues';
import AboutWhyChooseUs from './components/AboutWhyChooseUs';
import AboutStory from './components/AboutStory';
import AboutTestimonials from './components/AboutTestimonials';
import AboutTeam from './components/AboutTeam';

export default function AboutPage() {
  return (
    <main className="font-inter">
      <InnerHeader />
      <AboutHero />
      <AboutStats />
      <AboutValues />
      <AboutWhyChooseUs />
      <AboutStory />
      <MidCTA />
      <AboutTestimonials />
      <ServiceAreas />
      <ProcessTimeline />
      <Gallery />
      <AboutTeam />
      <FAQ />
      <LeadForm />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
