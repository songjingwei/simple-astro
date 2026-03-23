"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const AnimatedTooltip = ({ items, autoPlay = false, autoInterval = 2500 }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [autoIndex, setAutoIndex] = useState(null);
  const hoveringRef = useRef(false);
  const idxRef = useRef(0);
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

  const lastItemIndex = items.length - 1;

  useEffect(() => {
    if (!autoPlay || items.length <= 1) return;
    idxRef.current = 0;
    setAutoIndex(items[0].id);

    const timer = setInterval(() => {
      if (hoveringRef.current) return;
      idxRef.current = (idxRef.current + 1) % lastItemIndex;
      setAutoIndex(items[idxRef.current].id);
    }, autoInterval);

    return () => clearInterval(timer);
  }, [autoPlay, autoInterval, items.length]);

  const handleMouseEnter = (id) => {
    hoveringRef.current = true;
    setHoveredIndex(id);
  };

  const handleMouseLeave = () => {
    hoveringRef.current = false;
    setHoveredIndex(null);
  };

  const activeIndex = hoveredIndex ?? autoIndex;

  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  const activeItem = items.find(item => item.id === activeIndex);
  const activeFrameRef = useRef({});

  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
      <AnimatePresence mode="wait">
        {activeItem && activeItem.designation && (
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, y: 30, scale: 0.5, rotate: -12 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              rotate: 0,
              transition: { type: "spring", stiffness: 180, damping: 8 },
            }}
            exit={{ opacity: 0, y: -15, scale: 0.7, rotate: 8, transition: { duration: 0.15 } }}
            style={{
              position: "absolute",
              bottom: "calc(100% + 10px)",
              left: activeFrameRef.current[activeItem.id] ?? 0,
              width: 0,
              display: "flex",
              justifyContent: "center",
              overflow: "visible",
              zIndex: 50,
              pointerEvents: "none",
            }}
          >
            <div style={{ whiteSpace: "nowrap" }} className="animated-tooltip-popup">
              <div className="animated-tooltip-name">{activeItem.name}</div>
              <div className="animated-tooltip-designation">{activeItem.designation}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div
            className={`game-cover-frame${isLast ? " game-count-badge" : ""}`}
            key={item.id}
            ref={el => {
              if (el && !isLast) {
                const rect = el.offsetLeft + el.offsetWidth / 2;
                activeFrameRef.current[item.id] = rect;
              }
            }}
            onMouseEnter={() => !isLast && handleMouseEnter(item.id)}
            onMouseLeave={() => !isLast && handleMouseLeave()}
          >
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
    </div>
  );
};
