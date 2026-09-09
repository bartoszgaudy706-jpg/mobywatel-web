'use client';

import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Documents from '@/components/Documents';
import Security from '@/components/Security';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Documents />
      <Security />
      <CTA />
    </>
  );
}
