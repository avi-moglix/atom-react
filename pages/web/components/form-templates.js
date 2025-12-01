import React, { useState, useEffect, useCallback } from "react";
import Tooltip from "../../../components/reusable/Tooltip";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useRouter } from "next/router";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import Breadcrumb from "../../../components/reusable/Breadcrumb";
import FinanceForm from "./FinanceForm";
import {jsxCode,htmlCode} from './FinanceForm';
const schema = () => {
  return yup.object({
    Name: yup.string().required("This field is required."),
    Email: yup
      .string()
      .required("This field is required.")
      .email("Email is not valid"),
    Phone: yup
      .string()
      .required("This field is required.")
      .matches(/^\d{10}$/, "Phone number must be 10 digits"),
    company: yup.string().required("This field is required."),
  });
};



export default function Formtemplates() {
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
    { name: "Form Templates", isLast: true },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [activeSectionTab, setSectionTab] = useState(0);
  const [activeTab, setActiveTab] = useState(0);


  const TabsStyles = [
    {
      Jsx: `// import this before component function start remove it if already imported
      import React, { useState, useCallback } from "react";
      import { useForm } from "react-hook-form";
      import { yupResolver } from "@hookform/resolvers/yup";
      import * as yup from "yup";
      import axios from "axios";
      import { useRouter } from "next/router";
      import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

     const schema = () => {
       return yup.object({
       Name: yup.string().required("This field is required."),
       Email: yup
      .string()
      .required("This field is required.")
      .email("Email is not valid"),
       Phone: yup
      .string()
      .required("This field is required.")
      .matches(/^\d{10}$/, "Phone number must be 10 digits"),
      company: yup.string().required("This field is required."),
      });
     };

      
 // import this after component function start 
 const router = useRouter();
  const validationSchema = schema();
  const [ThankyouRes, setThankyouRes] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [errMSG, setErrMSG] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(validationSchema),
  });

  const handleCaptchaSubmit = useCallback(
    (values) => {
      if (!executeRecaptcha) {
        return false;
      }
      executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
        onFormSubmit(values, gReCaptchaToken);
      });
    },
    [executeRecaptcha]
  );

  async function onFormSubmit(values, gReCaptchaToken) {
    const body = {
      name: values.Name,
      email: values.Email,
      phoneNumber: values.Phone,
      company: values.company,
      sourceUrl: window.location.href,
    };
    let config = {
      method: "post",

    //   Please add api
    //   url: "https://credlix-business-backend.credlixlab.com/api/form/createDomesticForm",

      headers: {
        "Content-Type": "application/json",
        "g-recaptcha-response": gReCaptchaToken,
      },
      data: body,
    };

    try {
      const response = await axios(config);
      if (response.status == 200) {
        setThankyouRes(true);
        reset();
        setTimeout(() => {
          setThankyouRes(false);
          router.push("/thankyou-response");
        }, 3000);
      }
    } catch (err) {
      setErrMSG(true);
      console.log("error", err);
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    }
   }
  `,
      Code: `
      <div className="bg-white sm:mt-2 shadow-icon-btn-shadow rounded-[8px] py-4 pb-6 px-5 sm:px-[16px] lg:w-full lg:max-w-sm 
            md:max-w-sm	 sm:w-full md:relative md:m-auto md:mb-5 border-#FFFFFF">
              <span className="text-2xl flex text-[#012A5B] font-medium mb-3 sm:text-xl">
                Write Your Heading
              </span>
              <form
                onSubmit={handleSubmit(handleCaptchaSubmit)}
              >
                <div className="pt-2">
                  <input
                    name="Name"
                    type="text"
                    id="name"
                    placeholder="What's your Name?"
                    className="block w-full appearance-none rounded-md border border-bordercolor px-3 py-2 placeholder-gray-400 text-xm font-normal"
                    {...register("Name")}
                  />
                  <p className="text-[#D9232D] text-xs mt-[3px]">
                    {errors.Name?.message}
                  </p>
                </div>
                <div className="pt-2">
                  <input
                    placeholder="What's your mobile number?"
                    className="block w-full appearance-none rounded-md border border-bordercolor px-3 py-2 placeholder-gray-400 text-xm font-normal"
                    {...register("Phone")}
                    id="tel"
                    type="tel"
                  />
                  <p className="text-[#D9232D] text-xs mt-[3px]">
                    {errors.Phone?.message}
                  </p>
                </div>
                <div className="pt-2">
                  <input
                    {...register("Email")}
                    id="email"
                    type="email"
                    placeholder="What's your email id?"
                    className="block w-full appearance-none rounded-md border border-bordercolor px-3 py-2 placeholder-gray-400 text-xm font-normal"
                  />
                  <p className="text-[#D9232D] text-xs mt-[3px]">
                    {errors.Email?.message}
                  </p>
                </div>
                <div className="pt-2">
                  <input
                    {...register("company")}
                    id="tel"
                    type="tel"
                    placeholder="Company Name?"
                    className="block w-full appearance-none rounded-md border border-bordercolor px-3 py-2 placeholder-gray-400 text-xm font-normal"
                  />
                  <p className="text-[#D9232D] text-xs mt-[3px]">
                    {errors.company?.message}
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    className="py-2 px-3 rounded-md text-white text-lg font-medium w-full bg-gradient-to-r bg-[#d7242d]"
                    type="submit"
                  >
                   Submit
                  </button>
                  <div>
                    {errMSG && (
                      <div className="error-message">An error occurred!</div>
                    )}
                  </div>
                </div>
              </form>
              {ThankyouRes ? (
                <>
                  <div className="text-green text-center">
                    <p className="text-xm font-medium mt-3">
                      Successfull Submission : Thank you for your interest.{" "}
                    </p>
                  </div>
                </>
              ) : null}
            </div>
      `,
    },
  ];

  const tabs = [
    {
      name: "HTML",
      current: true,
      content: `  
      {"Default tab with HTMl -----------------"}
      ${TabsStyles[0].Code}
      `,
    },
    {
      name: "JSX",
      current: false,
      content: `
      {"Default tab with JSX -----------------"}
      ${TabsStyles[0].Jsx}
     `,
    },
  ];



  const tabs2 = [
    {
      name: "HTML",
      current: true,
      content: `  
      ${jsxCode}
      `,
    },
    {
      name: "JSX",
      current: false,
      content: `
      ${htmlCode}
     `,
    },
  ];


  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const [CopyCodeToolipMessage, setCopyCodeToolipMessage] = useState(
    "Click here to Copy Code"
  );
  const [showCode, setShowCode] = useState(false);
  const [showCode2, setShowCode2] = useState(false);
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

  //   Form validation
  const validationSchema = schema();
  const [ThankyouRes, setThankyouRes] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [errMSG, setErrMSG] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(validationSchema),
  });

  const handleCaptchaSubmit = useCallback(
    (values) => {
      if (!executeRecaptcha) {
        return false;
      }
      executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
        onFormSubmit(values, gReCaptchaToken);
      });
    },
    [executeRecaptcha]
  );

  async function onFormSubmit(values, gReCaptchaToken) {
    const body = {
      name: values.Name,
      email: values.Email,
      phoneNumber: values.Phone,
      company: values.company,
      sourceUrl: window.location.href,
    };
    let config = {
      method: "post",
      //   Please add api
      //   url: "https://credlix-business-backend.credlixlab.com/api/form/createDomesticForm",
      headers: {
        "Content-Type": "application/json",
        "g-recaptcha-response": gReCaptchaToken,
      },
      data: body,
    };

    try {
      const response = await axios(config);
      if (response.status == 200) {
        setThankyouRes(true);
        reset();
        setTimeout(() => {
          setThankyouRes(false);
          router.push("/thankyou-response");
        }, 3000);
      }
    } catch (err) {
      setErrMSG(true);
      console.log("error", err);
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    }
  }

  return (
    <main>
        <Breadcrumb
        breadcrumbs={breadcrumbs}
        lastChildMentioned="Form Templates"
      />
      <div className=" bg-white m-5 mb-10">
      

        {activeSectionTab == 0 && (
          <>
       
          <div className="border border-atom_silver rounded p-5 mb-4" id="BasicFromWith4rthInputs">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg leading-[32px] mb-[16px] text-atom_dimgray">
               Form with 4 basic inputs
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
            <div className="bg-white sm:mt-2 shadow-icon-btn-shadow rounded-[8px] py-4 pb-6 px-5 sm:px-[16px] lg:w-full lg:max-w-[350px] md:max-w-[350px] sm:w-full md:relative md:m-auto md:mb-5 border-#FFFFFF">
              <span className="text-2xl flex text-[#012A5B] font-medium mb-3 sm:text-xl">
                Write Your Heading
              </span>
              <form
                onSubmit={handleSubmit(handleCaptchaSubmit)}
                // onSubmit={handleSubmit(onFormSubmit)}
              >
                <div className="pt-2">
                  <input
                    name="Name"
                    type="text"
                    id="name"
                    placeholder="What's your Name?"
                    className="block w-full appearance-none rounded-md border border-bordercolor px-3 py-2 placeholder-gray-400 text-xm font-normal"
                    {...register("Name")}
                  />
                  <p className="text-[#D9232D] text-xs mt-[3px]">
                    {errors.Name?.message}
                  </p>
                </div>
                <div className="pt-2">
                  <input
                    placeholder="What's your mobile number?"
                    className="block w-full appearance-none rounded-md border border-bordercolor px-3 py-2 placeholder-gray-400 text-xm font-normal"
                    {...register("Phone")}
                    id="tel"
                    type="tel"
                  />
                  <p className="text-[#D9232D] text-xs mt-[3px]">
                    {errors.Phone?.message}
                  </p>
                </div>
                <div className="pt-2">
                  <input
                    {...register("Email")}
                    id="email"
                    type="email"
                    placeholder="What's your email id?"
                    className="block w-full appearance-none rounded-md border border-bordercolor px-3 py-2 placeholder-gray-400 text-xm font-normal"
                  />
                  <p className="text-[#D9232D] text-xs mt-[3px]">
                    {errors.Email?.message}
                  </p>
                </div>
                <div className="pt-2">
                  <input
                    {...register("company")}
                    id="tel"
                    type="tel"
                    placeholder="Company Name?"
                    className="block w-full appearance-none rounded-md border border-bordercolor px-3 py-2 placeholder-gray-400 text-xm font-normal"
                  />
                  <p className="text-[#D9232D] text-xs mt-[3px]">
                    {errors.company?.message}
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    className="py-2 px-3 rounded-md text-white text-lg font-medium w-full bg-gradient-to-r bg-[#d7242d]"
                    type="submit"
                  >
                    Submit
                  </button>
                  <div>
                    {errMSG && (
                      <div className="error-message">An error occurred!</div>
                    )}
                  </div>
                </div>
              </form>
              {ThankyouRes ? (
                <>
                  <div className="text-green text-center">
                    <p className="text-xm font-medium mt-3">
                      Successfull Submission : Thank you for your interest.{" "}
                    </p>
                  </div>
                </>
              ) : null}
            </div>
          </div>

          <div className="border border-atom_silver rounded p-5" id="2stepForm">
<div className="flex items-center justify-between mb-5">
  <h3 className="text-lg leading-[32px] mb-[16px] text-atom_dimgray">
   2 Step Form
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
<FinanceForm/>
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
