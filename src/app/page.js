"use client";
import React, { useState } from "react"; 
import HeroPage from "@/components/Hero";
import FeaturesWithAbout from "@/components/FeaturesSection";



export default function Home() {
  const [selectedTab, setSelectedTab] = useState("wedding");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
   <main className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <HeroPage 
        selectedTab={selectedTab} 
        setSelectedTab={setSelectedTab} 
        setIsModalOpen={setIsModalOpen} 
      />
      
      <FeaturesWithAbout 
        selectedTab={selectedTab} 
        isModalOpen={isModalOpen} 
        setIsModalOpen={setIsModalOpen} 
      />
    </main>
  );
}
