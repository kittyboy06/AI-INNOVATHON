import React from 'react';
import { Starfield } from './components/background/Starfield';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Highlights } from './components/sections/Highlights';
import { Mission } from './components/sections/Mission';
import { Challenge } from './components/sections/Challenge';
import { HowItWorks } from './components/sections/HowItWorks';
import { Prizes } from './components/sections/Prizes';
import { EligibilityBenefits } from './components/sections/EligibilityBenefits';
import { Rules } from './components/sections/Rules';
import { Submission } from './components/sections/Submission';
import { RegistrationCTA } from './components/sections/RegistrationCTA';
import { Venue } from './components/sections/Venue';
import { Clubs } from './components/sections/Clubs';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-space-950 text-slate-100 font-sans selection:bg-cyber-cyan/30 selection:text-cyber-cyan">
      {/* Background Starfield Canvas with Cosmic Nebula Gradients */}
      <Starfield />

      {/* Persistent Glassmorphic HUD Navbar */}
      <Navbar />

      {/* Main Single-Page Narrative Flow */}
      <main className="relative z-10">
        <Hero />
        {/* <Highlights /> */}
        <RegistrationCTA />
        <Mission />
        {/* <Challenge /> */}
        <HowItWorks />
        <Rules />
        {/* <EligibilityBenefits /> */}
        {/*<Prizes />*/}
        <Submission />
        <Venue />
        <Clubs />
        <FAQ />
        <Contact />
      </main>

      {/* Footer with Department Details and Action Links */}
      <Footer />
    </div>
  );
};

export default App;
