"use client";

import React from "react";
import { Card } from "@heroui/react";
import { IoColorPaletteOutline } from "react-icons/io5"; 
import { HiOutlineLightBulb } from "react-icons/hi";   
import { GiOakLeaf } from "react-icons/gi";        
import { TbTruckDelivery } from "react-icons/tb";     
import OrderModal from "./OrderModal";
import { ArrowRight } from "@gravity-ui/icons";

const FeaturesWithAbout = ({ selectedTab, isModalOpen, setIsModalOpen }) => {
  const features = [
    {
      title: "কাস্টম ডিজাইন",
      description: "আপনার তথ্য অনুযায়ী ইউনিক ডিজাইন",
      icon: <IoColorPaletteOutline size={24} />,
    },
    {
      title: "লেজার এনগ্রেভিং",
      description: "দীর্ঘস্থায়ী ও নিখুঁত খোদাই",
      icon: <HiOutlineLightBulb size={24} />,
    },
    {
      title: "প্রিমিয়াম কাঠ",
      description: "উচ্চ মানের কাঠ ব্যবহার",
      icon: <GiOakLeaf size={24} />,
    },
    {
      title: "সেফ ডেলিভারি",
      description: "দেশের যেকোনো স্থানে",
      icon: <TbTruckDelivery size={24} />,
    },
  ];

  return (
    <section className="bg-transparent py-16 px-4 md:px-10 flex flex-col items-center max-w-6xl mx-auto selection:bg-purple-200">
      
      {/* Header Section with Elegant Underline */}
      <div className="text-center mb-12">
        <h2 className="text-white text-3xl md:text-4xl font-black mb-3 tracking-tight drop-shadow-md">
          কেন স্মৃতি স্মরণিকা আলাদা?
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto rounded-full opacity-80"></div>
      </div>
      
      {/* 3D Glass Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full mb-16 perspective-1000">
        {features.map((item, index) => (
          <Card
            key={index}
            className="bg-white/30 backdrop-blur-2xl border-2 border-white/50 p-6 flex flex-col items-center text-center
              hover:bg-white/50 hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] 
              transition-all duration-500 ease-out group rounded-3xl"
          >
            {/* 3D Icon Container */}
            <div className="mb-4 p-3.5 bg-white/80 rounded-2xl text-purple-700 shadow-[0_8px_20px_rgba(0,0,0,0.05)] border border-white group-hover:bg-gradient-to-tr group-hover:from-purple-600 group-hover:to-pink-600 group-hover:text-white group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
              {item.icon}
            </div>
            <h3 className="text-slate-900 text-lg font-black mb-2 tracking-tight">{item.title}</h3>
            <p className="text-slate-700 text-[13px] leading-relaxed font-medium opacity-90">{item.description}</p>
          </Card>
        ))}
      </div>

      {/* About Section (Elegant Frosted Glass Box) */}
      <div className="max-w-5xl w-full mb-14 relative">
        <Card className="bg-white/40 backdrop-blur-3xl border-2 border-white/50 p-8 md:p-14 text-center shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-[32px] overflow-hidden">
          {/* Subtle Glow Accent Top bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"></div>
          
          <h2 className="text-3xl md:text-5xl font-serif mt-2 tracking-tight font-black mb-6">
            <span className="text-purple-800 drop-shadow-sm">Pixelwood</span> <span className="text-slate-900 opacity-90 font-sans">সম্পর্কে</span>
          </h2>
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <p className="text-purple-900 text-lg md:text-xl font-bold italic drop-shadow-sm">
              “স্মৃতি শুধু মনে রাখার জন্য নয়, বরং স্পর্শ করার জন্য।”
            </p>
            <p className="text-slate-800 text-sm md:text-base leading-relaxed font-semibold opacity-85">
              আমরা প্রিমিয়াম লেজার এনগ্রেভড কাঠের উপর আপনার জীবনের সবচেয়ে মূল্যবান মুহূর্তগুলো নিখুঁতভাবে তুলে ধরি।
            </p>
          </div>
        </Card>
      </div>

      {/* 3D Action Button */}
      <div className="w-full max-w-xs z-10">
        <button 
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-black h-14 rounded-2xl text-base flex items-center justify-center gap-2 shadow-[0_15px_30px_-5px_rgba(147,51,234,0.4)] transition-all duration-300 active:scale-[0.98] transform hover:-translate-y-0.5 group"
        >
          {selectedTab === "wedding" && "Wedding অর্ডার দিন"}
          {selectedTab === "birth" && "Birth অর্ডার দিন"}
          {selectedTab === "death" && "Death অর্ডার দিন"}
          {!["wedding", "birth", "death"].includes(selectedTab) && "অর্ডার দিন"}
          
          <ArrowRight className="text-xl group-hover:translate-x-1.5 transition-transform duration-300" />
        </button>
      </div>

      {/* Order Modal Component */}
      <OrderModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedType={selectedTab} 
      />
    </section>
  );
};

export default FeaturesWithAbout;