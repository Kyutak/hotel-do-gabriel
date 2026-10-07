'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './Header';
import Hero from './Hero';
import Intro from './Intro';
import Accommodations from './Accommodations';
import Gallery from './Gallery';
import Amenities from './Amenities';
import Restaurant from './Restaurant';
import Location from './Location';
import Footer from './Footer';

gsap.registerPlugin(ScrollTrigger);

export default function HotelLanding() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
        gsap.fromTo(element, { autoAlpha: 0, y: 28 }, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: element, start: 'top 88%', once: true },
        });
      });
    }, pageRef);

    return () => context.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen overflow-hidden bg-[#f7f5f1] text-[#302b27]">
      <Header />
      <main>
        <Hero />
        <Intro />
        <Accommodations />
        <Gallery />
        <Amenities />
        <Restaurant />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
