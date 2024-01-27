import Image from "next/image";

const Trends = () => {
	return (
		<section className="trends min-h-[400px] max-xl:w-full">
			<section className="flex flex-col bg-white dark:bg-black border border-[#EDF2F7] rounded-[14px] items-center justify-center p-4 w-[239px] max-xl:w-full gap-[10px]">
				<section className="flex items-center justify-between w-full">
					<span className="size-10 flex items-center justify-center border border-[#E6E6E6] dark:border-[#262626] rounded-full">
						<Image
							src="/icons/box-tick.svg"
							width={24}
							height={24}
							alt="box"
						/>
					</span>

					<Image
						src="/icons/trend-up.svg"
						width={104}
						height={32}
						alt="box"
					/>
				</section>

				<section className="flex flex-col gap-[5px] w-full">
					<h3 className="text-[#898989] dark:text-[#A3A3A3] text-[18px] font-medium leading-[26px]">
						Total Order
					</h3>
					<p className="text-[#3A3F51] dark:text-white text-[24px] font-semibold leading-[26px]">
						350
					</p>
				</section>

				<section className="w-full flex items-center justify-between gap-1">
					<span className="flex py-1 px-2 gap-1 items-center justify-center rounded-full bg-[rgba(52,202,165,0.12)]">
						<Image
							src="/icons/trending-up.svg"
							alt=""
							width={12}
							height={12}
						/>
						<p className="text-[#34CAA5] text-[12px] font-medium leading-4">23,5%</p>
					</span>
					<p className="text-[#606060] dark:text-[#A3A3A3] text-[14px] font-normal">
						vs. previous month
					</p>
				</section>
			</section>

			<section className="flex flex-col bg-white dark:bg-black border border-[#EDF2F7] rounded-[14px] items-center justify-center p-4 w-[239px] max-xl:w-full gap-[10px]">
				<section className="flex items-center justify-between w-full">
					<span className="size-10 flex items-center justify-center border border-[#E6E6E6] dark:border-[#262626] rounded-full">
						<Image
							src="/icons/3d-rotate.svg"
							width={24}
							height={24}
							alt="Rotate"
						/>
					</span>

					<Image
						src="/icons/trend-down.svg"
						width={104}
						height={32}
						alt="box"
					/>
				</section>

				<section className="flex flex-col gap-[5px] w-full">
					<h3 className="text-[#898989] dark:text-[#A3A3A3] text-[18px] font-medium leading-[26px]">
						Total Refund
					</h3>
					<p className="text-[#3A3F51] dark:text-white text-[24px] font-semibold leading-[26px]">
						270
					</p>
				</section>

				<section className="w-full flex items-center justify-between gap-1">
					<span className="flex py-1 px-2 gap-1 items-center justify-center rounded-full bg-[rgba(237,84,78,0.12)]">
						<Image
							src="/icons/trending-down.svg"
							alt=""
							width={12}
							height={12}
						/>
						<p className="text-[#ED544E] text-[12px] font-medium leading-4">23,5%</p>
					</span>
					<p className="text-[#606060] dark:text-[#A3A3A3] text-[14px] font-normal">
						vs. previous month
					</p>
				</section>
			</section>

			<section className="flex flex-col bg-white dark:bg-black border border-[#EDF2F7] rounded-[14px] items-center justify-center p-4 w-[239px] max-xl:w-full gap-[10px]">
				<section className="flex items-center justify-between w-full">
					<span className="size-10 flex items-center justify-center border border-[#E6E6E6] dark:border-[#262626] rounded-full">
						<Image
							src="/icons/shopping-cart.svg"
							width={24}
							height={24}
							alt="Cart"
						/>
					</span>

					<Image
						src="/icons/trend-down.svg"
						width={104}
						height={32}
						alt="box"
					/>
				</section>

				<section className="flex flex-col gap-[5px] w-full">
					<h3 className="text-[#898989] dark:text-[#A3A3A3] text-[18px] font-medium leading-[26px]">
						Average Sales
					</h3>
					<p className="text-[#3A3F51] dark:text-white text-[24px] font-semibold leading-[26px]">
						1567
					</p>
				</section>

				<section className="w-full flex items-center justify-between gap-1">
					<span className="flex py-1 px-2 gap-1 items-center justify-center rounded-full bg-[rgba(237,84,78,0.12)]">
						<Image
							src="/icons/trending-down.svg"
							alt=""
							width={12}
							height={12}
						/>
						<p className="text-[#ED544E] text-[12px] font-medium leading-4">23,5%</p>
					</span>
					<p className="text-[#606060] dark:text-[#A3A3A3] text-[14px] font-normal">
						vs. previous month
					</p>
				</section>
			</section>

			<section className="flex flex-col bg-white dark:bg-black border border-[#EDF2F7] rounded-[14px] items-center justify-center p-4 w-[239px] max-xl:w-full gap-[10px]">
				<section className="flex items-center justify-between w-full">
					<span className="size-10 flex items-center justify-center border border-[#E6E6E6] dark:border-[#262626] rounded-full">
						<Image
							src="/icons/coin.svg"
							width={24}
							height={24}
							alt="Coin"
						/>
					</span>

					<Image
						src="/icons/trend-up.svg"
						width={104}
						height={32}
						alt="box"
					/>
				</section>

				<section className="flex flex-col gap-[5px] w-full">
					<h3 className="text-[#898989] dark:text-[#A3A3A3] text-[18px] font-medium leading-[26px]">
						Total Income
					</h3>
					<p className="text-[#3A3F51] dark:text-white text-[24px] font-semibold leading-[26px]">
						$350.000
					</p>
				</section>

				<section className="w-full flex items-center justify-between gap-1">
					<span className="flex py-1 px-2 gap-1 items-center justify-center rounded-full bg-[rgba(52,202,165,0.12)]">
						<Image
							src="/icons/trending-up.svg"
							alt=""
							width={12}
							height={12}
						/>
						<p className="text-[#34CAA5] text-[12px] font-medium leading-4">23,5%</p>
					</span>
					<p className="text-[#606060] dark:text-[#A3A3A3] text-[14px] font-normal">
						vs. previous month
					</p>
				</section>
			</section>
		</section>
	);
};

export default Trends;
