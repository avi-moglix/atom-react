import React, { useState, useEffect, useRef  } from "react";
import { useRouter } from 'next/router';
import Tooltip from "../../../components/reusable/Tooltip";
import Image from "next/image";
import IMAGES from "@/public/assets/img";
import Slider from "./fullwidth-slider";
import Breadcrumb from "../../../components/reusable/Breadcrumb";
import ThumbnailSlider from './ThumbnailSlider';
import {thumbnailSlicerJsx,thumbnailSlicerHtml} from './ThumbnailSlider';
import {BannerSliderJsx,BannerSliderHtml} from './BannerSlider';
import BannerSlider from './BannerSlider';
const CarouselData = [
  { id: 1, src: IMAGES.Carousel.sequoiaNew, alt: "Sequoia" },
  { id: 2, src: IMAGES.Carousel.accelNew, alt: "Accel" },
  { id: 3, src: IMAGES.Carousel.falconNew, alt: "Falcon" },
  { id: 4, src: IMAGES.Carousel.havardNew, alt: "Harvard" },
  { id: 5, src: IMAGES.Carousel.tigerNew, alt: "Tiger" },
  { id: 6, src: IMAGES.Carousel.jungleNew, alt: "Jungle" },
  { id: 7, src: IMAGES.Carousel.falconEdge, alt: "Falcon Edge" },
  { id: 8, src: IMAGES.Carousel.tigerGlobal, alt: "Tiger Global" },
  { id: 9, src: IMAGES.Carousel.seedPlus, alt: "Seed Plus" },
  { id: 10, src: IMAGES.Carousel.compositeCapital, alt: "Composite Capital" },
  { id: 11, src: IMAGES.Carousel.infinanceCorp, alt: "IFC" },
];


