"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/ui/SearchBar";
import Corousal from "./components/Corousal";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  function handleSidebar() {
    setSidebarOpen(!sidebarOpen);
  }
  return (
    <div className="flex flex-col bg-neutral-50 h-screen">
      <Navbar sidebarState={sidebarOpen} onSidebarClick={handleSidebar} />
      <Sidebar sidebarState={sidebarOpen} onSidebarClick={handleSidebar} />
      <div className="p-2">
        <SearchBar />
      </div>
    </div>
  );
}
