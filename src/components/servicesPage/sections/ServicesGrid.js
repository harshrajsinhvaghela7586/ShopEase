'use client';

import React from 'react';
import { 
  FiTruck, 
  FiScissors, 
  FiGift, 
  FiRefreshCw, 
  FiShield, 
  FiHeadphones 
} from 'react-icons/fi';
import ServiceCard from './ServiceCard';

export default function ServicesGrid() {
  const servicesList = [
    {
      icon: <FiTruck className="text-xl" />,
      badge: "Fast & Safe",
      title: "Express Nationwide Shipping",
      desc: "Fast and reliable delivery right to your doorstep with real-time tracking and careful, secure packaging."
    },
    {
      icon: <FiScissors className="text-xl" />,
      badge: "Personalized",
      title: "Custom Fitting & Styling",
      desc: "Get personalized size advice and custom fitting guidance to ensure every dress fits you perfectly."
    },
    {
      icon: <FiGift className="text-xl" />,
      badge: "Special Touch",
      title: "Luxury Gift Wrapping",
      desc: "Sending a gift to someone special? We provide aesthetic boutique ribbon gift packaging with custom cards."
    },
    {
      icon: <FiRefreshCw className="text-xl" />,
      badge: "Zero Stress",
      title: "Hassle-Free 7-Day Exchange",
      desc: "Size didn't fit? No worries! Our smooth doorstep exchange policy makes returns completely easy."
    },
    {
      icon: <FiShield className="text-xl" />,
      badge: "Guaranteed",
      title: "100% Authentic Quality",
      desc: "Every item undergoes multi-step quality checks for stitching, fabric, and finishing before dispatch."
    },
    {
      icon: <FiHeadphones className="text-xl" />,
      badge: "Always Online",
      title: "24/7 Fashion Support",
      desc: "Have questions about accessories or dress combinations? Our styling experts are always online to help."
    }
  ];

  return (
    <section className="py-16 md:py-20 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map((service, idx) => (
          <ServiceCard
            key={idx}
            icon={service.icon}
            badge={service.badge}
            title={service.title}
            desc={service.desc}
          />
        ))}
      </div>
    </section>
  );
}