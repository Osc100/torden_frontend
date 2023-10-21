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
	labels: [
		"Lunes",
		"Martes",
		"Miércoles",
		"Jueves",
		"Viernes",
		"Sábado",
		"Domingo",
	],
	datasets: [
		{
			label: "Chats supervisados",
			data: [12, 19, 3, 5, 10, 12, 15],
			textColor: "white",
			backgroundColor: "rgba(69, 172, 175, 0.5)", // Color de fondo de las barras
			borderColor: "rgba(69, 172, 175, 0.5)", // Color del borde de las barras
			barThickness: 17,
			borderWidth: 1,
			borderRadius: 100,
			// Ancho del borde de las barras
		},
	],
};

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top" as const,
			labels: {
				color: "white",
			},
		},
	},
	scales: {
		y: {
			beginAtZero: true,
			ticks: {
				color: "white", // Cambia el color de las marcas de escala en el eje Y
			},
			grid: {
				color: "white",
			},
		},
		x: {
			grid: {
				color: "white",
			},
			ticks: {
				color: "white", // Cambia el color de las marcas de escala en el eje X
			},
		},
	},
};

function WeekBarChart() {
	return (
		<div className="px-5">
			<Bar data={data} options={options} height={100} />
		</div>
	);
}

export default WeekBarChart;
