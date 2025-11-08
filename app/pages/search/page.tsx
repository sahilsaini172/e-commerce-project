"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Search() {
  return (
    <div className="h-screen w-full flex flex-col bg-neutral-50">
      <header className="flex items-center bg-white p-4 ">
        <Link href={'/'}><ArrowLeft className="text-black" /></Link>
        <input
          type="search"
          name=""
          id=""
          className="flex-1 h-full px-2 focus:outline-0 text-neutral-900 placeholder:text-neutral-400"
          placeholder="Search for Products, Brands and more"
        />
      </header>
      <Items />
    </div>
  );
}

function Items() {
  const data = [
    "mobiles",
    "shoes",
    "t shirts",
    "laptops",
    "watches",
    "tv",
    "sarees",
    "headphones",
    "bluetooth",
    "fridge",
    "bedsheet",
    "water bottle",
  ];

  return (
    <div className="flex flex-col text-black text-sm p-3">
      <h2>Discover More</h2>
      <div className="flex flex-wrap">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex p-2 hover:bg-blue-50 ease-in duration-75 shadow-xs w-fit bg-white m-1 rounded-xs text-center text-blue-500"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
