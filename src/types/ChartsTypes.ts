import { ChartDataset } from 'chart.js';

export type BarTypes = {
  labels: string[];
  datasets: ChartDataset<'bar'>[];
  progress: number[];
};

export type PieTypes = {
  labels: string[];
  datasets: ChartDataset<'pie'>[];
  progress: number[];
};
