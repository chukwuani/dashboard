import Platform from "@/components/Platform";
import Trends from "@/components/Trends";
import UserTable from "@/components/UserTable";
import Charts from "../components/Charts";

export default function Home() {
	return (
		<main className="flex max-xl:flex-col gap-5 p-5 md:ml-20">
			<section className="flex flex-col items-start justify-end w-full chart-wrapper gap-5 h-full">
				<Charts />
				<UserTable />
			</section>

			<section className="flex flex-col items-start justify-center w-auto gap-5">
				<Trends />
				<Platform />
			</section>
		</main>
	);
}
