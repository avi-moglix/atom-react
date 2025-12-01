import React, { useState,useEffect } from "react";
import Tooltip from "../../../components/reusable/Tooltip";
import Breadcrumb from "../../../components/reusable/Breadcrumb";
import Image from "next/image";
import { useRouter } from 'next/router';
export default function headerComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [isOpen2, setIsOpen2] = useState(false);
  const [menuOpen2, setMenuOpen2] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(null);
  const [thirdLevelOpen, setThirdLevelOpen] = useState(null);


  const [isOpen3, setIsOpen3] = useState(false);
  const [menuOpen3, setMenuOpen3] = useState(false);
  const [subMenuOpen3, setSubMenuOpen3] = useState(null);
  const [thirdLevelOpen3, setThirdLevelOpen3] = useState(null);

  const breadcrumbs = [
    { name: "Home", isLast: false, path: '/' },
    { name: "Web Components", isLast: false, path: '/web' },
    { name: "Header", isLast: true },
  ];

  const menuItems = ["Home", "About", "Services", "Contact"];

  const menuItems2 = [
    { name: "Home", link: "#" },
    { name: "About", link: "#" },
    {
      name: "Services",
      link: "#",
      subMenu: [
        {
          name: "Web Development",
          link: "#",
          subMenu: [
            { name: "Frontend", link: "#" },
            { name: "Backend", link: "#" },
          ],
        },
        { name: "App Development", link: "#" },
        { name: "SEO Services", link: "#" },
      ],
    },
    { name: "Contact", link: "#" },
  ];
  const menuItems3 = [
    {
      title: "Development",
      items: [
        { name: "Web Development", link: "#" },
        { name: "App Development", link: "#" },
        { name: "Software Development", link: "#" },
      ],
    },
    {
      title: "Marketing",
      items: [
        { name: "SEO Services", link: "#" },
        { name: "Social Media Marketing", link: "#" },
        { name: "Email Marketing", link: "#" },
      ],
    },
    {
      title: "Design",
      items: [
        { name: "UI/UX Design", link: "#" },
        { name: "Graphic Design", link: "#" },
        { name: "Branding", link: "#" },
      ],
    },
  ];
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
  const [activeTab, setActiveTab] = useState(0);

  const TabsStyles = [
    {
      Jsx: `
import { useState } from "react";
const [isOpen, setIsOpen] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);  
const menuItems = ["Home", "About", "Services", "Contact"];
      `,
      Code: `
      <header className="bg-white text-black h-[77px] flex items-center shadow-[0_3px_15px_#0000000f] ">
              <div className=" mx-auto relative flex justify-between items-center px-[40px] w-full">
                <h1 className="text-2xl font-bold">
                  <Image
                    src="/assets/img/moglix_logo_red@3x.webp"
                    width={100}
                    height={35}
                    alt="Picture of the author"
                  />
                </h1>
                 {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <i className="ri-close-line text-2xl"></i> : <i className="ri-menu-line text-2xl"></i>}
        </button>
                <nav className={\u0060absolute flex-col bg-white m-0 items-start lg:flex-row lg:relative top-[60px] shadow-[0_3px_15px_#0000000f] lg:shadow-none lg:top-0 left-0 flex lg:ml-[80px] w-full lg:items-center \u0024{menuOpen ? "flex" : "hidden lg:flex"}\u0060}>
                  <a  className="p-3 mr-[10px] cursor-pointer w-full lg:w-auto text-[14px] leading-[24px] font-medium">
                    Company
                  </a>
                  <div
                    className="relative p-3 mr-[10px] w-full lg:w-auto cursor-pointer"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                  >
                    <button className="focus:outline-none text-[14px] leading-[24px] flex items-center font-medium">Marketplace 
                    <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
                    </button>
                    {isOpen && (
                      <ul className="absolute left-0 mt-2 bg-white text-black shadow-md rounded-lg w-40">
                          {menuItems.map((item, index) => (
                  <li key={index} className="px-4 py-2 text-[14px] leading-[24px] font-medium cursor-pointer hover:bg-[#0000000a]">
                    <a href="#">{item}</a>
                  </li>
                ))}
                        
                      </ul>
                    )}
                  </div>
                  <a  className="p-3 mr-[10px] cursor-pointer w-full lg:w-auto text-[14px] leading-[24px] font-medium">
                    Features
                  </a>
                  <a  className="p-3 mr-[10px] cursor-pointer w-full lg:w-auto text-[14px] leading-[24px] font-medium">
                    Team
                  </a>
                  <a  className="p-3 mr-[10px] cursor-pointer w-full lg:w-auto text-[14px] leading-[24px] font-medium">
                    Contact
                  </a>
                  <a className="p-3 mr-[10px] cursor-pointer w-full lg:w-auto text-[14px] leading-[24px] font-medium">
                    Contact
                  </a>
                  <a className="lg:ml-auto cursor-pointer w-full lg:w-auto p-3 mr-[10px] text-[14px] leading-[24px] font-medium">
                    Login
                  </a>
                  <button type="button" className="bg-[#0881fd] m-3 h-[33px] min-w-[30px] rounded tracking-[unset]
      text-white leading-[6px] flex items-center justify-center 
       
       px-4 py-1.5 focus-visible:outline 
      focus-visible:outline-2 hover:bg-[#288bed]
     focus-visible:outline-atom_jordyblue disabled:bg-[#d7d7dc] disabled:text-white
      disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
     font-medium text-sm">
 Get Started 
</button>

                </nav>
              </div>
            </header>`

      ,
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
    }
  ];

  const TabsStyles2 = [
    {
      Jsx: `
  const [isOpen2, setIsOpen2] = useState(false);
  const [menuOpen2, setMenuOpen2] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(null);
  const [thirdLevelOpen, setThirdLevelOpen] = useState(null);
  

 const menuItems2 = [
    { name: "Home", link: "#" },
    { name: "About", link: "#" },
    {
      name: "Services",
      link: "#",
      subMenu: [
        {
          name: "Web Development",
          link: "#",
          subMenu: [
            { name: "Frontend", link: "#" },
            { name: "Backend", link: "#" },
          ],
        },
        { name: "App Development", link: "#" },
        { name: "SEO Services", link: "#" },
      ],
    },
    { name: "Contact", link: "#" },
  ];
      `,
      Code: `
       <header className="bg-white text-black h-[77px] flex items-center shadow-[0_3px_15px_#0000000f] ">
              <div className=" mx-auto relative flex justify-between items-center px-[40px] w-full">
                <h1 className="text-2xl font-bold">
                  <Image
                    src="/assets/img/moglix_logo_red@3x.webp"
                    width={100}
                    height={35}
                    alt="Picture of the author"
                  />
                </h1>
                 {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setMenuOpen2(!menuOpen2)}
        >
          {menuOpen2 ? <i className="ri-close-line text-2xl"></i> : <i className="ri-menu-line text-2xl"></i>}
        </button>
                <nav className={\u0060absolute flex-col bg-white m-0 items-start lg:flex-row lg:relative top-[60px] shadow-[0_3px_15px_#0000000f] lg:shadow-none lg:top-0 left-0 flex lg:ml-[80px] w-full lg:items-center \u0024{menuOpen ? "flex" : "hidden lg:flex"}\u0060}>
                  <a  className="p-3 mr-[10px] cursor-pointer w-full lg:w-auto text-[14px] leading-[24px] font-medium">
                    Company
                  </a>
                  <div
                    className="relative p-3 mr-[10px] w-full lg:w-auto cursor-pointer"
                    onMouseEnter={() => setIsOpen2(true)}
                    onMouseLeave={() => setIsOpen2(false)}
              
                  >
                    <button className="focus:outline-none text-[14px] leading-[24px] flex items-center font-medium">Marketplace 
                    <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
                    </button>
                    {isOpen2 && (
                      <ul className="absolute left-0 mt-2 bg-white text-black shadow-md rounded-lg min-w-[180px]">
                 {menuItems2.map((item, index) => (
                  <li key={index} className="relative px-4 py-2 text-[14px] leading-[24px] font-medium cursor-pointer hover:bg-[#0000000a] flex justify-between">
                    <a href={item.link}>{item.name}</a>
                    {item.subMenu && (
                      <div className="absolute w-full right-0 left-auto h-full group" onMouseEnter={() => setSubMenuOpen(index)} onMouseLeave={() => setSubMenuOpen(null)} >
                        <span className="ml-2 font-semibold absolute right-[4px]"><i class="ri-arrow-right-s-line"></i></span>
                        {subMenuOpen === index && (
                          <ul className="absolute left-full top-0 mt-0 bg-white text-black shadow-md rounded-lg min-w-[180px]">
                            {item.subMenu.map((subItem, subIndex) => (
                              <li key={subIndex} className="relative px-4 py-2 text-[14px] leading-[24px] font-medium cursor-pointer hover:bg-[#0000000a] flex justify-between">
                                <a href={subItem.link}>{subItem.name}</a>
                                {subItem.subMenu && (
                                  <div className="absolute w-full right-0 left-auto h-full group" onMouseEnter={() => setThirdLevelOpen(subIndex)} onMouseLeave={() => setThirdLevelOpen(null)} >
                                    <span className="ml-2 font-semibold absolute right-[4px]"><i class="ri-arrow-right-s-line"></i></span>
                                    {thirdLevelOpen === subIndex && (
                                      <ul className="absolute left-full top-0 mt-0 bg-white text-black shadow-md rounded-lg min-w-[180px]">
                                        {subItem.subMenu.map((thirdItem, thirdIndex) => (
                                          <li key={thirdIndex} className="px-4 py-2 text-[14px] leading-[24px] font-medium cursor-pointer hover:bg-[#0000000a]">
                                            <a href={thirdItem.link}>{thirdItem.name}</a>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </div>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </li>
                ))}
                      </ul>
                    )}
                  </div>
                  <a  className="p-3 mr-[10px] cursor-pointer w-full lg:w-auto text-[14px] leading-[24px] font-medium">
                    Features
                  </a>
                  <a  className="p-3 mr-[10px] cursor-pointer w-full lg:w-auto text-[14px] leading-[24px] font-medium">
                    Team
                  </a>
                  <a  className="p-3 mr-[10px] cursor-pointer w-full lg:w-auto text-[14px] leading-[24px] font-medium">
                    Contact
                  </a>
                  <a className="p-3 mr-[10px] cursor-pointer w-full lg:w-auto text-[14px] leading-[24px] font-medium">
                    Contact
                  </a>
                  <a className="lg:ml-auto cursor-pointer w-full lg:w-auto p-3 mr-[10px] text-[14px] leading-[24px] font-medium">
                  (+91) - 9999-333-222
                  </a>
                  <a className="text-[#3067e9] relative cursor-pointer w-full lg:w-auto p-3 mr-[10px] text-[16px] leading-[24px] font-medium fter:content-[''] after:border-r-2 after:top-[12px] after:absolute after:border-gray-300 after:h-[21px] after:inline-block after:mx-[15px]">
                  Contact Us 
                  </a>
                  <a className="text-[#3067e9] cursor-pointer w-full lg:w-auto p-3 mr-[10px] text-[16px] leading-[24px] font-medium">
                  Log In 
                  </a>
                </nav>
              </div>
            </header>`

      ,
    },
  ];

  const TabsStyles3 = [
    {
      Jsx: `
     const [isOpen3, setIsOpen3] = useState(false);
  const [menuOpen3, setMenuOpen3] = useState(false);
  const [subMenuOpen3, setSubMenuOpen3] = useState(null);
  const [thirdLevelOpen3, setThirdLevelOpen3] = useState(null);
      `,
      Code: `
      <header className="bg-white text-black h-[77px] flex items-center shadow-[0_3px_15px_#0000000f] min-w-[1200px]">
              <div className=" mx-auto relative flex justify-between items-center px-[40px] w-full">
                <h1 className="text-2xl font-bold">
                  <Image
                    src="/assets/img/moglix_logo_red@3x.webp"
                    width={100}
                    height={35}
                    alt="Picture of the author"
                  />
                </h1>
                 {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setMenuOpen3(!menuOpen3)}
        >
          {menuOpen3 ? <i className="ri-close-line text-2xl"></i> : <i className="ri-menu-line text-2xl"></i>}
        </button>
                <nav className={\u0060absolute flex-col bg-white m-0 items-start lg:flex-row lg:relative top-[60px] shadow-[0_3px_15px_#0000000f] lg:shadow-none lg:top-0 left-0 flex lg:ml-[80px] w-full lg:items-center \u0024{menuOpen ? "flex" : "hidden lg:flex"}\u0060}>
                  <a  className="p-3 mr-[10px] cursor-pointer w-full lg:w-auto text-[14px] leading-[24px] font-medium">
                    Company
                  </a>
                  <div
                    className="relative p-3 mr-[10px] w-full lg:w-auto cursor-pointer z-[1000]"
                    onMouseEnter={() => setIsOpen3(true)} onMouseLeave={() => setIsOpen3(false)}
                 
              
                  >
                    <button className="focus:outline-none text-[14px] leading-[24px] flex items-center font-medium">Marketplace 
                    <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
                    </button>
                    {isOpen3 && (
                       <div className="absolute left-0 mt-2 bg-white text-black shadow-md rounded-lg w-[735px] p-4 grid grid-cols-3 gap-4">
                       {menuItems3.map((category, index) => (
                         <div key={index}>
                           <h4 className=" text-xs leading-5 font-medium m-[10px] mb-2">{category.title}</h4>
                           <ul>
                             {category.items.map((item, itemIndex) => (
                               <li key={itemIndex} className="py-1 text-[14px] leading-[24px] font-normal  cursor-pointer hover:bg-[#0000000a] px-3 rounded">
                                 <a className="text-[#3a3a3a]" href={item.link}>{item.name}</a>
                               </li>
                             ))}
                           </ul>
                         </div>
                       ))}
                     </div>
                    )}
                  </div>
                  <a  className="p-3 mr-[10px] cursor-pointer w-full lg:w-auto text-[14px] leading-[24px] font-medium">
                    Features
                  </a>
                  <a  className="p-3 mr-[10px] cursor-pointer w-full lg:w-auto text-[14px] leading-[24px] font-medium">
                    Team
                  </a>
                  <a  className="p-3 mr-[10px] cursor-pointer w-full lg:w-auto text-[14px] leading-[24px] font-medium">
                    Contact
                  </a>
                  <a className="p-3 mr-[10px] cursor-pointer w-full lg:w-auto text-[14px] leading-[24px] font-medium">
                    Contact
                  </a>
                  <a className="lg:ml-auto text-[#3067e9] relative cursor-pointer w-full lg:w-auto p-3 mr-0 text-[20px] leading-[24px] font-medium ">
                  <i  class="ri-moon-line"></i>
                  </a>
                  <a className="text-[#3067e9] relative cursor-pointer w-full lg:w-auto p-3 mr-[10px] text-[20px] leading-[24px] font-medium after:content-[''] after:border-r-2 after:top-[12px] after:absolute after:border-gray-300 after:h-[21px] after:inline-block after:mx-[15px]">
                  <i  class="ri-user-line"></i>
                  </a>
                  <a className="text-[#3067e9] cursor-pointer w-full lg:w-auto p-3 mr-[10px] text-[16px] leading-[24px] font-medium">
                  Log In 
                  </a>
                </nav>
              </div>
            </header>
       `

      ,
    },
  ];
  const tabs2 = [
    {
      name: "HTML",
      current: true,
      content: `  
      ${TabsStyles2[0].Code}
      `,
    },
    {
      name: "JSX",
      current: false,
      content: `
      ${TabsStyles2[0].Jsx}
     `,
    }
  ];
  const tabs3 = [
    {
      name: "HTML",
      current: true,
      content: `  
      ${TabsStyles3[0].Code}
      `,
    },
    {
      name: "JSX",
      current: false,
      content: `
      ${TabsStyles3[0].Jsx}
     `,
    }
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const [CopyCodeToolipMessage, setCopyCodeToolipMessage] = useState(
    "Click here to Copy Code"
  );
  const [showCode, setShowCode] = useState(false);
  const [showCode2, setShowCode2] = useState(false);
  const [showCode3, setShowCode3] = useState(false);
  const [CopyCodeLinkToolipMessage, setCopyLinkToolipMessage] = useState(
    "Link Copy to Clipboard"
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

  return (
    <main>
      <Breadcrumb
        breadcrumbs={breadcrumbs}
        lastChildMentioned="Header"
      />
      <div className=" bg-white m-5 mb-10">
        
          <div className="border min-h-[350px] border-atom_silver rounded p-5 mb-5 overflow-auto" id="headerWithDropdownMNenu">
            <div className="flex items-center justify-between mb-0">
              <h3 className="text-lg leading-[32px] mb-[15px] text-atom_dimgray">
                Header with dropdown menu
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
            {/* <p className="mb-5">Start by installing react-select and using command <strong>npm i --save react-select </strong> </p> */}
            <div className="mb-2">
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
                      className="text-atom_sunglow text-base bg-black p-5 flex justify-between whitespace-break-spaces "
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
            <header className="bg-white text-black h-[77px] flex items-center shadow-[0_3px_15px_#0000000f] min-w-[1200px]">
              <div className=" mx-auto relative flex justify-between items-center px-[40px] w-full">
                <h1 className="text-2xl font-bold">
                  <Image
                    src="/assets/img/moglix_logo_red@3x.webp"
                    width={100}
                    height={35}
                    alt="Picture of the author"
                  />
                </h1>
                 {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <i className="ri-close-line text-2xl"></i> : <i className="ri-menu-line text-2xl"></i>}
        </button>
                <nav className={`absolute flex-col bg-white m-0 items-start lg:flex-row lg:relative top-[60px] shadow-[0_3px_15px_#0000000f] lg:shadow-none lg:top-0 left-0 flex lg:ml-[80px] w-full lg:items-center ${menuOpen ? "flex" : "hidden lg:flex"}`}>
                  <a  className="p-3 mr-[10px] cursor-pointer w-full lg:w-auto text-[14px] leading-[24px] font-medium">
                    Company
                  </a>
                  <div
                    className="relative p-3 mr-[10px] w-full lg:w-auto cursor-pointer"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                  >
                    <button className="focus:outline-none text-[14px] leading-[24px] flex items-center font-medium">Marketplace 
                    <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
                    </button>
                    {isOpen && (
                      <ul className="absolute left-0 mt-2 bg-white text-black shadow-md rounded-lg w-40">
                        {menuItems.map((item, index) => (
                  <li key={index} className="px-4 py-2 text-[14px] leading-[24px] font-medium cursor-pointer hover:bg-[#0000000a]">
                    <a href="#">{item}</a>
                  </li>
                ))}
                      </ul>
                    )}
                  </div>
                  <a  className="p-3 mr-[10px] cursor-pointer w-full lg:w-auto text-[14px] leading-[24px] font-medium">
                    Features
                  </a>
                  <a  className="p-3 mr-[10px] cursor-pointer w-full lg:w-auto text-[14px] leading-[24px] font-medium">
                    Team
                  </a>
                  <a  className="p-3 mr-[10px] cursor-pointer w-full lg:w-auto text-[14px] leading-[24px] font-medium">
                    Contact
                  </a>
                  <a className="p-3 mr-[10px] cursor-pointer w-full lg:w-auto text-[14px] leading-[24px] font-medium">
                    Contact
                  </a>
                  <a className="lg:ml-auto cursor-pointer w-full lg:w-auto p-3 mr-[10px] text-[14px] leading-[24px] font-medium">
                    Login
                  </a>
                  <button type="button" className="bg-[#0881fd] m-3 h-[33px] min-w-[30px] rounded tracking-[unset]
      text-white leading-[6px] flex items-center justify-center 
       
       px-4 py-1.5 focus-visible:outline 
      focus-visible:outline-2 hover:bg-[#288bed]
     focus-visible:outline-atom_jordyblue disabled:bg-[#d7d7dc] disabled:text-white
      disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
     font-medium text-sm">
 Get Started 
</button>

                </nav>
              </div>
            </header>
          </div>

          <div className="border min-h-[400px] border-atom_silver rounded p-5 mb-5 overflow-auto" id="headerWithMultipleDropdownMenu">
            <div className="flex items-center justify-between mb-0">
              <h3 className="text-lg leading-[32px] mb-[15px] text-atom_dimgray">
                Header with multiple level dropdown menu
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
            {/* <p className="mb-5">Start by installing react-select and using command <strong>npm i --save react-select </strong> </p> */}
            <div className="mb-2">
              {showCode2 && (
                <>
                  <div className="block sm:hidden">
                    <div className="border-b border-gray-200">
                      <nav className="-mb-px flex " aria-label="Tabs">
                        {tabs2.map((tab, index) => (
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
                      className="text-atom_sunglow text-base bg-black p-5 flex justify-between whitespace-break-spaces "
                      id="AllAlertCode"
                    >
                      {tabs2[activeTab].content}
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
            <header className="bg-white text-black h-[77px] flex items-center shadow-[0_3px_15px_#0000000f] min-w-[1200px]">
              <div className=" mx-auto relative flex justify-between items-center px-[40px] w-full">
                <h1 className="text-2xl font-bold">
                  <Image
                    src="/assets/img/moglix_logo_red@3x.webp"
                    width={100}
                    height={35}
                    alt="Picture of the author"
                  />
                </h1>
                 {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setMenuOpen2(!menuOpen2)}
        >
          {menuOpen2 ? <i className="ri-close-line text-2xl"></i> : <i className="ri-menu-line text-2xl"></i>}
        </button>
                <nav className={`absolute flex-col bg-white m-0 items-start lg:flex-row lg:relative top-[60px] shadow-[0_3px_15px_#0000000f] lg:shadow-none lg:top-0 left-0 flex lg:ml-[80px] w-full lg:items-center ${menuOpen ? "flex" : "hidden lg:flex"}`}>
                  <a  className="p-3 mr-[10px] cursor-pointer w-full lg:w-auto text-[14px] leading-[24px] font-medium">
                    Company
                  </a>
                  <div
                    className="relative p-3 mr-[10px] w-full lg:w-auto cursor-pointer z-[1000]"
                    onMouseEnter={() => setIsOpen2(true)}
                    onMouseLeave={() => setIsOpen2(false)}
              
                  >
                    <button className="focus:outline-none text-[14px] leading-[24px] flex items-center font-medium">Marketplace 
                    <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
                    </button>
                    {isOpen2 && (
                      <ul className="absolute left-0 mt-2 bg-white text-black shadow-md rounded-lg min-w-[180px]">
                 {menuItems2.map((item, index) => (
                  <li key={index} className="relative px-4 py-2 text-[14px] leading-[24px] font-medium cursor-pointer hover:bg-[#0000000a] flex justify-between">
                    <a href={item.link}>{item.name}</a>
                    {item.subMenu && (
                      <div className="absolute w-full right-0 left-auto h-full group" onMouseEnter={() => setSubMenuOpen(index)} onMouseLeave={() => setSubMenuOpen(null)} >
                        <span className="ml-2 font-semibold absolute right-[4px]"><i class="ri-arrow-right-s-line"></i></span>
                        {subMenuOpen === index && (
                          <ul className="absolute left-full top-0 mt-0 bg-white text-black shadow-md rounded-lg min-w-[180px]">
                            {item.subMenu.map((subItem, subIndex) => (
                              <li key={subIndex} className="relative px-4 py-2 text-[14px] leading-[24px] font-medium cursor-pointer hover:bg-[#0000000a] flex justify-between">
                                <a href={subItem.link}>{subItem.name}</a>
                                {subItem.subMenu && (
                                  <div className="absolute w-full right-0 left-auto h-full group" onMouseEnter={() => setThirdLevelOpen(subIndex)} onMouseLeave={() => setThirdLevelOpen(null)} >
                                    <span className="ml-2 font-semibold absolute right-[4px]"><i class="ri-arrow-right-s-line"></i></span>
                                    {thirdLevelOpen === subIndex && (
                                      <ul className="absolute left-full top-0 mt-0 bg-white text-black shadow-md rounded-lg min-w-[180px]">
                                        {subItem.subMenu.map((thirdItem, thirdIndex) => (
                                          <li key={thirdIndex} className="px-4 py-2 text-[14px] leading-[24px] font-medium cursor-pointer hover:bg-[#0000000a]">
                                            <a href={thirdItem.link}>{thirdItem.name}</a>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </div>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </li>
                ))}
                      </ul>
                    )}
                  </div>
                  <a  className="p-3 mr-[10px] cursor-pointer w-full lg:w-auto text-[14px] leading-[24px] font-medium">
                    Features
                  </a>
                  <a  className="p-3 mr-[10px] cursor-pointer w-full lg:w-auto text-[14px] leading-[24px] font-medium">
                    Team
                  </a>
                  <a  className="p-3 mr-[10px] cursor-pointer w-full lg:w-auto text-[14px] leading-[24px] font-medium">
                    Contact
                  </a>
                  <a className="p-3 mr-[10px] cursor-pointer w-full lg:w-auto text-[14px] leading-[24px] font-medium">
                    Contact
                  </a>
                  <a className="lg:ml-auto cursor-pointer w-full lg:w-auto p-3 mr-[10px] text-[14px] leading-[24px] font-medium">
                  (+91) - 9999-333-222
                  </a>
                  <a className="text-[#3067e9] relative cursor-pointer w-full lg:w-auto p-3 mr-[10px] text-[16px] leading-[24px] font-medium fter:content-[''] after:border-r-2 after:top-[12px] after:absolute after:border-gray-300 after:h-[21px] after:inline-block after:mx-[15px]">
                  Contact Us 
                  </a>
                  <a className="text-[#3067e9] cursor-pointer w-full lg:w-auto p-3 mr-[10px] text-[16px] leading-[24px] font-medium">
                  Log In 
                  </a>
                </nav>
              </div>
            </header>
          </div>

          <div className="border min-h-[350px] border-atom_silver rounded p-5 overflow-auto" id="headerWithMegaMenu">
            <div className="flex items-center justify-between mb-0">
              <h3 className="text-lg leading-[32px] mb-[15px] text-atom_dimgray">
                Header with mega menu
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
            {/* <p className="mb-5">Start by installing react-select and using command <strong>npm i --save react-select </strong> </p> */}
            <div className="mb-2">
              {showCode3 && (
                <>
                  <div className="block sm:hidden">
                    <div className="border-b border-gray-200">
                      <nav className="-mb-px flex " aria-label="Tabs">
                        {tabs3.map((tab, index) => (
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
                      className="text-atom_sunglow text-base bg-black p-5 flex justify-between whitespace-break-spaces "
                      id="AllAlertCode"
                    >
                      {tabs3[activeTab].content}
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
            <header className="bg-white text-black h-[77px] flex items-center shadow-[0_3px_15px_#0000000f] min-w-[1200px]">
              <div className=" mx-auto relative flex justify-between items-center px-[40px] w-full">
                <h1 className="text-2xl font-bold">
                  <Image
                    src="/assets/img/moglix_logo_red@3x.webp"
                    width={100}
                    height={35}
                    alt="Picture of the author"
                  />
                </h1>
                 {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setMenuOpen3(!menuOpen3)}
        >
          {menuOpen3 ? <i className="ri-close-line text-2xl"></i> : <i className="ri-menu-line text-2xl"></i>}
        </button>
                <nav className={`absolute flex-col bg-white m-0 items-start lg:flex-row lg:relative top-[60px] shadow-[0_3px_15px_#0000000f] lg:shadow-none lg:top-0 left-0 flex lg:ml-[80px] w-full lg:items-center ${menuOpen ? "flex" : "hidden lg:flex"}`}>
                  <a  className="p-3 mr-[10px] cursor-pointer w-full lg:w-auto text-[14px] leading-[24px] font-medium">
                    Company
                  </a>
                  <div
                    className="relative p-3 mr-[10px] w-full lg:w-auto cursor-pointer z-[1000]"
                    onMouseEnter={() => setIsOpen3(true)} onMouseLeave={() => setIsOpen3(false)}
                 
              
                  >
                    <button className="focus:outline-none text-[14px] leading-[24px] flex items-center font-medium">Marketplace 
                    <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
                    </button>
                    {isOpen3 && (
                       <div className="absolute left-0 mt-2 bg-white text-black shadow-md rounded-lg w-[735px] p-4 grid grid-cols-3 gap-4">
                       {menuItems3.map((category, index) => (
                         <div key={index}>
                           <h4 className=" text-xs leading-5 font-medium m-[10px] mb-2">{category.title}</h4>
                           <ul>
                             {category.items.map((item, itemIndex) => (
                               <li key={itemIndex} className="py-1 text-[14px] leading-[24px] font-normal  cursor-pointer hover:bg-[#0000000a] px-3 rounded">
                                 <a className="text-[#3a3a3a]" href={item.link}>{item.name}</a>
                               </li>
                             ))}
                           </ul>
                         </div>
                       ))}
                     </div>
                    )}
                  </div>
                  <a  className="p-3 mr-[10px] cursor-pointer w-full lg:w-auto text-[14px] leading-[24px] font-medium">
                    Features
                  </a>
                  <a  className="p-3 mr-[10px] cursor-pointer w-full lg:w-auto text-[14px] leading-[24px] font-medium">
                    Team
                  </a>
                  <a  className="p-3 mr-[10px] cursor-pointer w-full lg:w-auto text-[14px] leading-[24px] font-medium">
                    Contact
                  </a>
                  <a className="p-3 mr-[10px] cursor-pointer w-full lg:w-auto text-[14px] leading-[24px] font-medium">
                    Contact
                  </a>
                  <a className="lg:ml-auto text-[#3067e9] relative cursor-pointer w-full lg:w-auto p-3 mr-0 text-[20px] leading-[24px] font-medium ">
                  <i  class="ri-moon-line"></i>
                  </a>
                  <a className="text-[#3067e9] relative cursor-pointer w-full lg:w-auto p-3 mr-[10px] text-[20px] leading-[24px] font-medium after:content-[''] after:border-r-2 after:top-[12px] after:absolute after:border-gray-300 after:h-[21px] after:inline-block after:mx-[15px]">
                  <i  class="ri-user-line"></i>
                  </a>
                  <a className="text-[#3067e9] cursor-pointer w-full lg:w-auto p-3 mr-[10px] text-[16px] leading-[24px] font-medium">
                  Log In 
                  </a>
                </nav>
              </div>
            </header>
          </div>
      </div>
    </main>
  );
}
