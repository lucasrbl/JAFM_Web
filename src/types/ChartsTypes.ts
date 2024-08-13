import { ChartDataset } from 'chart.js';

export interface BarTypes {
  labels: string[];
  datasets: ChartDataset<'bar'>[];
  progress: number[];
}

export interface PieTypes {
  labels: string[];
  datasets: ChartDataset<'pie'>[];
  progress: number[];
}
