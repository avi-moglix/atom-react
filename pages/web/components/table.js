import IMAGES from "@/public/assets/img";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from 'next/router';

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Tooltip from "../../../components/reusable/Tooltip";
import Breadcrumb from "../../../components/reusable/Breadcrumb";


const tabs = [
  {
    name: "HTML",
    current: true,
    content: `  
    
    <div className="overflow-auto h-[460px] relative shadow ring-1 ring-black 
    ring-opacity-5 sm:rounded-lg mt-5">
    <table className="min-w-full divide-y  table-fixed">
      <thead>
        <tr>
          <th
          scope="col"
          className="sticky top-0 z-10 whitespace-nowrap 
          bg-[#efeff4] h-[38px]3 px-2.5 "
        >
          <div className="relative w-100 flex items-center">
            <input
              type="checkbox"
              className=" h-4 w-4 rounded border-gray-300
               text-atom_rojored focus:ring-atom_rojored mr-2"
            />
            <div className="Header text-left text-neutral-700
             text-xs font-medium leading-none">
              Sample Text
            </div>
          </div>
        </th>
          <th
            scope="col"
            className=" sticky top-0 z-10 whitespace-nowrap bg-[#efeff4] h-[38px] px-2.5 sm:pl-6"
          >
            <div className="w-100 flex justify-between">
              <div className="IconText justify-start items-center gap-2.5 flex">
                <i className="ArrowUpDownLine font-regular text-[16px] w-4 relative 
                ri-arrow-up-down-line cursor-pointer"></i>
                <div className="Header text-left text-neutral-700 text-xs font-medium 
                leading-none">
                  Header
                </div>
              </div>
             
            </div>
          </th>
          <th
            scope="col"
            className="sticky top-0 z-10 whitespace-nowrap bg-[#efeff4] h-[38px] px-2.5 sm:pl-6"
          >
            <div className="w-100 flex justify-between">
              <div className="IconText justify-start items-center gap-2.5 flex">
                <i className="ArrowUpDownLine font-regular text-[16px] w-4 relative
                 ri-arrow-up-down-line cursor-pointer"></i>
                <div className="Header text-left text-neutral-700 text-xs 
                font-medium leading-none">
                  Header
                </div>
              </div>
              
            </div>
          </th>
          <th
            scope="col"
            className="sticky top-0 z-10 whitespace-nowrap bg-[#efeff4] 
            h-[38px] px-2.5"
          >
            <div className="w-100 flex justify-between">
              <div className="IconText justify-start items-center gap-2.5 flex">
                <i className="ArrowUpDownLine font-regular text-[16px] w-4 
                relative ri-arrow-up-down-line cursor-pointer"></i>
                <div className="Header text-left text-neutral-700 
                text-xs font-medium leading-none">
                  Header
                </div>
              </div>
             
            </div>
          </th>
          <th
            scope="col"
            className="sticky top-0 z-10 whitespace-nowrap bg-[#efeff4]
             h-[38px] px-2.5"
          >
            <div className="w-100 flex justify-between">
              <div className="IconText justify-start items-center gap-2.5 flex">
                <i className="ArrowUpDownLine font-regular text-[16px] w-4 r
                elative ri-arrow-up-down-line cursor-pointer"></i>
                <div className="Header text-left text-neutral-700
                 text-xs font-medium leading-none">
                  Header
                </div>
              </div>
            
            </div>
          </th>
     
          <th
            scope="col"
            className="w-[200px] sticky top-0 z-10 whitespace-nowrap
             bg-[#efeff4] h-[38px] px-2.5"
          >
            <div className="w-100 flex justify-between">
              <div className="IconText justify-start items-center gap-2.5 flex">
                <i className="ArrowUpDownLine font-regular text-[16px] 
                w-4 relative ri-arrow-up-down-line cursor-pointer"></i>
                <div className="Header text-left text-neutral-700 text-xs font-medium leading-none">
                  Header
                </div>
              </div>
             
            </div>
          </th>
          <th
            scope="col"
            className="sticky top-0 z-10 whitespace-nowrap
             bg-[#efeff4] h-[38px] px-2.5"
          >
            <div className="w-100 flex justify-between">
              <div className="IconText justify-start items-center gap-2.5 flex">
                <i className="ArrowUpDownLine font-regular text-[16px] w-4 
                relative ri-arrow-up-down-line cursor-pointer"></i>
                <div className="Header text-left text-neutral-700 
                text-xs font-medium leading-none">
                  Header
                </div>
              </div>
           
            </div>
          </th>
          <th
            scope="col"
            className="sticky top-0 z-10 whitespace-nowrap 
            bg-[#efeff4] h-[38px] px-2.5"
          >
            <div className="w-100 flex justify-between">
              <div className="IconText justify-start items-center gap-2.5 flex">
                <i className="ArrowUpDownLine font-regular text-[16px] 
                w-4 relative ri-arrow-up-down-line cursor-pointer"></i>
                <div className="Header text-left text-neutral-700 
                text-xs font-medium leading-none">
                  Header
                </div>
              </div>
              
            </div>
          </th>
          <th
            scope="col"
            className="sticky top-0 z-10 whitespace-nowrap bg-[#efeff4] h-[38px] px-2.5"
          >
            <div className="w-100 flex justify-between">
              <div className="IconText justify-start items-center gap-2.5 flex">
                <i className="ArrowUpDownLine font-regular text-[16px]
                 w-4 relative ri-arrow-up-down-line cursor-pointer"></i>
                <div className="Header text-left text-neutral-700 
                text-xs font-medium leading-none">
                  Header
                </div>
              </div>
            
            </div>
          </th>
          <th
            scope="col"
            className="sticky top-0 z-10 whitespace-nowrap
             bg-[#efeff4] h-[38px] px-2.5"
          >
            <div className="w-100 flex justify-between">
              <div className="IconText justify-start items-center gap-2.5 flex">
                <i className="ArrowUpDownLine font-regular text-[16px] 
                w-4 relative ri-arrow-up-down-line cursor-pointer"></i>
                <div className="Header text-left text-neutral-700 
                text-xs font-medium leading-none">
                  Header
                </div>
              </div>
             
            </div>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {tableData.map((data) => (
          <tr className="align-top" key={data.id}>
            <td className="whitespace-nowrap p-2.5 text-neutral-700 text-xs
            font-normal leading-none">
             <div className="flex items-center">
               <input
                 type="checkbox"
                 className=" h-4 w-4 rounded border-gray-300
                  text-atom_rojored focus:ring-atom_rojored mr-2"
               />
               {data.checkText}
             </div>
           </td>
            <td className="whitespace-nowrap p-2.5 sm:pl-6
             text-neutral-700 text-xs font-normal leading-none">
              {data.id}
            </td>
            <td className="whitespace-nowrap p-2.5 sm:pl-6
             text-neutral-700 text-xs font-normal leading-none">
              {data.product}
            </td>
            <td className="whitespace-nowrap p-2.5 text-neutral-700 
            text-xs font-normal leading-none">
              <div className=" px-1 py-0.5 bg-white rounded border
               border-red-600 justify-start items-center gap-1 inline-flex">
                <div className="text-[16px] text-red-600 flex
                 items-center w-4 h-4 relative">
                  <i className="ri-information-line"></i>
                </div>
                <div className="text-red-600 text-xs font-medium ">
                  {data.status}
                </div>
              </div>
            </td>
            <td className="whitespace-nowrap p-2.5 text-neutral-700
             text-xs font-normal leading-none">
              {data.categoryTag.map((cellData) => (
                <div className="mr-2.5 px-1 py-0.5 bg-white rounded border
                 border-red-600 justify-start items-center gap-1 inline-flex">
                  <div className="text-[16px] text-red-600 flex 
                  items-center w-4 h-4 relative">
                    <i className="ri-information-line"></i>
                  </div>
                  <div className="text-red-600 text-xs font-medium ">
                    {cellData}
                  </div>
                </div>
              ))}
            </td>
          
            <td className="whitespace-nowrap p-2.5 sm:pl-6 text-neutral-700 
            text-xs font-normal leading-none">
              <div className="w-[149px]">
                <select className="text-xs block w-full bg-white rounded-md 
                border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset
                 ring-gray-300 sm:text-sm sm:leading-6">
                  {data.selectOption.map((options) => (
                    <option>{options}</option>
                  ))}
                </select>
              </div>
            </td>
            <td className="whitespace-nowrap p-2.5 sm:pl-6
             text-neutral-700 text-xs font-normal leading-none">
              <a
                className="text-xs text-atom_bleudefrance
                 flex items-center font-regular"
                href="javascript:void(0);"
              >
                <i className="text-base ri-external-link-line mr-1"></i>
                {data.ExternalLink}
              </a>
            </td>
            <td className="whitespace-nowrap p-2.5 sm:pl-6
             text-neutral-700 text-xs font-normal ">
              <p className="text-xs text-atom_bleudefrance flex items-center ">
                {data.OtherInfo[0]}
              </p>
              <p className="PlaceHolderText text-neutral-700 text-xs font-normal">
                {data.OtherInfo[1]}
              </p>
              <p className="PlaceHolderText text-neutral-500 text-xs font-normal">
                {data.OtherInfo[2]}
              </p>
            </td>
            <td className="whitespace-nowrap p-2.5 sm:pl-6
             text-neutral-700 text-xs font-normal ">
              <p className="text-xs text-atom_bleudefrance flex items-center ">
                {data.OtherInfo2[0]}
              </p>
              <p className="PlaceHolderText text-neutral-700 text-xs font-normal">
                {data.OtherInfo2[1]}
              </p>
              <p className="PlaceHolderText text-neutral-500 text-xs font-normal">
                {data.OtherInfo2[2]}
              </p>
              <a
                className="text-xs text-atom_bleudefrance
                 flex items-center font-regular"
                href="javascript:void(0);"
              >
                <i className="text-base ri-external-link-line mr-1"></i>
                {data.OtherInfo2[3]}
              </a>
            </td>
            <td className="whitespace-nowrap p-2.5 sm:pl-6
             text-neutral-700 text-xs font-normal ">
              {data.Links.slice(0, 4).map((link) => (
                <a
                  className="text-xs text-atom_bleudefrance
                   flex items-center font-regular"
                  href={link.pageLink}
                >
                  <i className="text-base ri-external-link-line mr-1"></i>
                  {link.pageName}
                </a>
              ))}
              <Menu
                as="div"
                className="relative inline-block text-left"
              >
                <div>
                  <Menu.Button className="flex items-center 
                  text-base text-atom_primarydarkblack">
                    <span className="sr-only">Open options</span>
                    <i className="text-base ri-more-fill"></i>
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
                  <Menu.Items className="absolute right-0 z-10
                   mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg 
                   ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {data.Links.slice(4, 7).map((link) => (
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href={link.pageLink}
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              <i className="text-base ri-external-link-line mr-1"></i>
                              {link.pageName}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
    
    `,
  },
  {
    name: "JSX",
    current: false,
    content: `
  // add outside component function
  import { Fragment } from 'react'
  import { Menu, Transition } from '@headlessui/react'
  //install command npm install @headlessui/react
  
  
  //add inside the function
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  const tableData = [
    {
      id: "290701999",
      product: "",
      status: "cancelled",
      categoryTag: ["Tag1", "Tag2", "Tag3"],
      checkText: "Sample Text",
      selectOption: ["option1", "option2", "option3", "option4"],
      ExternalLink: "Open",
      OtherInfo: ["Open", "Place holder text", "Place holder text"],
      OtherInfo2: ["Open", "Place holder text", "Place holder text", "Open"],
      Links: [
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
      id: "290701999",
      product: "",
      status: "pending",
      categoryTag: ["Tag1", "Tag2", "Tag3"],
      checkText: "Sample Text",
      selectOption: ["option1", "option2", "option3", "option4"],
      ExternalLink: "Open",
      OtherInfo: ["Open", "Place holder text", "Place holder text"],
      OtherInfo2: ["Open", "Place holder text", "Place holder text", "Open"],
      Links: [
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
      id: "290701999",
      product: "",
      status: "Approved",
      categoryTag: ["Tag1", "Tag2", "Tag3"],
      checkText: "Sample Text",
      selectOption: ["option1", "option2", "option3", "option4"],
      ExternalLink: "Open",
      OtherInfo: ["Open", "Place holder text", "Place holder text"],
      OtherInfo2: ["Open", "Place holder text", "Place holder text", "Open"],
      Links: [
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
      id: "290701999",
      product: "",
      status: "Approved",
      categoryTag: ["Tag1", "Tag2", "Tag3"],
      checkText: "Sample Text",
      selectOption: ["option1", "option2", "option3", "option4"],
      ExternalLink: "Open",
      OtherInfo: ["Open", "Place holder text", "Place holder text"],
      OtherInfo2: ["Open", "Place holder text", "Place holder text", "Open"],
      Links: [
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
const tabs2 = [
  {
    name: "HTML",
    current: true,
    content: `  
    
    
    
    <div className="overflow-auto h-[460px] relative shadow ring-1
     ring-black ring-opacity-5 sm:rounded-lg mt-5">
    <table className="min-w-full divide-y  table-fixed">
      <thead>
        <tr>
          <th
            scope="col"
            className=" sticky top-0 z-10 text-left text-neutral-700
             text-xs font-medium leading-none whitespace-nowrap
              bg-[#efeff4] h-[38px] px-2.5 sm:pl-6"
          >
            Deal Name
          </th>
          <th
            scope="col"
            className=" sticky top-0 z-10 text-left text-neutral-700 text-xs
             font-medium leading-none whitespace-nowrap bg-[#efeff4] h-[38px] px-2.5 sm:pl-6"
          >
            Deal Owner
          </th>
          <th
            scope="col"
            className=" sticky top-0 z-10 text-left text-neutral-700
             text-xs font-medium leading-none whitespace-nowrap
              bg-[#efeff4] h-[38px] px-2.5 sm:pl-6"
          >
            Closing Date
          </th>
          <th
            scope="col"
            className=" sticky top-0 z-10 text-left text-neutral-700
             text-xs font-medium leading-none whitespace-nowrap bg-[#efeff4] h-[38px] px-2.5 sm:pl-6"
          >
            Realistic Deal Size
          </th>
          <th
            scope="col"
            className=" sticky top-0 z-10 text-left text-neutral-700
             text-xs font-medium leading-none whitespace-nowrap bg-[#efeff4] h-[38px] px-2.5 sm:pl-6"
          >
            Business Potentials (in cr)
          </th>
          <th
            scope="col"
            className=" sticky top-0 z-10 text-left text-neutral-700
             text-xs font-medium leading-none whitespace-nowrap bg-[#efeff4] h-[38px] px-2.5 sm:pl-6"
          >
            Probability of Conversion (%)
          </th>
          <th
            scope="col"
            className=" sticky top-0 z-10 text-left text-neutral-700 
            text-xs font-medium leading-none whitespace-nowrap bg-[#efeff4] h-[38px] px-2.5 sm:pl-6"
          >
            Account Name
          </th>
          <th
            scope="col"
            className=" sticky top-0 z-10 text-left text-neutral-700
             text-xs font-medium leading-none whitespace-nowrap bg-[#efeff4] h-[38px] px-2.5 sm:pl-6"
          >
            Business Vertical
          </th>
          <th
            scope="col"
            className=" sticky top-0 z-10 text-left text-neutral-700
             text-xs font-medium leading-none whitespace-nowrap bg-[#efeff4] h-[38px] px-2.5 sm:pl-6"
          >
            Region/Team
          </th>
          <th
            scope="col"
            className=" sticky top-0 z-10 text-left text-neutral-700
             text-xs font-medium leading-none whitespace-nowrap bg-[#efeff4] h-[38px] px-2.5 sm:pl-6"
          >
            Deal Type
          </th>
          <th
            scope="col"
            className=" sticky top-0 z-10 text-left text-neutral-700
             text-xs font-medium leading-none whitespace-nowrap bg-[#efeff4] h-[38px] px-2.5 sm:pl-6"
          >
            Next Action Item
          </th>
          <th
            scope="col"
            className="sticky-shadow-left z-[100] border-stone-300
             sticky top-0 right-0  text-left text-neutral-700 text-xs
              font-medium leading-none whitespace-nowrap bg-[#efeff4] h-[38px] px-2.5 sm:pl-6"
          >
            <div className="sticky-shadow-left">
            Next Action Item
            </div>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {tableData2.map((data) => (
          <tr className="align-top" key={data.id}>
            <td className="whitespace-nowrap py-2 px-2.5 sm:pl-6 text-neutral-700 text-xs font-normal ">
              <p className="text-xs text-atom_bleudefrance flex items-center ">
                {data.DealName[0]}
              </p>
              <p className="PlaceHolderText text-neutral-700 text-xs font-normal">
                {data.DealName[1]}
              </p>
              <p className="PlaceHolderText text-neutral-700 text-xs font-normal">
                {data.DealName[2]}
              </p>
           
            </td>
            <td className="whitespace-nowrap py-2 px-2.5 sm:pl-6
             text-neutral-700 text-xs font-normal leading-none">
           
                {data.DealOwner[0]}
           
              <p className="PlaceHolderText text-neutral-700 text-xs font-normal mt-1">
                {data.DealOwner[1]}
              </p>
            </td>
            <td className="whitespace-nowrap py-2 px-2.5 sm:pl-6
             text-neutral-700 text-xs font-normal leading-none">
              {data.ClosingDate[0]}
              <p className="PlaceHolderText text-neutral-500 text-xs font-normal">
              Original Date :<br/>
              {data.ClosingDate[1]}
             </p>
            </td>
            <td className="whitespace-nowrap py-2 px-2.5 sm:pl-6
             text-neutral-700 text-xs font-normal leading-none">
              {data.RealisticDealSize}
             
            </td>
            <td className="whitespace-nowrap py-2 px-2.5 sm:pl-6
             text-neutral-700 text-xs font-normal leading-none">
            {data.BusinessPotentials}
            </td>
            <td className="whitespace-nowrap py-2 px-2.5 sm:pl-6
             text-neutral-700 text-xs font-normal leading-none">
            {data.ProbabilityofConversion}
            </td>
            <td className="whitespace-nowrap py-2 px-2.5 sm:pl-6
             text-neutral-700 text-xs font-normal leading-none">
            {data.AccountName}
            </td>
            <td className="whitespace-nowrap py-2 px-2.5 sm:pl-6
             text-neutral-700 text-xs font-normal leading-none">
              {data.BusinessVertical}
            </td>
            <td className="whitespace-nowrap py-2 px-2.5 sm:pl-6
             text-neutral-700 text-xs font-normal leading-none">
              {data.RegionTeam}
            </td>
            <td className="whitespace-nowrap py-2 px-2.5 sm:pl-6
             text-neutral-700 text-xs font-normal leading-none">
              {data.DealType}
            </td>
            <td className=" whitespace-nowrap py-2 px-2.5 sm:pl-6
             text-neutral-700 text-xs font-normal leading-none">
            <p className="PlaceHolderText text-neutral-700 text-xs font-normal">
                {data.Comments[0]}
              </p>
              <p className="PlaceHolderText text-neutral-700 text-xs font-normal">
                {data.Comments[1]}
              </p>
            </td>

            <td className="  border-stone-300 z-[99] sticky right-0
             bg-white whitespace-nowrap py-2 px-2.5 sm:pl-6
              text-neutral-700 text-xs font-normal ">
              <div className="flex sticky-shadow-left">
                <div className="flex">
                  {data.NextActionItem2.slice(0, 4).map((link) => (
                    <a
                      className="text-xs text-atom_bleudefrance
                       flex items-center font-regular mr-1"
                      href={link.pageLink} title={link.pageName}
                    >
                      <i className="text-base ri-external-link-line mr-1"></i>
                 
                    </a>
                  ))}
                </div>
              
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>`,
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
export default function Table() {
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
    { name: "Table", isLast: true },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [activeSectionTab, setSectionTab] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [activeTab2, setActiveTab2] = useState(0);
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

  const [CopyCodeToolipMessage2, setCopyCodeToolipMessage2] = useState(
    "Click here to Copy Code"
  );
  const [showCode2, setShowCode2] = useState(false);
  const [CopyCodeLinkToolipMessage2, setCopyLinkToolipMessage2] = useState(
    "Link Copy to Clipboard"
  );

  const CopyClickView = () => {
    const codeToCopy = document.getElementById("AllAlertCode").innerText;
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
  const CopyClickView2 = () => {
    const codeToCopy = document.getElementById("AllAlertCode2").innerText;
    navigator.clipboard.writeText(codeToCopy).then(
      () => {
        setCopyCodeToolipMessage2("Code copied successfully!");
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
  const tableData = [
    {
      id: "290701999",
      product: "",
      status: "cancelled",
      categoryTag: ["Tag1", "Tag2", "Tag3"],
      checkText: "Sample Text",
      selectOption: ["option1", "option2", "option3", "option4"],
      ExternalLink: "Open",
      OtherInfo: ["Open", "Place holder text", "Place holder text"],
      OtherInfo2: ["Open", "Place holder text", "Place holder text", "Open"],
      Links: [
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
      id: "290701999",
      product: "",
      status: "pending",
      categoryTag: ["Tag1", "Tag2", "Tag3"],
      checkText: "Sample Text",
      selectOption: ["option1", "option2", "option3", "option4"],
      ExternalLink: "Open",
      OtherInfo: ["Open", "Place holder text", "Place holder text"],
      OtherInfo2: ["Open", "Place holder text", "Place holder text", "Open"],
      Links: [
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
      id: "290701999",
      product: "",
      status: "Approved",
      categoryTag: ["Tag1", "Tag2", "Tag3"],
      checkText: "Sample Text",
      selectOption: ["option1", "option2", "option3", "option4"],
      ExternalLink: "Open",
      OtherInfo: ["Open", "Place holder text", "Place holder text"],
      OtherInfo2: ["Open", "Place holder text", "Place holder text", "Open"],
      Links: [
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
      id: "290701999",
      product: "",
      status: "Approved",
      categoryTag: ["Tag1", "Tag2", "Tag3"],
      checkText: "Sample Text",
      selectOption: ["option1", "option2", "option3", "option4"],
      ExternalLink: "Open",
      OtherInfo: ["Open", "Place holder text", "Place holder text"],
      OtherInfo2: ["Open", "Place holder text", "Place holder text", "Open"],
      Links: [
        { pageName: "Link1", pageLink: "javascript:void(0);" },
        { pageName: "Link2", pageLink: "javascript:void(0);" },
        { pageName: "Link3", pageLink: "javascript:void(0);" },
        { pageName: "Link4", pageLink: "javascript:void(0);" },
        { pageName: "Link5", pageLink: "javascript:void(0);" },
        { pageName: "Link6", pageLink: "javascript:void(0);" },
        { pageName: "Link7", pageLink: "javascript:void(0);" },
      ],
    },
  ];
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
  ];

  return (
    <main>
  <Breadcrumb
        breadcrumbs={breadcrumbs}
        lastChildMentioned="Tables"
      />
    
      <div className=" bg-white  m-5 ">
    
      { activeSectionTab == 0 &&
      <>
        <div className="border border-atom_silver rounded p-4 mb-10" id="simpleTableWithSortableHeader">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg leading-[32px] mb-[16px] text-atom_dimgray">Simple Table with sortable headers and links</h3>
            <div className="flex items-center ">
              <Tooltip message={CopyCodeLinkToolipMessage}>
                <a
                  className="rounded-[50%] text-xxl cursor-pointer hover:bg-[#8080803d] h-12 w-12 text-[#0000008a] flex items-center justify-center"
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
                        onClick={() => CopyClickView()}
                        onMouseEnter={() =>
                          setCopyCodeToolipMessage("Click here to Copy Code")
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

          <div className="overflow-auto h-[460px] relative shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg mt-5">
            <table className="min-w-full divide-y  table-fixed">
              <thead>
                <tr>
                <th
                    scope="col"
                    className="sticky top-0 z-10 whitespace-nowrap bg-[#efeff4] h-[38px]3 px-2.5 "
                  >
                    <div className="relative w-100 flex items-center">
                      <input
                        type="checkbox"
                        className=" h-4 w-4 rounded border-gray-300 text-atom_rojored focus:ring-atom_rojored mr-2"
                      />
                      <div className="Header text-left text-neutral-700 text-xs font-medium leading-none">
                        Sample Text
                      </div>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className=" sticky top-0 z-10 whitespace-nowrap bg-[#efeff4] h-[38px] px-2.5 sm:pl-6"
                  >
                    <div className="w-100 flex justify-between">
                      <div className="IconText justify-start items-center gap-2.5 flex">
                        <i className="ArrowUpDownLine font-regular text-[16px] w-4 relative ri-arrow-up-down-line cursor-pointer"></i>
                        <div className="Header text-left text-neutral-700 text-xs font-medium leading-none">
                          Header
                        </div>
                      </div>
                   
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 whitespace-nowrap bg-[#efeff4] h-[38px] px-2.5 sm:pl-6"
                  >
                    <div className="w-100 flex justify-between">
                      <div className="IconText justify-start items-center gap-2.5 flex">
                        <i className="ArrowUpDownLine font-regular text-[16px] w-4 relative ri-arrow-up-down-line cursor-pointer"></i>
                        <div className="Header text-left text-neutral-700 text-xs font-medium leading-none">
                          Header
                        </div>
                      </div>
                   
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 whitespace-nowrap bg-[#efeff4] h-[38px] px-2.5"
                  >
                    <div className="w-100 flex justify-between">
                      <div className="IconText justify-start items-center gap-2.5 flex">
                        <i className="ArrowUpDownLine font-regular text-[16px] w-4 relative ri-arrow-up-down-line cursor-pointer"></i>
                        <div className="Header text-left text-neutral-700 text-xs font-medium leading-none">
                          Header
                        </div>
                      </div>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 whitespace-nowrap bg-[#efeff4] h-[38px] px-2.5"
                  >
                    <div className="w-100 flex justify-between">
                      <div className="IconText justify-start items-center gap-2.5 flex">
                        <i className="ArrowUpDownLine font-regular text-[16px] w-4 relative ri-arrow-up-down-line cursor-pointer"></i>
                        <div className="Header text-left text-neutral-700 text-xs font-medium leading-none">
                          Header
                        </div>
                      </div>
                   
                    </div>
                  </th>
       
                  <th
                    scope="col"
                    className="w-[200px] sticky top-0 z-10 whitespace-nowrap bg-[#efeff4] h-[38px] px-2.5"
                  >
                    <div className="w-100 flex justify-between">
                      <div className="IconText justify-start items-center gap-2.5 flex">
                        <i className="ArrowUpDownLine font-regular text-[16px] w-4 relative ri-arrow-up-down-line cursor-pointer"></i>
                        <div className="Header text-left text-neutral-700 text-xs font-medium leading-none">
                          Header
                        </div>
                      </div>
                   
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 whitespace-nowrap bg-[#efeff4] h-[38px] px-2.5"
                  >
                    <div className="w-100 flex justify-between">
                      <div className="IconText justify-start items-center gap-2.5 flex">
                        <i className="ArrowUpDownLine font-regular text-[16px] w-4 relative ri-arrow-up-down-line cursor-pointer"></i>
                        <div className="Header text-left text-neutral-700 text-xs font-medium leading-none">
                          Header
                        </div>
                      </div>
                   
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 whitespace-nowrap bg-[#efeff4] h-[38px] px-2.5"
                  >
                    <div className="w-100 flex justify-between">
                      <div className="IconText justify-start items-center gap-2.5 flex">
                        <i className="ArrowUpDownLine font-regular text-[16px] w-4 relative ri-arrow-up-down-line cursor-pointer"></i>
                        <div className="Header text-left text-neutral-700 text-xs font-medium leading-none">
                          Header
                        </div>
                      </div>
                   
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 whitespace-nowrap bg-[#efeff4] h-[38px] px-2.5"
                  >
                    <div className="w-100 flex justify-between">
                      <div className="IconText justify-start items-center gap-2.5 flex">
                        <i className="ArrowUpDownLine font-regular text-[16px] w-4 relative ri-arrow-up-down-line cursor-pointer"></i>
                        <div className="Header text-left text-neutral-700 text-xs font-medium leading-none">
                          Header
                        </div>
                      </div>
                   
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 whitespace-nowrap bg-[#efeff4] h-[38px] px-2.5"
                  >
                    <div className="w-100 flex justify-between">
                      <div className="IconText justify-start items-center gap-2.5 flex">
                        <i className="ArrowUpDownLine font-regular text-[16px] w-4 relative ri-arrow-up-down-line cursor-pointer"></i>
                        <div className="Header text-left text-neutral-700 text-xs font-medium leading-none">
                          Header
                        </div>
                      </div>
                   
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {tableData.map((data) => (
                  <tr className="align-top" key={data.id}>
                     <td className="whitespace-nowrap p-2.5 text-neutral-700 text-xs font-normal leading-none">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className=" h-4 w-4 rounded border-gray-300 text-atom_rojored focus:ring-atom_rojored mr-2"
                        />
                        {data.checkText}
                      </div>
                    </td>
                    <td className="whitespace-nowrap p-2.5 sm:pl-6 text-neutral-700 text-xs font-normal leading-none">
                      {data.id}
                    </td>
                    <td className="whitespace-nowrap p-2.5 sm:pl-6 text-neutral-700 text-xs font-normal leading-none">
                      {data.product}
                    </td>
                    <td className="whitespace-nowrap p-2.5 text-neutral-700 text-xs font-normal leading-none">
                      <div className=" px-1 py-0.5 bg-white rounded border border-red-600 justify-start items-center gap-1 inline-flex">
                        <div className="text-[16px] text-red-600 flex items-center w-4 h-4 relative">
                          <i className="ri-information-line"></i>
                        </div>
                        <div className="text-red-600 text-xs font-medium ">
                          {data.status}
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap p-2.5 text-neutral-700 text-xs font-normal leading-none">
                      {data.categoryTag.map((cellData,index) => (
                        <div key={index} className="mr-2.5 px-1 py-0.5 bg-white rounded border border-red-600 justify-start items-center gap-1 inline-flex">
                          <div className="text-[16px] text-red-600 flex items-center w-4 h-4 relative">
                            <i className="ri-information-line"></i>
                          </div>
                          <div className="text-red-600 text-xs font-medium ">
                            {cellData}
                          </div>
                        </div>
                      ))}
                    </td>
                   
                    <td className="whitespace-nowrap p-2.5 sm:pl-6 text-neutral-700 text-xs font-normal leading-none">
                      <div className="w-[149px]">
                        <select className="text-xs block w-full bg-white rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6">
                          {data.selectOption.map((options,index) => (
                            <option key={index}>{options}</option>
                          ))}
                        </select>
                      </div>
                    </td>
                    <td className="whitespace-nowrap p-2.5 sm:pl-6 text-neutral-700 text-xs font-normal leading-none">
                      <a
                        className="text-xs text-atom_bleudefrance flex items-center font-regular"
                        href="javascript:void(0);"
                      >
                        <i className="text-base ri-external-link-line mr-1"></i>
                        {data.ExternalLink}
                      </a>
                    </td>
                    <td className="whitespace-nowrap p-2.5 sm:pl-6 text-neutral-700 text-xs font-normal ">
                      <p className="text-xs text-atom_bleudefrance flex items-center ">
                        {data.OtherInfo[0]}
                      </p>
                      <p className="PlaceHolderText text-neutral-700 text-xs font-normal">
                        {data.OtherInfo[1]}
                      </p>
                      <p className="PlaceHolderText text-neutral-500 text-xs font-normal">
                        {data.OtherInfo[2]}
                      </p>
                    </td>
                    <td className="whitespace-nowrap p-2.5 sm:pl-6 text-neutral-700 text-xs font-normal ">
                      <p className="text-xs text-atom_bleudefrance flex items-center ">
                        {data.OtherInfo2[0]}
                      </p>
                      <p className="PlaceHolderText text-neutral-700 text-xs font-normal">
                        {data.OtherInfo2[1]}
                      </p>
                      <p className="PlaceHolderText text-neutral-500 text-xs font-normal">
                        {data.OtherInfo2[2]}
                      </p>
                      <a
                        className="text-xs text-atom_bleudefrance flex items-center font-regular"
                        href="javascript:void(0);"
                      >
                        <i className="text-base ri-external-link-line mr-1"></i>
                        {data.OtherInfo2[3]}
                      </a>
                    </td>
                    <td className="whitespace-nowrap p-2.5 sm:pl-6 text-neutral-700 text-xs font-normal ">
                      {data.Links.slice(0, 4).map((link,index) => (
                        <a key={index}
                          className="text-xs text-atom_bleudefrance flex items-center font-regular"
                          href={link.pageLink}
                        >
                          <i className="text-base ri-external-link-line mr-1"></i>
                          {link.pageName}
                        </a>
                      ))}
                      <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
                        <div>
                          <Menu.Button className="flex items-center text-base text-atom_primarydarkblack">
                            <span className="sr-only">Open options</span>
                            <i className="text-base ri-more-fill"></i>
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
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              {data.Links.slice(4, 7).map((link,index) => (
                                <Menu.Item key={index}>
                                  {({ active }) => (
                                    <a
                                      href={link.pageLink}
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      <i className="text-base ri-external-link-line mr-1"></i>
                                      {link.pageName}
                                    </a>
                                  )}
                                </Menu.Item>
                              ))}
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="border border-atom_silver rounded p-4" id="tableWithFixedAction">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg leading-[32px] mb-[16px] text-atom_dimgray">Table with Fixed Action column</h3>
            <div className="flex items-center ">
              <Tooltip message={CopyCodeLinkToolipMessage2}>
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
                    id="AllAlertCode2"
                  >
                    {tabs2[activeTab2].content}
                  </pre>
                  <div className="absolute top-[40px] right-[50px] block">
                    <Tooltip message={CopyCodeToolipMessage2}>
                      <a
                        className="cursor-pointer"
                        onClick={() => CopyClickView2()}
                        onMouseEnter={() =>
                          setCopyCodeToolipMessage2("Click here to Copy Code")
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

          <div className="overflow-auto h-[460px] relative shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg mt-5">
            <table className="min-w-full divide-y  table-fixed">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className=" sticky top-0 z-10 text-left text-neutral-700 text-xs font-medium leading-none whitespace-nowrap bg-[#efeff4] h-[38px] px-2.5 sm:pl-6"
                  >
                    Deal Name
                  </th>
                  <th
                    scope="col"
                    className=" sticky top-0 z-10 text-left text-neutral-700 text-xs font-medium leading-none whitespace-nowrap bg-[#efeff4] h-[38px] px-2.5 sm:pl-6"
                  >
                    Deal Owner
                  </th>
                  <th
                    scope="col"
                    className=" sticky top-0 z-10 text-left text-neutral-700 text-xs font-medium leading-none whitespace-nowrap bg-[#efeff4] h-[38px] px-2.5 sm:pl-6"
                  >
                    Closing Date
                  </th>
                  <th
                    scope="col"
                    className=" sticky top-0 z-10 text-left text-neutral-700 text-xs font-medium leading-none whitespace-nowrap bg-[#efeff4] h-[38px] px-2.5 sm:pl-6"
                  >
                    Realistic Deal Size
                  </th>
                  <th
                    scope="col"
                    className=" sticky top-0 z-10 text-left text-neutral-700 text-xs font-medium leading-none whitespace-nowrap bg-[#efeff4] h-[38px] px-2.5 sm:pl-6"
                  >
                    Business Potentials (in cr)
                  </th>
                  <th
                    scope="col"
                    className=" sticky top-0 z-10 text-left text-neutral-700 text-xs font-medium leading-none whitespace-nowrap bg-[#efeff4] h-[38px] px-2.5 sm:pl-6"
                  >
                    Probability of Conversion (%)
                  </th>
                  <th
                    scope="col"
                    className=" sticky top-0 z-10 text-left text-neutral-700 text-xs font-medium leading-none whitespace-nowrap bg-[#efeff4] h-[38px] px-2.5 sm:pl-6"
                  >
                    Account Name
                  </th>
                  <th
                    scope="col"
                    className=" sticky top-0 z-10 text-left text-neutral-700 text-xs font-medium leading-none whitespace-nowrap bg-[#efeff4] h-[38px] px-2.5 sm:pl-6"
                  >
                    Business Vertical
                  </th>
                  <th
                    scope="col"
                    className=" sticky top-0 z-10 text-left text-neutral-700 text-xs font-medium leading-none whitespace-nowrap bg-[#efeff4] h-[38px] px-2.5 sm:pl-6"
                  >
                    Region/Team
                  </th>
                  <th
                    scope="col"
                    className=" sticky top-0 z-10 text-left text-neutral-700 text-xs font-medium leading-none whitespace-nowrap bg-[#efeff4] h-[38px] px-2.5 sm:pl-6"
                  >
                    Deal Type
                  </th>
                  <th
                    scope="col"
                    className=" sticky top-0 z-10 text-left text-neutral-700 text-xs font-medium leading-none whitespace-nowrap bg-[#efeff4] h-[38px] px-2.5 sm:pl-6"
                  >
                    Next Action Item
                  </th>
                  <th
                    scope="col"
                    className="sticky-shadow-left z-[100] border-stone-300 sticky top-0 right-0  text-left text-neutral-700 text-xs font-medium leading-none whitespace-nowrap bg-[#efeff4] h-[38px] px-2.5 sm:pl-6"
                  >
                    <div className="sticky-shadow-left">
                    Next Action Item
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {tableData2.map((data) => (
                  <tr className="align-top" key={data.id}>
                    <td className="whitespace-nowrap py-2 px-2.5 sm:pl-6 text-neutral-700 text-xs font-normal ">
                      <p className="text-xs text-atom_bleudefrance flex items-center ">
                        {data.DealName[0]}
                      </p>
                      <p className="PlaceHolderText text-neutral-700 text-xs font-normal">
                        {data.DealName[1]}
                      </p>
                      <p className="PlaceHolderText text-neutral-700 text-xs font-normal">
                        {data.DealName[2]}
                      </p>
                   
                    </td>
                    <td className="whitespace-nowrap py-2 px-2.5 sm:pl-6 text-neutral-700 text-xs font-normal leading-none">
                   
                        {data.DealOwner[0]}
                   
                      <p className="PlaceHolderText text-neutral-700 text-xs font-normal mt-1">
                        {data.DealOwner[1]}
                      </p>
                    </td>
                    <td className="whitespace-nowrap py-2 px-2.5 sm:pl-6 text-neutral-700 text-xs font-normal leading-none">
                      {data.ClosingDate[0]}
                      <p className="PlaceHolderText text-neutral-500 text-xs font-normal">
                      Original Date :<br/>
                      {data.ClosingDate[1]}
                     </p>
                    </td>
                    <td className="whitespace-nowrap py-2 px-2.5 sm:pl-6 text-neutral-700 text-xs font-normal leading-none">
                      {data.RealisticDealSize}
                     
                    </td>
                    <td className="whitespace-nowrap py-2 px-2.5 sm:pl-6 text-neutral-700 text-xs font-normal leading-none">
                    {data.BusinessPotentials}
                    </td>
                    <td className="whitespace-nowrap py-2 px-2.5 sm:pl-6 text-neutral-700 text-xs font-normal leading-none">
                    {data.ProbabilityofConversion}
                    </td>
                    <td className="whitespace-nowrap py-2 px-2.5 sm:pl-6 text-neutral-700 text-xs font-normal leading-none">
                    {data.AccountName}
                    </td>
                    <td className="whitespace-nowrap py-2 px-2.5 sm:pl-6 text-neutral-700 text-xs font-normal leading-none">
                      {data.BusinessVertical}
                    </td>
                    <td className="whitespace-nowrap py-2 px-2.5 sm:pl-6 text-neutral-700 text-xs font-normal leading-none">
                      {data.RegionTeam}
                    </td>
                    <td className="whitespace-nowrap py-2 px-2.5 sm:pl-6 text-neutral-700 text-xs font-normal leading-none">
                      {data.DealType}
                    </td>
                    <td className=" whitespace-nowrap py-2 px-2.5 sm:pl-6 text-neutral-700 text-xs font-normal leading-none">
                    <p className="PlaceHolderText text-neutral-700 text-xs font-normal">
                        {data.Comments[0]}
                      </p>
                      <p className="PlaceHolderText text-neutral-700 text-xs font-normal">
                        {data.Comments[1]}
                      </p>
                    </td>

                    <td className="  border-stone-300  sticky right-0 bg-white whitespace-nowrap py-2 px-2.5 sm:pl-6 text-neutral-700 text-xs font-normal ">
                      <div className="flex sticky-shadow-left">
                        <div className="flex">
                          {data.NextActionItem2.slice(0, 4).map((link,index) => (
                            <a key={index}
                              className="text-xs text-atom_bleudefrance flex items-center font-regular mr-1"
                              href={link.pageLink} title={link.pageName}
                            >
                              <i className="text-base ri-external-link-line mr-1"></i>
                         
                            </a>
                          ))}
                        </div>
                      
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </>
        }
          { activeSectionTab == 1 &&
          <div className="h-full w-full flex items-center justify-center">
            <Image
      src="/assets/img/MicrosoftTeams-image.png"
      width={300}
      height={300}
      alt="Picture of the author"
    />
          </div>
        }
      </div>
    
    </main>
  );
}
