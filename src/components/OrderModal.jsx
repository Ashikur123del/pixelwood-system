"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Button,
  Form,
  Input,
  Label,
  TextField,
  TextArea,
} from "@heroui/react";
import {
  FaRing,
  FaBaby,
  FaPray,
  FaTimes,
  FaMobileAlt,
  FaBoxOpen,
  FaKey
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const OrderModal = ({ isOpen, onClose, selectedType }) => {
  const [loading, setLoading] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  
  // 🛒 Quantity State
  const [quantity, setQuantity] = useState(1);

  // Reset quantity based on product type when modal opens or tab changes
  useEffect(() => {
    if (selectedType === "MobileStand" || selectedType === "ChabiRing") {
      setQuantity(100); // পাইকারি প্রোডাক্টের জন্য ডিফল্ট ১০০
    } else {
      setQuantity(1);   // টিস্যু বক্স বা রিটেইলের জন্য ডিফল্ট ১
    }
  }, [selectedType, isOpen]);

  const districts = [
    { id: "1", value: "comilla", name: "কুমিল্লা" },
    { id: "2", value: "feni", name: "ফেনী" },
    { id: "3", value: "brahmanbaria", name: "ব্রাহ্মণবাড়িয়া" },
    { id: "4", value: "rangamati", name: "রাঙ্গামাটি" },
    { id: "5", value: "noakhali", name: "নোয়াখালী" },
    { id: "6", value: "chandpur", name: "চাঁদপুর" },
    { id: "7", value: "lakshmipur", name: "লক্ষ্মীপুর" },
    { id: "8", value: "chattogram", name: "চট্টগ্রাম" },
    { id: "9", value: "coxsbazar", name: "কক্সবাজার" },
    { id: "10", value: "khagrachhari", name: "খাগড়াছড়ি" },
    { id: "11", value: "bandarban", name: "বান্দরবান" },
    { id: "12", value: "sirajganj", name: "সিরাজগঞ্জ" },
    { id: "13", value: "pabna", name: "পাবনা" },
    { id: "14", value: "bogura", name: "বগুড়া" },
    { id: "15", value: "rajshahi", name: "রাজশাহী" },
    { id: "16", value: "natore", name: "নাটোর" },
    { id: "17", value: "joypurhat", name: "জয়পুরহাট" },
    { id: "18", value: "chapainawabganj", name: "চাঁপাইনবাবগঞ্জ" },
    { id: "19", value: "naogaon", name: "নওগাঁ" },
    { id: "20", value: "jashore", name: "যশোহর" },
    { id: "21", value: "satkhira", name: "সাতক্ষীরা" },
    { id: "22", value: "meherpur", name: "মেহেরপুর" },
    { id: "23", value: "narail", name: "নড়াইল" },
    { id: "24", value: "chuadanga", name: "চুয়াডাঙ্গা" },
    { id: "25", value: "kushtia", name: "কুষ্টিয়া" },
    { id: "26", value: "magura", name: "মাগুরা" },
    { id: "27", value: "khulna", name: "খুলনা" },
    { id: "28", value: "bagerhat", name: "ಬಾಗೇರಹತ್" },
    { id: "29", value: "jhenaidah", name: "ঝিনাইদহ" },
    { id: "30", value: "jhalakathi", name: "ঝালকাঠি" },
    { id: "31", value: "patuakhali", name: "পটুয়াখালী" },
    { id: "32", value: "pirojpur", name: "পিরোজপুর" },
    { id: "33", value: "barisal", name: "বরিশাল" },
    { id: "34", value: "bhola", name: "ভোলা" },
    { id: "35", value: "barguna", name: "বরগুনা" },
    { id: "36", value: "sylhet", name: "সিলেট" },
    { id: "37", value: "moulvibazar", name: "مৌলভীবাজার" },
    { id: "38", value: "habiganj", name: "হবিগঞ্জ" },
    { id: "39", value: "sunamganj", name: "সুনামগঞ্জ" },
    { id: "40", value: "narsingdi", name: "নরসিংদী" },
    { id: "41", value: "gazipur", name: "গাজীপুর" },
    { id: "42", value: "shariatpur", name: "শরীয়তপুর" },
    { id: "43", value: "narayanganj", name: "নারায়ণগঞ্জ" },
    { id: "44", value: "tangail", name: "টাঙ্গাইল" },
    { id: "45", value: "kishoreganj", name: "কিশোরগঞ্জ" },
    { id: "46", value: "manikganj", name: "মানিকগঞ্জ" },
    { id: "47", value: "dhaka", name: "ঢাকা" },
    { id: "48", value: "munshiganj", name: "মুন্সিগঞ্জ" },
    { id: "49", value: "rajbari", name: "রাজবাড়ী" },
    { id: "50", value: "madaripur", name: "মাদারীপুর" },
    { id: "51", value: "gopalganj", name: "গোপালগঞ্জ" },
    { id: "52", value: "faridpur", name: "ফریدপুর" },
    { id: "53", value: "panchagarh", name: "পঞ্চগড়" },
    { id: "54", value: "dinajpur", name: "দিনাজপুর" },
    { id: "55", value: "lalmonirhat", name: "লালমনিরহাট" },
    { id: "56", value: "nilphamari", name: "নীলফামারী" },
    { id: "57", value: "gaibandha", name: "গাইবান্ধা" },
    { id: "58", value: "thakurgaon", name: "ঠাকুরগাঁও" },
    { id: "59", value: "rangpur", name: "রংপুর" },
    { id: "60", value: "kurigram", name: "কুড়িগ্রাম" },
    { id: "61", value: "sherpur", name: "শেরপুর" },
    { id: "62", value: "mymensingh", name: "ময়মনসিংহ" },
    { id: "63", value: "jamalpur", name: "জামালপুর" },
    { id: "64", value: "netrokona", name: "নেত্রকোণা" }
  ];

  // 💰 Dynamic Price Rules (Updated as per request)
  const getProductUnitPrice = () => {
    switch (selectedType) {
      case "MobileStand": return 30;  // স্ট্যান্ড ৩০ টাকা
      case "ChabiRing": return 45;    // চাবির রিং ৪৫ টাকা
      case "TesuBox": return 120;     // টিস্যু বক্স ১২০ টাকা
      default: return 999;           // রিটেইল বা অন্য প্রোডাক্ট
    }
  };

  const unitPrice = getProductUnitPrice();
  const productPriceTotal = unitPrice * quantity;
  const totalAmount = productPriceTotal + deliveryCharge;

  const handleDistrictChange = (e) => {
    const value = e.target.value;
    setSelectedDistrict(value);

    if (!value) {
      setDeliveryCharge(0);
      return;
    }
    
    const matchedDistrict = districts.find(d => d.value === value);
    if (matchedDistrict) {
      const districtId = parseInt(matchedDistrict.id);
      // ঢাকা বিভাগের জেলা হলে ৮০ টাকা, বাইরের হলে ১২০ টাকা (সমস্ত অর্ডারে ডেলিভারি চার্জ প্রযোজ্য)
      if (districtId >= 40 && districtId <= 52) {
        setDeliveryCharge(80);
      } else {
        setDeliveryCharge(120);
      }
    }
  };

  const inputStyles = {
    input: "text-slate-900 placeholder:text-slate-400 text-md",
    inputWrapper: [
      "bg-slate-50",
      "border-1 border-slate-200",
      "h-12",
      "group-data-[focus=true]:border-[#FFDE42]",
      "group-data-[focus=true]:bg-white",
      "shadow-sm",
      "rounded-xl"
    ],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDistrict) {
      toast.error("অনুগ্রহ করে জেলা সিলেক্ট করুন");
      return;
    }

    // 🛑 Hard Validation for Wholesale MOQ (MobileStand & ChabiRing < 100 Pcs)
    if ((selectedType === "MobileStand" || selectedType === "ChabiRing") && quantity < 100) {
      toast.error("দুঃখিত, এই প্রোডাক্টটি সর্বনিম্ন ১০০ পিস অর্ডার করতে হবে।");
      return;
    }

    // 🛑 Validation for Tissue Box Minimum 1 Piece
    if (selectedType === "TesuBox" && quantity < 1) {
      toast.error("অনুগ্রহ করে সর্বনিম্ন ১ টি টিস্যু বক্স সিলেক্ট করুন।");
      return;
    }
    
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const districtInfo = districts.find(d => d.value === selectedDistrict);

    try {
      const response = await fetch(`https://pixelwood-server.vercel.app/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          ...data, 
          district: districtInfo?.name || "", 
          districtValue: districtInfo?.value || "",
          districtId: districtInfo?.id || "",
          orderType: selectedType, 
          quantity: Number(quantity),
          status: 'pending',
          productPrice: productPriceTotal,
          deliveryCharge: deliveryCharge, 
          totalAmount: totalAmount 
        }),
      });

    if (response.ok) {
        // 🎉 Facebook Pixel Purchase Event Trigger
        import("react-facebook-pixel")
          .then((x) => x.default)
          .then((reactPixel) => {
            reactPixel.track("Purchase", {
              value: totalAmount,
              currency: "BDT",
              content_name: getModalTitle(),
              content_ids: [selectedType],
              content_type: "product",
              num_items: Number(quantity)
            });
          })
          .catch((err) => console.log("Pixel Error:", err));

        toast.success("আপনার অর্ডারটি সফলভাবে জমা হয়েছে!");
        setTimeout(() => { onClose(); window.location.reload(); }, 1500);
      } else {
        toast.error("অর্ডারটি সাবমিট করা যায়নি। আবার চেষ্টা করুন।");
      }
    } catch (error) {
      toast.error("সার্ভার কানেক্ট হতে পারছে না।");
    } finally {
      loading(false);
    }
  };

  const getModalTitle = () => {
    switch (selectedType) {
      case "wedding": return "বিবাহ স্মরণিকা";
      case "birth": return "জন্মদিন/আকিকা";
      case "death": return "স্মরণিকা";
      case "MobileStand": return "মোবাইল স্ট্যান্ড (পাইকারি)";
      case "TesuBox": return "টিস্যু বক্স";
      case "ChabiRing": return "চাবির রিং (পাইকারি)";
      default: return "প্রোডাক্ট";
    }
  };

  // চেক করার সুবিধা: এটি পাইকারি প্রোডাক্ট কিনা
  const isWholesaleProduct = selectedType === "MobileStand" || selectedType === "ChabiRing";

  return (
    <>
      <Toaster position="top-center" />
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-2 md:p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0F172A] border border-white/10 rounded-[24px] shadow-2xl overflow-hidden flex flex-col max-h-[95vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-5 border-b border-white/5 bg-slate-800/30">
                <div className="flex items-center gap-3 text-[#FFDE42] text-lg md:text-xl font-black">
                  <span className="p-2 bg-yellow-500/10 rounded-lg">
                    {selectedType === "wedding" && <FaRing />}
                    {selectedType === "birth" && <FaBaby />}
                    {selectedType === "death" && <FaPray />}
                    {selectedType === "MobileStand" && <FaMobileAlt />}
                    {selectedType === "TesuBox" && <FaBoxOpen />}
                    {selectedType === "ChabiRing" && <FaKey />}
                  </span>
                  <span>{getModalTitle()}</span>
                </div>
                <button type="button" onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-gray-400 hover:text-white transition-all">
                  <FaTimes size={20} />
                </button>
              </div>

              {/* Form Content */}
              <Form onSubmit={handleSubmit} className="overflow-y-auto p-6 md:p-8 space-y-6 custom-scrollbar">
                
                {/* 🚨 MOQ Notice Banner Only for Wholesale Products */}
                {isWholesaleProduct && (
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 text-amber-400 text-xs font-medium">
                    ⚠️ <strong>পাইকারি অর্ডার নোটিশ:</strong> এই প্রোডাক্টটি কাস্টম ডাইস/মেশিন সেটআপের কারণে সর্বনিম্ন <strong>১০০ পিস</strong> অর্ডার করতে হবে।
                  </div>
                )}

                {/* Contact Information */}
                <div className="space-y-4">
                  <h4 className="text-[#FFDE42] text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">যোগাযোগের তথ্য</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <TextField isRequired name="customerName"><Label className="text-slate-300 text-xs mb-1">আপনার নাম</Label><Input placeholder="পূর্ণ নাম" variant="bordered" classNames={inputStyles} /></TextField>
                    <TextField isRequired name="phone"><Label className="text-slate-300 text-xs mb-1">মোবাইল নাম্বার</Label><Input placeholder="01XXXXXXXXX" variant="bordered" classNames={inputStyles} /></TextField>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <TextField name="whatsapp"><Label className="text-green-400 text-xs mb-1 font-bold">WhatsApp</Label><Input placeholder="ডিজাইন কনফার্ম করার জন্য" variant="bordered" classNames={inputStyles} /></TextField>
                    <TextField name="email" type="email"><Label className="text-slate-300 text-xs mb-1">ইমেইল (ঐচ্ছিক)</Label><Input placeholder="example@gmail.com" variant="bordered" classNames={inputStyles} /></TextField>
                  </div>
                </div>

                <div className="w-full h-px bg-white/5"></div>
                
                {/* Product Information Based on Type */}
                <div className="space-y-4">
                  <h4 className="text-[#FFDE42] text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">প্রোডাক্টের তথ্য</h4>
                  
                  {/* Quantity Input for All Products (Dynamic min value) */}
                  {(selectedType === "MobileStand" || selectedType === "ChabiRing" || selectedType === "TesuBox") && (
                    <div className="bg-slate-800/20 p-4 rounded-xl border border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                      <div>
                        <Label className="text-[#FFDE42] text-xs font-bold block mb-1">
                          {isWholesaleProduct ? "অর্ডার কোয়ান্টিটি (সর্বনিম্ন ১০০)" : "অর্ডার কোয়ান্টিটি"}
                        </Label>
                        <input 
                          required 
                          name="quantity" 
                          type="number" 
                          min={isWholesaleProduct ? "100" : "1"}
                          value={quantity}
                          onChange={(e) => {
                            const val = parseInt(e.target.value) || 0;
                            setQuantity(Math.max(0, val));
                          }}
                          className="w-full h-12 bg-white text-slate-900 border border-slate-200 rounded-xl px-4 font-bold text-lg outline-none focus:border-[#FFDE42] transition-all" 
                        />
                      </div>
                      <div className="text-right sm:text-left pt-2 sm:pt-6">
                        <span className="text-slate-400 text-xs block">প্রতি পিসের মূল্য:</span>
                        <span className="text-white text-lg font-bold">৳{unitPrice} / পিস</span>
                      </div>
                    </div>
                  )}

                  {selectedType === "wedding" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <TextField isRequired name="groomName"><Label className="text-slate-300 text-xs">বরের নাম</Label><Input variant="bordered" classNames={inputStyles} /></TextField>
                      <TextField isRequired name="brideName"><Label className="text-slate-300 text-xs">কনের নাম</Label><Input variant="bordered" classNames={inputStyles} /></TextField>
                      <TextField name="groomFather"><Label className="text-slate-300 text-xs">বরের পিতার নাম</Label><Input variant="bordered" classNames={inputStyles} /></TextField>
                      <TextField name="brideFather"><Label className="text-slate-300 text-xs">কনের পিতার নাম</Label><Input variant="bordered" classNames={inputStyles} /></TextField>
                      <TextField name="groomMother"><Label className="text-slate-300 text-xs">বরের মাতার নাম</Label><Input variant="bordered" classNames={inputStyles} /></TextField>
                      <TextField name="brideMother"><Label className="text-slate-300 text-xs">কনের মাতার নাম</Label><Input variant="bordered" classNames={inputStyles} /></TextField>
                      <div className="md:col-span-2">
                        <Label className="text-slate-300 text-xs block mb-1 font-medium">বিয়ের তারিখ</Label>
                        <input required name="eventDate" type="date" className="w-full h-12 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl p-3 outline-none focus:border-[#FFDE42] transition-all" />
                      </div>
                    </div>
                  )}

                  {selectedType === "birth" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <TextField isRequired name="babyName"><Label className="text-slate-300 text-xs">শিশুর নাম</Label><Input variant="bordered" classNames={inputStyles} /></TextField>
                      <TextField isRequired name="fatherName"><Label className="text-slate-300 text-xs">পিতার নাম</Label><Input variant="bordered" classNames={inputStyles} /></TextField>
                      <TextField isRequired name="motherName"><Label className="text-slate-300 text-xs">মাতার নাম</Label><Input variant="bordered" classNames={inputStyles} /></TextField>
                      <div>
                        <Label className="text-slate-300 text-xs block mb-1">জন্ম তারিখ</Label>
                        <input required name="birthDate" type="date" className="w-full h-12 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl p-3 outline-none focus:border-[#FFDE42] transition-all" />
                      </div>
                    </div>
                  )}

                  {selectedType === "death" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <TextField isRequired name="deceasedName"><Label className="text-slate-300 text-xs">مৃত ব্যক্তির নাম</Label><Input variant="bordered" classNames={inputStyles} /></TextField>
                      <TextField name="fatherOrHusbandName"><Label className="text-slate-300 text-xs">পিতা/স্বামীর নাম</Label><Input variant="bordered" classNames={inputStyles} /></TextField>
                      <div className="md:col-span-2">
                        <Label className="text-slate-300 text-xs block mb-1 font-medium">মৃত্যুর তারিখ</Label>
                        <input required name="deathDate" type="date" className="w-full h-12 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl p-3 outline-none focus:border-[#FFDE42] transition-all" />
                      </div>
                    </div>
                  )}

                  {selectedType === "MobileStand" && (
                    <div className="grid grid-cols-1 gap-4">
                      <TextField isRequired name="engravingName">
                        <Label className="text-slate-300 text-xs">স্ট্যান্ডে খোদাই করার নাম / ব্র্যান্ড লোগো টেক্সট</Label>
                        <Input placeholder="যে নামটি মোবাইল স্ট্যান্ডে খোদাই করতে চান" variant="bordered" classNames={inputStyles} />
                      </TextField>
                    </div>
                  )}

                  {selectedType === "TesuBox" && (
                    <div className="grid grid-cols-1 gap-4">
                      <TextField isRequired name="tissueBoxText">
                        <Label className="text-slate-300 text-xs">বক্সের ওপর খোদাই করার নাম / ব্র্যান্ড</Label>
                        <Input placeholder="যেমন: আপনার পরিবারের নাম বা রেস্টুরেন্টের নাম" variant="bordered" classNames={inputStyles} />
                      </TextField>
                    </div>
                  )}

                  {selectedType === "ChabiRing" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <TextField isRequired name="keychainTextFront">
                        <Label className="text-slate-300 text-xs">সামনের পাশের টেক্সট</Label>
                        <Input placeholder="নাম বা মোবাইল নাম্বার" variant="bordered" classNames={inputStyles} />
                      </TextField>
                      <TextField name="keychainTextBack">
                        <Label className="text-slate-300 text-xs">পেছনের পাশের টেক্সট (ঐচ্ছিক)</Label>
                        <Input placeholder="অতিরিক্ত কোনো লেখা" variant="bordered" classNames={inputStyles} />
                      </TextField>
                    </div>
                  )}

                  <TextField name="specialMessage">
                    <Label className="text-slate-300 text-xs">বার্তা / বাণী / অতিরিক্ত নির্দেশনা (ঐচ্ছিক)</Label>
                    <TextArea placeholder="ছোট কোনো উদ্ধৃতি বা বিশেষ নির্দেশনা..." variant="bordered" classNames={{...inputStyles, input: "text-slate-900 pt-3 h-24"}} />
                  </TextField>
                </div>

                <div className="w-full h-px bg-white/5"></div>
                
                <div className="space-y-4">
                  <h4 className="text-[#FFDE42] text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">ডেলিভারি ঠিকানা</h4>
                  <TextField isRequired name="deliveryAddress">
                    <Label className="text-slate-300 text-xs mb-1">পূর্ণ ঠিকানা</Label>
                    <Input placeholder="গ্রাম, থানা, পোস্ট অফিস" variant="bordered" classNames={inputStyles} />
                  </TextField>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <Label className="text-slate-300 text-xs">জেলা</Label>
                      <select 
                        required
                        value={selectedDistrict}
                        onChange={handleDistrictChange}
                        className="h-12 bg-slate-50 border border-slate-200 rounded-xl px-3 text-slate-900 text-sm outline-none focus:border-[#FFDE42] transition-all"
                      >
                        <option value="">-- সিলেক্ট করুন --</option>
                        {districts.map(d => (
                          <option key={d.id} value={d.value}>{d.name}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="flex flex-col gap-1">
                      <Label className="text-slate-300 text-xs">ডেলিভারি টাইপ</Label>
                      <select name="deliveryType" className="h-12 bg-slate-50 border border-slate-200 rounded-xl px-4 text-slate-900 text-sm outline-none focus:border-[#FFDE42] transition-all">
                        <option value="Home">হোম ডেলিভারি</option>
                        <option value="Point">পয়েন্ট ডেলিভারি</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Sticky Order Action Summary Box */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex justify-between items-center mb-6">
                    <div className="space-y-1">
                      <div className="text-slate-400 text-xs flex gap-2">
                        <span>মোট প্রোডাক্ট মূল্য: ৳{productPriceTotal}</span>
                        <span>+</span>
                        <span className="text-yellow-400 font-medium">ডেলিভারি: ৳{deliveryCharge}</span>
                      </div>
                      <span className="text-white text-3xl font-black">৳{totalAmount}</span>
                    </div>
                    <div className="bg-green-500/10 text-green-400 text-[10px] font-bold px-3 py-1 rounded-full border border-green-500/20 uppercase tracking-widest">
                      Cash on Delivery
                    </div>
                  </div>
                  
                  <Button
                    type="submit"
                    isLoading={loading}
                    disabled={isWholesaleProduct && quantity < 100}
                    className="w-full bg-[#FFDE42] disabled:bg-slate-700 disabled:text-slate-400 hover:bg-white text-slate-950 font-black py-8 text-xl rounded-2xl shadow-xl transition-all active:scale-95 cursor-pointer"
                  >
                    {isWholesaleProduct 
                      ? (quantity < 100 ? "সর্বনিম্ন ১০০ পিস অর্ডার করতে হবে" : "পাইকারি অর্ডার কনফর্ম করুন")
                      : "অর্ডার কনফর্ম করুন"
                    }
                  </Button>
                </div>
              </Form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #0F172A; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #1E293B; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #334155; }
      `}</style>
    </>
  );
};

export default OrderModal;