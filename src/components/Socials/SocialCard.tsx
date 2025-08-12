import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

function SocialCard({
  link,
  userName,
  name,
  className,
  plateFormName,
  plateFormNameColor = "text-white/90", 
  plateFormIcon: PlatformIcon,
}: {
  link: string;
  userName: string;
  name:string;
  plateFormName: string;
  className?: string;
  plateFormNameColor?: string;
  plateFormIcon: IconType;
}) {
  return (
    <Link href={link}
      className={`rounded-2xl w-full  relative p-8 bg-black/10 backdrop-blur-xs border border-zinc-800  z-10 overflow-hidden group  duration-300  ${className}`}
    >
      <div className={`text-4xl  font-bold mb-5 ${plateFormNameColor}`}>
        {plateFormName}
      </div>
      <div>
      <div className="text-2xl font-bold text-white/70">{name}</div>
      <code>{userName}</code>
      </div>
      <PlatformIcon
        className="absolute -bottom-7 -right-4 -rotate-12 group-hover:-bottom-4 group-hover:-right-3 duration-300 text-white/10"
        size={105}
      />
    </Link>
  );
}

export default SocialCard;
