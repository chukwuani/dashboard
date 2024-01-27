"use client";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

const invoices = [
	{
		image: "/icons/marcus.svg",
		name: "Marcus Bergson",
		date: "Nov 15, 2023",
		totalAmount: "$80,000",
		paymentStatus: "Paid",
		invoice: "View",
	},
	{
		image: "/icons/jaydon.svg",
		name: "Jaydon Vaccano",
		date: "Nov 15, 2023",
		totalAmount: "$150,000",
		paymentStatus: "Refund",
		invoice: "View",
	},
	{
		image: "/icons/corey.svg",
		name: "Corey Schleifer",
		date: "Nov 14, 2023",
		totalAmount: "$87,000",
		paymentStatus: "Paid",
		invoice: "View",
	},
	{
		image: "/icons/cooper.svg",
		name: "Cooper Press",
		date: "Nov 14, 2023",
		totalAmount: "$100,000",
		paymentStatus: "Refund",
		invoice: "View",
	},
	{
		image: "/icons/phillip.svg",
		name: "Phillip Lubin",
		date: "Nov 13, 2023",
		totalAmount: "$78,000",
		paymentStatus: "Paid",
		invoice: "View",
	},
];

const UserTable = () => {
	return (
		<section className="grow w-full flex flex-col pt-4 pr-4 pb-4 pl-5 gap-5 rounded-[8px] bg-white h-full dark:bg-black">
			<section className="flex items-center justify-between">
				<h3 className="text-[18px] font-semibold leading-[26px] text-[#26282c] dark:text-white">
					Last Orders
				</h3>

				<button
					className="text-[#34CAA5] text-[18px] font-medium leading-[26px]"
					type="button">
					See All
				</button>
			</section>

			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="text-left text-[#9CA4AB] font-medium leading-6">Name</TableHead>
						<TableHead className="text-[#9CA4AB] font-medium leading-6">Date</TableHead>
						<TableHead className="text-[#9CA4AB] font-medium leading-6">Amount</TableHead>
						<TableHead className="text-[#9CA4AB] font-medium leading-6">Statues</TableHead>
						<TableHead className="text-[#9CA4AB] font-medium leading-6">Invoice</TableHead>
					</TableRow>
				</TableHeader>

				<TableBody>
					{invoices.map((invoice) => (
						<TableRow
							className="gap-5"
							key={invoice.invoice}>
							<TableCell className="flex items-center gap-[10px] text-[#3A3F51] leading-6 font-medium w-[216px] pl-0 dark:text-white">
								<Image
									src={invoice.image}
									width={32}
									height={32}
									alt={invoice.name}
								/>
								{invoice.name}
							</TableCell>

							<TableCell className="text-[#737373] dark:text-[#A3A3A3] leading-6 font-normal text-nowrap">
								{invoice.date}
							</TableCell>

							<TableCell className="text-[#0D062D] dark:text-white font-medium leading-6">
								{invoice.totalAmount}
							</TableCell>

							<TableCell
								className={cn(
									"font-normal leading-6 text-[#ED544E]",
									invoice.paymentStatus === "Paid" && "text-[#34CAA5]"
								)}>
								{invoice.paymentStatus}
							</TableCell>

							<TableCell>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button
											className="flex items-center gap-[6px] text-[#0D062D] dark:text-white text-[14px] font-normal leading-[22px] pr-0"
											variant="ghost">
											<Image
												className="dark:invert"
												src="/icons/document-download.svg"
												width={16}
												height={16}
												alt="Document"
											/>
											{invoice.invoice}
										</Button>
									</DropdownMenuTrigger>

									<DropdownMenuContent
										className="bg-white dark:bg-black"
										align="end">
										<DropdownMenuLabel>Actions</DropdownMenuLabel>
										<DropdownMenuItem
											onClick={() => navigator.clipboard.writeText(invoice.paymentStatus)}>
											Copy payment ID
										</DropdownMenuItem>

										<DropdownMenuItem>View customer</DropdownMenuItem>
										<DropdownMenuItem>View payment details</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</section>
	);
};

export default UserTable;
