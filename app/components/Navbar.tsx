import { LogIn, Menu, ShoppingCart } from "lucide-react";

export default function Navbar({
  sidebarState,
  onSidebarClick,
}: {
  sidebarState: boolean;
  onSidebarClick: Function;
}) {
  return (
    <header className="px-3 py-2 w-full bg-white text-black flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Menu onClick={() => onSidebarClick()} />
        <h1 className="text-xl px-4 font-medium">
          <span className="text-blue-500 font-black">Blue</span>Cart
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <ShoppingCart />
        <div className="bg-blue-100 rounded-full p-2 hover:bg-blue-500 ease-in duration-100 hover:*:text-white">
          <LogIn className="text-blue-500" />
        </div>
      </div>
    </header>
  );
}
