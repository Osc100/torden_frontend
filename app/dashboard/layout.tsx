import DashboardFooter from "@/components/DashboardFooter";
import DashboardSideBar from "@/components/DashboardSideBar";

export default function DashboardLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="flex h-screen">
			<DashboardSideBar />
			<main className="flex flex-col w-full h-screen bg-[url('../public/fondo_dashboard.jpg')]">
				{children}

				<div className="flex-grow" />

				<DashboardFooter />
			</main>
		</div>
	);
}
