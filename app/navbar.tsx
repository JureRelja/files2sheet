import Image from "next/image";
import Button from "./button";

export default function Navbar() {
  return (
    <div className="flex h-full justify-between align-middle items-center ">
      <Image
        src="/logo.svg"
        alt="Files2Sheet Logo"
        width={200}
        height={24}
        priority
      />

      <div className="flex gap-6 justify-center  items-center h-full">
        <a
          href="#features"
          className="text-white font-medium hover:text-accent transition-all-ease-in-out duration-100"
        >
          FEATURES
        </a>
        <a
          href="#pricing"
          className="text-white font-medium hover:text-accent transition-all-ease-in-out duration-100"
        >
          PRICING
        </a>
        <a
          href="#faq"
          className="text-white font-medium hover:text-accent transition-all-ease-in-out duration-100"
        >
          ABOUT
        </a>
        <Button empty />
      </div>
    </div>
  );
}