export default function Carousel() {
  const router = useRouter();
  const { scrollTo } = router.query;

  useEffect(() => {
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [scrollTo]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const intervals = 5000;
  const testimonials = {
    title:'Customer Testimonials',
    para:"Let's see what people say about our company",
    testimonialArray:[
        {
            comment:"I've had excellent experiences with centrifugal pumps; they've proven to be highly reliable and consistently effective for me. Over the past few years, I've been using Sameer's centrifugal pumps without encountering any issues.",
            name:'Prakash Koli',
            site:'Flipkart',
            rating:'4.8'
        },
        {
            comment:"I needed a centrifugal pump for my business and i found the perfect one from sameer. it was exactly what i needed and it worked great.",
            name:'Kirti',
            site:'Moglix',
            rating:'4.7'
        },
        {
            comment:"The Sameer Zoom 28W White Wall Fan is a superb addition to my space, offering compact design and potent performance, perfect for confined areas. With a 400 mm sweep, it ensures efficient air circulation and cooling.",
            name:'Shail Gupta',
            site:'Moglix',
            rating:'4.4'
        },
        {
            comment:"This Fan is a game changer. Its 1200mm sweep ensures optimal airflow in any room, while the anti dust feature keeps it looking pristine with minimal effort",
            name:'Laghari',
            site:'Moglix',
            rating:'4.6'
        }
    ]
}
  const [activeTab, setActiveTab] = useState(0);
  const [index, setIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const categoriesRef = useRef(null);
  const checkScroll = (ref) => {
    if (ref.current) {
        const { scrollLeft, scrollWidth, clientWidth } = ref.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
};

const scrollLeft = (ref) => {
    if (ref.current) {
        ref.current.scrollBy({ left: -200, behavior: "smooth" });
    }
};
const scrollRight = (ref) => {
    if (ref.current) {
        ref.current.scrollBy({ left: 200, behavior: "smooth" });
    }
};

useEffect(() => {
    const ref = categoriesRef.current;
    if (ref) {
        checkScroll(categoriesRef);
        ref.addEventListener('scroll', () => checkScroll(categoriesRef));
    }
    return () => {
        if (ref) {
            ref.removeEventListener('scroll', () => checkScroll(categoriesRef));
        }
    };
}, []);
    // scroller code
    const scrollablecards = [
      {
          Jsx: `
          import React, { useState, useEffect, useRef } from "react";
import Tooltip from "./reusable/Tooltip";
import Image from "next/image";
 
const [canScrollLeft, setCanScrollLeft] = useState(false);
const [canScrollRight, setCanScrollRight] = useState(false);
const categoriesRef = useRef(null);

  const checkScroll = (ref) => {
      if (ref.current) {
          const { scrollLeft, scrollWidth, clientWidth } = ref.current;
          setCanScrollLeft(scrollLeft > 0);
          setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
      }
  };

  const scrollLeft = (ref) => {
      if (ref.current) {
          ref.current.scrollBy({ left: -200, behavior: "smooth" });
      }
  };
  const scrollRight = (ref) => {
      if (ref.current) {
          ref.current.scrollBy({ left: 200, behavior: "smooth" });
      }
  };

  useEffect(() => {
      const ref = categoriesRef.current;
      if (ref) {
          checkScroll(categoriesRef);
          ref.addEventListener('scroll', () => checkScroll(categoriesRef));
      }
      return () => {
          if (ref) {
              ref.removeEventListener('scroll', () => checkScroll(categoriesRef));
          }
      };
  }, []);
          `,
          Code: `
              <div className="bg-white rounded-lg p-5 mb-4">
                              <h2 className="text-lg font-bold mb-2.5 text-[#000]">Trending Categories</h2>
                              <div className="relative">
                                  {canScrollLeft && (
                                      <button
                                          onClick={() => scrollLeft(categoriesRef)}
                                          className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center bg-white w-8 h-8 shadow-md z-10"
                                      >
                                          <svg
                                              className="w-6 fill-baseBlack rotate-180"
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 24 24"
                                              fill="currentColor"
                                          >
                                              <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z" />
                                          </svg>
                                      </button>
                                  )}
                                  <div
                                      ref={categoriesRef}
                                      className="flex gap-4 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                                      onLoad={() => checkScroll(categoriesRef)}
                                  >
                                      {[
                                          { name: "Dummy Cate 1", img: "/assets/img/catedummy.jpg" },
                                          { name: "Dummy Cate 2", img: "/assets/img/catedummy.jpg" },
                                          { name: "Dummy Cate 3", img: "/assets/img/catedummy.jpg" },
                                          { name: "Dummy Cate 4", img: "/assets/img/catedummy.jpg" },
                                          { name: "Dummy Cate 5", img: "/assets/img/catedummy.jpg" },
                                          { name: "Dummy Cate 6", img: "/assets/img/catedummy.jpg" },
                                          { name: "Dummy Cate 7", img: "/assets/img/catedummy.jpg" },
                                          { name: "Dummy Cate 8", img: "/assets/img/catedummy.jpg" },
                                          { name: "Dummy Cate 9", img: "/assets/img/catedummy.jpg" },
                                          { name: "Dummy Cate 10", img: "/assets/img/catedummy.jpg" },
                                          { name: "Dummy Cate 11", img: "/assets/img/catedummy.jpg" },
                                          { name: "Dummy Cate 12", img: "/assets/img/catedummy.jpg" },
                                      ].map((category, index) => (
                                          <div
                                              key={index}
                                              className=" relative border min-h-[223px] border-[#efeff4] rounded-lg min-w-[210px] w-[210px] p-4 group hover:shadow-lg sm:hover:shadow-none cursor-pointer"
                                          >
                                              <div className="flex justify-center">

                                              
                                              <Image
                                                  src={category.img}
                                                  alt={category.name}
                                                  width={160}
                                                  height={160}
                                                  className=" group-hover:w-[60%]"
                                              />
                                              </div>
                                              <a className="text-sm text-[#3c3c3c] line-clamp-2 mt-1.5 group-hover:text-[#278bed] cursor-pointer ">
                                              <p className=" w-full text-sm mt-2">{category.name}</p>
                                              </a>
                                              <a className="text-xs text-gray mt-0.5">
                                              By: Company
                                              </a>
                                              <div class="mt-2.5 hidden group-hover:flex"><button class="bg-[#d9232d] flex-grow font-semibold text-white text-xs px-4 h-9 py-2 rounded-md">UNLOCK THE PRICE</button></div>
                                          </div>
                                      ))}
                                  </div>
                                  {canScrollRight && (
                                      <button
                                          onClick={() => scrollRight(categoriesRef)}
                                          className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center bg-white w-8 h-8 shadow-md z-10"
                                      >
                                          <svg
                                              className="w-6 fill-baseBlack"
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 24 24"
                                              fill="currentColor"
                                          >
                                              <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                                          </svg>
                                      </button>
                                  )}
                              </div>
                          </div>
          `,
      },
  ];
  const scrollablecardsTab = [
      {
          name: "HTML",
          current: true,
          content: `  
    ${scrollablecards[0].Code}
    `,
      },
      {
          name: "JSX",
          current: false,
          content: `
    ${scrollablecards[0].Jsx}
   `,
      },
  ];
 
  const [i, seti] = useState(0);
    useEffect(() => {
      const intervalId = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % testimonials.testimonialArray.length);
      }, intervals);
  
      return () => clearInterval(intervalId);
    }, [testimonials, intervals]);
  
    const prevSlide = () => {
      setIndex((prevIndex) => (prevIndex - 1 + testimonials.testimonialArray.length) % testimonials.testimonialArray.length);
    };
  
    const nextSlide = () => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.testimonialArray.length);
    };
    const goToSlide = (newIndex) => {
        setIndex(newIndex);
      };

  const breadcrumbs = [
    { name: "Home", isLast: false, path: '/' },
    { name: "Web Components", isLast: false, path: '/web' },
    { name: "Carousel", isLast: true },
  ];
  const TabsStyles = [
    {
      Jsx: `// import this before component function start remove it if already imported
     import React, { useState } from "react";
     import Image from "next/image";
     import IMAGES from "@/public/assets/img";

    //  Create the JSON Data

     const CarouselData = [
      { id: 1, src: IMAGES.Carousel.sequoiaNew, alt: 'Sequoia' },
      { id: 2, src: IMAGES.Carousel.accelNew, alt: 'Accel' },
      { id: 3, src: IMAGES.Carousel.falconNew, alt: 'Falcon' },
      { id: 4, src: IMAGES.Carousel.havardNew, alt: 'Harvard' },
      { id: 5, src: IMAGES.Carousel.tigerNew, alt: 'Tiger' },
      { id: 6, src: IMAGES.Carousel.jungleNew, alt: 'Jungle' },
      { id: 7, src: IMAGES.Carousel.falconEdge, alt: 'Falcon Edge' },
      { id: 8, src: IMAGES.Carousel.tigerGlobal, alt: 'Tiger Global' },
      { id: 9, src: IMAGES.Carousel.seedPlus, alt: 'Seed Plus' },
      { id: 10, src: IMAGES.Carousel.compositeCapital, alt: 'Composite Capital' },
      { id: 11, src: IMAGES.Carousel.infinanceCorp, alt: 'IFC' },
     ]
  `,
      Code: `
                
      // Add css in globals.css file
       .marquee {
         animation: marquee 15s linear infinite;
        }
  
       @keyframes marquee {
        from {
          transform: translateX(0%);
         }
         to {
           transform: translateX(-50%);
         }
        }
        // End css

        // Add Html
          <div className="pb-24 sm:pb-9 md:pb-16">
              <div className="container px-3 lg:px-3 xm:px-2">
                <h2 className="mb-3 font-bold text-center text-black text-xxxl">
                  Write Your Heading
                </h2>

                <div className="overflow-hidden whitespace-nowrap mt-[50px] sm:mt-5 mx-auto">
                  <div className="flex marquee">
                    <div className="flex">
                      {CarouselData.map((item) => (
                        <div key={item.id} className="mr-3 flex-none sm:mb-5">
                          <Image
                            loading="lazy"
                            // Add Image 
                            src={item.src}
                            alt={item.alt}
                            className="w-auto max-h-[180px] sm:mx-auto"
                          />
                        </div>
                      ))}
                      {/* Duplicate the list for seamless looping */}
                      {CarouselData.map((item, i) => (
                        <div
                          key={i + CarouselData.length}
                          className="mr-3 flex-none sm:mb-5"
                        >
                          <Image
                            loading="lazy"
                            src={item.src}
                            alt={item.alt}
                            className="w-auto max-h-[180px] sm:mx-auto"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
      `,
    },
  ];

  const tabs = [
    {
      name: "HTML",
      current: true,
      content: `  
      ${TabsStyles[0].Code}
      `,
    },
    {
      name: "JSX",
      current: false,
      content: `
      ${TabsStyles[0].Jsx}
     `,
    },
  ];
  // second slider code
  const fullwidthSlider = [
    {
      Jsx: `
      const Slider = () => {
    const slides = [
        { content: "Slide 1 - Welcome!", background: "#d9232d" },
        { content: "", background: "url('assets/img/sliderImg.jpg')" },
        { content: "Explore", background: "#d9232d" },
        { content: "", background: "url('assets/img/sliderImg.jpg')" },
        { content: "Thank You!", background: "#d9232d" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = slides.length;

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const dotsClass = (index) => {
        return (
            "w-3 h-3 rounded-full " +
            (currentIndex === index
                ? "bg-[#d9232d]"
                : "bg-gray-400 hover:bg-[#d9232d]")
        );
    };

    const slideClass = (index) => {
        return (
            "absolute inset-0 flex justify-center items-center text-lg font-semibold transition-opacity duration-1000 ease-in-out " +
            (index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0")
        );
    };

    const backgroundStyle = (background) => {
        return background.includes("url")
            ? { background: background + " center/cover no-repeat" }
            : { background: background };
    };
      `,
      Code: `
       <div className="flex flex-col items-center">
            <div className="relative w-full overflow-hidden h-80">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={slideClass(index)}
                        style={backgroundStyle(slide.background)}
                    >
                        <h1 className="text-white">{slide.content}</h1>
                    </div>
                ))}
                 <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-100 text-white p-2 rounded-full hover:bg-gray-200 z-20">
                    <i className="ri-arrow-left-s-line text-[#3c3c3c] text-lg"></i>
                </button>

                <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-100 text-white p-2 rounded-full hover:bg-gray-200 z-20">
                    <i className="ri-arrow-right-s-line text-[#3c3c3c] text-xl"></i>
                </button>

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex space-x-2 bg-gray-100 rounded-xl p-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={dotsClass(index)}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
      `,
    },
  ];
  const fullwidthsliderTab = [
    {
      name: "HTML",
      current: true,
      content: `  
      ${fullwidthSlider[0].Code}
      `,
    },
    {
      name: "JSX",
      current: false,
      content: `
      ${fullwidthSlider[0].Jsx}
     `,
    },
  ];
  const testimonialSlider = [
    {
      Jsx: `
        const intervals = 5000;
  const testimonials = {
    title:'Customer Testimonials',
    para:"Let's see what people say about our company",
    testimonialArray:[
        {
            comment:"I've had excellent experiences with centrifugal pumps; they've proven to be highly reliable and consistently effective for me. Over the past few years, I've been using Sameer's centrifugal pumps without encountering any issues.",
            name:'Prakash Koli',
            site:'Flipkart',
            rating:'4.8'
        },
        {
            comment:"I needed a centrifugal pump for my business and i found the perfect one from sameer. it was exactly what i needed and it worked great.",
            name:'Kirti',
            site:'Moglix',
            rating:'4.7'
        },
        {
            comment:"The Sameer Zoom 28W White Wall Fan is a superb addition to my space, offering compact design and potent performance, perfect for confined areas. With a 400 mm sweep, it ensures efficient air circulation and cooling.",
            name:'Shail Gupta',
            site:'Moglix',
            rating:'4.4'
        },
        {
            comment:"This Fan is a game changer. Its 1200mm sweep ensures optimal airflow in any room, while the anti dust feature keeps it looking pristine with minimal effort",
            name:'Laghari',
            site:'Moglix',
            rating:'4.6'
        }
    ]
}


  const [index, setIndex] = useState(0);
  
      useEffect(() => {
      const intervalId = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % testimonials.testimonialArray.length);
      }, intervals);
  
      return () => clearInterval(intervalId);
    }, [testimonials, intervals]);
  
    const prevSlide = () => {
      setIndex((prevIndex) => (prevIndex - 1 + testimonials.testimonialArray.length) % testimonials.testimonialArray.length);
    };
  
    const nextSlide = () => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.testimonialArray.length);
    };
    const goToSlide = (newIndex) => {
        setIndex(newIndex);
      };
  
      `,
      Code: `
        <div className="testimonial-component">
             <h3 className="text-xxxl sm:text-xxl1 font-semibold text-center mb-4">
   Customer Testimonials
          </h3>
          <p className="text-xl sm:text-lg text-center mb-12">
          Let's see what people say about our company
          </p>
          <div className="text-center relative overflow-hidden">
  <button className={'rounded-[100%] sm:hidden w-12 h-12 absolute top-[10%] left-0 ${index === 0 ? 'bg-[#F5F5F5] cursor-not-allowed' : 'bg-[#E2FAFF]'}'} disabled={index === 0} onClick={prevSlide}>
  <svg className='w-7 mx-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
  </button>
               <div className='w-full max-w-[900px] mx-auto relative overflow-hidden'>
                <div className="slider" style={{ width: '${testimonials.testimonialArray.length * 100}%', transform: 'translateX(-${index * (100 / testimonials.testimonialArray.length)}%)', transition: 'transform 0.5s ease' }}>
                    {testimonials.testimonialArray.map((item, i) => (
                        <div key={i} className="slide align-top inline-block w-full" style={{ width: '${100 / testimonials.testimonialArray.length}%' }}>
                            <p className='text-xl text-[#3c3c3c] mb-5 sm:text-lg'>{item.comment}</p>
                            <p className='text-xxxl sm:text-xxl text-[#3c3c3c] mb-1 font-bold'>{item.name}</p>
                            <div className='text-xl sm:text-lg text-[#3c3c3c]'>{item.site}/                           
                            <span className='text-[#458d00]'>{item.rating} *</span></div>
                        </div>
                    ))}
                </div>
            </div>
  <button className={'rounded-[100%] sm:hidden w-12 h-12 absolute top-[10%] right-0 ${index === testimonials.length - 1 ? 'bg-[#F5F5F5] cursor-not-allowed' : 'bg-[#E2FAFF]'}'} onClick={nextSlide}>
  <svg className='w-7 mx-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
  </button>
  <div className="mt-10 sm:mt-5">
        {testimonials.testimonialArray.map((_, i) => (
          <button aria-label='dot image'
            key={i}
            onClick={() => goToSlide(i)}
            className={'${i === index ? 'dot bg-[#3c3c3c]' : 'dot bg-white'} mx-1 w-4 h-4 border-[#707070] border-[1px] rounded-[100%] '}
          ></button>
        ))}
      </div>
</div>
             </div>
      `,
    },
  ]

  const testimonialSliderTab = [
    {
      name: "HTML",
      current: true,
      content: `  
      ${testimonialSlider[0].Code}
      `,
    },{
      name: "JSX",
      current: false,
      content: `
      ${testimonialSlider[0].Jsx}
     `,
    }
  ]
  const thumbnailSliderTab = [
    {
      name: "HTML",
      current: true,
      content: `  
      ${thumbnailSlicerHtml}
      `,
    },{
      name: "JSX",
      current: false,
      content: `
      ${thumbnailSlicerJsx}
     `,
    }
  ]
  const BannerSliderTab = [
    {
      name: "HTML",
      current: true,
      content: `  
      ${BannerSliderHtml}
      `,
    },{
      name: "JSX",
      current: false,
      content: `
      ${ BannerSliderJsx}
     `,
    }
  ]
  const SectionhandleTabClick = (index) => {
    setSectionTab(index);
  };
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
 
  const [CopyCodeToolipMessage, setCopyCodeToolipMessage] = useState(
    "Click here to Copy Code"
  );

  const [showCode, setShowCode] = useState(false);
  const [CopyCodeLinkToolipMessage, setCopyLinkToolipMessage] = useState(
    "Link Copy to Clipboard"
  );
  const [showCode2, setShowCode2] = useState(false);
  const [showCode3, setShowCode3] = useState(false);
  const [showCode4, setShowCode4] = useState(false);
  const [showCode5, setShowCode5] = useState(false);
  const [showCode6, setShowCode6] = useState(false);

  const CopyClickView = (codeId) => {
    const codeToCopy = document.getElementById(codeId).innerText;
    navigator.clipboard.writeText(codeToCopy).then(
      () => {
        setCopyCodeToolipMessage("Code copied successfully!");
      },
      (err) => {
        console.error("Unable to copy code", err);
        setCopyCodeToolipMessage("Copy failed");
      }
    );
  };


  const CopyLink = () => {
    const codeToCopy = window.location.href;
    navigator.clipboard.writeText(codeToCopy).then(
      () => {
        setCopyLinkToolipMessage("Link copied successfully!");
      },
      (err) => {
        console.error("Unable to copy code", err);
        setCopyLinkToolipMessage("Link Copy failed");
      }
    );
  };

  return (
    <main>
        <Breadcrumb
        breadcrumbs={breadcrumbs}
        lastChildMentioned="Carousel"
      />
      <div className=" bg-white m-5 mb-10">
  
            <div className="border border-atom_silver rounded p-5" id="carousel1">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg leading-[32px] mb-[16px] text-atom_dimgray">
                  Brand logos Carousel
                </h3>
                <div className="flex items-center ">
                  <Tooltip message={CopyCodeLinkToolipMessage}>
                    <a
                      className="rounded-[50%] text-xxl cursor-pointer hover:bg-[#8080803d] h-12 w-12 text-[#0000008a] flex items-center justify-center mr-5"
                      onClick={() => CopyLink()}
                      onMouseEnter={() =>
                        setCopyLinkToolipMessage("Link Copy to Clipboard")
                      }
                    >
                      <i className=" ri-link"></i>
                    </a>
                  </Tooltip>
                  <Tooltip message="View code">
                    <a
                      className="rounded-[50%] text-xxl cursor-pointer hover:bg-[#8080803d] h-12 w-12 text-[#0000008a] flex items-center justify-center"
                      onClick={() => setShowCode(!showCode)}
                    >
                      <i className="ri-code-line"></i>
                    </a>
                  </Tooltip>
                </div>
              </div>
              <div>
                {showCode && (
                  <>
                    <div className="block sm:hidden">
                      <div className="border-b border-gray-200">
                        <nav className="-mb-px flex " aria-label="Tabs">
                          {tabs.map((tab, index) => (
                            <a
                              key={index}
                              onClick={() => handleTabClick(index)}
                              className={classNames(
                                index === activeTab
                                  ? "border-indigo-500 text-indigo-600"
                                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                                "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium min-w-[100px] text-center cursor-pointer"
                              )}
                              aria-current={
                                index === activeTab ? "page" : undefined
                              }
                            >
                              {tab.name}
                            </a>
                          ))}
                        </nav>
                      </div>
                    </div>

                    <div className="relative ">
                      <pre
                        className="text-atom_sunglow text-base bg-black p-5 flex justify-between "
                        id="AllAlertCode"
                      >
                        {tabs[activeTab].content}
                      </pre>
                      <div className="absolute top-[40px] right-[50px] block">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() => CopyClickView("AllAlertCode")}
                            onMouseEnter={() =>
                              setCopyCodeToolipMessage("Click here to Copy Code")
                            }
                          >
                            <i className="text-xxl text-white ri-file-copy-line"></i>
                          </a>
                        </Tooltip>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="pb-24 sm:pb-9 md:pb-16 mt-6">
                <div className="container px-3 lg:px-3 xm:px-2">
                  <h2 className="mb-3 font-bold text-center text-black text-xxxl">
                    Write Your Heading
                  </h2>

                  <div className="overflow-hidden whitespace-nowrap mt-[50px] sm:mt-5 mx-auto">
                    <div className="flex marquee">
                      <div className="flex">
                        {CarouselData.map((item) => (
                          <div key={item.id} className="mr-3 flex-none sm:mb-5">
                            <Image
                              loading="lazy"
                              src={item.src}
                              alt={item.alt}
                              width={180}
                              height={180}
                              className="w-auto max-h-[180px] sm:mx-auto"
                            />
                          </div>
                        ))}
                        {/* Duplicate the list for seamless looping */}
                        {CarouselData.map((item, i) => (
                          <div
                            key={i + CarouselData.length}
                            className="mr-3 flex-none sm:mb-5"
                          >
                            <Image
                              loading="lazy"
                              src={item.src}
                              alt={item.alt}
                              width={180}
                              height={180}
                              className="w-auto max-h-[180px] sm:mx-auto"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-atom_silver rounded p-5 mt-6" id="carousel2">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg leading-[32px] mb-[16px] text-atom_dimgray">
                  Full width Image Slider
                </h3>
                <div className="flex items-center ">
                  <Tooltip message={CopyCodeLinkToolipMessage}>
                    <a
                      className="rounded-[50%] text-xxl cursor-pointer hover:bg-[#8080803d] h-12 w-12 text-[#0000008a] flex items-center justify-center mr-5"
                      onClick={() => CopyLink()}
                      onMouseEnter={() =>
                        setCopyLinkToolipMessage("Link Copy to Clipboard")
                      }
                    >
                      <i className=" ri-link"></i>
                    </a>
                  </Tooltip>
                  <Tooltip message="View code">
                    <a
                      className="rounded-[50%] text-xxl cursor-pointer hover:bg-[#8080803d] h-12 w-12 text-[#0000008a] flex items-center justify-center"
                      onClick={() => setShowCode2(!showCode2)}
                    >
                      <i className="ri-code-line"></i>
                    </a>
                  </Tooltip>
                </div>
              </div>
              <div>
                {showCode2 && (
                  <>
                    <div className="block sm:hidden">
                      <div className="border-b border-gray-200">
                        <nav className="-mb-px flex " aria-label="Tabs">
                          {tabs.map((tab, index) => (
                            <a
                              key={index}
                              onClick={() => handleTabClick(index)}
                              className={classNames(
                                index === activeTab
                                  ? "border-indigo-500 text-indigo-600"
                                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                                "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium min-w-[100px] text-center cursor-pointer"
                              )}
                              aria-current={
                                index === activeTab ? "page" : undefined
                              }
                            >
                              {tab.name}
                            </a>
                          ))}
                        </nav>
                      </div>
                    </div>

                    <div className="relative ">
                      <pre
                        className="text-atom_sunglow text-base bg-black p-5 flex justify-between overflow-x-auto"
                        id="AllAlertCode2"
                      >
                        {fullwidthsliderTab[activeTab].content}
                      </pre>
                      <div className="absolute top-[40px] right-[50px] block">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() => CopyClickView("AllAlertCode2")}
                            onMouseEnter={() =>
                              setCopyCodeToolipMessage("Click here to Copy Code")
                            }
                          >
                            <i className="text-xxl text-white ri-file-copy-line"></i>
                          </a>
                        </Tooltip>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* UI which show */}
              <Slider></Slider>
            </div>
            <div className="border border-atom_silver rounded p-5 mt-6" id="carousel3">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg leading-[32px] mb-[16px] text-atom_dimgray">
                  Testimonial Carousel
                </h3>
                <div className="flex items-center ">
                  <Tooltip message={CopyCodeLinkToolipMessage}>
                    <a
                      className="rounded-[50%] text-xxl cursor-pointer hover:bg-[#8080803d] h-12 w-12 text-[#0000008a] flex items-center justify-center mr-5"
                      onClick={() => CopyLink()}
                      onMouseEnter={() =>
                        setCopyLinkToolipMessage("Link Copy to Clipboard")
                      }
                    >
                      <i className=" ri-link"></i>
                    </a>
                  </Tooltip>
                  <Tooltip message="View code">
                    <a
                      className="rounded-[50%] text-xxl cursor-pointer hover:bg-[#8080803d] h-12 w-12 text-[#0000008a] flex items-center justify-center"
                      onClick={() => setShowCode3(!showCode3)}
                    >
                      <i className="ri-code-line"></i>
                    </a>
                  </Tooltip>
                </div>
              </div>
              <div>
                {showCode3 && (
                  <>
                    <div className="block sm:hidden">
                      <div className="border-b border-gray-200">
                        <nav className="-mb-px flex " aria-label="Tabs">
                          {tabs.map((tab, index) => (
                            <a
                              key={index}
                              onClick={() => handleTabClick(index)}
                              className={classNames(
                                index === activeTab
                                  ? "border-indigo-500 text-indigo-600"
                                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                                "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium min-w-[100px] text-center cursor-pointer"
                              )}
                              aria-current={
                                index === activeTab ? "page" : undefined
                              }
                            >
                              {tab.name}
                            </a>
                          ))}
                        </nav>
                      </div>
                    </div>

                    <div className="relative ">
                      <pre
                        className="text-atom_sunglow text-base bg-black p-5 flex justify-between overflow-x-auto"
                        id="AllAlertCode2"
                      >
                        {testimonialSliderTab[activeTab].content}
                      </pre>
                      <div className="absolute top-[40px] right-[50px] block">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() => CopyClickView("AllAlertCode2")}
                            onMouseEnter={() =>
                              setCopyCodeToolipMessage("Click here to Copy Code")
                            }
                          >
                            <i className="text-xxl text-white ri-file-copy-line"></i>
                          </a>
                        </Tooltip>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* add component here */}
             <div className="testimonial-component">
             <h3 className="text-xxxl sm:text-xxl1 font-semibold text-center mb-4">
   Customer Testimonials
          </h3>
          <p className="text-xl sm:text-lg text-center mb-12">
          Let's see what people say about our company
          </p>
          <div className="text-center relative overflow-hidden">
  <button className={`rounded-[100%] sm:hidden w-12 h-12 absolute top-[10%] left-0 ${index === 0 ? 'bg-[#F5F5F5] cursor-not-allowed' : 'bg-[#E2FAFF]'}`} disabled={index === 0} onClick={prevSlide}>
  <svg className='w-7 mx-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
  </button>
               <div className='w-full max-w-[900px] mx-auto relative overflow-hidden'>
                <div className="slider" style={{ width: `${testimonials.testimonialArray.length * 100}%`, transform: `translateX(-${index * (100 / testimonials.testimonialArray.length)}%)`, transition: 'transform 0.5s ease' }}>
                    {testimonials.testimonialArray.map((item, i) => (
                        <div key={i} className="slide align-top inline-block w-full" style={{ width: `${100 / testimonials.testimonialArray.length}%` }}>
                            <p className='text-xl text-[#3c3c3c] mb-5 sm:text-lg'>{item.comment}</p>
                            <p className='text-xxxl sm:text-xxl text-[#3c3c3c] mb-1 font-bold'>{item.name}</p>
                            <div className='text-xl sm:text-lg text-[#3c3c3c]'>{item.site}/                           
                            <span className='text-[#458d00]'>{item.rating} *</span></div>
                        </div>
                    ))}
                </div>
            </div>
  <button className={`rounded-[100%] sm:hidden w-12 h-12 absolute top-[10%] right-0 ${index === testimonials.length - 1 ? 'bg-[#F5F5F5] cursor-not-allowed' : 'bg-[#E2FAFF]'}`} onClick={nextSlide}>
  <svg className='w-7 mx-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
  </button>
  <div className="mt-10 sm:mt-5">
        {testimonials.testimonialArray.map((_, i) => (
          <button aria-label='dot image'
            key={i}
            onClick={() => goToSlide(i)}
            className={`${i === index ? 'dot bg-[#3c3c3c]' : 'dot bg-white'} mx-1 w-4 h-4 border-[#707070] border-[1px] rounded-[100%] `}
          ></button>
        ))}
      </div>
</div>
             </div>
            </div>
            <div className="border border-atom_silver rounded p-5 mt-6" id="carousel4">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg leading-[32px] mb-[16px] text-atom_dimgray">
                  Thumbnail Carousel
                </h3>
                <div className="flex items-center ">
                  <Tooltip message={CopyCodeLinkToolipMessage}>
                    <a
                      className="rounded-[50%] text-xxl cursor-pointer hover:bg-[#8080803d] h-12 w-12 text-[#0000008a] flex items-center justify-center mr-5"
                      onClick={() => CopyLink()}
                      onMouseEnter={() =>
                        setCopyLinkToolipMessage("Link Copy to Clipboard")
                      }
                    >
                      <i className=" ri-link"></i>
                    </a>
                  </Tooltip>
                  <Tooltip message="View code">
                    <a
                      className="rounded-[50%] text-xxl cursor-pointer hover:bg-[#8080803d] h-12 w-12 text-[#0000008a] flex items-center justify-center"
                      onClick={() => setShowCode4(!showCode4)}
                    >
                      <i className="ri-code-line"></i>
                    </a>
                  </Tooltip>
                </div>
              </div>
              <div>
                {showCode4 && (
                  <>
                    <div className="block sm:hidden">
                      <div className="border-b border-gray-200">
                        <nav className="-mb-px flex " aria-label="Tabs">
                          {thumbnailSliderTab.map((tab, index) => (
                            <a
                              key={index}
                              onClick={() => handleTabClick(index)}
                              className={classNames(
                                index === activeTab
                                  ? "border-indigo-500 text-indigo-600"
                                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                                "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium min-w-[100px] text-center cursor-pointer"
                              )}
                              aria-current={
                                index === activeTab ? "page" : undefined
                              }
                            >
                              {tab.name}
                            </a>
                          ))}
                        </nav>
                      </div>
                    </div>

                    <div className="relative ">
                      <pre
                        className="text-atom_sunglow text-base bg-black p-5 flex justify-between overflow-x-auto"
                        id="AllAlertCode2"
                      >
                        {thumbnailSliderTab[activeTab].content}
                      </pre>
                      <div className="absolute top-[40px] right-[50px] block">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() => CopyClickView("AllAlertCode2")}
                            onMouseEnter={() =>
                              setCopyCodeToolipMessage("Click here to Copy Code")
                            }
                          >
                            <i className="text-xxl text-white ri-file-copy-line"></i>
                          </a>
                        </Tooltip>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* add component here */}
              <ThumbnailSlider />
            </div>
            <div className="border border-atom_silver rounded p-5 mt-6" id="carousel5">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg leading-[32px] mb-[16px] text-atom_dimgray">
                  Banner Carousel
                </h3>
                <div className="flex items-center ">
                  <Tooltip message={CopyCodeLinkToolipMessage}>
                    <a
                      className="rounded-[50%] text-xxl cursor-pointer hover:bg-[#8080803d] h-12 w-12 text-[#0000008a] flex items-center justify-center mr-5"
                      onClick={() => CopyLink()}
                      onMouseEnter={() =>
                        setCopyLinkToolipMessage("Link Copy to Clipboard")
                      }
                    >
                      <i className=" ri-link"></i>
                    </a>
                  </Tooltip>
                  <Tooltip message="View code">
                    <a
                      className="rounded-[50%] text-xxl cursor-pointer hover:bg-[#8080803d] h-12 w-12 text-[#0000008a] flex items-center justify-center"
                      onClick={() => setShowCode5(!showCode5)}
                    >
                      <i className="ri-code-line"></i>
                    </a>
                  </Tooltip>
                </div>
              </div>
              <div>
                {showCode5 && (
                  <>
                    <div className="block sm:hidden">
                      <div className="border-b border-gray-200">
                        <nav className="-mb-px flex " aria-label="Tabs">
                          {BannerSliderTab.map((tab, index) => (
                            <a
                              key={index}
                              onClick={() => handleTabClick(index)}
                              className={classNames(
                                index === activeTab
                                  ? "border-indigo-500 text-indigo-600"
                                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                                "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium min-w-[100px] text-center cursor-pointer"
                              )}
                              aria-current={
                                index === activeTab ? "page" : undefined
                              }
                            >
                              {tab.name}
                            </a>
                          ))}
                        </nav>
                      </div>
                    </div>

                    <div className="relative ">
                      <pre
                        className="text-atom_sunglow text-base bg-black p-5 flex justify-between overflow-x-auto"
                        id="AllAlertCode5"
                      >
                        {BannerSliderTab[activeTab].content}
                      </pre>
                      <div className="absolute top-[40px] right-[50px] block">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() => CopyClickView('AllAlertCode5')}
                            onMouseEnter={() =>
                              setCopyCodeToolipMessage("Click here to Copy Code")
                            }
                          >
                            <i className="text-xxl text-white ri-file-copy-line"></i>
                          </a>
                        </Tooltip>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* add component here */}
              <BannerSlider/>
            </div>
            <div className="border border-atom_silver rounded p-5 mt-6" id="carousel6">
                            <div className="flex items-center justify-between mb-5">
                                <h3 className="text-lg leading-[32px] mb-[16px] text-atom_dimgray">
                                   Product Card Carousel
                                </h3>
                                <div className="flex items-center ">
                                    <Tooltip message={CopyCodeLinkToolipMessage}>
                                        <a
                                            className="rounded-[50%] text-xxl cursor-pointer hover:bg-[#8080803d] h-12 w-12 text-[#0000008a] flex items-center justify-center mr-5"
                                            onClick={() => CopyLink()}
                                            onMouseEnter={() =>
                                                setCopyLinkToolipMessage("Link Copy to Clipboard")
                                            }
                                        >
                                            <i className=" ri-link"></i>
                                        </a>
                                    </Tooltip>
                                    <Tooltip message="View code">
                                        <a
                                            className="rounded-[50%] text-xxl cursor-pointer hover:bg-[#8080803d] h-12 w-12 text-[#0000008a] flex items-center justify-center"
                                            onClick={() => setShowCode6(!showCode6)}
                                        >
                                            <i className="ri-code-line"></i>
                                        </a>
                                    </Tooltip>
                                </div>
                            </div>
                            <div>
                                {showCode6 && (
                                    <>
                                        <div className="block sm:hidden">
                                            <div className="border-b border-gray-200">
                                                <nav className="-mb-px flex " aria-label="Tabs">
                                                    {scrollablecardsTab.map((tab, index) => (
                                                        <a
                                                            key={index}
                                                            onClick={() => handleTabClick(index)}
                                                            className={classNames(
                                                                index === activeTab
                                                                    ? "border-indigo-500 text-indigo-600"
                                                                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                                                                "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium min-w-[100px] text-center cursor-pointer"
                                                            )}
                                                            aria-current={
                                                                index === activeTab ? "page" : undefined
                                                            }
                                                        >
                                                            {tab.name}
                                                        </a>
                                                    ))}
                                                </nav>
                                            </div>
                                        </div>

                                        <div className="relative ">
                                            <pre
                                                className="text-atom_sunglow text-base bg-black p-5 flex justify-between overflow-x-auto"
                                                id="AllAlertCode5"
                                            >
                                                {scrollablecardsTab[activeTab].content}
                                            </pre>
                                            <div className="absolute top-[40px] right-[50px] block">
                                                <Tooltip message={CopyCodeToolipMessage}>
                                                    <a
                                                        className="cursor-pointer"
                                                        onClick={() => CopyClickView('AllAlertCode5')}
                                                        onMouseEnter={() =>
                                                            setCopyCodeToolipMessage("Click here to Copy Code")
                                                        }
                                                    >
                                                        <i className="text-xxl text-white ri-file-copy-line"></i>
                                                    </a>
                                                </Tooltip>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* UI which show */}
                            {/* HTML Code */}
                            <div className="bg-white rounded-lg p-5 mb-4">
                                <h2 className="text-lg font-bold mb-2.5 text-[#000]">Trending Categories</h2>
                                <div className="relative">
                                    {canScrollLeft && (
                                        <button
                                            onClick={() => scrollLeft(categoriesRef)}
                                            className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center bg-white w-8 h-8 shadow-md z-10"
                                        >
                                            <svg
                                                className="w-6 fill-baseBlack rotate-180"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z" />
                                            </svg>
                                        </button>
                                    )}
                                    <div
                                        ref={categoriesRef}
                                        className="flex gap-4 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                                        onLoad={() => checkScroll(categoriesRef)}
                                    >
                                        {[
                                            { name: "Dummy Cate 1", img: "/assets/img/catedummy.jpg" },
                                            { name: "Dummy Cate 2", img: "/assets/img/catedummy.jpg" },
                                            { name: "Dummy Cate 3", img: "/assets/img/catedummy.jpg" },
                                            { name: "Dummy Cate 4", img: "/assets/img/catedummy.jpg" },
                                            { name: "Dummy Cate 5", img: "/assets/img/catedummy.jpg" },
                                            { name: "Dummy Cate 6", img: "/assets/img/catedummy.jpg" },
                                            { name: "Dummy Cate 7", img: "/assets/img/catedummy.jpg" },
                                            { name: "Dummy Cate 8", img: "/assets/img/catedummy.jpg" },
                                            { name: "Dummy Cate 9", img: "/assets/img/catedummy.jpg" },
                                            { name: "Dummy Cate 10", img: "/assets/img/catedummy.jpg" },
                                            { name: "Dummy Cate 11", img: "/assets/img/catedummy.jpg" },
                                            { name: "Dummy Cate 12", img: "/assets/img/catedummy.jpg" },
                                        ].map((category, index) => (
                                            <div
                                                key={index}
                                                className=" relative border min-h-[223px] border-[#efeff4] rounded-lg min-w-[210px] w-[210px] p-4 group hover:shadow-lg sm:hover:shadow-none cursor-pointer"
                                            >
                                                <div className="flex justify-center">

                                                
                                                <Image
                                                    src={category.img}
                                                    alt={category.name}
                                                    width={160}
                                                    height={160}
                                                    className=" group-hover:w-[60%]"
                                                />
                                                </div>
                                                <a className="text-sm text-[#3c3c3c] line-clamp-2 mt-1.5 group-hover:text-[#278bed] cursor-pointer ">
                                                <p className=" w-full text-sm mt-2">{category.name}</p>
                                                </a>
                                                <a className="text-xs text-gray mt-0.5">
                                                By: Company
                                                </a>
                                                <div class="mt-2.5 hidden group-hover:flex"><button class="bg-[#d9232d] flex-grow font-semibold text-white text-xs px-4 h-9 py-2 rounded-md">UNLOCK THE PRICE</button></div>
                                            </div>
                                        ))}
                                    </div>
                                    {canScrollRight && (
                                        <button
                                            onClick={() => scrollRight(categoriesRef)}
                                            className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center bg-white w-8 h-8 shadow-md z-10"
                                        >
                                            <svg
                                                className="w-6 fill-baseBlack"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                                            </svg>
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* HTML Code */}
            </div>
      </div>
    </main>
  );
}
