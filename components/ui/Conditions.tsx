'use client';

const conditions = [
  {
    text: "Open to all students in Algerian universities (Algerian or international).",
  },
  {
    text: "Team size: 1 to 6 students per team.",
  },
  {
    text: "One team leader must register the project and submit all info.",
  },
  {
    text: "Submit project within 8 hours on Day 1 (code + design + executable).",
  },
  {
    text: "Pitch your project in 120 seconds on Day 2 if selected.",
  },
  {
    text: "Use any programming language or tools you prefer.",
  },
];

const Conditions = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">
            Participation Conditions
          </h2>
          <div className="w-full max-w-4xl space-y-6">
            {conditions.map((condition, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-gray-600 transition-colors"
              >
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="w-6 h-6 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-lg text-gray-300">{condition.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conditions; 