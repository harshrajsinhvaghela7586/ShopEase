'use client';

import React from 'react';
import ContactHero from '../sections/ContactHero';
import ContactInfo from '../sections/ContactInfo';
import ContactForm from '../sections/ContactForm';

export default function ContactMainPage() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <ContactHero />

      <section className="py-16 md:py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </div>
  );
}