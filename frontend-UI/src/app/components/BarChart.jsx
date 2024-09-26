'use client';
import React, { useState, useEffect } from 'react';
import { TrendingUp } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
  CardHeader,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
const chartConfig = {
  value: {
    label: 'Value',
    color: 'hsl(var(--chart-2))',
  },
};

const Barchart = ({counts}) => {
  const chartData = [
    { index: 0, rating: 'Positive', value: counts[0] },
    { index: 1, rating: 'Negative', value: counts[1] },
    { index: 2, rating: 'Neutural', value: counts[2] },
  ];
  return (
    <div className="h-full max-h-[15vh] bg-transparent">
      <Card className="bg-transparent border-none shadow-none h-full">
        <CardHeader>
          <CardTitle className="text_gradient">Review Analysis</CardTitle>
        </CardHeader>
        <div className="h-full border-none">
          {/* {isLoading ? (
            <div className="flex items-end h-full gap-4"></div>
          ) : ( */}
          <ChartContainer className="w-[40ch] h-full" config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={chartData}
              margin={{
                top: 20,
              }}
              // animationDelay={10000}
              animationDuration={1000} // Animation duration in milliseconds
              animationEasing="ease-in"
            >
              {/* <CartesianGrid vertical={false} /> */}
              <XAxis
                dataKey="rating"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="value" fill="hsl(156, 59%, 24%)" radius={8}>
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-black"
                  fontSize={12}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
          {/* )} */}
        </div>
      </Card>
    </div>
  );
};

export default Barchart;
