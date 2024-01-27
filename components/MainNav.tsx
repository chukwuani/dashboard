"use client";

import Image from "next/image";
import { useState } from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SideBar from "./SideBar";
import Notification from "./Notification";
import ProfileBtn from "./ProfileBtn";

const MainNav = () => {
	const [data, setData] = useState("");

	const currentDate: Date = new Date();
	const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };

	const dateFormatter: Intl.DateTimeFormat = new Intl.DateTimeFormat("en-US", options);
	const formattedDate: string = dateFormatter.format(currentDate);

	return (
		<nav className="bg-[#FAFAFA] dark:bg-[#171717] max-w-full flex py-[18px] px-[20px] items-center justify-between border-b border-[#E5EAEF] sticky top-0 md:ml-20 z-50">
			<h1 className="text-[#26282C] dark:text-white text-[20px] font-semibold leading-7 max-md:hidden">
				Dashboard
			</h1>

			<Sheet>
				<SheetTrigger className="hidden max-md:flex">
					<svg
						stroke-width="1.5"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5">
						<path
							d="M3 5H11"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"></path>
						<path
							d="M3 12H16"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"></path>
						<path
							d="M3 19H21"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"></path>
					</svg>
				</SheetTrigger>

				<SheetContent
					side={"left"}
					className="border-none w-1/2 p-0">
					<SideBar />
				</SheetContent>
			</Sheet>

			<section className="flex items-center gap-5 max-lg:gap-3">
				<form
					autoComplete="off"
					className="flex h-12 pl-4 items-center rounded-[24px] border border-[#DADDDD] bg-white dark:bg-black overflow-hidden grow gap-2 ml-3 min-w-0 w-[349px] max-md:w-full"
					action="#"
					method="post">
					<label htmlFor="search">
						<Image
							src="/icons/search.svg"
							alt="Search"
							width={18}
							height={18}
						/>
						<p className="sr-only">Search</p>
					</label>

					<input
						value={data}
						onChange={(e) => setData(e.target.value)}
						className="border-none outline-none w-[inherit] min-w-0 bg-transparent placeholder:text-[#A3A3A3] placeholder:text-[16px] font-normal leading-6"
						autoCorrect="off"
						autoComplete="off"
						spellCheck="false"
						type="text"
						id="search"
						placeholder="Search..."
					/>
				</form>

				<section className="flex py-3 px-4 items-center justify-center gap-2 max-xl:hidden">
					<Image
						className="dark:invert"
						src="/icons/calendar.svg"
						alt="Calendar"
						title="Calendar"
						width={20}
						height={20}
					/>

					<p className="text-[#26282C] dark:text-white text-[14px] font-medium leading-[22px] text-nowrap">
						{formattedDate}
					</p>
				</section>

				<Notification />

				<ProfileBtn />
			</section>
		</nav>
	);
};

export default MainNav;
