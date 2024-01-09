import { formattedTimestamp } from "@/app/helpers/Date";
import Image from "next/image";

type InitiatorProps = {
  text?: string;
  sender?: string;
  isDelivered?: boolean;
};

const InitiatorBubble = ({ text, sender, isDelivered = false }: InitiatorProps) => {
  return (
    <div className="flex items-start gap-2.5 mb-2">
      <div className="flex flex-col w-full max-w-[320px] leading-1.5">
        <div className="flex justify-end items-center space-x-2 ltr:space-x-reverse">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            Me
          </span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            {formattedTimestamp}
          </span>
        </div>
        <p className="text-sm font-normal py-2 text-gray-900 dark:text-white">
          {text}
        </p>
        {isDelivered && (
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Delivered
          </span>
        )}
      </div>
      <Image
        className="w-8 h-8 rounded-full"
        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
        alt="Jese image"
        width={20}
        height={20}
      />
    </div>
  );
};

export default InitiatorBubble;
