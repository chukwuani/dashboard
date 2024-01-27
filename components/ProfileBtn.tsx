import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const ProfileBtn = () => {
	return (
		<Popover>
			<PopoverTrigger asChild>
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
			</PopoverTrigger>

			<PopoverContent className="bg-white dark:bg-black mt-[10px]">
				<section className="gap-3 flex flex-col">
					<a
						className="text-sm"
						href="/">
						<span className="email-wrapper">
							<p>Justin Bergson</p>

							<p className="text-[#737373] dark:text-[#A3A3A3]">Justin@gmail.com</p>
						</span>
					</a>

					<a
						className="text-sm"
						href="/">
						Help Center
					</a>

					<a
						className="text-sm"
						href="/">
						Changelog
					</a>

					<a
						className="text-sm"
						href="/">
						Community forums
					</a>

					<a
						className="text-sm"
						href="/">
						Manage account
					</a>

					<a
						className="text-sm"
						href="/">
						Log out
					</a>
				</section>
			</PopoverContent>
		</Popover>
	);
};

export default ProfileBtn;
