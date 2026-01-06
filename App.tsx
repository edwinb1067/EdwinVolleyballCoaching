
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuizSection from './components/QuizSection';
import AboutSection from './components/AboutSection';
import QuickHelpSection from './components/QuickHelpSection';
import ContactSection from './components/ContactSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <QuizSection />
        <AboutSection />
        <QuickHelpSection />
        <ContactSection />
      </main>
      <footer className="bg-gray-100 py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Edwin Barrack Coaching. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
