"use client";
import Image from "next/image";
import React from "react";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const Charts = () => {
	const data = [
		{
			name: "Jan",
			amount: "$6.000",
			height: "22",
			ah: "35",
		},
		{
			name: "Feb",
			amount: "$21.000",
			height: "55",
			ah: "65",
		},
		{
			name: "Mar",
			amount: "$4.000",
			height: "15",
			ah: "30",
		},
		{
			name: "Apr",
			amount: "$29.000",
			height: "63",
			ah: "73",
		},
		{
			name: "May",
			amount: "$9.000",
			height: "30",
			ah: "43",
		},
		{
			name: "Jun",
			amount: "$38.000",
			height: "78",
			ah: "87",
		},
		{
			name: "Jul",
			amount: "$9.000",
			height: "30",
			ah: "43",
		},
		{
			name: "Aug",
			amount: "$21.000",
			height: "55",
			ah: "65",
		},
		{
			name: "Sep",
			amount: "$33.000",
			height: "75",
			ah: "85",
		},
		{
			name: "Oct",
			amount: "$4.000",
			height: "15",
			ah: "30",
		},
		{
			name: "Nov",
			amount: "$39.000",
			height: "80",
			ah: "88",
		},
		{
			name: "Dec",
			amount: "$31.000",
			height: "70",
			ah: "80",
		},
	];

	return (
		<section className="flex flex-col pt-4 pr-4 pb-4 pl-5 gap-5 rounded-[8px] bg-white dark:bg-black w-full h-[400px] overflow-hidden">
			<section className="flex items-center justify-between">
				<h3 className="text-[18px] font-semibold leading-[26px] text-[#26282C] dark:text-white">
					Sales Trend
				</h3>

				<section className="flex items-center justify-center gap-[10px]">
					<p className="text-[#3A3F51] dark:text-[#A3A3A3] text-[14px] font-medium leading-[22px] text-nowrap">
						Sort By:
					</p>

					<Select>
						<SelectTrigger className="flex items-center py-[6px] px-[12px] rounded-[20px] gap-[10px] bg-white dark:bg-black border border-[#E1DFDF] text-[#3A3F51] dark:text-white text-[12px] font-normal leading-[16px] h-8">
							<SelectValue placeholder="Weekly" />
						</SelectTrigger>
						<SelectContent className="bg-white dark:bg-black">
							<SelectItem value="weekly">Weekly</SelectItem>
							<SelectItem value="monthly">Monthly</SelectItem>
							<SelectItem value="yearly">Yearly</SelectItem>
						</SelectContent>
					</Select>
				</section>
			</section>

			<section className="overflow-x-scroll hide-scroll">
				<section className="flex items-start gap-6 h-full min-w-[700px]">
					<section className="flex flex-col gap-[30px] pb-[25px] justify-end opacity-50">
						<h6 className="text-[#525252] text-xs font-semibold dark:text-white">50.000</h6>

						<h6 className="text-[#525252] text-xs font-semibold dark:text-white">40.000</h6>

						<h6 className="text-[#525252] text-xs font-semibold dark:text-white">30.000</h6>

						<h6 className="text-[#525252] text-xs font-semibold dark:text-white">20.000</h6>

						<h6 className="text-[#525252] text-xs font-semibold dark:text-white">10.000</h6>

						<h6 className="text-[#525252] text-xs font-semibold dark:text-white">5.000</h6>

						<h6 className="text-[#525252] text-xs font-semibold dark:text-white">0</h6>
					</section>

					<section className="flex gap-5 items-end h-full w-[calc(100%-70px)] justify-between relative">
						<div className="absolute w-full h-full flex flex-col gap-[45px] pb-[25px]">
							<div className="w-full border border-dashed border-t border-[#EAEAEA] dark:border-white/20"></div>
							<div className="w-full border border-dashed border-t border-[#EAEAEA] dark:border-white/20"></div>
							<div className="w-full border border-dashed border-t border-[#EAEAEA] dark:border-white/20"></div>
							<div className="w-full border border-dashed border-t border-[#EAEAEA] dark:border-white/20"></div>
							<div className="w-full border border-dashed border-t border-[#EAEAEA] dark:border-white/20"></div>
							<div className="w-full border border-dashed border-t border-[#EAEAEA] dark:border-white/20"></div>
							<div className="w-full border border-dashed border-t border-[#EAEAEA] dark:border-white/20"></div>
						</div>

						{data.map((item, i) => (
							<div
								key={i}
								className="flex flex-col gap-3 z-10">
								<div className="h-[284px] flex items-end justify-center">
									<div
										className="peer w-[30px] bg-[rgba(52,202,165,0.10)] dark:bg-[rgba(52,202,165,0.30)] rounded-t-[20px] relative z-10 gradient"
										style={{ height: `${+item.height}%` }}
									/>

									<p
										style={{ bottom: `${+item.ah}%` }}
										className="bg-[#090C2C] rounded-[6px] absolute text-white text-[12px] font-medium leading-normal py-1 px-3 indicator peer-focus:!opacity-100">
										{item.amount}
									</p>
								</div>

								<h5 className="text-[#525252] dark:text-white opacity-50  text-sm leading-[22px] font-semibold">
									{item.name}
								</h5>
							</div>
						))}
					</section>
				</section>
			</section>
		</section>
	);
};

export default Charts;
