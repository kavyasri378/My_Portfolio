import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';

const CustomCursor = () => {
  const { x, y, isHovering } = useMousePosition();
  const [isHidden, setIsHidden] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 220, mass: 0.6 };
  const followerX = useSpring(cursorX, springConfig);
  const followerY = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (x !== -100 && y !== -100) {
      cursorX.set(x);
      cursorY.set(y);
      setIsHidden(false);
    }
  }, [x, y, cursorX, cursorY]);

  // Hide custom cursor on mobile touch devices
  useEffect(() => {
    const handleTouchStart = () => setIsHidden(true);
    window.addEventListener('touchstart', handleTouchStart);
    return () => window.removeEventListener('touchstart', handleTouchStart);
  }, []);

  const backgroundGlow = useMotionTemplate`radial-gradient(600px at ${followerX}px ${followerY}px, rgba(124, 58, 237, 0.08) 0%, rgba(37, 99, 235, 0.04) 40%, transparent 80%)`;

  if (isHidden) return null;

  return (
    <>
      {/* Background ambient light spotlight */}
      <motion.div
        className="hidden md:block fixed inset-0 pointer-events-none z-10"
        style={{ background: backgroundGlow }}
      />

      {/* Actual cursor dots */}
      <div className={isHovering ? 'cursor-hovering' : ''}>
        {/* Fine pointer center dot */}
        <motion.div
          className="cursor-dot hidden md:block"
          style={{
            left: cursorX,
            top: cursorY,
          }}
        />
        {/* Trailing glow circle */}
        <motion.div
          className="cursor-follower hidden md:block"
          style={{
            left: followerX,
            top: followerY,
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
