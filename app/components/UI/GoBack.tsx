import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

const GoBackHome = () => {
    
  return (
    <Link href="/">
      <button className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full font-semibold mt-10 cursor-pointer hover:bg-gray-800 hover:text-gray-200 transition-all duration-300">
        <ArrowLeftIcon className="w-5 h-5" />
        Back to Home
      </button>
    </Link>
  );
};

export default GoBackHome;
