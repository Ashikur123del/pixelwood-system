"use client";
import Sidebar from "@/components/Sidebar";
import React, { useState, useEffect, useCallback } from "react";
import { MdMenu, MdLogout } from "react-icons/md"; 

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [totalOrders, setTotalOrders] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false); 
      } else {
        setIsSidebarOpen(true);  
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const loadCount = useCallback(async () => {
    try {
      // ⚠️ এখানে আপনার নতুন ব্যাক-এন্ড সার্ভারের লাইভ লিংকটি বসিয়ে দিন
      const res = await fetch("https://pixelwood-server.vercel.app/orders", { cache: "no-store" });
      const data = await res.json();
      if (Array.isArray(data)) setTotalOrders(data.length);
    } catch (err) {
      console.error("Layout count load error:", err);
    }
  }, []);

  useEffect(() => { 
    loadCount(); 
  }, [loadCount]); 

  const handleLogout = () => {
    document.cookie = "isLoggedIn=; path=/; max-age=0";
    window.location.href = "/login"; 
  };

  return (
    <div className="flex h-screen bg-[#030d17] text-slate-200 overflow-hidden font-sans relative">
      
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300" 
          onClick={() => setIsSidebarOpen(false)} 
        />
      )}

      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} totalOrders={totalOrders} />

      <div className="flex-1 flex flex-col overflow-hidden w-full min-w-0 transition-all duration-300">
        
        {/* হেডার সেকশন */}
        <header className="h-14 border-b border-slate-800/60 bg-[#071322]/50 flex items-center justify-between px-4 md:px-6 flex-shrink-0 z-30">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/50 transition-colors focus:outline-none"
              aria-label="Toggle Sidebar"
            >
              <MdMenu size={24} />
            </button>
            
            <h1 className="text-sm font-bold text-slate-400 tracking-wide pl-1">Pixelwood</h1>
          </div>

          {/* ডানপাশে সুন্দর লগআউট বাটন */}
          <div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-xl bg-red-950/40 border border-red-900/40 text-red-400 hover:bg-red-900/30 hover:text-red-300 transition-all duration-200 cursor-pointer"
            >
              <MdLogout size={16} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-5 md:p-6 custom-scrollbar bg-[#030d17]">
          {children}
        </main>
      </div>
    </div>
  );
}