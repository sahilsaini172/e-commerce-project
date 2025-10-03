import { Heart, Search, ShoppingBag } from "lucide-react";

export default function TopAppBar() {
  return (
    <header className="flex items-center justify-between text-white p-2 bg-white/5">
      <div></div>
      <nav className="flex items-center justify-center w-1/3 gap-4 p-2 *:p-2 font-medium">
        <a href="">New & Featured</a>
        <a href="">Men</a>
        <a href="">Women</a>
        <a href="">Kids</a>
        <a href="">Sales</a>
        <a href="">SNKRS</a>
      </nav>
      <div className="flex items-center gap-4 p-2 mr-8">
        <div className=" flex items-center p-2 bg-white/25 rounded-full gap-4">
          <Search size={24} />
          <input
            type="search"
            placeholder="Search"
            className="placeholder:text-white/75 text-white"
          />
        </div>
        <Heart />
        <ShoppingBag />
      </div>
    </header>
  );
}
