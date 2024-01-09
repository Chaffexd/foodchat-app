import Image from "next/image";
import { formattedTimestamp } from "@/app/helpers/Date";

type ResponseBubbleProps = {
  text?: string;
  sender?: string;
  isDelivered?: boolean;
};

const ResponseBubble = ({
  text = "Welcome to the world of finally knowing what to eat. Let's plan our meal.",
  sender = "Foodchat Assistant",
  isDelivered = false,
}: ResponseBubbleProps) => {
  return (
    <div className="flex items-start gap-2.5 mb-6">
      <Image
        className="w-8 h-8 rounded-full"
        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
        alt="Jese image"
        width={20}
        height={20}
      />
      <div className="flex flex-col w-full max-w-[320px] leading-1.5">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            {sender}
          </span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            {formattedTimestamp}
          </span>
        </div>
        <p className="text-sm font-normal py-2 dark:text-white bg-slate-200 rounded-md text-black p-2">
          {text}
        </p>
        {isDelivered && (
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Delivered
          </span>
        )}
      </div>
    </div>
  );
};

export default ResponseBubble;
