"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from '@gravity-ui/icons';
import { SiWhatsapp } from "react-icons/si";
import { LuMessageSquareMore } from "react-icons/lu";

import weddingImg from "@/assets/Wod-1.jpeg"; 
import birthImg from "@/assets/Wod-2.jpeg";
import deathImg from "@/assets/Wod-3.jpeg";
import TesuBox from "@/assets/tsi.jpg";
import { FaRegStar } from "react-icons/fa";
import SliderLogo from "./SliderLogo";

const contentData = {
  wedding: {
    tabTitle: "Wedding",
    quote: "“বিবাহ শুধুমাত্র একটি চুক্তি নয়— এটি দুটি মনের এক চিরন্তন বন্ধন।”",
    image: weddingImg,
    badgeColor: "border-pink-500/30 text-pink-600 bg-white/80 shadow-pink-200/50",
  },
  birth: {
    tabTitle: "Birth",
    quote: "“একটি শিশুর জন্ম মানেই হলো নতুন আশা এবং ভালোবাসার সূচনা।”",
    image: birthImg,
    badgeColor: "border-purple-500/30 text-purple-600 bg-white/80 shadow-purple-200/50",
  },
  death: {
    tabTitle: "Death",
    quote: "“এই নামটার সাথে জড়িয়ে আছে একটা পুরো জীবন এবং স্মৃতি।”",
    image: deathImg, 
    badgeColor: "border-amber-500/30 text-amber-700 bg-white/80 shadow-amber-200/50",
  },
  MobileStand: {
    tabTitle: "Mobile Stand",
    quote: "“আপনার নিত্যদিনের ব্যবহারের ফোনটি থাকুক একটি প্রিমিয়াম কাঠে খোদাই করা স্ট্যান্ডে।”",
    image: deathImg, // Custom assets import name change thakle apply kore niben
    badgeColor: "border-indigo-500/30 text-indigo-700 bg-white/80 shadow-indigo-200/50",
  },
  TesuBox: {
    tabTitle: "Tissue Box",
    quote: "“প্রিমিয়াম ডিজাইনের টিস্যু বক্স যা আপনার ড্রয়িং রুম বা ডেস্কে আনবেভি আভিজাত্যের ছোঁয়া।”",
    image: TesuBox, // Custom assets import name change thakle apply kore niben
    badgeColor: "border-emerald-500/30 text-emerald-700 bg-white/80 shadow-emerald-200/50",
  },
  ChabiRing: {
    tabTitle: "Keychain",
    quote: "“আপনার সবচেয়ে প্রিয় চাবিগুলো সুরক্ষিত থাকুক আপনার নিজের নামের খোদাই করা রিং-এ।”",
    image: deathImg, 
    badgeColor: "border-rose-500/30 text-rose-700 bg-white/80 shadow-rose-200/50",
  },
};

