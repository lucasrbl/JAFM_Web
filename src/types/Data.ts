import { ChartDataset } from "chart.js";

export interface dataTypes {
    labels: string[];
    datasets: ChartDataset<'bar'>[];
    progress: number[];
}
