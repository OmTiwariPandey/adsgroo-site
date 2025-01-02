"use client";

import { Badge } from "@/components/ui/badge";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { TECHNOLOGIES } from "@/lib/calculator/constants";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface TechnologySelectProps {
  value: string[];
  onChange: (value: string[]) => void;
}

export default function TechnologySelect({ value, onChange }: TechnologySelectProps) {
  const [open, setOpen] = useState(false);

  const handleSelect = (techId: string) => {
    onChange(
      value.includes(techId)
        ? value.filter((t) => t !== techId)
        : [...value, techId]
    );
    // Don't close the popover after selection
  };

  return (
    <div className="space-y-2">
      <Label>Technologies</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full justify-start h-auto min-h-[2.5rem] py-2">
            {value.length > 0 ? (
              <div className="flex flex-wrap gap-1">
                {value.map((tech) => (
                  <Badge key={tech} variant="secondary" className="mr-1">
                    {TECHNOLOGIES.find((t) => t.id === tech)?.name}
                  </Badge>
                ))}
              </div>
            ) : (
              "Select technologies"
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[400px] p-0" align="start">
          <Command>
            <CommandInput placeholder="Search technologies..." />
            <CommandList>
              <CommandEmpty>No technology found.</CommandEmpty>
              <CommandGroup>
                {TECHNOLOGIES.map((tech) => (
                  <CommandItem
                    key={tech.id}
                    onSelect={() => handleSelect(tech.id)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value.includes(tech.id) ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {tech.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {value.length > 0 && (
        <p className="text-sm text-muted-foreground">
          {value.length} {value.length === 1 ? 'technology' : 'technologies'} selected
        </p>
      )}
    </div>
  );
}