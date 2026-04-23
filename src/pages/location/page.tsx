import InnerHeader from '../../components/feature/InnerHeader';
import Footer from '../home/components/Footer';
import TrustBar from '../home/components/TrustBar';
import MidCTA from '../home/components/MidCTA';
import ProcessTimeline from '../home/components/ProcessTimeline';
import Gallery from '../home/components/Gallery';
import LeadForm from '../home/components/LeadForm';
import FloatingCTA from '../home/components/FloatingCTA';
import LocationHero from './components/LocationHero';
import LocationServices from './components/LocationServices';
import LocationTrust from './components/LocationTrust';
import LocationReviews from './components/LocationReviews';
import LocationMap from './components/LocationMap';
import LocationAIBlock from './components/LocationAIBlock';
import LocationFAQ from './components/LocationFAQ';
import SeoMeta from '../../components/SeoMeta';

export default function LocationPage() {
  return (
    <main className="font-inter">
      <SeoMeta page="locations" />
      <InnerHeader />
      <LocationHero />
      <TrustBar />
      <LocationServices />
      <LocationTrust />
      <MidCTA />
      <LocationReviews />
      <LocationMap />
      <ProcessTimeline />
      <Gallery />
      <LocationAIBlock />
      <LocationFAQ />
      <LeadForm />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
