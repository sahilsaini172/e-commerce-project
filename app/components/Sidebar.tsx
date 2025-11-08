"use client";
import { Languages, Logs } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar({
  sidebarState,
  onSidebarClick,
}: {
  sidebarState: boolean;
  onSidebarClick: Function;
}) {
  return (
    <div
      className={`flex size-full absolute z-50 transition-all ${
        sidebarState ? "translate-0" : "-translate-x-full"
      } duration-200 ease-in-out `}
    >
      <aside className="flex flex-col bg-neutral-50 text-black w-[250px] h-full">
        <header className="bg-blue-500 flex items-center px-2 py-4 text-white font-bold">
          <h2>
            LogIn <span className="font-normal">&</span> SignUp
          </h2>
        </header>
        <SidebarContent sidebarItems={sidebarItems} />
      </aside>
      <div
        className={`${
          sidebarState ? "bg-black/25" : "bg-transparent"
        } backdrop-blur-xs z-50 flex-1`}
        onClick={() => onSidebarClick()}
      ></div>
    </div>
  );
}

const sidebarItems = [
  {
    id: 1,
    title: "All Categories",
    icon: <Logs size={16} />,
    route: "/pages/categories",
  },
  {
    id: 2,
    title: "Choose Language",
    icon: <Languages size={16} />,
    route: "/pages/language",
  },
];

interface SidebarItem {
  id: number;
  title: string;
  icon?: React.ReactElement;
  route: string;
}

interface SidebarContentProps {
  sidebarItems: SidebarItem[];
}

function SidebarContent({ sidebarItems }: SidebarContentProps) {
  return (
    <div className="flex flex-col bg-neutral-50 text-neutral-900">
      {sidebarItems.map((item) => {
        return (
          <Link href={item.route}>
            <div
              className="flex p-3 items-center hover:bg-blue-50 hover:text-blue-700 ease-in duration-100 gap-4"
              key={item.id}
            >
              {item.icon} <span>{item.title}</span>
            </div>
            <span className="w-full h-px bg-black/10"></span>
          </Link>
        );
      })}
    </div>
  );
}
