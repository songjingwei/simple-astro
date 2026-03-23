"use client";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const AnimatedTooltip = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div
            className={`game-cover-frame${isLast ? " game-count-badge" : ""}`}
            key={item.id}
            onMouseEnter={() => !isLast && setHoveredIndex(item.id)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence mode="popLayout">
              {hoveredIndex === item.id && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.6 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 10,
                    },
                  }}
                  exit={{ opacity: 0, y: 20, scale: 0.6 }}
                  style={{
                    translateX: translateX,
                    rotate: rotate,
                    whiteSpace: "nowrap",
                  }}
                  className="animated-tooltip-popup"
                >
                  <div className="animated-tooltip-name">{item.name}</div>
                  <div className="animated-tooltip-designation">
                    {item.designation}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            {isLast ? (
              <div className="game-count-inner">
                <span className="game-count-text">{item.name}</span>
              </div>
            ) : (
              <img
                onMouseMove={handleMouseMove}
                className="game-cover"
                src={item.image}
                alt={item.name}
              />
            )}
          </div>
        );
      })}
    </>
  );
};
