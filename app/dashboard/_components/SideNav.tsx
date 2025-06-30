"use client";

import { HistoryIcon, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import UsageTrack from "./UsageTrack";

export default function SideNav() {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: HistoryIcon,
      path: "/dashboard/history",
    },
    /*{
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },*/
    {
      name: "Setting",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];

  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className="h-screen p-5 relative shadow-sm bg-white border">
      <div className="flex justify-center">
        <Image src={"/logo.svg"} alt="logo" width={150} height={150} />
      </div>
      <hr className="my-6 border" />
      <div className="mt-3">
        {MenuList.map((menu, index) => (
          <Link href={menu.path} key={index}>
            <div
              className={`flex gap-2 mb-2 p-3 rounded-lg items-center cursor-pointer
                hover:bg-black hover:text-white
                ${path === menu.path ? "bg-black text-white" : ""}
              `}
            >
              <menu.icon className="h-6 w-6" />
              <h2 className="text-lg">{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-10 left-0">
         <UsageTrack/>
      </div>
    </div>
  );
}
