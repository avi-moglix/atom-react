import IMAGES from "@/public/assets/img";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Tooltip from "../../../components/reusable/Tooltip";
import Breadcrumb from "../../../components/reusable/Breadcrumb";
import { useRouter } from 'next/router';
export default function Layout() {
  const router = useRouter();
  const { scrollTo } = router.query;
  const [activeSectionTab, setSectionTab] = useState(0);

  useEffect(() => {
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [scrollTo]);

  const breadcrumbs = [
    { name: "Home", isLast: false, path: '/' },
    { name: "Web Components", isLast: false, path: '/web' },
    { name: "Layout", isLast: true },
  ];


  const gridCode6 = `<div className='grid grid-cols-6 gap-5 sm:grid-cols-1 md:grid-cols-2'>
    <div className='border border-atom_rojored p-3 rounded'>
        <p className='text-sm text-atom_primarydarkblack text-left font-medium'>1</p>
    </div>
    <div className='border border-atom_rojored p-3 rounded'>
        <p className='text-sm text-atom_primarydarkblack text-left font-medium'>2</p>
    </div>
    <div className='border border-atom_rojored p-3 rounded'>
        <p className='text-sm text-atom_primarydarkblack text-left font-medium'>3</p>
    </div>
    <div className='border border-atom_rojored p-3 rounded'>
        <p className='text-sm text-atom_primarydarkblack text-left font-medium'>4</p>
    </div>
    <div className='border border-atom_rojored p-3 rounded'>
        <p className='text-sm text-atom_primarydarkblack text-left font-medium'>5</p>
    </div>
    <div className='border border-atom_rojored p-3 rounded'>
        <p className='text-sm text-atom_primarydarkblack text-left font-medium'>6</p>
    </div>
</div>`;
  const gridCode4 = `<div className='grid grid-cols-4 gap-5 sm:grid-cols-1 md:grid-cols-2'>
<div className='border border-atom_rojored p-3 rounded'>
    <p className='text-sm text-atom_primarydarkblack text-left font-medium'>1</p>
</div>
<div className='border border-atom_rojored p-3 rounded'>
    <p className='text-sm text-atom_primarydarkblack text-left font-medium'>2</p>
</div>
<div className='border border-atom_rojored p-3 rounded'>
    <p className='text-sm text-atom_primarydarkblack text-left font-medium'>3</p>
</div>
<div className='border border-atom_rojored p-3 rounded'>
    <p className='text-sm text-atom_primarydarkblack text-left font-medium'>4</p>
</div>
</div>`;
  const gridCode3 = `<div className='grid grid-cols-3 gap-5 sm:grid-cols-1 md:grid-cols-3'>
<div className='border border-atom_rojored p-3 rounded'>
    <p className='text-sm text-atom_primarydarkblack text-left font-medium'>1</p>
</div>
<div className='border border-atom_rojored p-3 rounded'>
    <p className='text-sm text-atom_primarydarkblack text-left font-medium'>2</p>
</div>
<div className='border border-atom_rojored p-3 rounded'>
    <p className='text-sm text-atom_primarydarkblack text-left font-medium'>3</p>
</div>
</div>`;
  const gridCode2 = `<div className='grid grid-cols-2 gap-5 sm:grid-cols-1 md:grid-cols-2'>
<div className='border border-atom_rojored p-3 rounded'>
    <p className='text-sm text-atom_primarydarkblack text-left font-medium'>1</p>
</div>
<div className='border border-atom_rojored p-3 rounded'>
    <p className='text-sm text-atom_primarydarkblack text-left font-medium'>2</p>
</div>
</div>`;

  const flexCode2 = `<<div className='flex items-center justify-between'>
<div className='border border-atom_rojored p-3 rounded w-1/4'>
    <p className='text-sm text-atom_primarydarkblack text-left font-medium'>1</p>
</div>
<div className='border border-atom_rojored p-3 rounded w-1/4'>
    <p className='text-sm text-atom_primarydarkblack text-left font-medium'>2</p>
</div>
</div>`;

  const layoutCode = `
    <p className="text-lg font-medium text-atom_onxyblack mb-[16px]">Layout 6</p>
    <div className='grid grid-cols-6 gap-5 sm:grid-cols-1 md:grid-cols-2'>
      <div className='border border-atom_rojored p-3 rounded'>
        <p className='text-sm text-atom_primarydarkblack text-left font-medium'>1</p>
      </div>
      <div className='border border-atom_rojored p-3 rounded'>
        <p className='text-sm text-atom_primarydarkblack text-left font-medium'>2</p>
      </div>
      <div className='border border-atom_rojored p-3 rounded'>
        <p className='text-sm text-atom_primarydarkblack text-left font-medium'>3</p>
      </div>
      <div className='border border-atom_rojored p-3 rounded'>
        <p className='text-sm text-atom_primarydarkblack text-left font-medium'>4</p>
      </div>
      <div className='border border-atom_rojored p-3 rounded'>
        <p className='text-sm text-atom_primarydarkblack text-left font-medium'>5</p>
      </div>
      <div className='border border-atom_rojored p-3 rounded'>
        <p className='text-sm text-atom_primarydarkblack text-left font-medium'>6</p>
      </div>
    </div>
    <p className="text-lg font-medium text-atom_onxyblack mb-[16px]">Layout 4</p>
    <div className='grid grid-cols-4 gap-5 sm:grid-cols-1 md:grid-cols-2'>
      <div className='border border-atom_rojored p-3 rounded'>
        <p className='text-sm text-atom_primarydarkblack text-left font-medium'>1</p>
      </div>
      <div className='border border-atom_rojored p-3 rounded'>
        <p className='text-sm text-atom_primarydarkblack text-left font-medium'>2</p>
      </div>
      <div className='border border-atom_rojored p-3 rounded'>
        <p className='text-sm text-atom_primarydarkblack text-left font-medium'>3</p>
      </div>
      <div className='border border-atom_rojored p-3 rounded'>
        <p className='text-sm text-atom_primarydarkblack text-left font-medium'>4</p>
      </div>
    </div>
    <p className="text-lg font-medium text-atom_onxyblack mb-[16px]">Layout 3</p>
    <div className='grid grid-cols-3 gap-5 sm:grid-cols-1 md:grid-cols-3'>
      <div className='border border-atom_rojored p-3 rounded'>
        <p className='text-sm text-atom_primarydarkblack text-left font-medium'>1</p>
      </div>
      <div className='border border-atom_rojored p-3 rounded'>
        <p className='text-sm text-atom_primarydarkblack text-left font-medium'>2</p>
      </div>
      <div className='border border-atom_rojored p-3 rounded'>
        <p className='text-sm text-atom_primarydarkblack text-left font-medium'>3</p>
      </div>
    </div>
    <p className="text-lg font-medium text-atom_onxyblack mb-[16px]">Layout 2</p>
    <div className='grid grid-cols-2 gap-5 sm:grid-cols-1 md:grid-cols-2'>
      <div className='border border-atom_rojored p-3 rounded'>
        <p className='text-sm text-atom_primarydarkblack text-left font-medium'>1</p>
      </div>
      <div className='border border-atom_rojored p-3 rounded'>
        <p className='text-sm text-atom_primarydarkblack text-left font-medium'>2</p>
      </div>
      <div className='border border-atom_rojored p-3 rounded'>
        <p className='text-sm text-atom_primarydarkblack text-left font-medium'>3</p>
      </div>
    </div>
  `;

  const [copySuccess, setCopySuccess] = useState(null);
  const [showCode, setShowCode] = useState(false);

  const [CopyCodeToolipMessage, setCopyCodeToolipMessage] = useState(
    "Click here to Copy Code"
  );
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
  const [CopyCodeLinkToolipMessage, setCopyLinkToolipMessage] = useState(
    "Link Copy to Clipboard"
  );
  return (
    <main className="dark:bg-gray-900">
    <Breadcrumb
        breadcrumbs={breadcrumbs}
        lastChildMentioned="layout"
      />
      <div className="bg-white dark:bg-gray-800 m-5 mb-10 rounded-lg">
    

        {activeSectionTab == 0 && (
          <div className="border border-atom_silver dark:border-gray-700 rounded p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg leading-[32px] mb-[16px] text-atom_dimgray dark:text-gray-200">Layout</h3>
              <div className="flex items-center ">
                <Tooltip message={CopyCodeLinkToolipMessage}>
                  <a
                    className="rounded-[50%] text-xxl cursor-pointer hover:bg-[#8080803d] dark:hover:bg-gray-700 h-12 w-12 text-[#0000008a] dark:text-gray-400 flex items-center justify-center "
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
                    className="rounded-[50%] text-xxl cursor-pointer hover:bg-[#8080803d] dark:hover:bg-gray-700 h-12 w-12 text-[#0000008a] dark:text-gray-400 flex items-center justify-center"
                    onClick={() => setShowCode(!showCode)}
                  >
                    <i className="ri-code-line"></i>
                  </a>
                </Tooltip>
              </div>
            </div>
            <div>
              {showCode && (
                <div className="relative">
            
                <pre
                  className="text-atom_sunglow text-base bg-black p-5 flex justify-between"
                  id="AllAlertCode"
                >
                  {layoutCode}
         
                </pre>
                <div className="absolute top-[40px] right-[50px] block">
                         <Tooltip message={CopyCodeToolipMessage}>
                         <a
                           className="cursor-pointer text-dark"
                           onClick={() =>
                             CopyClickView("AllAlertCode")
                           }
                           onMouseEnter={() =>
                             setCopyCodeToolipMessage("Click here to Copy Code")
                           }
                         >
                           <i className="text-xxl text-white ri-file-copy-line"></i>
                         </a>
                       </Tooltip>
                       </div>
                       </div>
              )}
            </div>

            <div className="p-5 border border-[#0000000a] dark:border-gray-700 rounded mt-10">
              <div className="flex items-center ">
                <span className="w-[90%] text-base font-semibold text-atom_primarydarkblack dark:text-gray-200 pb-5">
                  Layout Output
                </span>
                <span className="w-[10%] ml-10 text-base text-atom_onxyblack dark:text-gray-300 font-semibold pb-5">
                  HTML
                </span>
              </div>
              <p className="text-base leading-[19px] text-atom_onxyblack dark:text-gray-300 pt-5 mb-[12px]">
                The grid system is built with grid system and allows up to 12
                columns across the page.
              </p>
              <p className="text-base leading-[19px] text-atom_onxyblack dark:text-gray-300 border-atom_silver dark:border-gray-700 pb-5 border-b mb-[12px]">
                If you do not want to use all 12 columns individually, you can
                group the columns together to create wider columns:
              </p>
              <div className="pb-5 pt-0" id='layout6x2'>
                <h2 className="text-base text-atom_onxyblack dark:text-gray-200 font-semibold pb-3">
                  Layout 6 x 2 (grid-cols-2)
                </h2>
                <div className="flex items-center justify-between">
                  <div className="w-[90%] bg-atom_graybg dark:bg-gray-700 p-4 shadow">
                    <h3 className="text-lg font-medium text-atom_onxyblack dark:text-gray-200 mb-[16px]">{`<Page Heading>`}</h3>
                    <Image
                      className="py-4"
                      src={IMAGES.layout.col_six}
                      alt="col-6"
                      width={800}
                      height={100}
                    />
                    <p>
                      Use this class for 6 column grid :- grid, grid-cols-6{" "}
                      <br />
                      classes for column spacing :- ( gap-1 = 4px , gap-2 = 8px
                      , gap-3 = 12px , gap-4 = 16px )
                    </p>
                    <div>
                      <h3 className="text-base text-atom_onxyblack py-3">
                        Example :-
                      </h3>
                

                    
                      <div className="grid grid-cols-6 gap-5 sm:grid-cols-1 md:grid-cols-2">
                        <div className="border-2 border-atom_rojored p-3 rounded-md">
                          <p className="text-sm text-atom_primarydarkblack text-left font-medium ">
                          grid-cols-2
                          </p>
                        </div>
                        <div className="border-2 border-atom_rojored p-3 rounded-md">
                          <p className="text-sm text-atom_primarydarkblack text-left font-medium ">
                          grid-cols-2
                          </p>
                        </div>
                        <div className="border-2 border-atom_rojored p-3 rounded-md">
                          <p className="text-sm text-atom_primarydarkblack text-left font-medium ">
                          grid-cols-2
                          </p>
                        </div>
                        <div className="border-2 border-atom_rojored p-3 rounded-md">
                          <p className="text-sm text-atom_primarydarkblack text-left font-medium ">
                          grid-cols-2
                          </p>
                        </div>
                        <div className="border-2 border-atom_rojored p-3 rounded-md">
                          <p className="text-sm text-atom_primarydarkblack text-left font-medium ">
                          grid-cols-2
                          </p>
                        </div>
                        <div className="border-2 border-atom_rojored p-3 rounded-md">
                          <p className="text-sm text-atom_primarydarkblack text-left font-medium ">
                          grid-cols-2
                          </p>
                        </div>
                      </div>

                      <pre className="hidden" id="gridCode6"> 
                      {gridCode6}
                      </pre>
                    </div>
                  </div>
                  <div className="w-[10%] ml-10">
                    <Tooltip message={CopyCodeToolipMessage}>
                      <a
                        className="cursor-pointer text-dark"
                        onClick={() =>
                          CopyClickView("gridCode6")
                        }
                        onMouseEnter={() =>
                          setCopyCodeToolipMessage("Click here to Copy Code")
                        }
                      >
                        <i className="text-xl text-dark ri-file-copy-line text-[#5a5a5a]"></i>
                      </a>
                    </Tooltip>

                   
                  </div>
                </div>
              </div>
              <div className="py-6" id='layout4x3'>
                <h2 className="text-base text-atom_onxyblack dark:text-gray-200 font-semibold pb-3">
                  Layout 4 x 3 (grid-cols-3)
                </h2>
                <div className="flex items-center justify-between">
                  <div className="w-[90%] bg-atom_graybg dark:bg-gray-700 p-4 shadow">
                    <h3 className="text-lg font-medium text-atom_onxyblack dark:text-gray-200 mb-[16px]">{`<Page Heading>`}</h3>
                    <Image
                      className="py-4"
                      src={IMAGES.layout.col_four}
                      alt="col-4"
                      width={800}
                      height={100}
                    />
                    <p className="dark:text-gray-300">
                      Use this class for 4 column grid :- grid, grid-cols-4{" "}
                      <br />
                      classes for column spacing :- ( gap-1 = 4px , gap-2 = 8px
                      , gap-3 = 12px , gap-4 = 16px )
                    </p>
                    <div>
                      <h3 className="text-base text-atom_onxyblack py-3">
                        Example :-
                      </h3>
                      <div className="grid grid-cols-4 gap-5 sm:grid-cols-1 md:grid-cols-2">
                        <div className="border-2 border-atom_rojored p-3 rounded-md">
                          <p className="text-sm text-atom_primarydarkblack text-left font-medium">
                          grid-cols-3
                          </p>
                        </div>
                        <div className="border-2 border-atom_rojored p-3 rounded-md">
                          <p className="text-sm text-atom_primarydarkblack text-left font-medium">
                          grid-cols-3
                          </p>
                        </div>
                        <div className="border-2 border-atom_rojored p-3 rounded-md">
                          <p className="text-sm text-atom_primarydarkblack text-left font-medium">
                          grid-cols-3
                          </p>
                        </div>
                        <div className="border-2 border-atom_rojored p-3 rounded-md">
                          <p className="text-sm text-atom_primarydarkblack text-left font-medium">
                          grid-cols-3
                          </p>
                        </div>
                      </div>
                      <pre className="hidden" id="gridCode4">
                        {gridCode4}
                      </pre>
                    </div>
                  </div>
                  <div className="w-[10%] ml-10">
                  <Tooltip message={CopyCodeToolipMessage}>
                      <a
                        className="cursor-pointer text-dark"
                        onClick={() =>
                          CopyClickView("gridCode4")
                        }
                        onMouseEnter={() =>
                          setCopyCodeToolipMessage("Click here to Copy Code")
                        }
                      >
                        <i className="text-xl text-dark ri-file-copy-line text-[#5a5a5a]"></i>
                      </a>
                    </Tooltip>
                    {/* <span
                      className="cursor-pointer"
                      onClick={() => handleCopyClick(gridCode4)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="rgba(0,0,0,1)"
                      >
                        <path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path>
                      </svg>
                    </span>
                    {copySuccess && (
                      <p className="text-sm text-green-500">{copySuccess}</p>
                    )} */}
                  </div>
                </div>
              </div>
              <div className="py-6" id='layout3x4'>
                <h2 className="text-base text-atom_onxyblack dark:text-gray-200 font-semibold pb-3">
                  Layout 3 x 4 (grid-cols-4)
                </h2>
                <div className="flex items-center justify-between">
                  <div className="w-[90%] bg-atom_graybg dark:bg-gray-700 p-4 shadow">
                    <h3 className="text-lg font-medium text-atom_onxyblack dark:text-gray-200 mb-[16px]">{`<Page Heading>`}</h3>
                    <Image
                      className="py-4"
                      src={IMAGES.layout.col_three}
                      alt="col-3"
                      width={800}
                      height={100}
                    />
                    <p>
                      Use this class for 3 column grid :- grid, grid-cols-3{" "}
                      <br />
                      classes for column spacing :- ( gap-1 = 4px , gap-2 = 8px
                      , gap-3 = 12px , gap-4 = 16px )
                    </p>
                    <div>
                      <h3 className="text-base text-atom_onxyblack py-3">
                        Example :-
                      </h3>
                      <div className="grid grid-cols-3 gap-5 sm:grid-cols-1 md:grid-cols-3">
                        <div className="border-2 border-atom_rojored p-3 rounded-md">
                          <p className="text-sm text-atom_primarydarkblack text-left font-medium ">
                          grid-cols-4
                          </p>
                        </div>
                        <div className="border-2 border-atom_rojored p-3 rounded-md">
                          <p className="text-sm text-atom_primarydarkblack text-left font-medium ">
                          grid-cols-4
                          </p>
                        </div>
                        <div className="border-2 border-atom_rojored p-3 rounded-md">
                          <p className="text-sm text-atom_primarydarkblack text-left font-medium ">
                          grid-cols-4
                          </p>
                        </div>
                      </div>
                      <pre className="hidden" id="gridCode3">
                        {gridCode3}
                      </pre>
                    </div>
                  </div>
                  <div className="w-[10%] ml-10">
                  <Tooltip message={CopyCodeToolipMessage}>
                      <a
                        className="cursor-pointer text-dark"
                        onClick={() =>
                          CopyClickView("gridCode3")
                        }
                        onMouseEnter={() =>
                          setCopyCodeToolipMessage("Click here to Copy Code")
                        }
                      >
                        <i className="text-xl text-dark ri-file-copy-line text-[#5a5a5a]"></i>
                      </a>
                    </Tooltip>
                    {/* <span
                      className="cursor-pointer"
                      onClick={() => handleCopyClick(gridCode3)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="rgba(0,0,0,1)"
                      >
                        <path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path>
                      </svg>
                    </span>
                    {copySuccess && (
                      <p className="text-sm text-green-500">{copySuccess}</p>
                    )} */}
                  </div>
                </div>
              </div>
              <div className="py-6" id='layout2x6'>
                <h2 className="text-base text-atom_onxyblack dark:text-gray-200 font-semibold pb-3">
                  Layout 2 x 6 (grid-cols-6)
                </h2>
                <div className="flex items-center justify-between">
                  <div className="w-[90%] bg-atom_graybg dark:bg-gray-700 p-4 shadow">
                    <h3 className="text-lg font-medium text-atom_onxyblack dark:text-gray-200 mb-[16px]">{`<Page Heading>`}</h3>
                    <Image
                      className="py-4"
                      src={IMAGES.layout.col_two}
                      alt="col-2"
                      width={800}
                      height={100}
                    />
                    <p>
                      Use this class for 2 column grid :- grid, grid-cols-2{" "}
                      <br />
                      classes for column spacing :- ( gap-1 = 4px , gap-2 = 8px
                      , gap-3 = 12px , gap-4 = 16px )
                    </p>
                    <div>
                      <h3 className="text-base text-atom_onxyblack py-3">
                        Example :-
                      </h3>
                      <div className="grid grid-cols-2 gap-5 sm:grid-cols-1 md:grid-cols-2">
                        <div className="border-2 border-atom_rojored p-3 rounded-md">
                          <p className="text-sm text-atom_primarydarkblack text-left font-medium">
                          grid-cols-6
                          </p>
                        </div>
                        <div className="border-2 border-atom_rojored p-3 rounded-md">
                          <p className="text-sm text-atom_primarydarkblack text-left font-medium">
                          grid-cols-6
                          </p>
                        </div>
                      </div>
                      <pre className="hidden" id="gridCode2">
                        {gridCode2}
                      </pre>
                    </div>
                  </div>
                  <div className="w-[10%] ml-10">
                  <Tooltip message={CopyCodeToolipMessage}>
                      <a
                        className="cursor-pointer text-dark"
                        onClick={() =>
                          CopyClickView("gridCode2")
                        }
                        onMouseEnter={() =>
                          setCopyCodeToolipMessage("Click here to Copy Code")
                        }
                      >
                        <i className="text-xl text-dark ri-file-copy-line text-[#5a5a5a]"></i>
                      </a>
                    </Tooltip>
                    {/* <span
                      className="cursor-pointer"
                      onClick={() => handleCopyClick(gridCode2)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="rgba(0,0,0,1)"
                      >
                        <path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path>
                      </svg>
                    </span>
                    {copySuccess && (
                      <p className="text-sm text-green-500">{copySuccess}</p>
                    )} */}
                  </div>
                </div>
              </div>
              <div className="py-6" id='layout2x3'>
                <h2 className="text-base text-atom_onxyblack dark:text-gray-200 font-semibold pb-3">
                  Layout 2 x 3 space between (w-1/4 = 25%)
                </h2>
                <div className="flex items-center justify-between">
                  <div className="w-full bg-atom_graybg dark:bg-gray-700 p-4 shadow">
                    <h3 className="text-base text-atom_onxyblack dark:text-gray-200 mb-4">{`<Page Heading>`}</h3>
                    <div className="flex items-center justify-between">
                      <div className="border-2 border-atom_rojored p-3 rounded-md w-1/4">
                        <p className="text-sm text-atom_primarydarkblack text-left font-medium">
                        25%
                        </p>
                      </div>
                      <div className="border-2 border-atom_rojored p-3 rounded-md w-1/4">
                        <p className="text-sm text-atom_primarydarkblack text-left font-medium">
                        25%
                        </p>
                      </div>
                    </div>
                  </div>
                  <pre className="hidden" id="flexCode2">
                        {flexCode2}
                      </pre>
                  <div className="w-[10%] ml-10">
                  <Tooltip message={CopyCodeToolipMessage}>
                      <a
                        className="cursor-pointer text-dark"
                        onClick={() =>
                          CopyClickView("flexCode2")
                        }
                        onMouseEnter={() =>
                          setCopyCodeToolipMessage("Click here to Copy Code")
                        }
                      >
                        <i className="text-xl text-dark ri-file-copy-line text-[#5a5a5a]"></i>
                      </a>
                    </Tooltip>
                    {/* <span
                      className="cursor-pointer"
                      onClick={() => handleCopyClick(flexCode2)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="rgba(0,0,0,1)"
                      >
                        <path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path>
                      </svg>
                    </span>
                    {copySuccess && (
                      <p className="text-sm text-green-500">{copySuccess}</p>
                    )} */}
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        )}
        {activeSectionTab == 1 && (
          <div className="h-full w-full flex items-center justify-center">
            <Image
              src="/assets/img/MicrosoftTeams-image.png"
              width={300}
              height={300}
              alt="Picture of the author"
            />
          </div>
        )}
      </div>
    </main>
  );
}
