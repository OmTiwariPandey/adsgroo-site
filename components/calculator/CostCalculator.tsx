"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedButton } from "@/components/ui/animated-button";
import ProjectTypeSelect from "./ProjectTypeSelect";
import TechnologySelect from "./TechnologySelect";
import ComplexitySelect from "./ComplexitySelect";
import DeadlineSelect from "./DeadlineSelect";
import PagesSelect from "./PagesSelect";
import FeaturesSelect from "./FeaturesSelect";
import BudgetSelect from "./BudgetSelect";
import CostSummary from "./CostSummary";
import { useCalculator } from "@/hooks/useCalculator";

const formSectionVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.3 }
  },
  exit: { 
    opacity: 0, 
    x: 20,
    transition: { duration: 0.2 }
  }
};

export default function CostCalculator() {
  const { estimate, parameters, updateParameter, resetCalculator } = useCalculator();

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Project Cost Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <AnimatePresence mode="wait">
          <motion.div
            key="project-type"
            variants={formSectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ProjectTypeSelect
              value={parameters.projectType}
              onChange={(value) => updateParameter('projectType', value)}
            />
          </motion.div>
          
          <motion.div
            key="technologies"
            variants={formSectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <TechnologySelect
              value={parameters.technologies}
              onChange={(value) => updateParameter('technologies', value)}
            />
          </motion.div>
          
          <motion.div
            key="complexity"
            variants={formSectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ComplexitySelect
              value={parameters.complexity}
              onChange={(value) => updateParameter('complexity', value)}
            />
          </motion.div>
          
          <motion.div
            key="deadline"
            variants={formSectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <DeadlineSelect
              value={parameters.deadline}
              onChange={(value) => updateParameter('deadline', value)}
            />
          </motion.div>
          
          <motion.div
            key="pages"
            variants={formSectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <PagesSelect
              value={parameters.pages}
              onChange={(value) => updateParameter('pages', value)}
            />
          </motion.div>
          
          <motion.div
            key="features"
            variants={formSectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <FeaturesSelect
              value={parameters.features}
              onChange={(value) => updateParameter('features', value)}
            />
          </motion.div>
          
          <motion.div
            key="budget"
            variants={formSectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <BudgetSelect
              value={parameters.budget}
              onChange={(value) => updateParameter('budget', value)}
            />
          </motion.div>
        </AnimatePresence>

        <CostSummary estimate={estimate} parameters={parameters} />
      </CardContent>
      <CardFooter className="flex justify-between">
        <AnimatedButton 
          variant="outline" 
          onClick={resetCalculator}
        >
          Clear All
        </AnimatedButton>
        <AnimatedButton>
          Get Detailed Quote
        </AnimatedButton>
      </CardFooter>
    </Card>
  );
}