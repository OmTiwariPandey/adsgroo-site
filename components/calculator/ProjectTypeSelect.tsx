"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { PROJECT_TYPES } from "@/lib/calculator/constants";

interface ProjectTypeSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ProjectTypeSelect({ value, onChange }: ProjectTypeSelectProps) {
  return (
    <div className="space-y-2">
      <Label>Project Type</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select project type" />
        </SelectTrigger>
        <SelectContent>
          {PROJECT_TYPES.map((type) => (
            <SelectItem key={type.id} value={type.id}>
              {type.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}