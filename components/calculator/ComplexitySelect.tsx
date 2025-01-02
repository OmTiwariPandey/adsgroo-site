"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { COMPLEXITY_LEVELS } from "@/lib/calculator/constants";

interface ComplexitySelectProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ComplexitySelect({ value, onChange }: ComplexitySelectProps) {
  return (
    <div className="space-y-2">
      <Label>Project Complexity</Label>
      <RadioGroup
        value={value}
        onValueChange={onChange}
        className="flex space-x-4"
      >
        {COMPLEXITY_LEVELS.map((level) => (
          <div key={level.id} className="flex items-center space-x-2">
            <RadioGroupItem value={level.id} id={level.id} />
            <Label htmlFor={level.id}>{level.name}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}