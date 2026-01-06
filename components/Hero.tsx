
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            Master the Court with <span className="text-teal-600">Precision.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-10">
            Whether you're just starting out or looking to refine your competitive edge, discover personalized guidance from a dedicated Virginia Tech athlete and coach.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#quiz"
              className="bg-teal-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-teal-700 transition shadow-lg text-center"
            >
              Take the Skill Quiz
            </a>
            <a
              href="#quickHelp"
              className="bg-white text-gray-800 border border-gray-200 px-8 py-4 rounded-lg font-bold hover:bg-gray-50 transition shadow-sm text-center"
            >
              View Coaching Tips
            </a>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 opacity-10">
         <div className="w-96 h-96 bg-teal-600 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
