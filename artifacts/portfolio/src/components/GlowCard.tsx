import { motion } from "framer-motion";
import type { Transition, Variants, TargetAndTransition, VariantLabels } from "framer-motion";
import React from "react";

type GlowCardProps = {
  children: React.ReactNode;
  className?: string;
  initial?: TargetAndTransition | VariantLabels | boolean;
  animate?: TargetAndTransition | VariantLabels | boolean;
  whileInView?: TargetAndTransition | VariantLabels;
  viewport?: { once?: boolean; margin?: string; amount?: number | "some" | "all" };
  transition?: Transition;
  custom?: unknown;
  variants?: Variants;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export function GlowCard({
  children,
  className = "",
  initial,
  animate,
  whileInView,
  viewport,
  transition,
  custom,
  variants,
  style,
  onClick,
}: GlowCardProps) {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      custom={custom}
      variants={variants}
      style={style}
      onClick={onClick}
      whileHover={{
        y: -5,
        boxShadow:
          "0 0 0 1px rgba(201,169,110,0.25), 0 24px 56px rgba(0,0,0,0.5), 0 0 80px rgba(201,169,110,0.08)",
        transition: { type: "spring", stiffness: 300, damping: 22 },
      }}
    >
      {children}
    </motion.div>
  );
}
