"use client";
import React, { useState, useEffect } from 'react';

export function Timer({ durationInMinutes = 15 }) {
  const [timeLeft, setTimeLeft] = useState(durationInMinutes * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-amber-100 text-amber-800 py-2 px-4 rounded-lg font-mono text-lg md:text-xl font-bold border border-amber-200 inline-flex items-center gap-2 shadow-sm">
      <span className="text-xs md:text-sm uppercase font-sans tracking-tight font-black">Oferta expira em:</span>
      {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
    </div>
  );
}
