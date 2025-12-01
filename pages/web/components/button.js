import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Breadcrumb from "../../../components/reusable/Breadcrumb";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Tooltip from "../../../components/reusable/Tooltip";
import { useRouter } from 'next/router';

const breadcrumbs = [
  { name: "Home", isLast: false, path: '/' },
  { name: "Web Components", isLast: false, path: '/web' },
  { name: "Button", isLast: true },
];

const tabs = [
  {
    name: "HTML",
    current: true,
    content: `  `,
  },
];
const tabs2 = [
  {
    name: "HTML",
    current: true,
    content: `  
    
    
    
   `,
  },
  {
    name: "JSX",
    current: false,
    content: `// add outside component function
    import { Fragment } from 'react'
    import { Menu, Transition } from '@headlessui/react'
    //install command npm install @headlessui/react
    
    
    //add inside the function
    function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
    }
    
     const tableData2 = [
      {
        DealName:["VC_Rane NSK Steering Systems", "Created 28-09-2023","Modified today"],
        DealOwner:["Ankush Sharma", "-"],
        ClosingDate:["22-03-2024", "29-11-2023"],
        RealisticDealSize:'4',
        BusinessPotentials :'4',
        ProbabilityofConversion :'4',
        AccountName:'Westrock',
        BusinessVertical:'MRO',
        RegionTeam:'Ahmedabad',
        DealType:'Core',
        Comments:['We had a discussion with Mr Deep','19-2-2024'],
        NextActionItem2:[
          { pageName: "Link1", pageLink: "javascript:void(0);" },
          { pageName: "Link2", pageLink: "javascript:void(0);" },
          { pageName: "Link3", pageLink: "javascript:void(0);" },
          { pageName: "Link4", pageLink: "javascript:void(0);" },
          { pageName: "Link5", pageLink: "javascript:void(0);" },
          { pageName: "Link6", pageLink: "javascript:void(0);" },
          { pageName: "Link7", pageLink: "javascript:void(0);" },
        ],
      },
      {
        DealName:["VC_Rane NSK Steering Systems", "Created 28-09-2023","Modified today"],
        DealOwner:["Ankush Sharma", "-"],
        ClosingDate:["22-03-2024", "29-11-2023"],
        RealisticDealSize:'4',
        BusinessPotentials :'4',
        ProbabilityofConversion :'4',
        AccountName:'Westrock',
        BusinessVertical:'MRO',
        RegionTeam:'Ahmedabad',
        DealType:'Core',
        Comments:['We had a discussion with Mr Deep','19-2-2024'],
        NextActionItem2:[
          { pageName: "Link1", pageLink: "javascript:void(0);" },
          { pageName: "Link2", pageLink: "javascript:void(0);" },
          { pageName: "Link3", pageLink: "javascript:void(0);" },
          { pageName: "Link4", pageLink: "javascript:void(0);" },
          { pageName: "Link5", pageLink: "javascript:void(0);" },
          { pageName: "Link6", pageLink: "javascript:void(0);" },
          { pageName: "Link7", pageLink: "javascript:void(0);" },
        ],
      },
      {
        DealName:["VC_Rane NSK Steering Systems", "Created 28-09-2023","Modified today"],
        DealOwner:["Ankush Sharma", "-"],
        ClosingDate:["22-03-2024", "29-11-2023"],
        RealisticDealSize:'4',
        BusinessPotentials :'4',
        ProbabilityofConversion :'4',
        AccountName:'Westrock',
        BusinessVertical:'MRO',
        RegionTeam:'Ahmedabad',
        DealType:'Core',
        Comments:['We had a discussion with Mr Deep','19-2-2024'],
        NextActionItem2:[
          { pageName: "Link1", pageLink: "javascript:void(0);" },
          { pageName: "Link2", pageLink: "javascript:void(0);" },
          { pageName: "Link3", pageLink: "javascript:void(0);" },
          { pageName: "Link4", pageLink: "javascript:void(0);" },
          { pageName: "Link5", pageLink: "javascript:void(0);" },
          { pageName: "Link6", pageLink: "javascript:void(0);" },
          { pageName: "Link7", pageLink: "javascript:void(0);" },
        ],
      },
      {
        DealName:["VC_Rane NSK Steering Systems", "Created 28-09-2023","Modified today"],
        DealOwner:["Ankush Sharma", "-"],
        ClosingDate:["22-03-2024", "29-11-2023"],
        RealisticDealSize:'4',
        BusinessPotentials :'4',
        ProbabilityofConversion :'4',
        AccountName:'Westrock',
        BusinessVertical:'MRO',
        RegionTeam:'Ahmedabad',
        DealType:'Core',
        Comments:['We had a discussion with Mr Deep','19-2-2024'],
        NextActionItem2:[
          { pageName: "Link1", pageLink: "javascript:void(0);" },
          { pageName: "Link2", pageLink: "javascript:void(0);" },
          { pageName: "Link3", pageLink: "javascript:void(0);" },
          { pageName: "Link4", pageLink: "javascript:void(0);" },
          { pageName: "Link5", pageLink: "javascript:void(0);" },
          { pageName: "Link6", pageLink: "javascript:void(0);" },
          { pageName: "Link7", pageLink: "javascript:void(0);" },
        ],
      },
      {
        DealName:["VC_Rane NSK Steering Systems", "Created 28-09-2023","Modified today"],
        DealOwner:["Ankush Sharma", "-"],
        ClosingDate:["22-03-2024", "29-11-2023"],
        RealisticDealSize:'4',
        BusinessPotentials :'4',
        ProbabilityofConversion :'4',
        AccountName:'Westrock',
        BusinessVertical:'MRO',
        RegionTeam:'Ahmedabad',
        DealType:'Core',
        Comments:['We had a discussion with Mr Deep','19-2-2024'],
        NextActionItem2:[
          { pageName: "Link1", pageLink: "javascript:void(0);" },
          { pageName: "Link2", pageLink: "javascript:void(0);" },
          { pageName: "Link3", pageLink: "javascript:void(0);" },
          { pageName: "Link4", pageLink: "javascript:void(0);" },
          { pageName: "Link5", pageLink: "javascript:void(0);" },
          { pageName: "Link6", pageLink: "javascript:void(0);" },
          { pageName: "Link7", pageLink: "javascript:void(0);" },
        ],
      },
      {
        DealName:["VC_Rane NSK Steering Systems", "Created 28-09-2023","Modified today"],
        DealOwner:["Ankush Sharma", "-"],
        ClosingDate:["22-03-2024", "29-11-2023"],
        RealisticDealSize:'4',
        BusinessPotentials :'4',
        ProbabilityofConversion :'4',
        AccountName:'Westrock',
        BusinessVertical:'MRO',
        RegionTeam:'Ahmedabad',
        DealType:'Core',
        Comments:['We had a discussion with Mr Deep','19-2-2024'],
        NextActionItem2:[
          { pageName: "Link1", pageLink: "javascript:void(0);" },
          { pageName: "Link2", pageLink: "javascript:void(0);" },
          { pageName: "Link3", pageLink: "javascript:void(0);" },
          { pageName: "Link4", pageLink: "javascript:void(0);" },
          { pageName: "Link5", pageLink: "javascript:void(0);" },
          { pageName: "Link6", pageLink: "javascript:void(0);" },
          { pageName: "Link7", pageLink: "javascript:void(0);" },
        ],
      },
      {
        DealName:["VC_Rane NSK Steering Systems", "Created 28-09-2023","Modified today"],
        DealOwner:["Ankush Sharma", "-"],
        ClosingDate:["22-03-2024", "29-11-2023"],
        RealisticDealSize:'4',
        BusinessPotentials :'4',
        ProbabilityofConversion :'4',
        AccountName:'Westrock',
        BusinessVertical:'MRO',
        RegionTeam:'Ahmedabad',
        DealType:'Core',
        Comments:['We had a discussion with Mr Deep','19-2-2024'],
        NextActionItem2:[
          { pageName: "Link1", pageLink: "javascript:void(0);" },
          { pageName: "Link2", pageLink: "javascript:void(0);" },
          { pageName: "Link3", pageLink: "javascript:void(0);" },
          { pageName: "Link4", pageLink: "javascript:void(0);" },
          { pageName: "Link5", pageLink: "javascript:void(0);" },
          { pageName: "Link6", pageLink: "javascript:void(0);" },
          { pageName: "Link7", pageLink: "javascript:void(0);" },
        ],
      },
    ];`,
  },
];

