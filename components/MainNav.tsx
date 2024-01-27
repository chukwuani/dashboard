"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import SideBar from "./SideBar";

const MainNav = () => {
	const [data, setData] = useState("");

	return (
		<nav className="bg-[#FAFAFA] dark:bg-[#171717] max-w-full flex py-[18px] px-[20px] items-center justify-between border-b border-[#E5EAEF] sticky top-0 md:ml-20 z-50">
			<h1 className="text-[#26282C] dark:text-white text-[20px] font-semibold leading-7 max-md:hidden">
				Dashboard
			</h1>

			<Sheet>
				<SheetTrigger className="hidden max-md:flex">
					<Image
						src={"/icons/logo.svg"}
						width={40}
						height={40}
						alt="Logo"
						title="Homepage"
					/>
				</SheetTrigger>

				<SheetContent
					side={"left"}
					className="border-none w-auto">
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
						className="min-w-0 bg-transparent"
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
						November 15, 2023
					</p>
				</section>

				<button
					className="flex p-[9px] justify-center items-center rounded-[27px] border border-[#DADDDD]"
					type="button">
					<Image
						className="max-w-none dark:invert"
						src="/icons/bell.svg"
						alt="Bell"
						title="Notification"
						width={20}
						height={20}
					/>
				</button>

				<button
					className="flex py-[6px] px-[8px] max-lg:p-0 justify-center items-center rounded-[28px] border border-[#DADDDD] max-lg:border-none"
					type="button">
					<Image
						className="mr-2 max-lg:m-0 max-lg:w-[38px]"
						src="/icons/avatar.svg"
						alt="Justin's Avatar"
						width={38}
						height={38}
					/>

					<span className="max-lg:hidden">
						<p className="text-[#26282C] dark:text-white font-normal">Justin Bergson</p>
						<p className="text-[#787486] dark:text-[#A3A3A3] text-[14px] font-normal">
							Justin@gmail.com
						</p>
					</span>

					<Image
						className="ml-3 max-lg:hidden dark:invert"
						src="/icons/chevron-down.svg"
						alt="Down Chevron"
						width={20}
						height={20}
					/>
				</button>
			</section>
		</nav>
	);
};

export default MainNav;
