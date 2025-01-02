"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface CostSummaryProps {
  estimate: {
    min: number;
    max: number;
    confidence: number;
  };
  parameters: any;
}

export default function CostSummary({ estimate, parameters }: CostSummaryProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="bg-primary/5">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Estimated Cost Range</h3>
              <p className="text-3xl font-bold text-primary">
                {formatCurrency(estimate.min)} - {formatCurrency(estimate.max)}
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Estimate Confidence</span>
                <span>{estimate.confidence}%</span>
              </div>
              <Progress value={estimate.confidence} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}