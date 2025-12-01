import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { ComponentShowcase } from "../../../components/reusable/CodeBlock";
import Image from "next/image";
import IMAGES from "@/public/assets/img";
import Breadcrumb from "../../../components/reusable/Breadcrumb";
import ProductListingPage from "./product-listing-page";
import { jsxCode, htmlCode } from './product-listing-page';
const CardsData = [
  {
    id: 1,
    heading: "An ISO",
    description: "Certified Company",
    image: IMAGES?.Shared?.ftIcon1,
    alt: "Iso Image",
  },
  {
    id: 2,
    heading: "Minimal Documentation",
    description: "no Hard Collateral",
    image: IMAGES?.Shared?.ftIcon2,
    alt: "Iso Image",
  },
  {
    id: 3,
    heading: "Instant Approval",
    description: "quick disbursal",
    image: IMAGES?.Shared?.ftIcon3,
    alt: "Iso Image",
  },
  {
    id: 4,
    heading: "100% visibility",
    description: "digital dashboards",
    image: IMAGES?.Shared?.ftIcon4,
    alt: "Iso Image",
  },
];
// common


export default function Cards() {
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

  const [activeSectionTab, setSectionTab] = useState(0);
  
  const breadcrumbs = [
    { name: "Home", isLast: false, path: '/' },
    { name: "Web Components", isLast: false, path: '/web' },
    { name: "Cards", isLast: true },
  ];

  // Code for 4 Cards component
  const cardsJsxCode = `// Import statements
import React, { useState } from "react";
import Image from "next/image";
import IMAGES from "@/public/assets/img";

// Create the JSON Data
const CardsData = [
  {
    id: 1,
    heading: "An ISO",
    description: "Certified Company",
    image: IMAGES?.Shared?.ftIcon1,
    alt: "Iso Image",
  },
  {
    id: 2,
    heading: "Minimal Documentation",
    description: "no Hard Collateral",
    image: IMAGES?.Shared?.ftIcon2,
    alt: "Iso Image",
  },
  {
    id: 3,
    heading: "Instant Approval",
    description: "quick disbursal",
    image: IMAGES?.Shared?.ftIcon3,
    alt: "Iso Image",
  },
  {
    id: 4,
    heading: "100% visibility",
    description: "digital dashboards",
    image: IMAGES?.Shared?.ftIcon4,
    alt: "Iso Image",
  },
];`;

  const cardsHtmlCode = `<div className="bg-[#022B5C] py-10">
  <div className="container xm:px-2 px-3">
    <div className="w-full">
      <div className="sm:w-full w-full p-2 sm:p-0 md:p-0">
        <div className="w-full">
          <h3 className="text-white flex flex-wrap justify-center items-center 
            gap-2 text-3xl sm:text-lg mb-10 text-center">
            Write Your Heading{" "}
            <Image
              className="ml-1 sm:mt-2"
              src={IMAGES.Shared.newCredlixLogoIcon}
              width={97}
              height={29}
              alt="Credlix Logo Icon"
            />
          </h3>
          <div>
            <ul className="list-none flex flex-wrap justify-between 
              max-w-[1200px] w-full mx-auto items-start">
              {CardsData.map((card) => (
                <li
                  key={card.id}
                  className="flex items-center mb-4 w-[25%] sm:w-full
                   md:px-0 md:w-[48%] px-2 sm:px-0"
                >
                  <div className="bg-white w-full text-left 
                   rounded-[8px] px-7 py-7 min-h-[160px]">
                    <Image
                      src={card.image}
                      width={68}
                      height={66}
                      alt={card.alt}
                    />
                    <p className="text-lg mt-3 min-h-[80px]">
                      <span className="font-bold block">
                        {card.heading},
                      </span>
                      {card.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;

  //   Form validation

  return (
    <main className="dark:bg-gray-900">
      <Breadcrumb
        breadcrumbs={breadcrumbs}
        lastChildMentioned="Cards"
      />
      <div className="bg-white dark:bg-gray-800 m-5 mb-10 rounded-lg p-5">
        {activeSectionTab == 0 && (
          <>
            {/* 4 Cards with heading */}
            <ComponentShowcase
              title="4 Cards with heading and Background"
              id="cardStyle1"
              htmlCode={cardsHtmlCode}
              jsxCode={cardsJsxCode}
            >
              <div className="bg-[#022B5C] py-10 rounded-lg">
                <div className="container xm:px-2 px-3">
                  <div className="w-full">
                    <div className="sm:w-full w-full p-2 sm:p-0 md:p-0">
                      <div className="w-full">
                        <h3 className="text-white flex flex-wrap justify-center items-center gap-2 text-3xl sm:text-lg mb-10 text-center">
                          Write Your Heading{" "}
                          <Image
                            className="ml-1 sm:mt-2"
                            src={IMAGES.Shared.newCredlixLogoIcon}
                            width={97}
                            height={29}
                            alt="Credlix Logo Icon"
                          />
                        </h3>
                        <div>
                          <ul className="list-none flex flex-wrap justify-between max-w-[1200px] w-full mx-auto items-start">
                            {CardsData.map((card) => (
                              <li
                                key={card.id}
                                className="flex items-center mb-4 w-[25%] sm:w-full md:px-0 md:w-[48%] px-2 sm:px-0"
                              >
                                <div className="bg-white w-full text-left rounded-[8px] px-7 py-7 min-h-[160px]">
                                  <Image
                                    src={card.image}
                                    width={68}
                                    height={66}
                                    alt={`${card.heading}, ${card.description}`}
                                  />
                                  <p className="text-lg mt-3 min-h-[80px]">
                                    <span className="font-bold block">
                                      {card.heading},
                                    </span>
                                    {card.description}
                                  </p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ComponentShowcase>

            {/* Product Listing */}
            <ComponentShowcase
              title="Product Listing"
              id="cardStyle2"
              htmlCode={htmlCode}
              jsxCode={jsxCode}
            >
              <ProductListingPage />
            </ComponentShowcase>
          </>
        )}
      </div>
    </main>
  );
}
