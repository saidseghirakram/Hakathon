'use client';

import { useEffect, useState } from 'react';

const Timer = () => {
  const [time, setTime] = useState({
    date: '',
    hours: '',
    minutes: '',
    seconds: '',
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime({
        date: now.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        hours: now.getHours().toString().padStart(2, '0'),
        minutes: now.getMinutes().toString().padStart(2, '0'),
        seconds: now.getSeconds().toString().padStart(2, '0'),
      });
    };

    // Update immediately
    updateTime();

    // Update every second
    const interval = setInterval(updateTime, 1000);

    // Cleanup
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">
            Current Time
          </h2>
          <div className="text-2xl md:text-3xl mb-4 text-center text-gray-300">
            {time.date}
          </div>
          <div className="flex items-center justify-center space-x-4 md:space-x-8">
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-6xl font-bold">{time.hours}</span>
              <span className="text-sm md:text-base text-gray-300">Hours</span>
            </div>
            <span className="text-4xl md:text-6xl font-bold">:</span>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-6xl font-bold">{time.minutes}</span>
              <span className="text-sm md:text-base text-gray-300">Minutes</span>
            </div>
            <span className="text-4xl md:text-6xl font-bold">:</span>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-6xl font-bold">{time.seconds}</span>
              <span className="text-sm md:text-base text-gray-300">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer; 