'use client';

import React from 'react';
import ServiceHeader from '../sections/ServiceHeader';
import ServicesGrid from '../sections/ServicesGrid';
import CustomizationCTA from '../sections/CustomizationCTA';

export default function ServicesMainPage() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <ServiceHeader />
      <ServicesGrid />
      <CustomizationCTA />
    </div>
  );
}