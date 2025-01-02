"use client";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";

interface PagesSelectProps {
  value: number;
  onChange: (value: number) => void;
}

export default function PagesSelect({ value, onChange }: PagesSelectProps) {
  return (
    <div className="space-y-2">
      <Label>Number of Pages</Label>
      <div className="flex items-center space-x-4">
        <div className="flex-1">
          <Slider
            value={[value]}
            onValueChange={(values) => onChange(values[0])}
            min={1}
            max={50}
            step={1}
            className="mt-2"
          />
        </div>
        <Input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-20"
          min={1}
          max={50}
        />
      </div>
      <p className="text-sm text-muted-foreground mt-1">
        {value} {value === 1 ? 'page' : 'pages'}
      </p>
    </div>
  );
}