const HeroPage = ({ selectedTab, setSelectedTab, setIsModalOpen }) => {
  const data = contentData[selectedTab] || contentData.wedding;

  useEffect(() => {
    const incrementViewCount = async () => {
      try {
        const response = await fetch("https://pixelwood-server.vercel.app/views/increment", {
          method: "POST",
          cache: "no-store", 
          headers: {
            "Content-Type": "application/json"
          }
        });

        if (!response.ok) {
          const errorHtmlText = await response.text();
          console.error(`Backend Returned HTML/Error instead of JSON (${response.status}):`, errorHtmlText);
          return;
        }

        const resData = await response.json();
        console.log("View count incremented successfully:", resData);
      } catch (error) {
        console.error("Fetch Exception Error:", error);
      }
    };

    incrementViewCount();
  }, []);

  // 🛠️ Updated to Support All 6 Tabs in Navigation Bar Grid
  const tabs = [
    { key: "wedding", title: "Wedding", icon: weddingImg },
    { key: "birth", title: "Birth", icon: birthImg },
    { key: "death", title: "Death", icon: deathImg },
    { key: "MobileStand", title: "Stand", icon: deathImg },
    { key: "TesuBox", title: "Tissue", icon: TesuBox },
    { key: "ChabiRing", title: "Keychain", icon: deathImg },
  ];

  return (
    <div className="text-slate-800 p-4 md:py-16 md:px-20 font-sans flex flex-col items-center justify-center min-h-screen selection:bg-purple-200">
      
      {/* Header Section with 3D Depth */}
      <div className="text-center mb-10 z-10">
        <p className="text-[11px] tracking-[0.5em] text-white uppercase font-black drop-shadow-sm opacity-90">PIXELWOOD PREMIUM</p>
        <h1 className="text-4xl md:text-6xl font-serif mt-2 text-white tracking-tight drop-shadow-[0_10px_20px_rgba(0,0,0,0.2)] font-bold">স্মৃতি চিরন্তন</h1>
        <div className="mt-3 bg-white/10 backdrop-blur-md p-2 rounded-xl inline-block border border-white/20 shadow-xl overflow-hidden">
          <SliderLogo />
        </div>
      </div>

      {/* Main 3D Floating Glass Card */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl w-full bg-white/70 backdrop-blur-2xl border-2 border-white/50 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] rounded-[40px] overflow-hidden grid md:grid-cols-2 gap-0 group/main relative"
      >
        
        {/* Left Side: Soft 3D Visual Preview */}
        <div className="relative p-8 md:p-12 bg-gradient-to-br from-white/40 to-white/10 flex flex-col items-center justify-center min-h-[440px] md:min-h-[520px] overflow-hidden border-b md:border-b-0 md:border-r border-white/40">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex flex-col items-center w-full z-10"
            >
              <p className="text-center text-slate-800 font-semibold text-lg md:text-xl mb-8 px-6 leading-relaxed italic drop-shadow-sm max-w-md">
                {data.quote}
              </p>
              
              {/* Image Frame with 3D Pop Layer */}
              <div className="relative w-full max-w-[320px] md:max-w-[550px] group/img perspective-1000">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover/img:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white p-3 rounded-2xl border border-white shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all duration-500 transform group-hover/img:-rotate-2 group-hover/img:-translate-y-2 group-hover/img:shadow-[0_30px_50px_rgba(0,0,0,0.25)]">
                  <Image 
                    src={data.image} 
                    alt="Product Preview" 
                    priority 
                    className="w-full object-cover rounded-xl shadow-inner border border-slate-100" 
                    style={{ height: "auto" }}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dynamic Floating Badge */}
          <div className="absolute bottom-6 left-6 z-10">
            <div className={`flex items-center gap-2 border px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider shadow-[0_8px_20px_rgba(0,0,0,0.06)] border-white/60 ${data.badgeColor}`}>
              <span><FaRegStar className="animate-pulse text-xs" /></span> {data.tabTitle}
            </div>
          </div>
        </div>

        {/* Right Side: Frosted Glass Panel with 3D Controls */}
        <div className="p-8 md:p-12 flex flex-col justify-center bg-white/30 backdrop-blur-2xl relative">
          
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3 tracking-tight drop-shadow-sm">আপনার বিশেষ দিনটি খোদাই করুন</h2>
            <p className="text-slate-700 text-xs md:text-sm leading-relaxed font-medium opacity-90">
              প্রিমিয়াম লেজার-এনগ্রেভড কার্ড এবং কাঠের প্রোডাক্টের উপর আপনার জীবনের সেরা মুহূর্তগুলো আজীবন সংরক্ষণ করুন।
            </p>
          </div>

          {/* Design Selection (3D Push Tabs) */}
          <div className="mb-8">
            <label className="text-purple-900 text-xs font-black uppercase tracking-widest mb-3 block opacity-80">
              ডিজাইন/প্রোডাক্ট নির্বাচন করুন
            </label>
            <div className="grid grid-cols-3 gap-3">
              {tabs.map((tab) => {
                const isActive = selectedTab === tab.key;
                return (
                  <motion.button
                    key={tab.key}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedTab(tab.key)}
                    className={`flex flex-col items-center justify-center p-2.5 rounded-2xl border-2 transition-all duration-300 ${
                      isActive
                        ? "border-purple-600 bg-white shadow-[0_15px_25px_-5px_rgba(147,51,234,0.15)] translate-y-[-2px]"
                        : "border-white/40 bg-white/40 hover:bg-white hover:border-white shadow-sm"
                    }`}
                  >
                    <div className={`w-10 h-10 flex items-center justify-center rounded-full border mb-1.5 overflow-hidden transition-all duration-300 ${
                      isActive 
                        ? "bg-purple-50 border-purple-500 shadow-inner scale-105" 
                        : "bg-white/80 border-slate-200/60 grayscale group-hover:grayscale-0"
                    }`}> 
                      <Image 
                        src={tab.icon} 
                        alt={tab.title} 
                        width={24} 
                        height={24} 
                        className="object-contain" 
                        style={{ height: "auto" }}
                      />
                    </div>
                    <span className={`text-[9px] font-black uppercase tracking-wider text-center line-clamp-1 ${
                      isActive ? "text-purple-700" : "text-slate-600"
                    }`}>
                      {tab.title}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Pricing Card */}
          <div className="flex justify-between items-center p-4 bg-white/80 rounded-2xl border border-white mb-8 shadow-[0_8px_25px_rgba(0,0,0,0.04)]">
            <span className="text-slate-500 text-xs font-black uppercase tracking-widest">মূল্য</span>
            <div className="text-right">
              <span className="text-3xl font-black text-purple-700 tracking-tight drop-shadow-sm">999.00 BDT</span>
            </div>
          </div>

          {/* Primary Action Button */}
          <button 
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-black h-14 rounded-2xl text-base flex items-center justify-center gap-2 shadow-[0_15px_30px_-5px_rgba(147,51,234,0.4)] transition-all duration-300 active:scale-[0.98] active:shadow-md mb-4 group/btn transform hover:-translate-y-0.5"
          >
            অর্ডার করুন 
            <ArrowRight className="text-xl group-hover/btn:translate-x-1.5 transition-transform duration-300" />
          </button>

          {/* Interaction Channels */}
          <div className="grid grid-cols-2 gap-3">
            <button type="button" className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 py-3 rounded-xl text-xs font-bold border border-slate-200/80 hover:border-slate-300 transition-all duration-300 shadow-sm active:scale-95">
              <LuMessageSquareMore className="text-base text-[#0084FF]"/> Messenger
            </button>
            <button type="button" className="flex items-center justify-center gap-2 bg-white hover:bg-emerald-50 text-emerald-700 py-3 rounded-xl text-xs font-bold border border-emerald-200/60 hover:border-emerald-300 transition-all duration-300 shadow-sm active:scale-95">
              <SiWhatsapp className="text-base text-[#25D366]" /> WhatsApp
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroPage;