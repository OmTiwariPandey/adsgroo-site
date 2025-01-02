"use client";

import { useState, useCallback } from 'react';
import {
  PROJECT_TYPES,
  TECHNOLOGIES,
  COMPLEXITY_LEVELS,
  FEATURES,
  BUDGET_PREFERENCES,
} from '@/lib/calculator/constants';

interface CalculatorParameters {
  projectType: string;
  technologies: string[];
  complexity: string;
  deadline: number;
  pages: number;
  features: string[];
  budget: string;
}

interface CostEstimate {
  min: number;
  max: number;
  confidence: number;
}

const initialParameters: CalculatorParameters = {
  projectType: '',
  technologies: [],
  complexity: 'basic',
  deadline: 4,
  pages: 1,
  features: [],
  budget: 'standard',
};

export function useCalculator() {
  const [parameters, setParameters] = useState<CalculatorParameters>(initialParameters);

  const calculateCost = useCallback((): CostEstimate => {
    if (!parameters.projectType) {
      return { min: 0, max: 0, confidence: 0 };
    }

    // Get base price from project type
    const basePrice = PROJECT_TYPES.find(p => p.id === parameters.projectType)?.basePrice || 0;

    // Calculate technology multiplier
    const techMultiplier = parameters.technologies.reduce((acc, tech) => {
      const multiplier = TECHNOLOGIES.find(t => t.id === tech)?.multiplier || 1;
      return acc * multiplier;
    }, 1);

    // Get complexity multiplier
    const complexityMultiplier = COMPLEXITY_LEVELS.find(c => c.id === parameters.complexity)?.multiplier || 1;

    // Calculate features cost
    const featuresPrice = parameters.features.reduce((acc, feature) => {
      const price = FEATURES.find(f => f.id === feature)?.price || 0;
      return acc + price;
    }, 0);

    // Get budget preference multiplier
    const budgetMultiplier = BUDGET_PREFERENCES.find(b => b.id === parameters.budget)?.multiplier || 1;

    // Calculate deadline urgency multiplier (shorter deadline = higher cost)
    const deadlineMultiplier = Math.max(1, 2 - (parameters.deadline / 12));

    // Calculate pages multiplier
    const pagesMultiplier = 1 + (parameters.pages - 1) * 0.1;

    // Calculate base cost
    const baseCost = basePrice * techMultiplier * complexityMultiplier * 
                    deadlineMultiplier * pagesMultiplier * budgetMultiplier + 
                    featuresPrice;

    // Add variance for min/max range
    const min = Math.round(baseCost * 0.9);
    const max = Math.round(baseCost * 1.1);

    // Calculate confidence based on completeness of information
    const confidence = calculateConfidence(parameters);

    return { min, max, confidence };
  }, [parameters]);

  const calculateConfidence = (params: CalculatorParameters): number => {
    let confidence = 0;
    if (params.projectType) confidence += 20;
    if (params.technologies.length > 0) confidence += 20;
    if (params.complexity) confidence += 20;
    if (params.features.length > 0) confidence += 20;
    if (params.budget) confidence += 20;
    return confidence;
  };

  const updateParameter = useCallback((key: keyof CalculatorParameters, value: any) => {
    setParameters(prev => ({ ...prev, [key]: value }));
  }, []);

  const resetCalculator = useCallback(() => {
    setParameters(initialParameters);
  }, []);

  return {
    parameters,
    estimate: calculateCost(),
    updateParameter,
    resetCalculator,
  };
}