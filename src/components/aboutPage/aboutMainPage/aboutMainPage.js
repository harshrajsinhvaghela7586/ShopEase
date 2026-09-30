'use client';

import React from 'react';
import AboutHero from '../sections/AboutHero';
import OurJourney from '../sections/OurJourney';
import AboutStats from '../sections/AboutStats';
import CoreValues from '../sections/CoreValues';
import AboutCta from '../sections/AboutCta';

export default function AboutMainPage() {
  return (
    <div className="bg-white text-gray-800">
      <AboutHero />
      <OurJourney />
      <AboutStats />
      <CoreValues />
      <AboutCta />
    </div>
  );
}