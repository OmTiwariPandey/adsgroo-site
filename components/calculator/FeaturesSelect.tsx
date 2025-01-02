"use client";

import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { FEATURES } from "@/lib/calculator/constants";

interface FeaturesSelectProps {
  value: string[];
  onChange: (value: string[]) => void;
}

export default function FeaturesSelect({ value, onChange }: FeaturesSelectProps) {
  const handleFeatureToggle = (featureId: string) => {
    if (value.includes(featureId)) {
      onChange(value.filter(id => id !== featureId));
    } else {
      onChange([...value, featureId]);
    }
  };

  return (
    <div className="space-y-2">
      <Label>Additional Features</Label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        {FEATURES.map((feature) => (
          <div key={feature.id} className="flex items-center space-x-2">
            <Checkbox
              id={feature.id}
              checked={value.includes(feature.id)}
              onCheckedChange={() => handleFeatureToggle(feature.id)}
            />
            <Label htmlFor={feature.id} className="cursor-pointer">
              {feature.name}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}