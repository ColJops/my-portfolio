import { motion } from "framer-motion";

const variants = {
  up: { opacity: 0, y: 60 },
  down: { opacity: 0, y: -60 },
  left: { opacity: 0, x: -60 },
  right: { opacity: 0, x: 60 },
  scale: { opacity: 0, scale: 0.92 },
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
}) {
  return (
    <motion.div
      initial={variants[direction] || variants.up}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.18,
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}