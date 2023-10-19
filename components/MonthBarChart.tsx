"use client";
import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
);

const data = {
	labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
	datasets: [
		{
			label: "Chats supervisados",
			data: [12, 19, 3, 5],
			backgroundColor: "rgba(117, 183, 192, 0.5)", // Color de fondo de las barras
			borderColor: "rgba(75, 192, 192, 1)", // Color del borde de las barras
			borderWidth: 1, // Ancho del borde de las barras
		},
	],
};

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top" as const,
		},
	},
};

function MonthBarChart() {
	return (
		<div className="w-1/2 mx-auto">
			<Bar data={data} options={options} />
		</div>
	);
}

export default MonthBarChart;
