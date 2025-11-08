import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex items-center sticky gap-2 p-4 rounded-xl bg-white shadow-sm">
      <Search className="text-blue-500" />
      <input
        type="search"
        name=""
        id=""
        className="flex-1 ml-2 text-black placeholder:text-neutral-400 focus:outline-0"
        placeholder="Search for products"
      />
    </div>
  );
}
