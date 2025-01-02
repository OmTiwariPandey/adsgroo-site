"use client";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface DeadlineSelectProps {
  value: number;
  onChange: (value: number) => void;
}

export default function DeadlineSelect({ value, onChange }: DeadlineSelectProps) {
  return (
    <div className="space-y-2">
      <Label>Project Timeline (weeks)</Label>
      <div className="pt-2">
        <Slider
          value={[value]}
          onValueChange={(values) => onChange(values[0])}
          min={1}
          max={52}
          step={1}
        />
        <div className="mt-2 text-sm text-muted-foreground">
          {value} {value === 1 ? 'week' : 'weeks'}
        </div>
      </div>
    </div>
  );
}