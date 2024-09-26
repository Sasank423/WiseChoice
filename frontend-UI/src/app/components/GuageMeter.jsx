'use client';

import { TrendingUp } from 'lucide-react';
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
// const chartData = [{ month: 'january', desktop: 1260, mobile: 80 }];

export function GaugeMeter({ value, label }) {
  // const totalVisitors = chartData[0].desktop + chartData[0].mobile;
  // const totalVisitors = chartData[0].desktop;

  const chartData = [{ month: 'january', mobile: 100 - value, score: value }];

  const chartConfig = {
    mobile: {
      label: 'Mobile',
      color: 'hsl(0 0% 100%)',
    },
    score: {
      label: '',
      color: 'hsl(276 43% 23%)',
    },
  };

  return (
    <Card className="flex flex-col h-fit outborder ">
      {/* <CardHeader className="items-center pb-0">
        <CardTitle className="text-lg">Goodness Score</CardTitle>
      </CardHeader> */}
      <CardContent className="flex justify-center items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-fit w-full max-w-[250px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={0}
            startAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {value}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          {label}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="score"
              stackId="a"
              cornerRadius={5}
              fill={value > 50 ? 'hsl(156, 59%, 24%)' : 'hsl(0, 72%, 50%)'}
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="mobile"
              fill="var(--color-mobile)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default GaugeMeter;
