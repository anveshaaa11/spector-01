import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import WhoIsSpector from '@/components/WhoIsSpector';
import Operations from '@/components/Operations';
import Tracks from '@/components/Tracks';
import Missions from '@/components/Missions';
import Timeline from '@/components/Timeline';
import Rewards from '@/components/Rewards';
import EventIntel from '@/components/EventIntel';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="bg-obsidian min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <WhoIsSpector />
        <Operations />
        <Tracks />
        <Missions />
        <Timeline />
        <Rewards />
        <EventIntel />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
