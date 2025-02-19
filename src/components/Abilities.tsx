"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export default function Abilities() {
  return (
    <ChartContainer
      config={{
        level: {
          label: "Level",
        },
      }}
      className="mx-auto max-h-[250px] mt-6"
    >
      <RadarChart
        data={[
          { name: "Web development", level: 10 },
          { name: "Backend development", level: 8 },
          { name: "Mobile development", level: 6 },
          { name: "DevOps", level: 6 },
          { name: "Car engine repair", level: 0 },
          { name: "Being a cool dude", level: 10 },
        ]}
      >
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <PolarAngleAxis dataKey="name" />
        <PolarGrid />
        <Radar dataKey="level" fill="hsl(var(--secondary))" fillOpacity={0.6} />
      </RadarChart>
    </ChartContainer>
  );
}
