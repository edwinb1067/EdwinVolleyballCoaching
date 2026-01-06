
import React from 'react';

const QuickHelpSection: React.FC = () => {
  const levels = [
    {
      id: 'beginner',
      title: 'Beginner Level',
      description: 'Focus on fundamentals and consistency.',
      items: [
        {
          heading: 'Serving Strategy',
          content: 'The key to scoring at this level is a reliable overhand float serve. A low, consistent serve can create streaks of points by challenging opponents who haven\'t yet mastered passing form.'
        },
        {
          heading: 'Building Fundamentals',
          content: 'Prioritize footwork, communication, and proper technique. Calling for the ball and managing seams will put you ahead of players who rely purely on raw athleticism.'
        },
        {
          heading: 'Knowledge',
          content: 'Learn the official rules and basic rotations early. This builds tactical awareness and prevents bad habits from forming as you progress.'
        }
      ]
    },
    {
      id: 'intermediate',
      title: 'Intermediate Level',
      description: 'System understanding and physical development.',
      items: [
        {
          heading: 'Defining Your Role',
          content: 'Understand the specialized positions (OH, OPP, MB, S, L, DS). Each has a unique responsibility in the system and requires specific technical training.'
        },
        {
          heading: 'Physical Conditioning',
          content: 'Focus on lower body strength and plyometrics. Explosiveness in jumping and defensive movement provides significantly more control over the game.'
        },
        {
          heading: 'Defensive Skills',
          content: 'Learn to dive effectively to keep low balls alive. Practice blocking with intent—taking away court space and communicating with your back-row defenders.'
        },
        {
          heading: 'Team Communication',
          content: 'Increase information sharing. Call out the setter\'s row (front/back) and identify hitter lineups before every serve.'
        }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced Level',
      description: 'Mental concentration and specialized mastery.',
      items: [
        {
          heading: 'Explosive Control',
          content: 'At this level, you must be both physically explosive and mentally calculating. Focus on sharpening your specific toolkit to match your playstyle.'
        },
        {
          heading: 'Reading the Game',
          content: 'Master reading the hitter\'s approach and arm swing. This allows for faster defensive reactions and more effective block positioning.'
        },
        {
          heading: 'Technical Refinement',
          content: 'Develop advanced variations like the top-spin jump serve and dive blocking. Learn to play faster by anticipating the ball\'s trajectory before contact.'
        }
      ]
    }
  ];

  return (
    <section id="quickHelp" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Coaching Guide</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Actionable advice tailored to your specific stage in the volleyball journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {levels.map((level) => (
            <div key={level.id} className="flex flex-col h-full bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-8 border-b border-gray-100 bg-gray-50/50">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{level.title}</h3>
                <p className="text-teal-600 font-medium text-sm">{level.description}</p>
              </div>
              <div className="p-8 flex-grow space-y-8">
                {level.items.map((item, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">{item.heading}</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickHelpSection;
