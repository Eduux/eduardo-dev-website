"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";

interface ParallaxWrapperProps {
  children: ReactNode;
  offset?: number;
}

export default function ParallaxWrapper({
  children,
  offset = 50,
}: ParallaxWrapperProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, offset]);

  return <motion.div style={{ y }}>{children}</motion.div>;
}
