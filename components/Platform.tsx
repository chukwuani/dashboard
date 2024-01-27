const Platform = () => {
	return (
		<section className="flex w-full max-xl:grow flex-col pt-4 pr-4 pb-8 pl-5 gap-5 rounded-[8px] bg-white dark:bg-black">
			<section className="flex items-center justify-between">
				<h3 className="text-[18px] font-semibold leading-[26px] text-[#26282c] dark:text-white">
					Top Platform
				</h3>

				<button
					className="text-[#34CAA5] text-[18px] font-medium leading-[26px]"
					type="button">
					See All
				</button>
			</section>

			<section className="flex max-xl:w-full flex-col items-start gap-5">
				<section className="flex flex-col w-full gap-5">
					<label
						className="text-[#22242C] dark:text-white text-[18px] font-semibold leading-[26px]"
						htmlFor="book">
						Book Bazaar
					</label>

					<progress
						id="book"
						className="w-full progress-one"
						value={50}
						max={100}
					/>

					<section className="flex items-center justify-between">
						<p className="text-[18px] font-normal leading-[26px] text-[#525252] dark:text-[#A3A3A3]">
							{" "}
							$2,500,000
						</p>
						<p className="text-[#525252] dark:text-[#A3A3A3] text-[18px] font-normal leading-[26px]">
							+15%
						</p>
					</section>
				</section>

				<section className="flex flex-col w-full gap-5">
					<label
						className="text-[#22242C] dark:text-white text-[18px] font-semibold leading-[26px]"
						htmlFor="aisle">
						Artisan Aisle
					</label>

					<progress
						id="aisle"
						className="w-full progress-two"
						value={40}
						max={100}
					/>

					<section className="flex items-center justify-between">
						<p className="text-[18px] font-normal leading-[26px] text-[#525252] dark:text-[#A3A3A3]">
							{" "}
							$1,800,000
						</p>
						<p className="text-[#525252] dark:text-[#A3A3A3] text-[18px] font-normal leading-[26px]">
							+10%
						</p>
					</section>
				</section>

				<section className="flex flex-col w-full gap-5">
					<label
						className="text-[#22242C] dark:text-white text-[18px] font-semibold leading-[26px]"
						htmlFor="toy">
						Toy Troop
					</label>

					<progress
						id="toy"
						className="w-full progress-three"
						value={25}
						max={100}
					/>

					<section className="flex items-center justify-between">
						<p className="text-[18px] font-normal leading-[26px] text-[#525252] dark:text-[#A3A3A3]">
							{" "}
							$1,200,000
						</p>
						<p className="text-[#525252] dark:text-[#A3A3A3] text-[18px] font-normal leading-[26px]">
							+8%
						</p>
					</section>
				</section>

				<section className="flex flex-col w-full gap-5">
					<label
						className="text-[#22242C] dark:text-white text-[18px] font-semibold leading-[26px]"
						htmlFor="store">
						XStore
					</label>

					<progress
						id="store"
						className="w-full progress-four"
						value={25}
						max={100}
					/>

					<section className="flex items-center justify-between">
						<p className="text-[18px] font-normal leading-[26px] text-[#525252] dark:text-[#A3A3A3]">
							{" "}
							$600,000
						</p>
						<p className="text-[#525252] dark:text-[#A3A3A3] text-[18px] font-normal leading-[26px]">
							+5%
						</p>
					</section>
				</section>
			</section>
		</section>
	);
};

export default Platform;
