"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export const CometCard = ({
  children = null,
  rotateDepth = 25,
  translateDepth = 30,
  className = "",
  autoAnimate = false,
  autoSpeed = 0.35,
  autoIntensity = 0.32,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const rafRef = useRef<number>(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 60, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 60, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [rotateDepth, -rotateDepth]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-rotateDepth, rotateDepth]);

  const translateX = useTransform(mouseX, [-0.5, 0.5], [-translateDepth, translateDepth]);
  const translateY = useTransform(mouseY, [-0.5, 0.5], [-translateDepth, translateDepth]);

  useEffect(() => {
    if (!autoAnimate || !containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [autoAnimate]);

  useEffect(() => {
    if (!autoAnimate || isHovering || !isInView) {
      cancelAnimationFrame(rafRef.current);
      if (!isHovering) {
        x.set(0);
        y.set(0);
      }
      return;
    }

    const loop = () => {
      const t = Date.now() / 1000 * autoSpeed;
      const xVal = Math.sin(t) * 0.6 + Math.sin(t * 1.8) * 0.4;
      const yVal = Math.cos(t * 0.7) * 0.5 + Math.cos(t * 2.1) * 0.3 + Math.sin(t * 0.4) * 0.2;
      x.set(xVal * autoIntensity);
      y.set(yVal * autoIntensity);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [autoAnimate, isHovering, isInView, autoSpeed, autoIntensity, x, y]);

  const handleMouseMove = (e: any) => {
    setIsHovering(true);
    const node = containerRef.current as any;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (!autoAnimate || !isInView) {
      x.set(0);
      y.set(0);
    }
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("relative", className)}
      style={{
        perspective: "1200px",
        rotateX,
        rotateY,
        x: translateX,
        y: translateY,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  );
};
