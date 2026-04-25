import InnerHeader from '../../components/feature/InnerHeader';
import Footer from '../home/components/Footer';
import TrustBar from '../home/components/TrustBar';
import MidCTA from '../home/components/MidCTA';
import Testimonials from '../home/components/Testimonials';
import ServiceAreas from '../home/components/ServiceAreas';
import Gallery from '../home/components/Gallery';
import LeadForm from '../home/components/LeadForm';
import FloatingCTA from '../home/components/FloatingCTA';
import ServiceHero from './components/ServiceHero';
import ServiceBreakdown from './components/ServiceBreakdown';
import ServiceContentSections from './components/ServiceContentSections';
import ServiceBenefits from './components/ServiceBenefits';
import ServiceProblemSolution from './components/ServiceProblemSolution';
import ServiceProcess from './components/ServiceProcess';
import ServiceAIBlock from './components/ServiceAIBlock';
import ServiceFAQ from './components/ServiceFAQ';
import SeoMeta from '../../components/SeoMeta';

export default function ServicePage() {
  return (
    <main className="font-inter">
      <SeoMeta page="services" />
      <InnerHeader />
      <ServiceHero />
      <TrustBar />
      <ServiceContentSections />
      <ServiceBreakdown />
      <ServiceBenefits />
      <ServiceProblemSolution />
      <MidCTA />
      <Testimonials />
      <ServiceAreas />
      <ServiceProcess />
      <Gallery />
      <ServiceAIBlock />
      <ServiceFAQ />
      <LeadForm />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