export default function Button() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [bgColor, setBgColor] = useState('atom_rojored');
  const [hoverColor, setHoverColor] = useState('atom_indianred');
  const [hoverLightColor, setHoverLightColor] = useState('atom_snowred');
  const [focusOutlineColor, setfocusOutlineColor] = useState('atom_salmonpink');
  const [colorName, setcolorName] = useState('Red')
  
  const [activeSectionTab, setSectionTab] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [activeTab2, setActiveTab2] = useState(0);

  const router = useRouter();
  const { scrollTo } = router.query;


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
  const [showCode3, setShowCode3] = useState(false);

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
  const PrimaryButtonGroup = [
    {
      ButtonName: "PrimarySmall",
      Code: `
      
      <button type="button" className="bg-${bgColor} h-[33px] min-w-[30px] rounded tracking-[unset]
      text-white leading-[6px] flex items-center justify-center 
       
       px-4 py-1.5 focus-visible:outline 
      focus-visible:outline-2 hover:bg-${hoverColor}
     focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
      disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
     font-medium text-sm">
<i className="mr-2 text-lg ri-shopping-cart-fill"></i>
Button
<i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
</button>

`,
    },
    {
      ButtonName: "PrimaryMedium",
      Code: `
      
      <button type="button" className="bg-${bgColor} h-[43px] min-w-[30px] 
      rounded tracking-[unset]
 text-white leading-[6px] flex items-center justify-center 
  
  px-4 py-1.5 focus-visible:outline 
 focus-visible:outline-2 hover:bg-${hoverColor}
focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
 disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
font-medium text-sm">
<i className="mr-2 text-lg ri-shopping-cart-fill"></i>
Button
<i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
</button>`,
    },
    {
      ButtonName: "PrimaryLarge",
      Code: `
      
      <button type="button" className="bg-${bgColor} h-[55px] min-w-[30px] rounded tracking-[unset]
      text-white leading-[6px] flex items-center justify-center 
       
       px-4 py-1.5 focus-visible:outline 
      focus-visible:outline-2 hover:bg-${hoverColor} 
     focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
      disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
     font-medium text-sm">
<i className="mr-2 text-lg ri-shopping-cart-fill"></i>
Button
<i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
</button>`,
    },
    {
      ButtonName: "PrimaryFloatingRectangleSmall",
      Code: `
      
      <button type="button" className="bg-${bgColor} h-[30px] w-[30px] min-w-[30px] rounded tracking-[unset]
      text-white leading-[6px] flex items-center justify-center 
       
        focus-visible:outline 
      focus-visible:outline-2 hover:bg-${hoverColor} 
     focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
      disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
     font-medium text-sm">
<i className="text-lg ri-shopping-cart-fill"></i>
</button>

`,
    },
    {
      ButtonName: "PrimaryFloatingRectangleMeduim",
      Code: `
      
      <button type="button" className="bg-${bgColor} h-[40px] w-[40px] min-w-[30px] rounded tracking-[unset]
      text-white leading-[6px] flex items-center justify-center 
       
        focus-visible:outline 
      focus-visible:outline-2 hover:bg-${hoverColor} 
     focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
      disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
     font-medium text-sm">
<i className="text-lg ri-shopping-cart-fill"></i>
</button>

`,
    },
    {
      ButtonName: "PrimaryFloatingRectangleLarge",
      Code: `
      
      <button type="button" className="bg-${bgColor} h-[50px] w-[50px] min-w-[30px] rounded tracking-[unset]
      text-white leading-[6px] flex items-center justify-center 
       
        focus-visible:outline 
      focus-visible:outline-2 hover:bg-${hoverColor} 
     focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
      disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
     font-medium text-sm">
<i className="text-lg ri-shopping-cart-fill"></i>
</button>

`,
    },
    {
      ButtonName: "PrimaryFloatingCircleSmall",
      Code: `
      
      <button type="button" className="bg-${bgColor} rounded-full h-[30px] w-[30px] min-w-[30px] tracking-[unset]
      text-white leading-[6px] flex items-center justify-center 
       
        focus-visible:outline 
      focus-visible:outline-2 hover:bg-${hoverColor} 
     focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
      disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
     font-medium text-sm">
<i className="text-lg ri-shopping-cart-fill"></i>
</button>

`,
    },
    {
      ButtonName: "PrimaryFloatingCircleMeduim",
      Code: `
      
      <button type="button" className="bg-${bgColor} rounded-full h-[40px] w-[40px] min-w-[30px] tracking-[unset]
      text-white leading-[6px] flex items-center justify-center 
       
        focus-visible:outline 
      focus-visible:outline-2 hover:bg-${hoverColor} 
     focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
      disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
     font-medium text-sm">
<i className="text-lg ri-shopping-cart-fill"></i>
</button>

`,
    },
    {
      ButtonName: "PrimaryFloatingCircleLarge",
      Code: `
      
      <button type="button" className="bg-${bgColor} rounded-full h-[50px] w-[50px] min-w-[30px] tracking-[unset]
      text-white leading-[6px] flex items-center justify-center 
       
        focus-visible:outline 
      focus-visible:outline-2 hover:bg-${hoverColor} 
     focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
      disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
     font-medium text-sm">
<i className="text-lg ri-shopping-cart-fill"></i>
</button>

`,
    },
  ];
  const SecondaryButtonGroup = [
    {
      ButtonName: "SecondarySmall",
      Code: `
      
      <button
      type="button"
      className="bg-white h-[33px] min-w-[30px] rounded tracking-[unset]
     text-${bgColor} leading-[6px] border border-${bgColor} flex 
     items-center justify-center px-4 py-1.5 hover:bg-${hoverLightColor}  
     focus-visible:border-0 focus-visible:outline 
     focus-visible:outline-2 focus-visible:outline-${focusOutlineColor}
      disabled:border-[#D7D7DC] disabled:bg-white disabled:text-[#D7D7DC]
        font-medium text-sm"
    >
      <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
      Button
      <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
    </button>

`,
    },
    {
      ButtonName: "SecondaryMedium",
      Code: `
      
      <button
      type="button"
      className="bg-white h-[43px] min-w-[30px] rounded tracking-[unset]
  text-${bgColor} leading-[6px] border border-${bgColor} flex 
   items-center justify-center px-4 py-1.5 hover:bg-${hoverLightColor}  
   focus-visible:border-0 focus-visible:outline 
   focus-visible:outline-2 focus-visible:outline-${focusOutlineColor}
    disabled:border-[#D7D7DC] disabled:bg-white disabled:text-[#D7D7DC]
      font-medium text-sm"
    >
      <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
      Button
      <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
    </button>

`,
    },
    {
      ButtonName: "SecondaryLarge",
      Code: `

      <button
      type="button"
      className="bg-white h-[55px] min-w-[30px] rounded tracking-[unset]
      text-${bgColor} leading-[6px] border border-${bgColor} flex 
       items-center justify-center px-4 py-1.5 hover:bg-${hoverLightColor}  
       focus-visible:border-0 focus-visible:outline 
       focus-visible:outline-2 focus-visible:outline-${focusOutlineColor}
       disabled:border-[#D7D7DC] disabled:bg-white disabled:text-[#D7D7DC]
       font-medium text-sm"
    >
      <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
      Button
      <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
    </button>


`,
    },
    {
      ButtonName: "SecondaryFloatingRectangleSmall",
      Code: `

        <button
    type="button"
    className="bg-white h-[30px] w-[30px] min-w-[30px] rounded tracking-[unset]
text-${bgColor} leading-[6px] border border-${bgColor} flex 
items-center justify-center px-4 py-1.5 hover:bg-${hoverLightColor}  
focus-visible:border-0 focus-visible:outline 
focus-visible:outline-2 focus-visible:outline-${focusOutlineColor}
 disabled:border-[#D7D7DC] disabled:bg-white disabled:text-[#D7D7DC]
   font-medium text-sm"
  >
    <i className=" text-lg ri-shopping-cart-fill"></i>
  </button>

`,
    },
    {
      ButtonName: "SecondaryFloatingRectangleMeduim",
      Code: `
        <button
    type="button"
    className="bg-white h-[40px] w-[40px] min-w-[30px] rounded tracking-[unset] 
    text-${bgColor} leading-[6px] border border-${bgColor} flex 
    items-center justify-center px-4 py-1.5 hover:bg-${hoverLightColor}  
    focus-visible:border-0 focus-visible:outline 
    focus-visible:outline-2 focus-visible:outline-${focusOutlineColor}
    disabled:border-[#D7D7DC] disabled:bg-white disabled:text-[#D7D7DC]
    font-medium text-sm"
  >
    <i className=" text-lg ri-shopping-cart-fill"></i>
  </button>


`,
    },
    {
      ButtonName: "SecondaryFloatingRectangleLarge",
      Code: `
      <button
      type="button"
      className="bg-white h-[50px] w-[50px] min-w-[30px] rounded tracking-[unset]
      text-${bgColor} leading-[6px] border border-${bgColor} flex 
      items-center justify-center px-4 py-1.5 hover:bg-${hoverLightColor}  
      focus-visible:border-0 focus-visible:outline 
      focus-visible:outline-2 focus-visible:outline-${focusOutlineColor}
      disabled:border-[#D7D7DC] disabled:bg-white disabled:text-[#D7D7DC]
      font-medium text-sm"
    >
      <i className=" text-lg ri-shopping-cart-fill"></i>
    </button>
  
`,
    },
    {
      ButtonName: "SecondaryFloatingCircleSmall",
      Code: `
      <button
      type="button"
      className="bg-white rounded-full h-[30px] w-[30px] min-w-[30px] tracking-[unset]
      text-${bgColor} leading-[6px] border border-${bgColor} flex 
       items-center justify-center px-4 py-1.5 hover:bg-${hoverLightColor}  
      focus-visible:border-0 focus-visible:outline 
      focus-visible:outline-2 focus-visible:outline-${focusOutlineColor}
      disabled:border-[#D7D7DC] disabled:bg-white disabled:text-[#D7D7DC]
      font-medium text-sm"
    >
      <i className=" text-lg ri-shopping-cart-fill"></i>
    </button>
 

`,
    },
    {
      ButtonName: "SecondaryFloatingCircleMeduim",
      Code: `
      <button
      type="button"
      className="bg-white rounded-full h-[40px] w-[40px] min-w-[30px] tracking-[unset]
       text-${bgColor} leading-[6px] border border-${bgColor} flex 
       items-center justify-center px-4 py-1.5 hover:bg-${hoverLightColor}  
       focus-visible:border-0 focus-visible:outline 
       focus-visible:outline-2 focus-visible:outline-${focusOutlineColor}
       disabled:border-[#D7D7DC] disabled:bg-white disabled:text-[#D7D7DC]
      font-medium text-sm"
    >
      <i className=" text-lg ri-shopping-cart-fill"></i>
    </button>
     

`,
    },
    {
      ButtonName: "SecondaryFloatingCircleLarge",
      Code: `
      
      <button
      type="button"
      className="bg-white rounded-full h-[50px] w-[50px] min-w-[30px] tracking-[unset]
      text-${bgColor} leading-[6px] border border-${bgColor} flex 
      items-center justify-center px-4 py-1.5 hover:bg-${hoverLightColor}  
      focus-visible:border-0 focus-visible:outline 
      focus-visible:outline-2 focus-visible:outline-${focusOutlineColor}
      disabled:border-[#D7D7DC] disabled:bg-white disabled:text-[#D7D7DC]
      font-medium text-sm"
    >
      <i className=" text-lg ri-shopping-cart-fill"></i>
    </button>

`,
    },
  ];
  const TertiaryButtonGroup = [
    {
      ButtonName: "TertiarySmall",
      Code: `
      <button
      type="button"
      className="bg-white h-[33px] min-w-[30px] rounded tracking-[unset]
                             text-${bgColor} leading-[6px] flex
                             items-center justify-center px-4 py-1.5 hover:bg-${hoverLightColor}  
                             focus-visible:border-0 focus-visible:outline 
                             focus-visible:outline-2 focus-visible:outline-${focusOutlineColor}
                               disabled:bg-white disabled:text-[#D7D7DC]
                                font-medium text-sm"
    >
      <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
      Button
      <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
    </button>


`,
    },
    {
      ButtonName: "TertiaryMedium",
      Code: `
      
      <button
      type="button"
      className="bg-white h-[43px] min-w-[30px] rounded tracking-[unset]
                            text-${bgColor} leading-[6px] flex items-center justify-center 
                            px-4 py-1.5 hover:bg-${hoverLightColor} 
                            focus-visible:outline focus-visible:outline-2
                             focus-visible:outline-${focusOutlineColor}  disabled:text-[#D7D7DC] font-medium text-sm"
    >
      <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
      Button
      <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
    </button>

`,
    },
    {
      ButtonName: "TertiaryLarge",
      Code: `

      <button
      type="button"
      className="bg-white h-[55px] min-w-[30px] rounded tracking-[unset]
                            text-${bgColor} leading-[6px] flex items-center justify-center px-4
                             py-1.5 hover:bg-${hoverLightColor} focus-visible:outline focus-visible:outline-2
                              focus-visible:outline-${focusOutlineColor}  disabled:text-[#D7D7DC] font-medium text-sm"
    >
      <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
      Button
      <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
    </button>


`,
    },
    {
      ButtonName: "TertiaryFloatingRectangleSmall",
      Code: `
      <button
      type="button"
      className="bg-white h-[30px] w-[30px] min-w-[30px] rounded tracking-[unset]
                            text-${bgColor} leading-[6px] flex items-center justify-center px-4 py-1.5
                             hover:bg-${hoverLightColor} focus-visible:outline focus-visible:outline-2 
                             focus-visible:outline-${focusOutlineColor}  disabled:text-[#D7D7DC] font-medium text-sm"
    >
      <i className=" text-lg ri-shopping-cart-fill"></i>
    </button>


`,
    },
    {
      ButtonName: "TertiaryFloatingRectangleMeduim",
      Code: `

      <button
      type="button"
      className="bg-white h-[40px] w-[40px] min-w-[30px] rounded tracking-[unset]
                            text-${bgColor} leading-[6px] flex items-center justify-center px-4 py-1.5 
                            hover:bg-${hoverLightColor} 
                            focus-visible:outline focus-visible:outline-2 focus-visible:outline-${focusOutlineColor}  
                            disabled:text-[#D7D7DC] font-medium text-sm"
    >
      <i className=" text-lg ri-shopping-cart-fill"></i>
    </button>

`,
    },
    {
      ButtonName: "TertiaryFloatingRectangleLarge",
      Code: `
      <button
      type="button"
      className="bg-white h-[50px] w-[50px] min-w-[30px] rounded tracking-[unset]
                            text-${bgColor} leading-[6px] flex items-center justify-center 
                            px-4 py-1.5 hover:bg-${hoverLightColor} focus-visible:outline 
                            focus-visible:outline-2 focus-visible:outline-${focusOutlineColor}  
                            disabled:text-[#D7D7DC] font-medium text-sm"
    >
      <i className=" text-lg ri-shopping-cart-fill"></i>
    </button>
  
`,
    },
    {
      ButtonName: "TertiaryFloatingCircleSmall",
      Code: `
      <button
      type="button"
      className="bg-white rounded-full h-[30px] w-[30px] min-w-[30px] tracking-[unset]
                            text-${bgColor} leading-[6px] flex items-center justify-center 
                            px-4 py-1.5 hover:bg-${hoverLightColor} focus-visible:outline 
                            focus-visible:outline-2 focus-visible:outline-${focusOutlineColor} 
                             disabled:text-[#D7D7DC] font-medium text-sm"
    >
      <i className=" text-lg ri-shopping-cart-fill"></i>
    </button>
 

`,
    },
    {
      ButtonName: "TertiaryFloatingCircleMeduim",
      Code: `

      <button
      type="button"
      className="bg-white rounded-full h-[40px] w-[40px] min-w-[30px] tracking-[unset]
                            text-${bgColor} leading-[6px] flex items-center justify-center
                             px-4 py-1.5 hover:bg-${hoverLightColor} focus-visible:outline 
                             focus-visible:outline-2 focus-visible:outline-${focusOutlineColor}  
                             disabled:text-[#D7D7DC] font-medium text-sm"
    >
      <i className=" text-lg ri-shopping-cart-fill"></i>
    </button>

`,
    },
    {
      ButtonName: "TertiaryFloatingCircleLarge",
      Code: `
      <button
      type="button"
      className="bg-white rounded-full h-[50px] w-[50px] min-w-[30px] tracking-[unset]
                            text-${bgColor} leading-[6px] flex items-center justify-center
                             px-4 py-1.5 hover:bg-${hoverLightColor} focus-visible:outline 
                             focus-visible:outline-2 focus-visible:outline-${focusOutlineColor} 
                              disabled:text-[#D7D7DC] font-medium text-sm"
    >
      <i className=" text-lg ri-shopping-cart-fill"></i>
    </button>
 

`,
    },
  ];
  
  useEffect(() => {
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [scrollTo]);


  const handleClick = (e,bgColor,hoverColor,hoverLightColor,outlineColor) => {
    setBgColor(bgColor);
    setHoverColor(hoverColor);
    setHoverLightColor(hoverLightColor)
    setfocusOutlineColor(outlineColor);
    setcolorName(e.target.innerText)
  };
  return (
    <main>
         <Breadcrumb
        breadcrumbs={breadcrumbs}
        lastChildMentioned="Buttons"
      />
      <div className=" bg-white m-5 mb-10">
    
        {activeSectionTab == 0 && (
          <>
            {/* component box 1 */}
            <div className="border border-atom_silver rounded p-4 mb-5 overflow-auto" id="primaryButton">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg leading-[32px] mb-[16px] text-atom_dimgray">
                  Primary Button
                </h3>
                <div className="flex items-center ">
                  <div className="w-[250px] mr-3">
                    <label
                      htmlFor="Change Color"
                      className="block text-xs font-regular leading-6 text-gray-900"
                    >
                      Change Color
                    </label>
                    <Menu as="div" className="relative inline-block text-left w-full">
                      <div>
                        <Menu.Button className="inline-flex h-[32.5px] items-center w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-xs font-regular text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                          {colorName}
                          <i className="ri-arrow-down-s-fill -mr-1  text-xl  text-[#0000008a]"></i>
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute w-[250px] left-0 z-10 mt-0  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="javascript:void(0)"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-xs min-h-[34px] h-[34px] "
                                  )}
                                  onClick={(e) =>
                                    handleClick (
                                      e,
                                      "atom_rojored",
                                      "atom_indianred",
                                      "atom_snowred",
                                      "atom_salmonpink"
                                    )
                                  }
                                >
                                  Red
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="javascript:void(0)"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-xs min-h-[34px] h-[34px]"
                                  )}
                                  onClick={(e) =>
                                    handleClick (
                                      e,
                                      "atom_onxyblack",
                                      "atom_dimgray",
                                      "atom_ghostwhite",
                                      "atom_battleshipgray"
                                    )
                                  }
                                >
                                  Black
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="javascript:void(0)"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-xs min-h-[34px] h-[34px]"
                                  )}
                                  onClick={(e) =>
                                    handleClick (
                                      e,
                                      "atom_barkeleyblue",
                                      "atom_indigodye",
                                      "atom_lightblue",
                                      "[#6A829F]"
                                    )
                                  }
                                >
                                 Blue 
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="javascript:void(0)"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-xs min-h-[34px] h-[34px]"
                                  )}
                                  onClick={(e) =>
                                    handleClick (
                                      e,
                                      "atom_celticblue",
                                      "atom_bleudefrance",
                                      "atom_lightblue",
                                      "atom_jordyblue"
                                    )
                                  }
                                >
                                 Blue 2 
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="javascript:void(0)"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-xs min-h-[34px] h-[34px]"
                                  )}
                                  onClick={(e) =>
                                    handleClick (
                                      e,
                                      "atom_harvestgold",
                                      "atom_sunglow",
                                      "atom_papayawhiplight",
                                      "atom_peachyellow"
                                    )
                                  }
                                >
                                 Yellow
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
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
                        {PrimaryButtonGroup[0].Code}
                        <br />

                        {PrimaryButtonGroup[1].Code}
                        <br />
                        {PrimaryButtonGroup[2].Code}
                        <br />
                        {PrimaryButtonGroup[3].Code}
                        <br />
                        {PrimaryButtonGroup[4].Code}
                        <br />
                        {PrimaryButtonGroup[5].Code}
                        <br />
                        {PrimaryButtonGroup[6].Code}
                        <br />
                        {PrimaryButtonGroup[7].Code}
                        <br />
                        {PrimaryButtonGroup[8].Code}
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

                        {/* {CopyCodeToolipMessage && (
                    <p className="text-sm text-green-500">{CopyCodeToolipMessage}</p>
                  )} */}
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
                      ></th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                      >
                        Default
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                      >
                        Hover
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                      >
                        Focus
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                      >
                        Disabled
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                      >
                        HTML
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-regular text-gray-900 sm:pl-0">
                        {colorName} Primary Small
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-${bgColor} h-[33px] min-w-[30px] rounded tracking-[unset]
                          text-white leading-[6px] flex items-center justify-center 
                           
                           px-4 py-1.5 focus-visible:outline 
                          focus-visible:outline-2 hover:bg-${hoverColor}
                         focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                          disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                         font-medium text-sm`}
                        >
                          <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
                          Button
                          <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`h-[33px] min-w-[30px] rounded tracking-[unset]
                     text-white leading-[6px] flex items-center justify-center 
                         
                      px-4 py-1.5 focus-visible:outline 
                     focus-visible:outline-2 bg-${hoverColor} 
                    focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                     disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                    font-medium text-sm `}
                        >
                          <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
                          Button
                          <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-${bgColor} h-[33px] min-w-[30px] rounded tracking-[unset]
                     text-white leading-[6px] flex items-center justify-center 
                      
                      px-4 py-1.5 outline outline-2 hover:bg-${hoverColor} 
                    outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                     disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                    font-medium text-sm `}
                        >
                          <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
                          Button
                          <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          disabled
                          className={`bg-${bgColor} h-[33px] min-w-[30px] rounded tracking-[unset]
                     text-white leading-[6px] flex items-center justify-center 
                      
                      px-4 py-1.5 focus-visible:outline 
                     focus-visible:outline-2 hover:bg-${hoverColor} 
                    focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                     disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                    font-medium text-sm `}
                        >
                          <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
                          Button
                          <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(PrimaryButtonGroup[0].ButtonName)
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
                          id={PrimaryButtonGroup[0].ButtonName}
                        >
                          {PrimaryButtonGroup[0].Code}
                        </pre>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-regular text-gray-900 sm:pl-0">
                      {colorName} Primary Medium
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-${bgColor} h-[43px] min-w-[30px] rounded tracking-[unset]
                     text-white leading-[6px] flex items-center justify-center 
                      
                      px-4 py-1.5 focus-visible:outline 
                     focus-visible:outline-2 hover:bg-${hoverColor} 
                    focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                     disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                    font-medium text-sm`}
                        >
                          <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
                          Button
                          <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`h-[43px] min-w-[30px] rounded tracking-[unset]
                     text-white leading-[6px] flex items-center justify-center 
                      
                      px-4 py-1.5 focus-visible:outline 
                     focus-visible:outline-2 bg-${hoverColor} 
                    focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                     disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                    font-medium text-sm `}
                        >
                          <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
                          Button
                          <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-${bgColor} h-[43px] min-w-[30px] rounded tracking-[unset]
                     text-white leading-[6px] flex items-center justify-center 
                      
                      px-4 py-1.5 outline outline-2 hover:bg-${hoverColor} 
                    outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                     disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                    font-medium text-sm `}
                        >
                          <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
                          Button
                          <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          disabled
                          className={`bg-${bgColor} h-[43px] min-w-[30px] rounded tracking-[unset]
                     text-white leading-[6px] flex items-center justify-center 
                      px-4 py-1.5 focus-visible:outline 
                     focus-visible:outline-2 hover:bg-${hoverColor} 
                    focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                     disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                    font-medium text-sm `}
                        >
                          <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
                          Button
                          <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(PrimaryButtonGroup[1].ButtonName)
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
                          id={PrimaryButtonGroup[1].ButtonName}
                        >
                          {PrimaryButtonGroup[1].Code}
                        </pre>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-regular text-gray-900 sm:pl-0">
                      {colorName} Primary Large
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-${bgColor} h-[55px] min-w-[30px] rounded tracking-[unset]
                     text-white leading-[6px] flex items-center justify-center 
                      
                      px-4 py-1.5 focus-visible:outline 
                     focus-visible:outline-2 hover:bg-${hoverColor} 
                    focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                     disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                    font-medium text-sm `}
                        >
                          <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
                          Button
                          <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`h-[55px] min-w-[30px] rounded tracking-[unset]
                     text-white leading-[6px] flex items-center justify-center 
                      
                      px-4 py-1.5 focus-visible:outline 
                     focus-visible:outline-2 bg-${hoverColor} 
                    focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                     disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                    font-medium text-sm`}
                        >
                          <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
                          Button
                          <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-${bgColor} h-[55px] min-w-[30px] rounded tracking-[unset]
                     text-white leading-[6px] flex items-center justify-center 
                      
                      px-4 py-1.5 outline outline-2 hover:bg-${hoverColor} 
                    outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                     disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                    font-medium text-sm`}
                        >
                          <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
                          Button
                          <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          disabled
                          className={`bg-${bgColor} h-[55px] min-w-[30px] rounded tracking-[unset]
                     text-white leading-[6px] flex items-center justify-center 
                      
                      px-4 py-1.5 focus-visible:outline 
                     focus-visible:outline-2 hover:bg-${hoverColor} 
                    focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                     disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                    font-medium text-sm`}
                        >
                          <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
                          Button
                          <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(PrimaryButtonGroup[2].ButtonName)
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
                          id={PrimaryButtonGroup[2].ButtonName}
                        >
                          {PrimaryButtonGroup[2].Code}
                        </pre>
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-regular text-gray-900 sm:pl-0">
                      {colorName} Primary Floating Action Button <br /> - Rectangle
                        small
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-${bgColor} h-[30px] w-[30px] min-w-[30px] rounded tracking-[unset]
                     text-white leading-[6px] flex items-center justify-center 
                      
                       focus-visible:outline 
                     focus-visible:outline-2 hover:bg-${hoverColor} 
                    focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                     disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                    font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`h-[30px] w-[30px] min-w-[30px] rounded tracking-[unset]
                     text-white leading-[6px] flex items-center justify-center 
                     
                     focus-visible:outline 
                    focus-visible:outline-2 bg-${hoverColor} 
                   focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                    disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                   font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className= {`bg-${bgColor} h-[30px] w-[30px] min-w-[30px] rounded tracking-[unset]
                     text-white leading-[6px] flex items-center justify-center 
                     
                      outline outline-2 hover:bg-${hoverColor} 
                   outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                    disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                   font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          disabled
                          className={`bg-${bgColor} h-[30px] w-[30px] min-w-[30px] rounded tracking-[unset]
                       text-white leading-[6px] flex items-center justify-center 
                       
                       px-4 py-1.5 focus-visible:outline 
                      focus-visible:outline-2 hover:bg-${hoverColor} 
                     focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                      disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                     font-medium text-sm `}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(PrimaryButtonGroup[3].ButtonName)
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
                          id={PrimaryButtonGroup[3].ButtonName}
                        >
                          {PrimaryButtonGroup[3].Code}
                        </pre>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-regular text-gray-900 sm:pl-0">
                      {colorName} Primary Floating Action Button <br /> - Rectangle
                        meduim
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-${bgColor} h-[40px] w-[40px] min-w-[30px] rounded tracking-[unset]
                     text-white leading-[6px] flex items-center justify-center 
                      
                       focus-visible:outline 
                     focus-visible:outline-2 hover:bg-${hoverColor} 
                    focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                     disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                    font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`h-[40px] w-[40px] min-w-[40px] rounded tracking-[unset]
                     text-white leading-[6px] flex items-center justify-center 
                     
                     focus-visible:outline 
                    focus-visible:outline-2 bg-${hoverColor} 
                   focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                    disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                   font-medium text-sm `}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={` bg-${bgColor} h-[40px] w-[40px] min-w-[30px] rounded tracking-[unset]
                     text-white leading-[6px] flex items-center justify-center 
                     
                      outline outline-2 hover:bg-${hoverColor} 
                   outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                    disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                   font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          disabled
                          className={`bg-${bgColor} h-[40px] w-[40px] min-w-[30px] rounded tracking-[unset]
                       text-white leading-[6px] flex items-center justify-center 
                       
                       px-4 py-1.5 focus-visible:outline 
                      focus-visible:outline-2 hover:bg-${hoverColor} 
                     focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                      disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                     font-medium text-sm`}
                        >
                          <i className="text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(PrimaryButtonGroup[4].ButtonName)
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
                          id={PrimaryButtonGroup[4].ButtonName}
                        >
                          {PrimaryButtonGroup[4].Code}
                        </pre>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-regular text-gray-900 sm:pl-0">
                      {colorName} Primary Floating Action Button
                        <br /> - Rectangle large
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-${bgColor} h-[50px] w-[50px] min-w-[30px] rounded tracking-[unset]
                     text-white leading-[6px] flex items-center justify-center 
                      
                       focus-visible:outline 
                     focus-visible:outline-2 hover:bg-${hoverColor} 
                    focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                     disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                    font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`h-[50px] w-[50px] min-w-[30px] rounded tracking-[unset]
                     text-white leading-[6px] flex items-center justify-center 
                     
                     focus-visible:outline 
                    focus-visible:outline-2 bg-${hoverColor} 
                   focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                    disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                   font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-${bgColor} h-[50px] w-[50px] min-w-[30px] rounded tracking-[unset]
                     text-white leading-[6px] flex items-center justify-center 
                     
                      outline outline-2 hover:bg-${hoverColor} 
                   outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                    disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                   font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          disabled
                          className={` bg-${bgColor} h-[50px] w-[50px] min-w-[30px] rounded tracking-[unset]
                       text-white leading-[6px] flex items-center justify-center 
                       
                       px-4 py-1.5 focus-visible:outline 
                      focus-visible:outline-2 hover:bg-${hoverColor} 
                     focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                      disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                     font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(PrimaryButtonGroup[5].ButtonName)
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
                          id={PrimaryButtonGroup[5].ButtonName}
                        >
                          {PrimaryButtonGroup[5].Code}
                        </pre>
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-regular text-gray-900 sm:pl-0">
                      {colorName} Primary Floating Action Button <br /> - Circle small
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-${bgColor} rounded-full h-[30px] w-[30px] min-w-[30px] tracking-[unset]
                     text-white leading-[6px] flex items-center justify-center 
                      
                       focus-visible:outline 
                     focus-visible:outline-2 hover:bg-${hoverColor} 
                    focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                     disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                    font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={` h-[30px] rounded-full w-[30px] min-w-[30px] tracking-[unset]
                     text-white leading-[6px] flex items-center justify-center 
                     
                     focus-visible:outline 
                    focus-visible:outline-2 bg-${hoverColor} 
                   focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                    disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                   font-medium text-sm `}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={` bg-${bgColor} h-[30px] w-[30px] min-w-[30px] rounded-full tracking-[unset]
                     text-white leading-[6px] flex items-center justify-center 
                     
                      outline outline-2 hover:bg-${hoverColor} 
                   outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                    disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                   font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          disabled
                          className={`bg-${bgColor} h-[30px] w-[30px] min-w-[30px] rounded-full tracking-[unset]
                       text-white leading-[6px] flex items-center justify-center 
                       
                       px-4 py-1.5 focus-visible:outline 
                      focus-visible:outline-2 hover:bg-${hoverColor} 
                     focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                      disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                     font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(PrimaryButtonGroup[6].ButtonName)
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
                          id={PrimaryButtonGroup[6].ButtonName}
                        >
                          {PrimaryButtonGroup[6].Code}
                        </pre>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-regular text-gray-900 sm:pl-0">
                      {colorName} Primary Floating Action Button <br /> - Circle
                        meduim
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={` bg-${bgColor} rounded-full h-[40px] w-[40px] min-w-[30px] tracking-[unset]
                     text-white leading-[6px] flex items-center justify-center 
                      
                       focus-visible:outline 
                     focus-visible:outline-2 hover:bg-${hoverColor} 
                    focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                     disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                    font-medium text-sm `}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={` h-[40px] rounded-full w-[40px] min-w-[40px] tracking-[unset]
                     text-white leading-[6px] flex items-center justify-center 
                     
                     focus-visible:outline 
                    focus-visible:outline-2 bg-${hoverColor} 
                   focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                    disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                   font-medium text-sm `}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-${bgColor} h-[40px] w-[40px] min-w-[40px] rounded-full tracking-[unset]
                     text-white leading-[6px] flex items-center justify-center 
                     
                      outline outline-2 hover:bg-${hoverColor} 
                   outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                    disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                   font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          disabled
                          className={` bg-${bgColor} h-[40px] w-[40px] min-w-[30px] rounded-full tracking-[unset]
                       text-white leading-[6px] flex items-center justify-center 
                       
                       px-4 py-1.5 focus-visible:outline 
                      focus-visible:outline-2 hover:bg-${hoverColor} 
                     focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                      disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                     font-medium text-sm `}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(PrimaryButtonGroup[7].ButtonName)
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
                          id={PrimaryButtonGroup[7].ButtonName}
                        >
                          {PrimaryButtonGroup[7].Code}
                        </pre>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-regular text-gray-900 sm:pl-0">
                      {colorName} Primary Floating Action Button <br /> - Circle large
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={` bg-${bgColor} rounded-full h-[50px] w-[50px] min-w-[30px] tracking-[unset]
                     text-white leading-[6px] flex items-center justify-center 
                      
                       focus-visible:outline 
                     focus-visible:outline-2 hover:bg-${hoverColor} 
                    focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                     disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                    font-medium text-sm `}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`  rounded-full h-[50px] w-[50px] min-w-[50px] tracking-[unset]
                     text-white leading-[6px] flex items-center justify-center 
                     
                     focus-visible:outline 
                    focus-visible:outline-2 bg-${hoverColor} 
                   focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                    disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                   font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-${bgColor} h-[50px] w-[50px] min-w-[30px] rounded-full tracking-[unset]
                     text-white leading-[6px] flex items-center justify-center 
                     
                      outline outline-2 hover:bg-${hoverColor} 
                   outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                    disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                   font-medium text-sm `}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          disabled
                          className={`bg-${bgColor} h-[50px] w-[50px] min-w-[30px] rounded-full tracking-[unset]
                       text-white leading-[6px] flex items-center justify-center 
                       
                       px-4 py-1.5 focus-visible:outline 
                      focus-visible:outline-2 hover:bg-${hoverColor} 
                     focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                      disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                     font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(PrimaryButtonGroup[8].ButtonName)
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
                          id={PrimaryButtonGroup[8].ButtonName}
                        >
                          {PrimaryButtonGroup[8].Code}
                        </pre>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* component box 2 */}
            <div className="border border-atom_silver rounded p-4 mb-5 overflow-auto" id="secondaryButton">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg leading-[32px] mb-[16px] text-atom_dimgray">
                  Secondary Button
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
                        {SecondaryButtonGroup[0].Code}
                        <br />

                        {SecondaryButtonGroup[1].Code}
                        <br />
                        {SecondaryButtonGroup[2].Code}
                        <br />
                        {SecondaryButtonGroup[3].Code}
                        <br />
                        {SecondaryButtonGroup[4].Code}
                        <br />
                        {SecondaryButtonGroup[5].Code}
                        <br />
                        {SecondaryButtonGroup[6].Code}
                        <br />
                        {SecondaryButtonGroup[7].Code}
                        <br />
                        {SecondaryButtonGroup[8].Code}
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

                        {/* {CopyCodeToolipMessage && (
                    <p className="text-sm text-green-500">{CopyCodeToolipMessage}</p>
                  )} */}
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
                      ></th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                      >
                        Default
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                      >
                        Hover
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                      >
                        Focus
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                      >
                        Disabled
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                      >
                        HTML
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-regular text-gray-900 sm:pl-0">
                      {colorName} Secondary Small
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-white h-[33px] min-w-[30px] rounded tracking-[unset]
                           text-${bgColor} leading-[6px] border border-${bgColor} flex 
                           items-center justify-center px-4 py-1.5 hover:bg-${hoverLightColor}  
                           focus-visible:border-0 focus-visible:outline 
                           focus-visible:outline-2 focus-visible:outline-${focusOutlineColor}
                            disabled:border-[#D7D7DC] disabled:bg-white disabled:text-[#D7D7DC]
                              font-medium text-sm`}
                        >
                          <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
                          Button
                          <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-${hoverLightColor} h-[33px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px] border border-${bgColor} flex items-center justify-center 
                      
                      px-4 py-1.5 focus-visible:outline 
                     focus-visible:outline-2  
                    focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                     disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                    font-medium text-sm`}
                        >
                          <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
                          Button
                          <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-white h-[33px] min-w-[30px] rounded tracking-[unset]
                    text-${bgColor} leading-[6px] border  flex items-center justify-center 
                     px-4 py-1.5 outline outline-2 hover:bg-${hoverLightColor} 
                      focus-visible:border-0
                    outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                     disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                    font-medium text-sm`}
                        >
                          <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
                          Button
                          <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          disabled
                          className={`bg-white h-[33px] min-w-[30px] rounded tracking-[unset]
                     text-${bgColor} leading-[6px] border- flex items-center justify-center 
                           border border-${bgColor}
                      px-4 py-1.5 focus-visible:outline 
                     focus-visible:outline-2 hover:bg-${hoverColor} 
                    focus-visible:outline-${focusOutlineColor} disabled:border-[#D7D7DC] disabled:bg-white disabled:text-[#D7D7DC]
                    font-medium text-sm`}
                        >
                          <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
                          Button
                          <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(SecondaryButtonGroup[0].ButtonName)
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
                          id={SecondaryButtonGroup[0].ButtonName}
                        >
                          {SecondaryButtonGroup[0].Code}
                        </pre>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-regular text-gray-900 sm:pl-0">
                      {colorName} Secondary Medium
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-white h-[43px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px] border border-${bgColor} flex 
                           items-center justify-center px-4 py-1.5 hover:bg-${hoverLightColor}  
                           focus-visible:border-0 focus-visible:outline 
                           focus-visible:outline-2 focus-visible:outline-${focusOutlineColor}
                            disabled:border-[#D7D7DC] disabled:bg-white disabled:text-[#D7D7DC]
                              font-medium text-sm`}
                        >
                          <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
                          Button
                          <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-${hoverLightColor} h-[43px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px] border border-${bgColor} flex items-center justify-center 
                      
                          px-4 py-1.5 focus-visible:outline 
                         focus-visible:outline-2  
                        focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                         disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                        font-medium text-sm`}
                        >
                          <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
                          Button
                          <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-white h-[43px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px] border  flex items-center justify-center 
                          px-4 py-1.5 outline outline-2 hover:bg-${hoverLightColor} 
                           focus-visible:border-0
                         outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                          disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                         font-medium text-sm`}
                        >
                          <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
                          Button
                          <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          disabled
                          className={`bg-white h-[43px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px] border- flex items-center justify-center 
                           border border-${bgColor}
                      px-4 py-1.5 focus-visible:outline 
                     focus-visible:outline-2 hover:bg-${hoverColor} 
                    focus-visible:outline-${focusOutlineColor} disabled:border-[#D7D7DC] disabled:bg-white disabled:text-[#D7D7DC]
                    font-medium text-sm`}
                        >
                          <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
                          Button
                          <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(SecondaryButtonGroup[1].ButtonName)
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
                          id={SecondaryButtonGroup[1].ButtonName}
                        >
                          {SecondaryButtonGroup[1].Code}
                        </pre>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-regular text-gray-900 sm:pl-0">
                      {colorName} Secondary Large
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-white h-[55px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px] border border-${bgColor} flex 
                          items-center justify-center px-4 py-1.5 hover:bg-${hoverLightColor}  
                          focus-visible:border-0 focus-visible:outline 
                          focus-visible:outline-2 focus-visible:outline-${focusOutlineColor}
                           disabled:border-[#D7D7DC] disabled:bg-white disabled:text-[#D7D7DC]
                             font-medium text-sm`}
                        >
                          <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
                          Button
                          <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-${hoverLightColor} h-[55px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px] border border-${bgColor} flex items-center justify-center 
                          px-4 py-1.5 focus-visible:outline 
                         focus-visible:outline-2  
                        focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                         disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                        font-medium text-sm`}
                        >
                          <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
                          Button
                          <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-white h-[55px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px] border  flex items-center justify-center 
                          px-4 py-1.5 outline outline-2 hover:bg-${hoverLightColor} 
                           focus-visible:border-0
                         outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                          disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                         font-medium text-sm`}
                        >
                          <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
                          Button
                          <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          disabled
                          className={`bg-${bgColor} h-[55px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px] border- flex items-center justify-center 
                          border border-${bgColor}
                     px-4 py-1.5 focus-visible:outline 
                    focus-visible:outline-2 hover:bg-transparent
                   focus-visible:outline-${focusOutlineColor} disabled:border-[#D7D7DC] disabled:bg-white disabled:text-[#D7D7DC]
                   font-medium text-sm`}
                        >
                          <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
                          Button
                          <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(SecondaryButtonGroup[2].ButtonName)
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
                          id={SecondaryButtonGroup[2].ButtonName}
                        >
                          {SecondaryButtonGroup[2].Code}
                        </pre>
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-regular text-gray-900 sm:pl-0">
                      {colorName} Secondary Floating Action Button <br /> - Rectangle
                        small
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-white h-[30px] w-[30px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px] border border-${bgColor} flex 
                          items-center justify-center px-4 py-1.5 hover:bg-${hoverLightColor}  
                          focus-visible:border-0 focus-visible:outline 
                          focus-visible:outline-2 focus-visible:outline-${focusOutlineColor}
                           disabled:border-[#D7D7DC] disabled:bg-white disabled:text-[#D7D7DC]
                             font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-${hoverLightColor} h-[30px] w-[30px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px] border border-${bgColor} flex items-center justify-center 
                        px-4 py-1.5 focus-visible:outline 
                         focus-visible:outline-2  
                        focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                         disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                        font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-white h-[30px] w-[30px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px] border  flex items-center justify-center 
                          px-4 py-1.5 outline outline-2 hover:bg-${hoverLightColor} 
                           focus-visible:border-0
                         outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                          disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                         font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          disabled
                          className={`bg-white h-[30px] w-[30px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px] border- flex items-center justify-center 
                          border border-${bgColor}
                     px-4 py-1.5 focus-visible:outline 
                    focus-visible:outline-2 hover:bg-transparent
                   focus-visible:outline-${focusOutlineColor} disabled:border-[#D7D7DC] disabled:bg-white disabled:text-[#D7D7DC]
                   font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(SecondaryButtonGroup[3].ButtonName)
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
                          id={SecondaryButtonGroup[3].ButtonName}
                        >
                          {SecondaryButtonGroup[3].Code}
                        </pre>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-regular text-gray-900 sm:pl-0">
                      {colorName} Secondary Floating Action Button <br /> - Rectangle
                        meduim
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-white h-[40px] w-[40px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px] border border-${bgColor} flex 
                          items-center justify-center px-4 py-1.5 hover:bg-${hoverLightColor}  
                          focus-visible:border-0 focus-visible:outline 
                          focus-visible:outline-2 focus-visible:outline-${focusOutlineColor}
                           disabled:border-[#D7D7DC] disabled:bg-white disabled:text-[#D7D7DC]
                             font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-${hoverLightColor} h-[40px] w-[40px] min-w-[40px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px] border border-${bgColor} flex items-center justify-center 
                          px-4 py-1.5 focus-visible:outline 
                        focus-visible:outline-2  
                       focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                        disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                       font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-white h-[40px] w-[40px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px] border  flex items-center justify-center 
                          px-4 py-1.5 outline outline-2 hover:bg-${hoverLightColor} 
                           focus-visible:border-0
                         outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                          disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                         font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          disabled
                          className={`bg-white h-[40px] w-[40px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px] border- flex items-center justify-center 
                          border border-${bgColor}
                     px-4 py-1.5 focus-visible:outline 
                    focus-visible:outline-2 hover:bg-transparent
                   focus-visible:outline-${focusOutlineColor} disabled:border-[#D7D7DC] disabled:bg-white disabled:text-[#D7D7DC]
                   font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(SecondaryButtonGroup[4].ButtonName)
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
                          id={SecondaryButtonGroup[4].ButtonName}
                        >
                          {SecondaryButtonGroup[4].Code}
                        </pre>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-regular text-gray-900 sm:pl-0">
                      {colorName} Secondary Floating Action Button <br /> - Rectangle
                        large
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-white h-[50px] w-[50px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px] border border-${bgColor} flex 
                          items-center justify-center px-4 py-1.5 hover:bg-${hoverLightColor}  
                          focus-visible:border-0 focus-visible:outline 
                          focus-visible:outline-2 focus-visible:outline-${focusOutlineColor}
                           disabled:border-[#D7D7DC] disabled:bg-white disabled:text-[#D7D7DC]
                             font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-${hoverLightColor} h-[50px] w-[50px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px] border border-${bgColor} flex items-center justify-center 
                          px-4 py-1.5 focus-visible:outline 
                        focus-visible:outline-2  
                       focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                        disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                       font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-white h-[50px] w-[50px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px] border  flex items-center justify-center 
                          px-4 py-1.5 outline outline-2 hover:bg-${hoverLightColor} 
                           focus-visible:border-0
                         outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                          disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                         font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          disabled
                          className={`bg-white h-[50px] w-[50px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px] border- flex items-center justify-center 
                          border border-${bgColor}
                     px-4 py-1.5 focus-visible:outline 
                    focus-visible:outline-2 hover:bg-transparent 
                   focus-visible:outline-${focusOutlineColor} disabled:border-[#D7D7DC] disabled:bg-white disabled:text-[#D7D7DC]
                   font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(SecondaryButtonGroup[5].ButtonName)
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
                          id={SecondaryButtonGroup[5].ButtonName}
                        >
                          {SecondaryButtonGroup[5].Code}
                        </pre>
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-regular text-gray-900 sm:pl-0">
                      {colorName} Secondary Floating Action Button <br /> - Circle
                        small
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-white rounded-full h-[30px] w-[30px] min-w-[30px] tracking-[unset]
                          text-${bgColor} leading-[6px] border border-${bgColor} flex 
                          items-center justify-center px-4 py-1.5 hover:bg-${hoverLightColor}  
                          focus-visible:border-0 focus-visible:outline 
                          focus-visible:outline-2 focus-visible:outline-${focusOutlineColor}
                           disabled:border-[#D7D7DC] disabled:bg-white disabled:text-[#D7D7DC]
                             font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-${hoverLightColor} h-[30px] rounded-full w-[30px] min-w-[30px] tracking-[unset]
                          text-${bgColor} leading-[6px] border border-${bgColor} flex items-center justify-center 
                          px-4 py-1.5 focus-visible:outline 
                        focus-visible:outline-2  
                       focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                        disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                       font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-white h-[30px] w-[30px] min-w-[30px] rounded-full tracking-[unset]
                          text-${bgColor} leading-[6px] border  flex items-center justify-center 
                          px-4 py-1.5 outline outline-2 hover:bg-${hoverLightColor} 
                           focus-visible:border-0
                         outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                          disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                         font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          disabled
                          className={`bg-white h-[30px] w-[30px] min-w-[30px] rounded-full tracking-[unset]
                          text-${bgColor} leading-[6px] border- flex items-center justify-center 
                          border border-${bgColor}
                     px-4 py-1.5 focus-visible:outline 
                    focus-visible:outline-2 hover:bg-transparent
                   focus-visible:outline-${focusOutlineColor} disabled:border-[#D7D7DC] disabled:bg-white disabled:text-[#D7D7DC]
                   font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(SecondaryButtonGroup[6].ButtonName)
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
                          id={SecondaryButtonGroup[6].ButtonName}
                        >
                          {SecondaryButtonGroup[6].Code}
                        </pre>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-regular text-gray-900 sm:pl-0">
                      {colorName} Secondary Floating Action Button <br /> - Circle
                        meduim
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-white rounded-full h-[40px] w-[40px] min-w-[30px] tracking-[unset]
                          text-${bgColor} leading-[6px] border border-${bgColor} flex 
                          items-center justify-center px-4 py-1.5 hover:bg-${hoverLightColor}  
                          focus-visible:border-0 focus-visible:outline 
                          focus-visible:outline-2 focus-visible:outline-${focusOutlineColor}
                           disabled:border-[#D7D7DC] disabled:bg-white disabled:text-[#D7D7DC]
                             font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-${hoverLightColor} h-[40px] rounded-full w-[40px] min-w-[40px] tracking-[unset]
                          text-${bgColor} leading-[6px] border border-${bgColor} flex items-center justify-center 
                          px-4 py-1.5 focus-visible:outline 
                        focus-visible:outline-2  
                       focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                        disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                       font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-white h-[40px] w-[40px] min-w-[40px] rounded-full tracking-[unset]
                          text-${bgColor} leading-[6px] border  flex items-center justify-center 
                          px-4 py-1.5 outline outline-2 hover:bg-${hoverLightColor} 
                           focus-visible:border-0
                         outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                          disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                         font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          disabled
                          className={`bg-white h-[40px] w-[40px] min-w-[30px] rounded-full tracking-[unset]
                          text-${bgColor} leading-[6px] border- flex items-center justify-center 
                          border border-${bgColor}
                     px-4 py-1.5 focus-visible:outline 
                    focus-visible:outline-2 hover:bg-${hoverColor} 
                   focus-visible:outline-${focusOutlineColor} disabled:border-[#D7D7DC] disabled:bg-white disabled:text-[#D7D7DC]
                   font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(SecondaryButtonGroup[7].ButtonName)
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
                          id={SecondaryButtonGroup[7].ButtonName}
                        >
                          {SecondaryButtonGroup[7].Code}
                        </pre>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-regular text-gray-900 sm:pl-0">
                      {colorName} Secondary Floating Action Button <br /> - Circle
                        large
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-white rounded-full h-[50px] w-[50px] min-w-[30px] tracking-[unset]
                          text-${bgColor} leading-[6px] border border-${bgColor} flex 
                          items-center justify-center px-4 py-1.5 hover:bg-${hoverLightColor}  
                          focus-visible:border-0 focus-visible:outline 
                          focus-visible:outline-2 focus-visible:outline-${focusOutlineColor}
                           disabled:border-[#D7D7DC] disabled:bg-white disabled:text-[#D7D7DC]
                             font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-${hoverLightColor}  rounded-full h-[50px] w-[50px] min-w-[50px] tracking-[unset]
                          text-${bgColor} leading-[6px] border border-${bgColor} flex items-center justify-center 
                          px-4 py-1.5 focus-visible:outline 
                        focus-visible:outline-2  
                       focus-visible:outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                        disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                       font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-white h-[50px] w-[50px] min-w-[30px] rounded-full tracking-[unset]
                          text-${bgColor} leading-[6px] border  flex items-center justify-center 
                          px-4 py-1.5 outline outline-2 hover:bg-${hoverLightColor} 
                           focus-visible:border-0
                         outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                          disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                         font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          disabled
                          className={`bg-white h-[50px] w-[50px] min-w-[30px] rounded-full tracking-[unset]
                          text-${bgColor} leading-[6px] border- flex items-center justify-center 
                          border border-${bgColor}
                     px-4 py-1.5 focus-visible:outline 
                    focus-visible:outline-2 hover:bg-${hoverColor} 
                   focus-visible:outline-${focusOutlineColor} disabled:border-[#D7D7DC] disabled:bg-white disabled:text-[#D7D7DC]
                   font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(SecondaryButtonGroup[8].ButtonName)
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
                          id={SecondaryButtonGroup[8].ButtonName}
                        >
                          {SecondaryButtonGroup[8].Code}
                        </pre>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* component box 3 */}
            <div className="border border-atom_silver rounded p-4 mb-5 overflow-auto" id="tertiaryButton">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg leading-[32px] mb-[16px] text-atom_dimgray">
                  Tertiary Button
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
                        className="text-atom_sunglow text-base bg-black p-5 flex justify-between "
                        id="AllAlertCode"
                      >
                        {TertiaryButtonGroup[0].Code}
                        <br />

                        {TertiaryButtonGroup[1].Code}
                        <br />
                        {TertiaryButtonGroup[2].Code}
                        <br />
                        {TertiaryButtonGroup[3].Code}
                        <br />
                        {TertiaryButtonGroup[4].Code}
                        <br />
                        {TertiaryButtonGroup[5].Code}
                        <br />
                        {TertiaryButtonGroup[6].Code}
                        <br />
                        {TertiaryButtonGroup[7].Code}
                        <br />
                        {TertiaryButtonGroup[8].Code}
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

                        {/* {CopyCodeToolipMessage && (
                    <p className="text-sm text-green-500">{CopyCodeToolipMessage}</p>
                  )} */}
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
                      ></th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                      >
                        Default
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                      >
                        Hover
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                      >
                        Focus
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                      >
                        Disabled
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                      >
                        HTML
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-regular text-gray-900 sm:pl-0">
                      {colorName} Tertiary Small
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-white h-[33px] min-w-[30px] rounded tracking-[unset]
                           text-${bgColor} leading-[6px] flex
                           items-center justify-center px-4 py-1.5 hover:bg-${hoverLightColor}  
                           focus-visible:border-0 focus-visible:outline 
                           focus-visible:outline-2 focus-visible:outline-${focusOutlineColor}
                             disabled:bg-white disabled:text-[#D7D7DC]
                              font-medium text-sm`}
                        >
                          <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
                          Button
                          <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-${hoverLightColor} h-[33px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px] flex items-center justify-center 
                          px-4 py-1.5 focus-visible:outline focus-visible:outline-2  
                        focus-visible:outline-${focusOutlineColor}  disabled:text-white
                          disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                          font-medium text-sm`}
                        >
                          <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
                          Button
                          <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-white h-[33px] min-w-[30px] rounded tracking-[unset]
                    text-${bgColor} leading-[6px]   flex items-center justify-center 
                     px-4 py-1.5 outline outline-2 hover:bg-${hoverLightColor} 
                      focus-visible:border-0
                    outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                     font-medium text-sm`}
                        >
                          <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
                          Button
                          <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          disabled
                          className={`bg-white h-[33px] min-w-[30px] rounded tracking-[unset]
                     text-${bgColor} leading-[6px]  flex items-center justify-center 
                      px-4 py-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-${focusOutlineColor}  
                       disabled:text-[#D7D7DC] font-medium text-sm`}
                        >
                          <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
                          Button
                          <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(TertiaryButtonGroup[0].ButtonName)
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
                          id={TertiaryButtonGroup[0].ButtonName}
                        >
                          {TertiaryButtonGroup[0].Code}
                        </pre>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-regular text-gray-900 sm:pl-0">
                      {colorName} Tertiary Medium
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-white h-[43px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px] flex items-center justify-center 
                          px-4 py-1.5 hover:bg-${hoverLightColor} 
                          focus-visible:outline focus-visible:outline-2
                           focus-visible:outline-${focusOutlineColor}  disabled:text-[#D7D7DC] font-medium text-sm`}
                        >
                          <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
                          Button
                          <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-${hoverLightColor} h-[43px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px] flex items-center justify-center 
                          px-4 py-1.5 focus-visible:outline focus-visible:outline-2  
                        focus-visible:outline-${focusOutlineColor}  disabled:text-white
                          disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                          font-medium text-sm`}
                        >
                          <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
                          Button
                          <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-white h-[43px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px]   flex items-center justify-center px-4 py-1.5 outline outline-2 hover:bg-${hoverLightColor} focus-visible:border-0
                          outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                           font-medium text-sm`}
                        >
                          <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
                          Button
                          <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          disabled
                          className={`bg-white h-[43px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px]  flex items-center justify-center 
                      px-4 py-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-${focusOutlineColor}  
                       disabled:text-[#D7D7DC] font-medium text-sm`}
                        >
                          <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
                          Button
                          <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(TertiaryButtonGroup[1].ButtonName)
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
                          id={TertiaryButtonGroup[1].ButtonName}
                        >
                          {TertiaryButtonGroup[1].Code}
                        </pre>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-regular text-gray-900 sm:pl-0">
                      {colorName} Tertiary Large
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-white h-[55px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px] flex items-center justify-center px-4
                           py-1.5 hover:bg-${hoverLightColor} focus-visible:outline focus-visible:outline-2
                            focus-visible:outline-${focusOutlineColor}  disabled:text-[#D7D7DC] font-medium text-sm`}
                        >
                          <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
                          Button
                          <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-${hoverLightColor} h-[55px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px] flex items-center justify-center 
                          px-4 py-1.5 focus-visible:outline focus-visible:outline-2  
                        focus-visible:outline-${focusOutlineColor}  disabled:text-white
                          disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                          font-medium text-sm`}
                        >
                          <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
                          Button
                          <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-white h-[55px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px]   flex items-center justify-center 
                          px-4 py-1.5 outline outline-2 hover:bg-${hoverLightColor} focus-visible:border-0
                          outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                           font-medium text-sm`}
                        >
                          <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
                          Button
                          <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          disabled
                          className={`text-${bgColor} leading-[6px] flex items-center
                           justify-center px-4 py-1.5 hover:bg-white focus-visible:outline 
                           focus-visible:outline-2 focus-visible:outline-${focusOutlineColor} 
                            disabled:text-[#D7D7DC] font-medium text-sm`}
                        >
                          <i className="mr-2 text-lg ri-shopping-cart-fill"></i>
                          Button
                          <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(TertiaryButtonGroup[2].ButtonName)
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
                          id={TertiaryButtonGroup[2].ButtonName}
                        >
                          {TertiaryButtonGroup[2].Code}
                        </pre>
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-regular text-gray-900 sm:pl-0">
                      {colorName} Tertiary Floating Action Button <br /> - Rectangle
                        small
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-white h-[30px] w-[30px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px] flex items-center justify-center px-4 py-1.5
                           hover:bg-${hoverLightColor} focus-visible:outline focus-visible:outline-2 
                           focus-visible:outline-${focusOutlineColor}  disabled:text-[#D7D7DC] font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-${hoverLightColor} h-[30px] w-[30px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px] flex items-center justify-center 
                          px-4 py-1.5 focus-visible:outline focus-visible:outline-2  
                        focus-visible:outline-${focusOutlineColor}  disabled:text-white
                          disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                          font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-white h-[30px] w-[30px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px]   flex items-center justify-center px-4 py-1.5 outline outline-2 hover:bg-${hoverLightColor} focus-visible:border-0
                          outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                           font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          disabled
                          className={`bg-white h-[30px] w-[30px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px] flex items-center justify-center px-4 py-1.5
                           hover:bg-white focus-visible:outline 
                           focus-visible:outline-2 focus-visible:outline-${focusOutlineColor}  
                           disabled:text-[#D7D7DC] font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(TertiaryButtonGroup[3].ButtonName)
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
                          id={TertiaryButtonGroup[3].ButtonName}
                        >
                          {TertiaryButtonGroup[3].Code}
                        </pre>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-regular text-gray-900 sm:pl-0">
                      {colorName} Tertiary  Floating Action Button
                        <br /> - Rectangle meduim
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-white h-[40px] w-[40px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px] flex items-center justify-center px-4 py-1.5 hover:bg-${hoverLightColor} 
                          focus-visible:outline focus-visible:outline-2 focus-visible:outline-${focusOutlineColor}  
                          disabled:text-[#D7D7DC] font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-${hoverLightColor} h-[40px] w-[40px] min-w-[40px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px] flex items-center justify-center 
                          px-4 py-1.5 focus-visible:outline focus-visible:outline-2  
                        focus-visible:outline-${focusOutlineColor}  disabled:text-white
                          disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                          font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-white h-[40px] w-[40px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px]   flex items-center justify-center 
                          px-4 py-1.5 outline outline-2 hover:bg-${hoverLightColor} focus-visible:border-0
                          outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                           font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          disabled
                          className={`bg-white h-[40px] w-[40px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px] flex items-center justify-center px-4 py-1.5
                           hover:bg-transparent focus-visible:outline focus-visible:outline-2 
                          focus-visible:outline-${focusOutlineColor}  disabled:text-[#D7D7DC] font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(TertiaryButtonGroup[4].ButtonName)
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
                          id={TertiaryButtonGroup[4].ButtonName}
                        >
                          {TertiaryButtonGroup[4].Code}
                        </pre>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-regular text-gray-900 sm:pl-0">
                      {colorName} Tertiary  Floating Action Button <br /> - Rectangle
                        large
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-white h-[50px] w-[50px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px] flex items-center justify-center px-4 py-1.5 hover:bg-${hoverLightColor} focus-visible:outline focus-visible:outline-2 focus-visible:outline-${focusOutlineColor}  disabled:text-[#D7D7DC] font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-${hoverLightColor} h-[50px] w-[50px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px] flex items-center justify-center 
                          px-4 py-1.5 focus-visible:outline focus-visible:outline-2  
                        focus-visible:outline-${focusOutlineColor}  disabled:text-white
                          disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                          font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-white h-[50px] w-[50px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px]   flex items-center justify-center px-4 py-1.5 outline outline-2 hover:bg-${hoverLightColor} focus-visible:border-0
                          outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                           font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          disabled
                          className={`bg-white h-[50px] w-[50px] min-w-[30px] rounded tracking-[unset]
                          text-${bgColor} leading-[6px] flex items-center justify-center px-4 py-1.5 hover:bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-${focusOutlineColor}  disabled:text-[#D7D7DC] font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(TertiaryButtonGroup[5].ButtonName)
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
                          id={TertiaryButtonGroup[5].ButtonName}
                        >
                          {TertiaryButtonGroup[5].Code}
                        </pre>
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-regular text-gray-900 sm:pl-0">
                      {colorName} Tertiary  Floating Action Button <br /> - Circle
                        small
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-white rounded-full h-[30px] w-[30px] min-w-[30px] tracking-[unset]
                          text-${bgColor} leading-[6px] flex items-center justify-center px-4 py-1.5 hover:bg-${hoverLightColor} focus-visible:outline focus-visible:outline-2 focus-visible:outline-${focusOutlineColor}  disabled:text-[#D7D7DC] font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-${hoverLightColor} h-[30px] rounded-full w-[30px] min-w-[30px] tracking-[unset]
                          text-${bgColor} leading-[6px] flex items-center justify-center 
                          px-4 py-1.5 focus-visible:outline focus-visible:outline-2  
                        focus-visible:outline-${focusOutlineColor}  disabled:text-white
                          disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                          font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-white h-[30px] w-[30px] min-w-[30px] rounded-full tracking-[unset]
                          text-${bgColor} leading-[6px]   flex items-center justify-center px-4 py-1.5 outline outline-2 hover:bg-${hoverLightColor} focus-visible:border-0
                          outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                           font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          disabled
                          className={`bg-white h-[30px] w-[30px] min-w-[30px] rounded-full tracking-[unset]
                          text-${bgColor} leading-[6px] flex items-center justify-center px-4 py-1.5 hover:bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-${focusOutlineColor}  disabled:text-[#D7D7DC] font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(TertiaryButtonGroup[6].ButtonName)
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
                          id={TertiaryButtonGroup[6].ButtonName}
                        >
                          {TertiaryButtonGroup[6].Code}
                        </pre>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-regular text-gray-900 sm:pl-0">
                      {colorName} Tertiary  Floating Action Button <br /> - Circle
                        meduim
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-white rounded-full h-[40px] w-[40px] min-w-[30px] tracking-[unset]
                          text-${bgColor} leading-[6px] flex items-center justify-center px-4 py-1.5 hover:bg-${hoverLightColor} focus-visible:outline focus-visible:outline-2 focus-visible:outline-${focusOutlineColor}  disabled:text-[#D7D7DC] font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-${hoverLightColor} h-[40px] rounded-full w-[40px] min-w-[40px] tracking-[unset]
                          text-${bgColor} leading-[6px] flex items-center justify-center 
                          px-4 py-1.5 focus-visible:outline focus-visible:outline-2  
                        focus-visible:outline-${focusOutlineColor}  disabled:text-white
                          disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                          font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-white h-[40px] w-[40px] min-w-[40px] rounded-full tracking-[unset]
                          text-${bgColor} leading-[6px]   flex items-center justify-center px-4 py-1.5 outline outline-2 hover:bg-${hoverLightColor} focus-visible:border-0
                          outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                           font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          disabled
                          className={`bg-white h-[40px] w-[40px] min-w-[30px] rounded-full tracking-[unset]
                          text-${bgColor} leading-[6px] flex items-center justify-center px-4 py-1.5 hover:bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-${focusOutlineColor}  disabled:text-[#D7D7DC] font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(TertiaryButtonGroup[7].ButtonName)
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
                          id={TertiaryButtonGroup[7].ButtonName}
                        >
                          {TertiaryButtonGroup[7].Code}
                        </pre>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-regular text-gray-900 sm:pl-0">
                      {colorName} Tertiary  Floating Action Button <br /> - Circle
                        large
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-white rounded-full h-[50px] w-[50px] min-w-[30px] tracking-[unset]
                          text-${bgColor} leading-[6px] flex items-center justify-center px-4 py-1.5 hover:bg-${hoverLightColor} focus-visible:outline focus-visible:outline-2 focus-visible:outline-${focusOutlineColor}  disabled:text-[#D7D7DC] font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-${hoverLightColor}  rounded-full h-[50px] w-[50px] min-w-[50px] tracking-[unset]
                          text-${bgColor} leading-[6px] flex items-center justify-center 
                          px-4 py-1.5 focus-visible:outline focus-visible:outline-2  
                        focus-visible:outline-${focusOutlineColor}  disabled:text-white
                          disabled:shadow-[0_0_#0003,0_0_#00000024,0_0_#0000001f]
                          font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className={`bg-white h-[50px] w-[50px] min-w-[30px] rounded-full tracking-[unset]
                          text-${bgColor} leading-[6px]   flex items-center justify-center px-4 py-1.5 outline outline-2 hover:bg-${hoverLightColor} focus-visible:border-0
                          outline-${focusOutlineColor} disabled:bg-[#d7d7dc] disabled:text-white
                           font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          disabled
                          className={`bg-white h-[50px] w-[50px] min-w-[30px] rounded-full tracking-[unset]
                          text-${bgColor} leading-[6px] flex items-center justify-center px-4 py-1.5 hover:bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-${focusOutlineColor}  disabled:text-[#D7D7DC] font-medium text-sm`}
                        >
                          <i className=" text-lg ri-shopping-cart-fill"></i>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Tooltip message={CopyCodeToolipMessage}>
                          <a
                            className="cursor-pointer"
                            onClick={() =>
                              CopyClickView(TertiaryButtonGroup[8].ButtonName)
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
                          id={TertiaryButtonGroup[8].ButtonName}
                        >
                          {TertiaryButtonGroup[8].Code}
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
      <button type="button" className=" outline-atom_salmonpink bg-atom_indianred  bg-atom_rojored text-atom_rojored border-atom_rojored  hover:bg-atom_indianred hover:bg-atom_snowred  bg-atom_snowred  focus-visible:outline-atom_salmonpink hidden"></button>
    
      <button type="button" className="outline-atom_battleshipgray bg-atom_dimgray bg-atom_onxyblack text-atom_onxyblack  border-atom_onxyblack hover:bg-atom_dimgray hover:bg-atom_ghostwhite bg-atom_ghostwhite focus-visible:outline-atom_battleshipgray hidden"></button>
            
      <button type="button" className="outline-[#6A829F] bg-atom_indigodye bg-atom_barkeleyblue text-atom_barkeleyblue border-atom_barkeleyblue hover:bg-atom_indigodye hover:bg-atom_lightblue bg-atom_lightblue focus-visible:outline-[#6A829F] hidden"></button>

      <button type="button" className="outline-atom_jordyblue bg-atom_bleudefrance bg-atom_celticblue text-atom_celticblue border-atom_celticblue hover:bg-atom_bleudefrance hover:bg-atom_lightblue bg-atom_lightblue focus-visible:outline-atom_jordyblue hidden"></button>
      
      <button type="button" className="outline-atom_peachyellow bg-atom_sunglow bg-atom_harvestgold text-atom_harvestgold border-atom_harvestgold hover:bg-atom_sunglow hover:bg-atom_papayawhiplight bg-atom_papayawhiplight focus-visible:outline-atom_peachyellow hidden"></button>
      
      
    </main>
  );
}
