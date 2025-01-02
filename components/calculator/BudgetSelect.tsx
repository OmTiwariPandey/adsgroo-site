"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { BUDGET_PREFERENCES } from "@/lib/calculator/constants";
import { Card } from "@/components/ui/card";

interface BudgetSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export default function BudgetSelect({ value, onChange }: BudgetSelectProps) {
  return (
    <div className="space-y-2">
      <Label>Budget Preference</Label>
      <RadioGroup
        value={value}
        onValueChange={onChange}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2"
      >
        {BUDGET_PREFERENCES.map((budget) => (
          <Card
            key={budget.id}
            className={`relative p-4 cursor-pointer transition-colors ${
              value === budget.id ? 'border-primary' : ''
            }`}
            onClick={() => onChange(budget.id)}
          >
            <RadioGroupItem
              value={budget.id}
              id={budget.id}
              className="absolute right-4 top-4"
            />
            <div className="space-y-1">
              <Label htmlFor={budget.id} className="font-semibold">
                {budget.name}
              </Label>
              <p className="text-sm text-muted-foreground">
                {budget.id === 'economy' && 'Basic features, cost-effective'}
                {budget.id === 'standard' && 'Essential features, balanced cost'}
                {budget.id === 'premium' && 'Advanced features, premium quality'}
              </p>
            </div>
          </Card>
        ))}
      </RadioGroup>
    </div>
  );
}