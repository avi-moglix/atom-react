import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from 'next/router';

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Tooltip from "../../../components/reusable/Tooltip";
import Breadcrumb from "../../../components/reusable/Breadcrumb";



// Tabs common tabsName
const TabNames = [
  {
    id: "0",
    name: "Tab Name",
    current: true,
  },
  {
    id: "1",
    name: "Tab Name",
    current: false,
  },
  {
    id: "2",
    name: "Tab Name",
    current: false,
  },
];
export default function tabAccordions() {
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
  const breadcrumbs = [
    { name: "Home", isLast: false, path: '/' },
    { name: "Web Components", isLast: false, path: '/web' },
    { name: "Tabs", isLast: true },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [activeSectionTab, setSectionTab] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [activeTab2, setActiveTab2] = useState(0);

  const [defaultTabAllRadius, setDefaultTabAllRadius] = useState(0);
  const [defaultTabTopRadius, setDefaultTabTopRadius] = useState(0);
  const [defaultTabNoRadius, setDefaultTabNoRadius] = useState(0);
  const [defaultTabLeftRightRadius, setdefaultTabLeftRightRadius] = useState(0);
  const [defaultTabRoundedRadius, setDefaultTabRoundedRadius] = useState(0);
  const [UnderLineTabBackground, setUnderLineTabBackground] = useState(0);
  const [DualLineTabTopRadius, setDualLineTabTopRadius] = useState(0);

  const SectionhandleTabClick = (index) => {
    setSectionTab(index);
  };
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const handleTabClick2 = (index) => {
    setActiveTab2(index);
  };
  const [CopyCodeToolipMessage, setCopyCodeToolipMessage] = useState(
    "Click here to Copy Code"
  );
  const [showCode, setShowCode] = useState(false);
  const [CopyCodeLinkToolipMessage, setCopyLinkToolipMessage] = useState(
    "Link Copy to Clipboard"
  );

  const [showCode2, setShowCode2] = useState(false);


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
  const TabsStyles = [
    {
      TabsName: "defaultTabAllRadius",
      JSXname: "defaultTabAllRadiusJSX",
      Jsx: `// import this before component function start remove it if already imported
      import{ useState } from "react";
      
      // import this after component function start 
        const [defaultTabAllRadius, setDefaultTabAllRadius] = useState(0);
      
      const TabNames = [
        {
          id:"0",
          name: "Tab Name",
          current: true,
        },
        {
          id:"1",
          name: "Tab Name",
          current: false,
        },
        {
          id:"2",
          name: "Tab Name",
          current: false,
        },
      ];
      
      
        function classNames(...classes) {
          return classes.filter(Boolean).join(" ");
        }`,
      Code: `
      <div className="hidden sm:block">
      <label htmlFor="tabs" className="sr-only">
        Select a tab
      </label>
      {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
      <select
        id="tabs"
        name="tabs"
        className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        onChange={() => setDefaultTabAllRadius( ()=>{ TabNames.find((tab) => tab.current)
          .id})}
        defaultValue={
          TabNames.find((tab) => tab.current)
            .name
        }
      >
        {TabNames.map((tab,index) => (
          <option key={tab.name} >{tab.name}</option>
        ))}
      </select>
    </div>
    <div className="block sm:hidden">
      <nav className="flex space-x-4" aria-label="Tabs">
        {TabNames.map((tab,index) => (
          <a
            key={tab.name}
            href={tab.href}
            onClick={() => setDefaultTabAllRadius(index)}
            className={classNames(
              index === defaultTabAllRadius
                ? "bg-atom_rojored text-atom_white font-medium [box-shadow:0px_3px_6px_0px_#00000000]"
                : "text-atom_onxyblack border border-atom_silver hover:text-gray-700 font-meduim [box-shadow:0px_3px_6px_0px_#00000025]",
              "rounded-md p-2.5 text-sm   cursor-pointer "
            )}
            aria-current={ index === defaultTabAllRadius ? "page" : undefined}
          >
            <i className={classNames(
              index === defaultTabAllRadius
                ? "text-white border-0 "
                : "text-gray-500 hover:text-gray-700",
              "text-atom_onxyblack ri-user-fill mr-2.5"
            )}
            
            ></i>
            {tab.name}
          </a>
        ))}
      </nav>
    </div>

    {defaultTabAllRadius == 0 && ( <>
      <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
        <p className="text-sm font-medium text-atom_onxyblack">Content Tab 1</p>
      </div>
    </>)}
    {defaultTabAllRadius == 1 && ( <>
      <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
        <p className="text-sm font-medium text-atom_onxyblack">Content Tab 2</p>
      </div>
    </>)}
    {defaultTabAllRadius == 2 && ( <>
      <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
        <p className="text-sm font-medium text-atom_onxyblack">Content Tab 3</p>
      </div>
    </>)}
     
      `,
    },
    {
      TabsName: "defaultTabTopRadius",
      JSXname: "defaultTabTopRadiusJSX",
      Jsx: `// import this before component function start remove it if already imported
      import{ useState } from "react";
      
      // import this after component function start 
      const [defaultTabTopRadius, setDefaultTabTopRadius] = useState(0);
      
      const TabNames = [
        {
          id:"0",
          name: "Tab Name",
          current: true,
        },
        {
          id:"1",
          name: "Tab Name",
          current: false,
        },
        {
          id:"2",
          name: "Tab Name",
          current: false,
        },
      ];
      
      
        function classNames(...classes) {
          return classes.filter(Boolean).join(" ");
        }`,
      Code: `
      <div className="hidden sm:block">
      <label htmlFor="tabs" className="sr-only">
        Select a tab
      </label>
      {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
      <select
        id="tabs"
        name="tabs"
        className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        
        defaultValue={
          TabNames.find((tab) => tab.current)
            .name
        }
      >
        {TabNames.map((tab,index) => (
          <option key={tab.name} onClick={() => setDefaultTabTopRadius(index)}>{tab.name}</option>
        ))}
      </select>
    </div>
    <div className="block sm:hidden">
      <nav className="flex space-x-4" aria-label="Tabs">
        {TabNames.map((tab,index) => (
          <a
            key={tab.name}
            href={tab.href}
            onClick={() => setDefaultTabTopRadius(index)}
            className={classNames(
              index === defaultTabTopRadius
              ? "bg-atom_rojored text-atom_white font-medium [box-shadow:0px_3px_6px_0px_#00000000]"
              : "text-atom_onxyblack border border-atom_silver hover:text-gray-700 font-meduim [box-shadow:0px_3px_6px_0px_#00000025]",
            "rounded-t-md p-2.5 text-sm   cursor-pointer "
            )}
            aria-current={ index === defaultTabTopRadius ? "page" : undefined}
          >
             <i className={classNames(
              index === defaultTabTopRadius
                ? "text-white border-0 "
                : "text-gray-500 hover:text-gray-700",
              "text-atom_onxyblack ri-user-fill mr-2.5"
            )}
            
            ></i>
            {tab.name}
          </a>
        ))}
      </nav>
    </div>
   
    {defaultTabTopRadius == 0 && ( <>
      <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
        <p className="text-sm font-medium text-atom_onxyblack">Content Tab 1</p>
      </div>
    </>)}
    {defaultTabTopRadius == 1 && ( <>
      <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
        <p className="text-sm font-medium text-atom_onxyblack">Content Tab 2</p>
      </div>
    </>)}
    {defaultTabTopRadius == 2 && ( <>
      <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
        <p className="text-sm font-medium text-atom_onxyblack">Content Tab 3</p>
      </div>
    </>)}

     
      `,
    },
    {
      TabsName: "defaultTabNoRadius",
      JSXname: "defaultTabNoRadiusJSX",
      Jsx: `// import this before component function start remove it if already imported
      import{ useState } from "react";
      
      // import this after component function start 
      const [defaultTabNoRadius, setDefaultTabNoRadius] = useState(0);
      
      const TabNames = [
        {
          id:"0",
          name: "Tab Name",
          current: true,
        },
        {
          id:"1",
          name: "Tab Name",
          current: false,
        },
        {
          id:"2",
          name: "Tab Name",
          current: false,
        },
      ];
      
      
        function classNames(...classes) {
          return classes.filter(Boolean).join(" ");
        }`,
      Code: `

      <div className="hidden sm:block">
      <label htmlFor="tabs" className="sr-only">
        Select a tab
      </label>
      {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
      <select
        id="tabs"
        name="tabs"
        className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        
        defaultValue={
          TabNames.find((tab) => tab.current)
            .name
        }
      >
        {TabNames.map((tab,index) => (
          <option key={tab.name} onClick={() => setDefaultTabNoRadius(index)}>{tab.name}</option>
        ))}
      </select>
    </div>
    <div className="block sm:hidden">
      <nav className="flex space-x-4" aria-label="Tabs">
        {TabNames.map((tab,index) => (
          <a
            key={tab.name}
            href={tab.href}
            onClick={() => setDefaultTabNoRadius(index)}
            className={classNames(
              index === defaultTabNoRadius
              ? "bg-atom_rojored text-atom_white font-medium [box-shadow:0px_3px_6px_0px_#00000000]"
              : "text-atom_onxyblack border border-atom_silver hover:text-gray-700 font-meduim [box-shadow:0px_3px_6px_0px_#00000025]",
            " p-2.5 text-sm   cursor-pointer "
            )}
            aria-current={ index === defaultTabNoRadius ? "page" : undefined}
          >
               <i className={classNames(
              index === defaultTabNoRadius
                ? "text-white border-0 "
                : "text-gray-500 hover:text-gray-700",
              "text-atom_onxyblack ri-user-fill mr-2.5"
            )}
            
            ></i>
            {tab.name}
          </a>
        ))}
      </nav>
    </div>

    {defaultTabNoRadius == 0 && ( <>
      <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
        <p className="text-sm font-medium text-atom_onxyblack">Content Tab 1</p>
      </div>
    </>)}
    {defaultTabNoRadius == 1 && ( <>
      <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
        <p className="text-sm font-medium text-atom_onxyblack">Content Tab 2</p>
      </div>
    </>)}
    {defaultTabNoRadius == 2 && ( <>
      <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
        <p className="text-sm font-medium text-atom_onxyblack">Content Tab 3</p>
      </div>
    </>)}
     
      `,
    },
    {
      TabsName: "defaultTabLeftRightRadius",
      JSXname: "defaultTabLeftRightRadiusJSX",
      Jsx: `// import this before component function start remove it if already imported
      import{ useState } from "react";
      
      // import this after component function start 
      const [defaultTabLeftRightRadius, setdefaultTabLeftRightRadius] = useState(0);
      
      const TabNames = [
        {
          id:"0",
          name: "Tab Name",
          current: true,
        },
        {
          id:"1",
          name: "Tab Name",
          current: false,
        },
        {
          id:"2",
          name: "Tab Name",
          current: false,
        },
      ];
      
      
        function classNames(...classes) {
          return classes.filter(Boolean).join(" ");
        }`,
      Code: `
      <div className="hidden sm:block">
      <label htmlFor="tabs" className="sr-only">
        Select a tab
      </label>
      {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
      <select
        id="tabs"
        name="tabs"
        className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        
        defaultValue={
          TabNames.find((tab) => tab.current)
            .name
        }
      >
        {TabNames.map((tab,index) => (
          <option key={tab.name} onClick={() => setdefaultTabLeftRightRadius(index)}>{tab.name}</option>
        ))}
      </select>
    </div>
    <div className="block sm:hidden">
      <nav className="flex " aria-label="Tabs">
        {TabNames.map((tab,index) => (
          <a
            key={tab.name}
            href={tab.href}
            onClick={() => setdefaultTabLeftRightRadius(index)}
            style={{'borderRadius': index == '0' ? '6px 0px 0px 6px' : index == '1' ? '0' : '0px 6px 6px 0px','borderLeftWidth': index == '1' ? '0px' : '',
            'borderRightWidth': index == '1' ? '0px' : ''
          }}
            className={classNames(
              index === defaultTabLeftRightRadius
              ? "bg-atom_rojored text-atom_white border-atom_rojored font-medium [box-shadow:0px_3px_6px_0px_#00000000]"
              : "text-atom_onxyblack  hover:text-gray-700 font-meduim [box-shadow:0px_3px_6px_0px_#00000025]",
            "rounded-md p-2.5 text-sm cursor-pointer border border-atom_silver"
            )}
            aria-current={ index === defaultTabLeftRightRadius ? "page" : undefined}
          >
                  <i className={classNames(
              index === defaultTabLeftRightRadius
                ? "text-white border-0 "
                : "text-gray-500 hover:text-gray-700",
              "text-atom_onxyblack ri-user-fill mr-2.5"
            )}
            
            ></i>
            {tab.name}
          </a>
        ))}
      </nav>
    </div>

    {defaultTabLeftRightRadius == 0 && ( <>
      <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
        <p className="text-sm font-medium text-atom_onxyblack">Content Tab 1</p>
      </div>
    </>)}
    {defaultTabLeftRightRadius == 1 && ( <>
      <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
        <p className="text-sm font-medium text-atom_onxyblack">Content Tab 2</p>
      </div>
    </>)}
    {defaultTabLeftRightRadius == 2 && ( <>
      <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
        <p className="text-sm font-medium text-atom_onxyblack">Content Tab 3</p>
      </div>
    </>)}
     
      `,
    },
    {
      TabsName: "defaultTabRoundedRadius",
      JSXname: "defaultTabRoundedRadiusJSX",
      Jsx: `// import this before component function start remove it if already imported
      import{ useState } from "react";
      
      // import this after component function start 
      const [defaultTabRoundedRadius, setDefaultTabRoundedRadius] = useState(0);
      
      const TabNames = [
        {
          id:"0",
          name: "Tab Name",
          current: true,
        },
        {
          id:"1",
          name: "Tab Name",
          current: false,
        },
        {
          id:"2",
          name: "Tab Name",
          current: false,
        },
      ];
      
      
        function classNames(...classes) {
          return classes.filter(Boolean).join(" ");
        }`,
      Code: `

      <div className="hidden sm:block">
      <label htmlFor="tabs" className="sr-only">
        Select a tab
      </label>
      {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
      <select
        id="tabs"
        name="tabs"
        className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        
        defaultValue={
          TabNames.find((tab) => tab.current)
            .name
        }
      >
        {TabNames.map((tab,index) => (
          <option key={tab.name} onClick={() => setDefaultTabRoundedRadius(index)}>{tab.name}</option>
        ))}
      </select>
    </div>
    <div className="block sm:hidden">
      <nav className="flex space-x-4" aria-label="Tabs">
        {TabNames.map((tab,index) => (
          <a
            key={tab.name}
            href={tab.href}
            onClick={() => setDefaultTabRoundedRadius(index)}
            className={classNames(
              index === defaultTabRoundedRadius
              ? "bg-atom_rojored text-atom_white font-medium [box-shadow:0px_3px_6px_0px_#00000000]"
              : "text-atom_onxyblack border border-atom_silver hover:text-gray-700 font-meduim [box-shadow:0px_3px_6px_0px_#00000025]",
            "rounded-full p-2.5 text-sm   cursor-pointer "
            )}
            aria-current={ index === defaultTabRoundedRadius ? "page" : undefined}
          >
                  <i className={classNames(
              index === defaultTabRoundedRadius
                ? "text-white border-0 "
                : "text-gray-500 hover:text-gray-700",
              "text-atom_onxyblack ri-user-fill mr-2.5"
            )}
            
            ></i>
            {tab.name}
          </a>
        ))}
      </nav>
    </div>

    {defaultTabRoundedRadius == 0 && ( <>
      <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
        <p className="text-sm font-medium text-atom_onxyblack">Content Tab 1</p>
      </div>
    </>)}
    {defaultTabRoundedRadius == 1 && ( <>
      <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
        <p className="text-sm font-medium text-atom_onxyblack">Content Tab 2</p>
      </div>
    </>)}
    {defaultTabRoundedRadius == 2 && ( <>
      <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
        <p className="text-sm font-medium text-atom_onxyblack">Content Tab 3</p>
      </div>
    </>)}
     
      `,
    },
    {
      TabsName: "UnderLineTabBackground",
      JSXname: "UnderLineTabBackgroundJSX",
      Jsx: `// import this before component function start remove it if already imported
      import{ useState } from "react";
      
      // import this after component function start 
      const [UnderLineTabBackground, setUnderLineTabBackground] = useState(0);
      
      const TabNames = [
        {
          id:"0",
          name: "Tab Name",
          current: true,
        },
        {
          id:"1",
          name: "Tab Name",
          current: false,
        },
        {
          id:"2",
          name: "Tab Name",
          current: false,
        },
      ];
      
      
        function classNames(...classes) {
          return classes.filter(Boolean).join(" ");
        }`,
      Code: `
      <div className="hidden sm:block">
      <label htmlFor="tabs" className="sr-only">
        Select a tab
      </label>
      {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
      <select
        id="tabs"
        name="tabs"
        className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        defaultValue={
          TabNames.find((tab) => tab.current).name
        }
      >
        {TabNames.map((tab, index) => (
          <option
            key={tab.name}
            onClick={() =>
              setUnderLineTabBackground(index)
            }
          >
            {tab.name}
          </option>
        ))}
      </select>
    </div>
    <div className="block sm:hidden">
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex space-x-8" aria-label="Tabs">
        {TabNames.map((tab, index) => (
          <a
            key={tab.name}
            href={tab.href}
            onClick={() =>
              setUnderLineTabBackground(index)
            }
            className={classNames(
              index === UnderLineTabBackground
                ? "border-atom_rojored text-atom_rojored"
                : "border-transparent text-atom_onxyblack hover:border-gray-300 hover:text-gray-700",
              "whitespace-nowrap border-b-2 p-4 text-sm font-medium cursor-pointer"
            )}
            aria-current={
              index === UnderLineTabBackground
                ? "page"
                : undefined
            }
          >
            <i
              className={classNames(
                index === UnderLineTabBackground
                  ? "text-atom_rojored border-0 "
                  : "text-atom_onxyblack hover:text-gray-700",
                "text-atom_onxyblack ri-user-fill mr-2.5"
              )}
            ></i>
            {tab.name}
          </a>
        ))}
      </nav>
      </div>
    </div>
    
    {UnderLineTabBackground == 0 && (
      <>
        <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
          <p className="text-sm font-medium text-atom_onxyblack">
            Content Tab 1
          </p>
        </div>
      </>
    )}
    {UnderLineTabBackground == 1 && (
      <>
        <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
          <p className="text-sm font-medium text-atom_onxyblack">
            Content Tab 2
          </p>
        </div>
      </>
    )}
    {UnderLineTabBackground == 2 && (
      <>
        <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
          <p className="text-sm font-medium text-atom_onxyblack">
            Content Tab 3
          </p>
        </div>
      </>
    )}
    
     
      `,
    },
    {
      TabsName: "DualLineTabTopRadius",
      JSXname: "DualLineTabTopRadiusJSX",
      Jsx: `// import this before component function start remove it if already imported
      import{ useState } from "react";
      
      // import this after component function start 
      const [DualLineTabTopRadius, setDualLineTabTopRadius] = useState(0);
      
      const TabNames = [
        {
          id:"0",
          name: "Tab Name",
          current: true,
        },
        {
          id:"1",
          name: "Tab Name",
          current: false,
        },
        {
          id:"2",
          name: "Tab Name",
          current: false,
        },
      ];
      
      
        function classNames(...classes) {
          return classes.filter(Boolean).join(" ");
        }`,
      Code: `
      <div className="hidden sm:block">
      <label htmlFor="tabs" className="sr-only">
        Select a tab
      </label>
      {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
      <select
        id="tabs"
        name="tabs"
        className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        defaultValue={
          TabNames.find((tab) => tab.current).name
        }
      >
        {TabNames.map((tab, index) => (
          <option
            key={tab.name}
            onClick={() => setDefaultTabTopRadius(index)}
          >
            {tab.name}
          </option>
        ))}
      </select>
    </div>
    <div className="block sm:hidden">
      <nav className="flex space-x-4" aria-label="Tabs">
        {TabNames.map((tab, index) => (
          <a
            key={tab.name}
            href={tab.href}
            onClick={() => setDualLineTabTopRadius(index)}
            className={classNames(
              index === DualLineTabTopRadius
                ? "bg-atom_rojored text-atom_white font-medium [box-shadow:0px_3px_6px_0px_#00000000]"
                : "text-atom_onxyblack border border-atom_silver hover:text-gray-700 font-meduim [box-shadow:0px_3px_6px_0px_#00000025]",
              "rounded-t-md p-2.5 text-sm text-center  cursor-pointer "
            )}
            aria-current={
              index === DualLineTabTopRadius
                ? "page"
                : undefined
            }
          >
        
            {tab.name}
            <span
             className={classNames(
              index === DualLineTabTopRadius
                ? "bg-white border-0 "
                : "text-atom_onxyblack bg-gray-100",
              "inline-flex items-center rounded-full ml-2  px-2 py-1 text-xs font-medium text-gray-600"
            )}
            
            >0000 </span>
            <span className="block font-medium mt-1 text-xs">Caption Line</span>
          </a>
        ))}
      </nav>
    </div>

    {DualLineTabTopRadius == 0 && (
      <>
        <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
          <p className="text-sm font-medium text-atom_onxyblack">
            Content Tab 1
          </p>
        </div>
      </>
    )}
    {DualLineTabTopRadius == 1 && (
      <>
        <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
          <p className="text-sm font-medium text-atom_onxyblack">
            Content Tab 2
          </p>
        </div>
      </>
    )}
    {DualLineTabTopRadius == 2 && (
      <>
        <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
          <p className="text-sm font-medium text-atom_onxyblack">
            Content Tab 3
          </p>
        </div>
      </>
    )}
     
      `,
    },
  ];
  const tabs = [
    {
      name: "HTML",
      current: true,
      content: `  
      {"Default tab with all radius -----------------"}
   
      ${TabsStyles[0].Code}
  
        {"Default tab with top radius -----------------"}
 
      ${TabsStyles[1].Code}

        {"Default tab with no radius -----------------"}

      ${TabsStyles[2].Code}

        {"Default tab with Left and Right radius -----------------"}

      ${TabsStyles[3].Code}

        {"Default tab with rounded radius -----------------"}
   
      ${TabsStyles[4].Code} 

      {"Underline tab with background -----------------"}
   
      ${TabsStyles[5].Code} 
     
      `,
    },
    {
      name: "JSX",
      current: false,
      content: `
      {"Default tab with all radius -----------------"}
   
      ${TabsStyles[0].Jsx}
  
        {"Default tab with top radius -----------------"}
 
      ${TabsStyles[1].Jsx}

        {"Default tab with no radius -----------------"}

      ${TabsStyles[2].Jsx}

        {"Default tab with Left and Right radius -----------------"}

      ${TabsStyles[3].Jsx}

        {"Default tab with rounded radius -----------------"}
   
      ${TabsStyles[4].Jsx} 

      {"Underline tab with background -----------------"}
   
      ${TabsStyles[5].Jsx} 
     `,
    },
  ];

  const AccordionStyles = [
    {
      AccordionName: "AccordionWithSeparateHeader",
      JSXname: "AccordionWithSeparateHeaderJSX",
      Jsx: `
      // add outside function component
      import React, { useState } from 'react';
      
      // add inside the function component 
      
        function classNames(...classes) {
          return classes.filter(Boolean).join(" ");
        }
      
       const Accordionitems = [
          {
            title: "What are the types of SME loans for supply chain finance?",
            content: "Content for Item 1",
          },
          {
            title: "What are the types of SME loans for supply chain finance?",
            content: "Content for Item 2",
          },
          {
            title: "What are the types of SME loans for supply chain finance?",
            content: "Content for Item 3",
          },
        ];
      
        const [activeIndex, setActiveIndex] = useState(null);
      
        const toggleAccordion = (index) => {
          setActiveIndex(activeIndex === index ? null : index);
        };
      
      `,
      Code: `
      <div className=" mx-auto">
      {Accordionitems.map((item, index) => (
        <div key={index} className="[box-shadow:0px_3px_6px_0px_#0000000D] 
         border border-atom_silver rounded-md mb-4 overflow-hidden "
        >
          <div className="bg-atom_ghostwhite flex text-atom_onxyblack  
          text-sm font-medium justify-between items-center p-4 cursor-pointer"
            onClick={() => toggleAccordion(index)}>
            <div>{item.title}</div>
            <i className={classNames(activeIndex === index ? "ri-subtract-fill" : "ri-add-fill",
            "ri-add-fill text-atom_onxyblack text-xl")}></i>
          </div>
          <div className={classNames( activeIndex === index ? "max-h-screen" : "max-h-0",
           "transition-max-height ease-in-out duration-100")}
          >
            <div className="p-4 bg-white">
              <p className="text-xs text-atom_onxyblack"> {item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    
     
      `,
    },
    {
      AccordionName: "AccordionWithMergedHeader",
      JSXname: "AccordionWithMergedHeaderJSX",
      Jsx: `
      // add outside function component
      import React, { useState } from 'react';
      
      // add inside the function component 
      
        function classNames(...classes) {
          return classes.filter(Boolean).join(" ");
        }
      
       const Accordionitems = [
          {
            title: "What are the types of SME loans for supply chain finance?",
            content: "Content for Item 1",
          },
          {
            title: "What are the types of SME loans for supply chain finance?",
            content: "Content for Item 2",
          },
          {
            title: "What are the types of SME loans for supply chain finance?",
            content: "Content for Item 3",
          },
        ];
      
        const [activeIndex2, setActiveIndex2] = useState(null);
      
        const toggleAccordion2 = (index) => {
          setActiveIndex2(activeIndex2 === index ? null : index);
        };
      
      `,
      Code: `
      <div className=" mx-auto">
      {Accordionitems.map((item, index) => (
        <div key={index} className="[box-shadow:0px_3px_6px_0px_#0000000D]
         border border-atom_silver rounded-md mb-4 overflow-hidden ">
          <div className=" flex text-atom_onxyblack  text-sm font-medium 
          justify-between items-center p-4 cursor-pointer" onClick={() => toggleAccordion2(index)}>
            <div>{item.title}</div>
            <i
              className={classNames(
                activeIndex2 === index ? "ri-subtract-fill" : "ri-add-fill",
                "ri-add-fill text-atom_onxyblack text-xl"
              )}
            ></i>
          </div>
          <div
            className={classNames(
              activeIndex2 === index ? "max-h-screen" : "max-h-0",
              "transition-max-height ease-in-out duration-100"
            )}
          >
            <div className="p-4 bg-white pt-1">
              <p className="text-xs text-atom_onxyblack"> {item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>;
    
     
      `,
    },
  ];
  const tabs2 = [
    {
      name: "HTML",
      current: true,
      content: `  
      {"Accordion with Separate header -----------------"}
   
      ${AccordionStyles[0].Code}
  
        {"Accordion with Merged header -----------------"}
 
      ${AccordionStyles[1].Code}

      
     
      `,
    },
    {
      name: "JSX",
      current: false,
      content: `
      {"Accordion with Separate header -----------------"}
   
      ${AccordionStyles[0].Jsx}
  
      {"Accordion with Merged header -----------------"}
 
      ${AccordionStyles[1].Jsx}

    
     `,
    },
  ];

  const Accordionitems = [
    {
      title: "What are the types of SME loans for supply chain finance?",
      content: "Content for Item 1",
    },
    {
      title: "What are the types of SME loans for supply chain finance?",
      content: "Content for Item 2",
    },
    {
      title: "What are the types of SME loans for supply chain finance?",
      content: "Content for Item 3",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [activeIndex2, setActiveIndex2] = useState(null);

  const toggleAccordion2 = (index) => {
    setActiveIndex2(activeIndex2 === index ? null : index);
  };
  return (
    <main className="dark:bg-gray-900">
         <Breadcrumb
        breadcrumbs={breadcrumbs}
        lastChildMentioned="Tabs and Accordions"
      />
      <div className="bg-white dark:bg-gray-800 m-5 mb-10 rounded-lg">
      
        {activeSectionTab == 0 && (
          <>
            {/* component box 1 */}
            <div className="border border-atom_silver dark:border-gray-700 rounded p-4 mb-5" id='tabStyles'>
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg leading-[32px] mb-[16px] text-atom_dimgray dark:text-gray-200">Tabs</h3>
                <div className="flex items-center ">
                  <Tooltip message={CopyCodeLinkToolipMessage}>
                    <a
                      className="rounded-[50%] text-xxl cursor-pointer hover:bg-[#8080803d] dark:hover:bg-gray-700 h-12 w-12 text-[#0000008a] dark:text-gray-400 flex items-center justify-center mr-5"
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
                              setCopyCodeToolipMessage(
                                "Click here to Copy Code"
                              )
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
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 ">
                <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-600">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 sm:pl-0"
                      >
                        Tabs Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
                      >
                        Tabs Output
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
                      >
                        HTML
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
                      >
                        JSX
                      </th>
                 
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        Default tab with all radius
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="hidden sm:block">
                          <label htmlFor="tabs" className="sr-only">
                            Select a tab
                          </label>
                          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                          <select
                            id="tabs"
                            name="tabs"
                            className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                            onChange={() =>
                              setDefaultTabAllRadius(() => {
                                TabNames.find((tab) => tab.current)
                                  .id})}
                            defaultValue={
                              TabNames.find((tab) => tab.current)
                                .name
                            }
                          >
                            {TabNames.map((tab, index) => (
                              <option key={tab.name}>{tab.name}</option>
                            ))}
                          </select>
                        </div>
                        <div className="block sm:hidden">
                          <nav className="flex space-x-4" aria-label="Tabs">
                            {TabNames.map((tab, index) => (
                              <a
                                key={tab.name}
                                href={tab.href}
                                onClick={() => setDefaultTabAllRadius(index)}
                                className={classNames(
                                  index === defaultTabAllRadius
                                    ? "bg-atom_rojored text-atom_white font-medium [box-shadow:0px_3px_6px_0px_#00000000]"
                                    : "text-atom_onxyblack border border-atom_silver hover:text-gray-700 font-meduim [box-shadow:0px_3px_6px_0px_#00000025]",
                                  "rounded-md p-2.5 text-sm   cursor-pointer "
                                )}
                                aria-current={
                                  index === defaultTabAllRadius
                                    ? "page"
                                    : undefined
                                }
                              >
                                <i
                                  className={classNames(
                                    index === defaultTabAllRadius
                                      ? "text-white border-0 "
                                      : "text-gray-500 hover:text-gray-700",
                                    "text-atom_onxyblack ri-user-fill mr-2.5"
                                  )}
                                ></i>
                                {tab.name}
                              </a>
                            ))}
                          </nav>
                        </div>

                        {defaultTabAllRadius == 0 && (
                          <>
                            <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
                              <p className="text-sm font-medium text-atom_onxyblack">
                                Content Tab 1
                              </p>
                            </div>
                          </>
                        )}
                        {defaultTabAllRadius == 1 && (
                          <>
                            <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
                              <p className="text-sm font-medium text-atom_onxyblack">
                                Content Tab 2
                              </p>
                            </div>
                          </>
                        )}
                        {defaultTabAllRadius == 2 && (
                          <>
                            <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
                              <p className="text-sm font-medium text-atom_onxyblack">
                                Content Tab 3
                              </p>
                            </div>
                          </>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(TabsStyles[0].TabsName)
                            }
                            onMouseEnter={() =>
                              setCopyCodeToolipMessage(
                                "Click here to Copy Code"
                              )
                            }
                          >
                            <i className="text-xxl text-dark ri-file-copy-line"></i>
                          </a>
                        </Tooltip>
                      </td>
                      <td className="hidden">
                        <pre className=" " id={TabsStyles[0].TabsName}>
                          {TabsStyles[0].Code}
                        </pre>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() => CopyClickView(TabsStyles[0].JSXname)}
                            onMouseEnter={() =>
                              setCopyCodeToolipMessage(
                                "Click here to Copy Code"
                              )
                            }
                          >
                            <i className="text-xxl text-dark ri-file-copy-line"></i>
                          </a>
                        </Tooltip>
                      </td>
                      <td className="hidden">
                        <pre className=" " id={TabsStyles[0].JSXname}>
                          {TabsStyles[0].Jsx}
                        </pre>
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        Default tab with top radius
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="hidden sm:block">
                          <label htmlFor="tabs" className="sr-only">
                            Select a tab
                          </label>
                          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                          <select
                            id="tabs"
                            name="tabs"
                            className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                            defaultValue={
                              TabNames.find((tab) => tab.current).name
                            }
                          >
                            {TabNames.map((tab, index) => (
                              <option
                                key={tab.name}
                                onClick={() => setDefaultTabTopRadius(index)}
                              >
                                {tab.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="block sm:hidden">
                          <nav className="flex space-x-4" aria-label="Tabs">
                            {TabNames.map((tab, index) => (
                              <a
                                key={tab.name}
                                href={tab.href}
                                onClick={() => setDefaultTabTopRadius(index)}
                                className={classNames(
                                  index === defaultTabTopRadius
                                    ? "bg-atom_rojored text-atom_white font-medium [box-shadow:0px_3px_6px_0px_#00000000]"
                                    : "text-atom_onxyblack border border-atom_silver hover:text-gray-700 font-meduim [box-shadow:0px_3px_6px_0px_#00000025]",
                                  "rounded-t-md p-2.5 text-sm   cursor-pointer "
                                )}
                                aria-current={
                                  index === defaultTabTopRadius
                                    ? "page"
                                    : undefined
                                }
                              >
                                <i
                                  className={classNames(
                                    index === defaultTabTopRadius
                                      ? "text-white border-0 "
                                      : "text-gray-500 hover:text-gray-700",
                                    "text-atom_onxyblack ri-user-fill mr-2.5"
                                  )}
                                ></i>
                                {tab.name}
                              </a>
                            ))}
                          </nav>
                        </div>

                        {defaultTabTopRadius == 0 && (
                          <>
                            <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
                              <p className="text-sm font-medium text-atom_onxyblack">
                                Content Tab 1
                              </p>
                            </div>
                          </>
                        )}
                        {defaultTabTopRadius == 1 && (
                          <>
                            <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
                              <p className="text-sm font-medium text-atom_onxyblack">
                                Content Tab 2
                              </p>
                            </div>
                          </>
                        )}
                        {defaultTabTopRadius == 2 && (
                          <>
                            <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
                              <p className="text-sm font-medium text-atom_onxyblack">
                                Content Tab 3
                              </p>
                            </div>
                          </>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(TabsStyles[1].TabsName)
                            }
                            onMouseEnter={() =>
                              setCopyCodeToolipMessage(
                                "Click here to Copy Code"
                              )
                            }
                          >
                            <i className="text-xxl text-dark ri-file-copy-line"></i>
                          </a>
                        </Tooltip>
                      </td>
                      <td className="hidden">
                        <pre className=" " id={TabsStyles[1].TabsName}>
                          {TabsStyles[1].Code}
                        </pre>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() => CopyClickView(TabsStyles[1].JSXname)}
                            onMouseEnter={() =>
                              setCopyCodeToolipMessage(
                                "Click here to Copy Code"
                              )
                            }
                          >
                            <i className="text-xxl text-dark ri-file-copy-line"></i>
                          </a>
                        </Tooltip>
                      </td>
                      <td className="hidden">
                        <pre className=" " id={TabsStyles[1].JSXname}>
                          {TabsStyles[1].JSXname}
                        </pre>
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        Default tab with no radius
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="hidden sm:block">
                          <label htmlFor="tabs" className="sr-only">
                            Select a tab
                          </label>
                          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                          <select
                            id="tabs"
                            name="tabs"
                            className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                            defaultValue={
                              TabNames.find((tab) => tab.current).name
                            }
                          >
                            {TabNames.map((tab, index) => (
                              <option
                                key={tab.name}
                                onClick={() => setDefaultTabNoRadius(index)}
                              >
                                {tab.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="block sm:hidden">
                          <nav className="flex space-x-4" aria-label="Tabs">
                            {TabNames.map((tab, index) => (
                              <a
                                key={tab.name}
                                href={tab.href}
                                onClick={() => setDefaultTabNoRadius(index)}
                                className={classNames(
                                  index === defaultTabNoRadius
                                    ? "bg-atom_rojored text-atom_white font-medium [box-shadow:0px_3px_6px_0px_#00000000]"
                                    : "text-atom_onxyblack border border-atom_silver hover:text-gray-700 font-meduim [box-shadow:0px_3px_6px_0px_#00000025]",
                                  " p-2.5 text-sm   cursor-pointer "
                                )}
                                aria-current={
                                  index === defaultTabNoRadius
                                    ? "page"
                                    : undefined
                                }
                              >
                                <i
                                  className={classNames(
                                    index === defaultTabNoRadius
                                      ? "text-white border-0 "
                                      : "text-gray-500 hover:text-gray-700",
                                    "text-atom_onxyblack ri-user-fill mr-2.5"
                                  )}
                                ></i>
                                {tab.name}
                              </a>
                            ))}
                          </nav>
                        </div>

                        {defaultTabNoRadius == 0 && (
                          <>
                            <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
                              <p className="text-sm font-medium text-atom_onxyblack">
                                Content Tab 1
                              </p>
                            </div>
                          </>
                        )}
                        {defaultTabNoRadius == 1 && (
                          <>
                            <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
                              <p className="text-sm font-medium text-atom_onxyblack">
                                Content Tab 2
                              </p>
                            </div>
                          </>
                        )}
                        {defaultTabNoRadius == 2 && (
                          <>
                            <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
                              <p className="text-sm font-medium text-atom_onxyblack">
                                Content Tab 3
                              </p>
                            </div>
                          </>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(TabsStyles[2].TabsName)
                            }
                            onMouseEnter={() =>
                              setCopyCodeToolipMessage(
                                "Click here to Copy Code"
                              )
                            }
                          >
                            <i className="text-xxl text-dark ri-file-copy-line"></i>
                          </a>
                        </Tooltip>
                      </td>
                      <td className="hidden">
                        <pre className=" " id={TabsStyles[2].TabsName}>
                          {TabsStyles[2].Code}
                        </pre>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() => CopyClickView(TabsStyles[2].JSXname)}
                            onMouseEnter={() =>
                              setCopyCodeToolipMessage(
                                "Click here to Copy Code"
                              )
                            }
                          >
                            <i className="text-xxl text-dark ri-file-copy-line"></i>
                          </a>
                        </Tooltip>
                      </td>
                      <td className="hidden">
                        <pre className=" " id={TabsStyles[2].JSXname}>
                          {TabsStyles[2].Jsx}
                        </pre>
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        Default tab with Left and Right radius
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="hidden sm:block">
                          <label htmlFor="tabs" className="sr-only">
                            Select a tab
                          </label>
                          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                          <select
                            id="tabs"
                            name="tabs"
                            className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                            defaultValue={
                              TabNames.find((tab) => tab.current).name
                            }
                          >
                            {TabNames.map((tab, index) => (
                              <option
                                key={tab.name}
                                onClick={() =>
                                  setdefaultTabLeftRightRadius(index)
                                }
                              >
                                {tab.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="block sm:hidden">
                          <nav className="flex " aria-label="Tabs">
                            {TabNames.map((tab, index) => (
                              <a
                                key={tab.name}
                                href={tab.href}
                                onClick={() =>
                                  setdefaultTabLeftRightRadius(index)
                                }
                                style={{
                                  borderRadius:
                                    index == "0"
                                      ? "6px 0px 0px 6px"
                                      : index == "1"
                                      ? "0"
                                      : "0px 6px 6px 0px",
                                  borderLeftWidth: index == "1" ? "0px" : "",
                                  borderRightWidth: index == "1" ? "0px" : "",
                                }}
                                className={classNames(
                                  index === defaultTabLeftRightRadius
                                    ? "bg-atom_rojored text-atom_white border-atom_rojored font-medium [box-shadow:0px_3px_6px_0px_#00000000]"
                                    : "text-atom_onxyblack  hover:text-gray-700 font-meduim [box-shadow:0px_3px_6px_0px_#00000025]",
                                  "rounded-md p-2.5 text-sm cursor-pointer border border-atom_silver"
                                )}
                                aria-current={
                                  index === defaultTabLeftRightRadius
                                    ? "page"
                                    : undefined
                                }
                              >
                                <i
                                  className={classNames(
                                    index === defaultTabLeftRightRadius
                                      ? "text-white border-0 "
                                      : "text-gray-500 hover:text-gray-700",
                                    "text-atom_onxyblack ri-user-fill mr-2.5"
                                  )}
                                ></i>
                                {tab.name}
                              </a>
                            ))}
                          </nav>
                        </div>

                        {defaultTabLeftRightRadius == 0 && (
                          <>
                            <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
                              <p className="text-sm font-medium text-atom_onxyblack">
                                Content Tab 1
                              </p>
                            </div>
                          </>
                        )}
                        {defaultTabLeftRightRadius == 1 && (
                          <>
                            <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
                              <p className="text-sm font-medium text-atom_onxyblack">
                                Content Tab 2
                              </p>
                            </div>
                          </>
                        )}
                        {defaultTabLeftRightRadius == 2 && (
                          <>
                            <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
                              <p className="text-sm font-medium text-atom_onxyblack">
                                Content Tab 3
                              </p>
                            </div>
                          </>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(TabsStyles[3].TabsName)
                            }
                            onMouseEnter={() =>
                              setCopyCodeToolipMessage(
                                "Click here to Copy Code"
                              )
                            }
                          >
                            <i className="text-xxl text-dark ri-file-copy-line"></i>
                          </a>
                        </Tooltip>
                      </td>
                      <td className="hidden">
                        <pre className=" " id={TabsStyles[3].TabsName}>
                          {TabsStyles[3].Code}
                        </pre>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() => CopyClickView(TabsStyles[3].JSXname)}
                            onMouseEnter={() =>
                              setCopyCodeToolipMessage(
                                "Click here to Copy Code"
                              )
                            }
                          >
                            <i className="text-xxl text-dark ri-file-copy-line"></i>
                          </a>
                        </Tooltip>
                      </td>
                      <td className="hidden">
                        <pre className=" " id={TabsStyles[3].JSXname}>
                          {TabsStyles[3].Jsx}
                        </pre>
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        Default tab with rounded radius
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="hidden sm:block">
                          <label htmlFor="tabs" className="sr-only">
                            Select a tab
                          </label>
                          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                          <select
                            id="tabs"
                            name="tabs"
                            className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                            defaultValue={
                              TabNames.find((tab) => tab.current).name
                            }
                          >
                            {TabNames.map((tab, index) => (
                              <option
                                key={tab.name}
                                onClick={() =>
                                  setDefaultTabRoundedRadius(index)
                                }
                              >
                                {tab.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="block sm:hidden">
                          <nav className="flex space-x-4" aria-label="Tabs">
                            {TabNames.map((tab, index) => (
                              <a
                                key={tab.name}
                                href={tab.href}
                                onClick={() =>
                                  setDefaultTabRoundedRadius(index)
                                }
                                className={classNames(
                                  index === defaultTabRoundedRadius
                                    ? "bg-atom_rojored text-atom_white font-medium [box-shadow:0px_3px_6px_0px_#00000000]"
                                    : "text-atom_onxyblack border border-atom_silver hover:text-gray-700 font-meduim [box-shadow:0px_3px_6px_0px_#00000025]",
                                  "rounded-full p-2.5 text-sm   cursor-pointer "
                                )}
                                aria-current={
                                  index === defaultTabRoundedRadius
                                    ? "page"
                                    : undefined
                                }
                              >
                                <i
                                  className={classNames(
                                    index === defaultTabRoundedRadius
                                      ? "text-white border-0 "
                                      : "text-gray-500 hover:text-gray-700",
                                    "text-atom_onxyblack ri-user-fill mr-2.5"
                                  )}
                                ></i>
                                {tab.name}
                              </a>
                            ))}
                          </nav>
                        </div>

                        {defaultTabRoundedRadius == 0 && (
                          <>
                            <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
                              <p className="text-sm font-medium text-atom_onxyblack">
                                Content Tab 1
                              </p>
                            </div>
                          </>
                        )}
                        {defaultTabRoundedRadius == 1 && (
                          <>
                            <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
                              <p className="text-sm font-medium text-atom_onxyblack">
                                Content Tab 2
                              </p>
                            </div>
                          </>
                        )}
                        {defaultTabRoundedRadius == 2 && (
                          <>
                            <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
                              <p className="text-sm font-medium text-atom_onxyblack">
                                Content Tab 3
                              </p>
                            </div>
                          </>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(TabsStyles[4].TabsName)
                            }
                            onMouseEnter={() =>
                              setCopyCodeToolipMessage(
                                "Click here to Copy Code"
                              )
                            }
                          >
                            <i className="text-xxl text-dark ri-file-copy-line"></i>
                          </a>
                        </Tooltip>
                      </td>
                      <td className="hidden">
                        <pre className=" " id={TabsStyles[4].TabsName}>
                          {TabsStyles[4].Code}
                        </pre>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() => CopyClickView(TabsStyles[4].JSXname)}
                            onMouseEnter={() =>
                              setCopyCodeToolipMessage(
                                "Click here to Copy Code"
                              )
                            }
                          >
                            <i className="text-xxl text-dark ri-file-copy-line"></i>
                          </a>
                        </Tooltip>
                      </td>
                      <td className="hidden">
                        <pre className=" " id={TabsStyles[4].JSXname}>
                          {TabsStyles[4].Jsx}
                        </pre>
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      Underline tab with background
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="hidden sm:block">
                          <label htmlFor="tabs" className="sr-only">
                            Select a tab
                          </label>
                          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                          <select
                            id="tabs"
                            name="tabs"
                            className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                            defaultValue={
                              TabNames.find((tab) => tab.current).name
                            }
                          >
                            {TabNames.map((tab, index) => (
                              <option
                                key={tab.name}
                                onClick={() =>
                                  setUnderLineTabBackground(index)
                                }
                              >
                                {tab.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="block sm:hidden">
                        <div className="border-b border-gray-200">
                          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                            {TabNames.map((tab, index) => (
                              <a
                                key={tab.name}
                                href={tab.href}
                                onClick={() =>
                                  setUnderLineTabBackground(index)
                                }
                                className={classNames(
                                  index === UnderLineTabBackground
                                    ? "border-atom_rojored text-atom_rojored"
                                    : "border-transparent text-atom_onxyblack hover:border-gray-300 hover:text-gray-700",
                                  "whitespace-nowrap border-b-2 p-4 text-sm font-medium cursor-pointer"
                                )}
                                aria-current={
                                  index === UnderLineTabBackground
                                    ? "page"
                                    : undefined
                                }
                              >
                                <i
                                  className={classNames(
                                    index === UnderLineTabBackground
                                      ? "text-atom_rojored border-0 "
                                      : "text-atom_onxyblack hover:text-gray-700",
                                    "text-atom_onxyblack ri-user-fill mr-2.5"
                                  )}
                                ></i>
                                {tab.name}
                              </a>
                            ))}
                          </nav>
                          </div>
                        </div>

                        {UnderLineTabBackground == 0 && (
                          <>
                            <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
                              <p className="text-sm font-medium text-atom_onxyblack">
                                Content Tab 1
                              </p>
                            </div>
                          </>
                        )}
                        {UnderLineTabBackground == 1 && (
                          <>
                            <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
                              <p className="text-sm font-medium text-atom_onxyblack">
                                Content Tab 2
                              </p>
                            </div>
                          </>
                        )}
                        {UnderLineTabBackground == 2 && (
                          <>
                            <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
                              <p className="text-sm font-medium text-atom_onxyblack">
                                Content Tab 3
                              </p>
                            </div>
                          </>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(TabsStyles[5].TabsName)
                            }
                            onMouseEnter={() =>
                              setCopyCodeToolipMessage(
                                "Click here to Copy Code"
                              )
                            }
                          >
                            <i className="text-xxl text-dark ri-file-copy-line"></i>
                          </a>
                        </Tooltip>
                      </td>
                      <td className="hidden">
                        <pre className=" " id={TabsStyles[5].TabsName}>
                          {TabsStyles[5].Code}
                        </pre>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() => CopyClickView(TabsStyles[5].JSXname)}
                            onMouseEnter={() =>
                              setCopyCodeToolipMessage(
                                "Click here to Copy Code"
                              )
                            }
                          >
                            <i className="text-xxl text-dark ri-file-copy-line"></i>
                          </a>
                        </Tooltip>
                      </td>
                      <td className="hidden">
                        <pre className=" " id={TabsStyles[5].JSXname}>
                          {TabsStyles[5].Jsx}
                        </pre>
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      Dual line tab with top radius
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="hidden sm:block">
                          <label htmlFor="tabs" className="sr-only">
                            Select a tab
                          </label>
                          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                          <select
                            id="tabs"
                            name="tabs"
                            className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                            defaultValue={
                              TabNames.find((tab) => tab.current).name
                            }
                          >
                            {TabNames.map((tab, index) => (
                              <option
                                key={tab.name}
                                onClick={() => setDefaultTabTopRadius(index)}
                              >
                                {tab.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="block sm:hidden">
                          <nav className="flex space-x-4" aria-label="Tabs">
                            {TabNames.map((tab, index) => (
                              <a
                                key={tab.name}
                                href={tab.href}
                                onClick={() => setDualLineTabTopRadius(index)}
                                className={classNames(
                                  index === DualLineTabTopRadius
                                    ? "bg-atom_rojored text-atom_white font-medium [box-shadow:0px_3px_6px_0px_#00000000]"
                                    : "text-atom_onxyblack border border-atom_silver hover:text-gray-700 font-meduim [box-shadow:0px_3px_6px_0px_#00000025]",
                                  "rounded-t-md p-2.5 text-sm text-center  cursor-pointer "
                                )}
                                aria-current={
                                  index === DualLineTabTopRadius
                                    ? "page"
                                    : undefined
                                }
                              >
                            
                                {tab.name}
                                <span
                                 className={classNames(
                                  index === DualLineTabTopRadius
                                    ? "bg-white border-0 "
                                    : "text-atom_onxyblack bg-gray-100",
                                  "inline-flex items-center rounded-full ml-2  px-2 py-1 text-xs font-medium text-gray-600"
                                )}
                                
                                >0000 </span>
                                <span className="block font-medium mt-1 text-xs">Caption Line</span>
                              </a>
                            ))}
                          </nav>
                        </div>

                        {DualLineTabTopRadius == 0 && (
                          <>
                            <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
                              <p className="text-sm font-medium text-atom_onxyblack">
                                Content Tab 1
                              </p>
                            </div>
                          </>
                        )}
                        {DualLineTabTopRadius == 1 && (
                          <>
                            <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
                              <p className="text-sm font-medium text-atom_onxyblack">
                                Content Tab 2
                              </p>
                            </div>
                          </>
                        )}
                        {DualLineTabTopRadius == 2 && (
                          <>
                            <div className="border atom_platinumgrey rounded-md w-full min-w-[100px] p-5 mt-3">
                              <p className="text-sm font-medium text-atom_onxyblack">
                                Content Tab 3
                              </p>
                            </div>
                          </>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(TabsStyles[6].TabsName)
                            }
                            onMouseEnter={() =>
                              setCopyCodeToolipMessage(
                                "Click here to Copy Code"
                              )
                            }
                          >
                            <i className="text-xxl text-dark ri-file-copy-line"></i>
                          </a>
                        </Tooltip>
                      </td>
                      <td className="hidden">
                        <pre className=" " id={TabsStyles[6].TabsName}>
                          {TabsStyles[6].Code}
                        </pre>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() => CopyClickView(TabsStyles[6].JSXname)}
                            onMouseEnter={() =>
                              setCopyCodeToolipMessage(
                                "Click here to Copy Code"
                              )
                            }
                          >
                            <i className="text-xxl text-dark ri-file-copy-line"></i>
                          </a>
                        </Tooltip>
                      </td>
                      <td className="hidden">
                        <pre className=" " id={TabsStyles[6].JSXname}>
                          {TabsStyles[6].Jsx}
                        </pre>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* component box 2 */}
            <div className="border border-atom_silver rounded p-4 mb-5" id='accordions'>
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg leading-[32px] mb-[16px] text-atom_dimgray">Accordions</h3>
                <div className="flex items-center ">
                  <Tooltip message={CopyCodeLinkToolipMessage}>
                    <a
                      className="rounded-[50%] text-xxl cursor-pointer hover:bg-[#8080803d] h-12 w-12 text-[#0000008a] flex items-center justify-center "
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
                          {tabs2.map((tab, index) => (
                            <a
                              key={index}
                              onClick={() => handleTabClick2(index)}
                              className={classNames(
                                index === activeTab2
                                  ? "border-indigo-500 text-indigo-600"
                                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                                "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium min-w-[100px] text-center cursor-pointer"
                              )}
                              aria-current={
                                index === activeTab2 ? "page" : undefined
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
                        {tabs2[activeTab2].content}
                      </pre>
                      <div className="absolute top-[40px] right-[50px] block">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() => CopyClickView("AllAlertCode")}
                            onMouseEnter={() =>
                              setCopyCodeToolipMessage(
                                "Click here to Copy Code"
                              )
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
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 ">
                <table className="min-w-full divide-y divide-gray-300 ">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                      >
                        Accordions Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Accordions Output
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        HTML
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        JSX
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        Accordion with Separate header
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className=" mx-auto">
                          {Accordionitems.map((item, index) => (
                            <div key={index} className="[box-shadow:0px_3px_6px_0px_#0000000D] 
                             border border-atom_silver rounded-md mb-4 overflow-hidden "
                            >
                              <div className="bg-atom_ghostwhite flex text-atom_onxyblack  
                              text-sm font-medium justify-between items-center p-4 cursor-pointer" onClick={() => toggleAccordion(index)}>
                                <div>{item.title}</div>
                                <i className={classNames(activeIndex === index ? "ri-subtract-fill" : "ri-add-fill",
                                "ri-add-fill text-atom_onxyblack text-xl")}></i>
                              </div>
                              <div className={classNames( activeIndex === index ? "max-h-screen" : "max-h-0",
                               "transition-max-height ease-in-out duration-100")}
                              >
                                <div className="p-4 bg-white">
                                  <p className="text-xs text-atom_onxyblack"> {item.content}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(AccordionStyles[0].AccordionName)
                            }
                            onMouseEnter={() =>
                              setCopyCodeToolipMessage(
                                "Click here to Copy Code"
                              )
                            }
                          >
                            <i className="text-xxl text-dark ri-file-copy-line"></i>
                          </a>
                        </Tooltip>
                      </td>
                      <td className="hidden">
                        <pre
                          className=" "
                          id={AccordionStyles[0].AccordionName}
                        >
                          {AccordionStyles[0].Code}
                        </pre>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(AccordionStyles[0].JSXname)
                            }
                            onMouseEnter={() =>
                              setCopyCodeToolipMessage(
                                "Click here to Copy Code"
                              )
                            }
                          >
                            <i className="text-xxl text-dark ri-file-copy-line"></i>
                          </a>
                        </Tooltip>
                      </td>
                      <td className="hidden">
                        <pre className=" " id={AccordionStyles[0].JSXname}>
                          {AccordionStyles[0].Jsx}
                        </pre>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        Accordion with Merged header
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                       <div className=" mx-auto">
                          {Accordionitems.map((item, index) => (
                            <div key={index} className="[box-shadow:0px_3px_6px_0px_#0000000D] border border-atom_silver rounded-md mb-4 overflow-hidden ">
                              <div className=" flex text-atom_onxyblack  text-sm font-medium 
                              justify-between items-center p-4 cursor-pointer" onClick={() => toggleAccordion2(index)}>
                                <div>{item.title}</div>
                                <i
                                  className={classNames(
                                    activeIndex2 === index
                                      ? "ri-subtract-fill"
                                      : "ri-add-fill",
                                    "ri-add-fill text-atom_onxyblack text-xl"
                                  )}
                                ></i>
                              </div>
                              <div 
                                className={classNames(
                                  activeIndex2 === index
                                    ? "max-h-screen"
                                    : "max-h-0",
                                  "transition-max-height ease-in-out duration-100"
                                )}
                            
                              >
                                <div className="p-4 bg-white pt-1">
                                  <p className="text-xs text-atom_onxyblack"> {item.content}</p>
                                 
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(AccordionStyles[1].AccordionName)
                            }
                            onMouseEnter={() =>
                              setCopyCodeToolipMessage(
                                "Click here to Copy Code"
                              )
                            }
                          >
                            <i className="text-xxl text-dark ri-file-copy-line"></i>
                          </a>
                        </Tooltip>
                      </td>
                      <td className="hidden">
                        <pre
                          className=" "
                          id={AccordionStyles[1].AccordionName}
                        >
                          {AccordionStyles[1].Code}
                        </pre>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(AccordionStyles[1].JSXname)
                            }
                            onMouseEnter={() =>
                              setCopyCodeToolipMessage(
                                "Click here to Copy Code"
                              )
                            }
                          >
                            <i className="text-xxl text-dark ri-file-copy-line"></i>
                          </a>
                        </Tooltip>
                      </td>
                      <td className="hidden">
                        <pre className=" " id={AccordionStyles[1].JSXname}>
                          {AccordionStyles[1].Jsx}
                        </pre>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
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
