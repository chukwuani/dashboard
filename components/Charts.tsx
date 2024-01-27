"use client";
import React from "react";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import BarChart from "./BarChart";

const Charts = () => {
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
							<SelectItem
								className="text-sm"
								value="weekly">
								Weekly
							</SelectItem>

							<SelectItem
								className="text-sm"
								value="monthly">
								Monthly
							</SelectItem>

							<SelectItem
								className="text-sm"
								value="yearly">
								Yearly
							</SelectItem>
						</SelectContent>
					</Select>
				</section>
			</section>

			<BarChart />
		</section>
	);
};

export default Charts;
