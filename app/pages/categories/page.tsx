import { categories } from "@/app/CategoryData";
import { ArrowLeft, LogIn, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Categories() {
  const Categories = categories;

  return (
    <div className="flex flex-col bg-neutral-50 h-screen">
      <header className="px-3 py-2 w-full bg-white text-black flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-2">
          <Link href={"/"}>
            <ArrowLeft />
          </Link>
          <h1 className="text-lg px-4 font-medium">All Categories</h1>
        </div>
        <div className="flex items-center gap-4">
          <Search />
          <ShoppingCart />
          <div className="bg-blue-100 rounded-full p-2 hover:bg-blue-500 ease-in duration-100 hover:*:text-white">
            <LogIn className="text-blue-500" />
          </div>
        </div>
      </header>
      <div className="flex">
        {categories.map((category,index)=>(
            <div className="w-30 bg-blue-50 text-sm text-black h-full flex flex-col">
          <div className="h-30 bg-blue-300 flex flex-col items-center justify-end p-2">
            
          </div>
        </div>
        ))}
        
        <div className="flex-1 flex flex-col text-black text-xs font-bold p-2">
          <h2 className="py-4 text-lg">Popular Store</h2>
          <div className="flex flex-wrap">
            <div className="flex flex-col w-30 text-center gap-2">
              <div className="size-30 bg-blue-400 rounded-xl"></div>
              <h3>Shop the winter collection</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
