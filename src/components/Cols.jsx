import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';


const Cols = ({ animationDuration }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      skewY: [0, 12, 0], 
      transition: {
        duration: animationDuration || 5,
        ease: 'easeOut',
        loop: Infinity, 
        repeatDelay: 6, 
      },
    });
  }, [animationDuration, controls]);

  return (
    <motion.div
      className="hover:skew-y-12"
      animate={controls}
      style={{
        zIndex: 0,
        width: 105,
        height: 588,
        background:
          'linear-gradient(270deg,#000 0% ,rgba(0, 0, 0, 0.01) 100%)',
        boxShadow:
          '0px 2.399 4.798px 0px rgba(255, 255, 255, 0.16) inset',
        backdropFilter: 'blur(59.971099853515625px)',
      }}
    />
  );
};

const ColsContainer = () => {
  const [animationDurations, setAnimationDurations] = useState([]);

  useEffect(() => {
    
    const durations = Array(15)
      .fill(null)
      .map(() => Math.random() * (2 - 5) + 5);
    setAnimationDurations(durations);
  }, []);

  return (
    <>
      {animationDurations.map((duration, index) => (
        <Cols className=" animate-pulse duration-200" key={index} animationDuration={duration} />
      ))}
    </>
  );
};

export default ColsContainer;
