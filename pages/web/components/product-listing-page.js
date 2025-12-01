import React from "react";
import Image from "next/image";
import IMAGES from "@/public/assets/img";

export const jsxCode = ` const products = [
    {
      id: 1,
      name: "Honeywell 6MP Indoor & Outdoor Fisheye IR IP Camera, HFD6GR1",
      brand: "Honeywell",
      image: "/assets/img/catedummy.jpg",
      link: "#"
    },
    {
      id: 2,
      name: "Digital Security Camera HD 1080p",
      brand: "Samsung",
      image: "/assets/img/catedummy.jpg",
      link: "#"
    },
    {
      id: 3,
      name: "Wireless Security System Pro",
      brand: "Sony",
      image: "/assets/img/catedummy.jpg",
      link: "#"
    },
    {
      id: 4,
      name: "Wireless Security System Pro",
      brand: "Sony",
      image: "/assets/img/catedummy.jpg",
      link: "#"
    },
    {
      id: 5,
      name: "Wireless Security System Pro",
      brand: "Sony",
      image: "/assets/img/catedummy.jpg",
      link: "#"
    },
    {
      id: 5,
      name: "Wireless Security System Pro",
      brand: "Sony",
      image: "/assets/img/catedummy.jpg",
      link: "#"
    },
    {
      id: 5,
      name: "Wireless Security System Pro",
      brand: "Sony",
      image: "/assets/img/catedummy.jpg",
      link: "#"
    },
    {
      id: 5,
      name: "Wireless Security System Pro",
      brand: "Sony",
      image: "/assets/img/catedummy.jpg",
      link: "#"
    },
    {
      id: 5,
      name: "Wireless Security System Pro",
      brand: "Sony",
      image: "/assets/img/catedummy.jpg",
      link: "#"
    },
    {
      id: 5,
      name: "Wireless Security System Pro",
      brand: "Sony",
      image: "/assets/img/catedummy.jpg",
      link: "#"
    }
  ];`;
export const htmlCode = `
     <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-2">
        {products.map((product) => (
          <div key={product.id} className="p-5 relative hover:shadow-[0_0px_12px_3px_rgba(0,0,0,0.1)] rounded-lg group pb-20 h-[320px] ">
            <div className="w-45 relative">
              <a target="_blank" href={product.link}>
                <Image
                  className="sm:mt-2 mx-auto mb-3"
                  src={product.image}
                  width={170}
                  height={170}
                  alt={product.name}
                />
              </a>
            </div>
            <div className="mt-1.5">
              <p className="text-sm text-[#3c3c3c] group-hover:text-[#086ac9] line-clamp-2 min-h-[40px]">
                <a target="_blank" href={product.link}>
                  {product.name}
                </a>
              </p>
            </div>
            <span className="text-xs font-normal text-gray">By: {product.brand}</span>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <button className="py-2.5 w-full text-xs border border-[#d9232d] rounded-md text-[#d9232d] font-semibold uppercase bg-white group-hover:bg-[#d9232d] group-hover:text-white">
                Request Quote
              </button>
            </div>
          </div>
        ))}
      </div>
`;

function productListingPage() {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Honeywell 6MP Indoor & Outdoor Fisheye IR IP Camera, HFD6GR1",
      brand: "Honeywell",
      image: "/assets/img/catedummy.jpg",
      link: "#"
    },
    {
      id: 2,
      name: "Digital Security Camera HD 1080p",
      brand: "Samsung",
      image: "/assets/img/catedummy.jpg",
      link: "#"
    },
    {
      id: 3,
      name: "Wireless Security System Pro",
      brand: "Sony",
      image: "/assets/img/catedummy.jpg",
      link: "#"
    },
    {
      id: 4,
      name: "Wireless Security System Pro",
      brand: "Sony",
      image: "/assets/img/catedummy.jpg",
      link: "#"
    },
    {
      id: 5,
      name: "Wireless Security System Pro",
      brand: "Sony",
      image: "/assets/img/catedummy.jpg",
      link: "#"
    },
    {
      id: 5,
      name: "Wireless Security System Pro",
      brand: "Sony",
      image: "/assets/img/catedummy.jpg",
      link: "#"
    },
    {
      id: 5,
      name: "Wireless Security System Pro",
      brand: "Sony",
      image: "/assets/img/catedummy.jpg",
      link: "#"
    },
    {
      id: 5,
      name: "Wireless Security System Pro",
      brand: "Sony",
      image: "/assets/img/catedummy.jpg",
      link: "#"
    },
    {
      id: 5,
      name: "Wireless Security System Pro",
      brand: "Sony",
      image: "/assets/img/catedummy.jpg",
      link: "#"
    },
    {
      id: 5,
      name: "Wireless Security System Pro",
      brand: "Sony",
      image: "/assets/img/catedummy.jpg",
      link: "#"
    }
  ];

  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-2">
        {products.map((product) => (
          <div key={product.id} className="p-5 relative hover:shadow-[0_0px_12px_3px_rgba(0,0,0,0.1)] rounded-lg group pb-20 h-[320px] ">
            <div className="w-45 relative">
              <a target="_blank" href={product.link}>
                <Image
                  className=" sm:mt-2 mx-auto mb-3"
                  src={product.image}
                  width={170}
                  height={170}
                  alt={product.name}
                />
              </a>
            </div>
            <div className="mt-1.5">
              <p className="text-sm text-[#3c3c3c] group-hover:text-[#086ac9] line-clamp-2 min-h-[40px]">
                <a target="_blank" href={product.link}>
                  {product.name}
                </a>
              </p>
            </div>
            <span className="text-xs font-normal text-gray">By: {product.brand}</span>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <button className="py-2.5 w-full text-xs border border-[#d9232d] rounded-md text-[#d9232d] font-semibold uppercase bg-white group-hover:bg-[#d9232d] group-hover:text-white">
                Request Quote
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default productListingPage;
