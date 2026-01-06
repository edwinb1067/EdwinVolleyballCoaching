
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contactMe" className="py-20 bg-teal-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Ready to Elevate Your Game?</h2>
        <p className="text-teal-50 text-lg mb-12 max-w-2xl mx-auto">
          I am always open to discussing training sessions, technique analysis, or general volleyball questions. 
          Feel free to reach out via email or text.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <a
            href="mailto:edwinb1067@vt.edu"
            className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition group"
          >
            <div className="flex flex-col items-center">
              <svg className="w-8 h-8 text-white mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-white font-bold text-lg mb-1">Email Me</span>
              <span className="text-teal-100 group-hover:text-white transition-colors">edwinb1067@vt.edu</span>
            </div>
          </a>

          <div
            className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition"
          >
            <div className="flex flex-col items-center">
              <svg className="w-8 h-8 text-white mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-white font-bold text-lg mb-1">Text Me</span>
              <span className="text-teal-100">804-664-2179</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
