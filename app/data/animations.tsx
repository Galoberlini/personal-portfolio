'use client';

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

const cursorVariants = {
    blinking: {
      opacity: [0, 0, 1, 1],
      transition: {
        duration: 1,
        repeat: 3,
        repeatDelay: 0,
        ease: "linear",
        times: [0, 0.5, 0.5, 1]
      }
    }
  };
 
function CursorBlinker() {
    const [visible, setVisible] = useState(true);
    
    return (
        
      <motion.div
        aria-hidden="true"
        variants={cursorVariants}
        onAnimationComplete={() => setVisible(false)}
        animate="blinking"
        className={`inline-block h-[60px] w-[1px] translate-y-1 bg-secondary ${visible ? "" : "invisible"}`}
      />
    );
  }


  export default function TextAnim() {
    const baseText = "Galo Berlini" as string;
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
      baseText.slice(0, latest)
    );
  
    useEffect(() => {
      const controls = animate(count, baseText.length, {
        type: "tween",
        duration: 0.5,
        delay: 2,
        ease: "easeInOut",
      });
      return controls.stop;
    }, [count]);
  
    return (
      <h1 className="text-text text-center text-6xl lg:text-8xl opacity-90">
        <motion.span>{displayText}</motion.span>
        <CursorBlinker/>
      </h1>
    );
  }