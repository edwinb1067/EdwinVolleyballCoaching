
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="aboutMe" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-4">Background</h2>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Meet Edwin Barrack</h3>
            <div className="prose prose-teal text-gray-600 space-y-4 max-w-none">
              <p>
                I am a Junior at Virginia Tech majoring in Computer Science with minors in Math and Cybersecurity. 
                Beyond the screen, I am a dedicated member of the Virginia Tech Men's Volleyball Club, 
                where we compete at the intercollegiate level and practice four times a week.
              </p>
              <p>
                Outside of sports and studies, I enjoy keeping active in the gaming community with Rocket League and Clash Royale, 
                watching professional sports, and learning guitar. I am a firm believer that the discipline 
                learned on the court translates directly to academic and professional success.
              </p>
              <div className="pt-6">
                <h4 className="font-bold text-gray-900 mb-2">Interests & Hobbies</h4>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>Computer Science</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>Cybersecurity</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>Guitar</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>Culinary Arts</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <h2 className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-4">Experience</h2>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">A Lifelong Journey</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-teal-500 pl-4">
                <p className="text-gray-600 mb-2">
                  My volleyball journey began at age 9, influenced by a family deep in the sport. Over the past decade, 
                  I have competed through 7 years of travel volleyball, 6 seasons of high school play, and 
                  2 years representing Virginia Tech in the national club circuit, placing 5th and 3rd nationally.
                </p>
              </div>
              <div className="border-l-4 border-gray-300 pl-4">
                <p className="text-gray-600">
                  For the past 3 years, I have served as a referee at the Richmond Volleyball Club (RVC). 
                  Officiating across all skill levels has given me a unique perspective on the critical 
                  technical gaps that separate beginner, intermediate, and advanced players.
                </p>
              </div>
              <p className="text-gray-700 italic font-medium">
                "Playing volleyball is the best decision I have ever made, and coaching is my way of giving back to the sport that shaped me."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
