"use client";

import { motion } from "framer-motion";
import CostCalculator from "./CostCalculator";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
};

export default function AnimatedCalculator() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-20"
    >
      <motion.div 
        variants={childVariants}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.h1 
            variants={childVariants}
            className="text-4xl font-bold mb-4"
          >
            Project Cost Calculator
          </motion.h1>
          <motion.p 
            variants={childVariants}
            className="text-muted-foreground"
          >
            Estimate the cost of your next project with our interactive calculator
          </motion.p>
        </div>
        <motion.div variants={childVariants}>
          <CostCalculator />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}