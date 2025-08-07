'use client';

import React, { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  useMotionTemplate,
} from 'framer-motion';

interface FeatureCardProps {
  title: string;
  subtitle: string;
  description: string;
  code?: string;         // Now optional
  imageSrc?: string;     // New optional prop
  buttonText?: string;
  onClick?: () => void;
  blurStrength?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  subtitle,
  description,
  code,
  imageSrc,
  buttonText = 'Try it Yourself',
  onClick,
  blurStrength = 'backdrop-blur-md',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const xPercent = useTransform(mouseX, (v) => v * 100);
  const yPercent = useTransform(mouseY, (v) => v * 100);

  const glow = useMotionTemplate`
    radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(255, 200, 0, 0.4), transparent 60%)
  `;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const bounds = cardRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const x = (e.clientX - bounds.left) / bounds.width;
    const y = (e.clientY - bounds.top) / bounds.height;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 150, damping: 20 }}
        className={`relative group mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-between 
          rounded-3xl overflow-hidden shadow-2xl p-8 sm:p-10 lg:p-14 
          border border-orange-400/10 bg-black/30 text-white ${blurStrength}`}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-0"
          style={{ background: glow }}
        />

        {/* Text section */}
        <div className="lg:w-1/2 w-full relative z-10 text-left">
          <h3 className="text-sm font-semibold text-orange-400 mb-2">{subtitle}</h3>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{title}</h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
            {description}
          </p>
          <button
            onClick={onClick}
            className="mt-6 px-6 py-2 bg-indigo-500 text-white font-medium rounded-full hover:bg-indigo-600 transition"
          >
            {buttonText}
          </button>
        </div>

        {/* Right section: Image OR Code */}
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0 lg:ml-12 relative z-10">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt="Feature Visual"
              className="w-full max-w-md mx-auto lg:mx-0 object-contain aspect-video rounded-xl shadow-lg"
            />
          ) : code ? (
            <div className="bg-black/80 text-sm sm:text-base text-left text-orange-300 rounded-xl p-6 
              font-mono border border-zinc-700 shadow-inner max-h-[300px] overflow-hidden">
              <pre className="whitespace-pre-wrap break-words overflow-hidden">
                {code}
              </pre>
            </div>
          ) : null}
        </div>
      </motion.div>
    </div>
  );
};

export default FeatureCard;
