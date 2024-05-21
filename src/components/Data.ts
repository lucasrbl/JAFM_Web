import { ChartDataset } from "chart.js";

export interface dataTypes {
    labels: string[];
    datasets: ChartDataset<'bar'>[];

}

export const data: dataTypes = {
    labels: ["Rent", "Groceries", "Utilities", "Entertainment", "Transportation"],

    datasets: [
        {
            label: "Expenses",
            data: [1200, 300, 150, 180, 100],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
        },
    ],
};
