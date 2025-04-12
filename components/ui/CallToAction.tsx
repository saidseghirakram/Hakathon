'use client';

const CallToAction = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          {/* Subtle text in background */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 text-gray-800/20 text-sm">
            (Need an unfair advantage?)
          </div>
          
          {/* Main content */}
          <div className="text-center space-y-12">
            <h2 className="text-5xl md:text-8xl font-bold tracking-tight">
              LET'S MAKE
              <br />
              IT HAPPEN
            </h2>
            
            <div>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors duration-200 transform hover:scale-105">
                BOOK A CALL →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction; 