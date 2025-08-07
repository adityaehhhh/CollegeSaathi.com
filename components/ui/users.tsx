'use client';

import React, { useEffect, useState } from 'react';
import {
  motion,
  useAnimation,
  useMotionValue,
  animate,
  useMotionValueEvent,
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SIZE = 200; 
const STROKE_WIDTH = 18; 
const RADIUS = (SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

interface AnimatedRingProps {
  label: string;
  percentage: number;
  color: string;
}

const sanitizeId = (str: string) => str.toLowerCase().replace(/\s+/g, '-');

const AnimatedRing: React.FC<AnimatedRingProps> = ({
  label,
  percentage,
  color,
}) => {
  const controls = useAnimation();
  const count = useMotionValue(0);
  const [displayCount, setDisplayCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useMotionValueEvent(count, 'change', (latest) => {
    setDisplayCount(Math.round(latest));
  });

  useEffect(() => {
    if (inView) {
      const offset = CIRCUMFERENCE - (percentage / 100) * CIRCUMFERENCE;

      controls.start({
        strokeDashoffset: offset,
        transition: { duration: 2, ease: 'easeOut' },
      });

      animate(count, percentage, { duration: 2, ease: 'easeOut' });
    }
  }, [inView, controls, percentage, count]);

  const gradientId = `gradient-${sanitizeId(label)}`;

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center space-y-3"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="relative" style={{ width: SIZE, height: SIZE }}>
        <svg width={SIZE} height={SIZE}>
          
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            stroke="#1F2937"
            strokeWidth={STROKE_WIDTH}
            fill="transparent"
          />

          
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={color} />
              <stop offset="100%" stopColor={color} stopOpacity={0.2} />
            </linearGradient>
          </defs>

          <motion.circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            stroke={`url(#${gradientId})`}
            strokeWidth={STROKE_WIDTH}
            fill="transparent"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE}
            animate={controls}
            initial={{ strokeDashoffset: CIRCUMFERENCE }}
            strokeLinecap="round"
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold tracking-wide">
          {displayCount}%
        </div>
      </div>

      <p className="text-sm text-zinc-300 font-medium">{label}</p>
    </motion.div>
  );
};

export default AnimatedRing;
