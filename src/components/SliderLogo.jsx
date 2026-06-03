"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const SliderLogo = () => {
  const [sliderImages, setSliderImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const BACKEND_BASE_URL = "http://localhost:5000"; 

  useEffect(() => {
    fetch(`${BACKEND_BASE_URL}/api/slider-images`)
      .then((res) => {
        if (!res.ok) throw new Error("Database dynamic fetch error");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setSliderImages(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching images from backend:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-10 text-gray-500">
        Slider load hocche...
      </div>
    );
  }

  if (sliderImages.length === 0) {
    return (
      <div className="flex items-center justify-center py-10 text-gray-400">
        Kono image paoya jayni!
      </div>
    );
  }

  return (
    <section className="pt-2">
      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={sliderImages.length > 1} 
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 1 },
          }}
        >
          {sliderImages.map((item, index) => {
            // 🛠️ Safety Check: imageUrl ba imageData jekonotai thakte pare (Base64 check included)
            const currentImg = item?.imageUrl || item?.imageData;

            if (!currentImg) return null; // Jodi image thikmoto na thake tobe crash na kore skip korbe

            // Path pattern fix string lookup check
            const finalSrc = currentImg.startsWith("http") || currentImg.startsWith("data:image")
              ? currentImg 
              : `${BACKEND_BASE_URL}${currentImg}`;

            return (
              <SwiperSlide key={item._id || index}>
                <div className="relative w-full h-30 flex items-center justify-center">
                  <Image
                    src={finalSrc}
                    alt={`Slider Dynamic Item - ${index + 1}`}
                    fill
                    unoptimized 
                    className="object-cover rounded-xl"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default SliderLogo;