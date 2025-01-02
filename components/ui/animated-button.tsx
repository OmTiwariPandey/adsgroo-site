"use client";

import { motion } from "framer-motion";
import { Button } from "./button";
import { ButtonProps } from "@/components/ui/button";

export function AnimatedButton({ children, ...props }: ButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Button {...props}>
        {children}
      </Button>
    </motion.div>
  );
}