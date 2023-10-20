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
			backgroundColor: "rgba(69, 172, 175, 0.5)", // Color de fondo de las barras
			borderColor: "rgba(69, 172, 175, 0.5)", // Color del borde de las barras
			borderWidth: 1,
			barThickness: 17,
			borderRadius: 100, // Ancho del borde de las barras
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
		<div className="px-5">
			<Bar data={data} options={options} height={100} />
		</div>
	);
}

export default MonthBarChart;
