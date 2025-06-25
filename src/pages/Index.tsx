
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Awards from '@/components/Awards';
import Differentials from '@/components/Differentials';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Awards />
        <Projects />
        <Experience />
        <Education />
        <Differentials />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
