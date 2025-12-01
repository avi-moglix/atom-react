import React, { useState, useEffect } from 'react';


export const BannerSliderJsx = `

    const [activeTab, setActiveTab] = useState(0);

  const banners = [
    {
      id: 1,
      image: '/assets/img/bannerImgs/bannerSample1.webp',
      title: 'Delivery Within',
      description: '24 HOURS'
    },
    {
      id: 2,
      image: '/assets/img/bannerImgs/bannerSample2.webp',
      title: 'SUMMER SALE',
      description: 'Flat 300 OFF'
    },
    {
      id: 3,
      image: '/assets/img/bannerImgs/bannerSample3.webp',
      title: 'ROSE',
      description: 'Upto 50% OFF'
    },
    {
      id: 4,
      image: '/assets/img/bannerImgs/bannerSample4.webp',
      title: 'HILLGROVE',
      description: 'Upto 70% OFF'
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((current) => (current + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);`;
export const BannerSliderHtml = `

       <div className="w-full mx-auto max-w-[1335px]">
      {/* Banner Images */}
      <div className="relative h-[250px] xl:h-[300px] overflow-hidden">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={\u0060absolute inset-0 transition-opacity duration-2000 \u0024{
              activeTab === index ? 'opacity-100 z-10' : 'opacity-0'
            }\u0060}
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-[250px] xl:h-[300px] object-fill"
            />
            {/* Banner Content */}
         
          </div>
        ))}
      </div>

      {/* Tab Navigation - Now below the banner */}
      <div className="flex justify-center gap-1  bg-white">
        {banners.map((banner, index) => (
          <button
            key={banner.id}
            onMouseEnter={() => setActiveTab(index)}
            className={\u0060relative px-6 py-3  transition-all border-b-2 border-transparent duration-2000 h-[54px] flex items-center flex-col w-full
              \u0024{activeTab === index 
                ? '!text-red-600  !border-red-600' 
                : 'text-gray-700 hover:!text-red-600 hover:border-b-2 hover:!border-red-600'
              }\u0060}
          >
            <span className="relative z-10 text-xs font-medium">{banner.title}</span>
            <span className="relative block text-xs text-center z-10 font-normal">{banner.description}</span>
          </button>
        ))}
      </div>
    </div>`;

const BannerSlider = () => {
  const [activeTab, setActiveTab] = useState(0);

  const banners = [
    {
      id: 1,
      image: '/assets/img/bannerImgs/bannerSample1.webp',
      title: 'Delivery Within',
      description: '24 HOURS'
    },
    {
      id: 2,
      image: '/assets/img/bannerImgs/bannerSample2.webp',
      title: 'SUMMER SALE',
      description: 'Flat 300 OFF'
    },
    {
      id: 3,
      image: '/assets/img/bannerImgs/bannerSample3.webp',
      title: 'ROSE',
      description: 'Upto 50% OFF'
    },
    {
      id: 4,
      image: '/assets/img/bannerImgs/bannerSample4.webp',
      title: 'HILLGROVE',
      description: 'Upto 70% OFF'
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((current) => (current + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full mx-auto max-w-[1335px]">
      {/* Banner Images */}
      <div className="relative h-[250px] xl:h-[300px] overflow-hidden">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-2000 ${
              activeTab === index ? 'opacity-100 z-10' : 'opacity-0'
            }`}
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-[250px] xl:h-[300px] object-fill"
            />
            {/* Banner Content */}
         
          </div>
        ))}
      </div>

      {/* Tab Navigation - Now below the banner */}
      <div className="flex justify-center gap-1 bg-white dark:bg-gray-800">
        {banners.map((banner, index) => (
          <button
            key={banner.id}
            onMouseEnter={() => setActiveTab(index)}
            className={`relative px-6 py-3  transition-all border-b-2 border-transparent duration-2000 h-[54px] flex items-center flex-col w-full
              ${activeTab === index 
                ? '!text-red-600  !border-red-600' 
                : 'text-gray-700 dark:text-gray-300 hover:!text-red-600 hover:border-b-2 hover:!border-red-600'
              }`}
          >
            <span className="relative z-10 text-xs font-medium">{banner.title}</span>
            <span className="relative block text-xs text-center z-10 font-normal">{banner.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
