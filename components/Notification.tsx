import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from "next/image";

const Notification = () => {
	return (
		<Popover>
			<PopoverTrigger asChild>
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
			</PopoverTrigger>
			<PopoverContent className="bg-white dark:bg-black gap-3 flex flex-col mt-[10px]">
				<h3>Notifications</h3>

				<p className="text-sm text-[#737373] dark:text-[#A3A3A3]">
					Alerts about your store and account will show here
				</p>
			</PopoverContent>
		</Popover>
	);
};

export default Notification;
