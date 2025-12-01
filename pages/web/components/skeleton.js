import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Tooltip from "../../../components/reusable/Tooltip";
import Image from "next/image";
import Breadcrumb from "../../../components/reusable/Breadcrumb";

export default function Skeleton() {
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
        { name: "Skeleton", isLast: true },
    ];
    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

    const [activeSectionTab, setSectionTab] = useState(0);
    const [activeTab, setActiveTab] = useState(0);

    // Skeleton code examples
    const skeletonCardCode = [
        {
            Jsx: `
            No JS Needed
            `,
            Code: `
            <div className="animate-pulse w-96 flex flex-col space-y-3 rounded-lg">
                {/* Image Placeholder */}
                <div className="h-40 bg-gray-300 rounded-lg"></div>

                {/* Title Placeholder */}
                <div className="h-6 bg-gray-300 rounded w-3/4"></div>

                {/* Subtitle Placeholder */}
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>

                {/* Button Placeholder */}
                <div className="h-10 bg-gray-300 rounded"></div>
            </div>
            `,
        },
    ];

    const skeletonListCode = [
        {
            Jsx: `
            No JS Needed
            `,
            Code: `
            <div className="animate-pulse space-y-4">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center space-x-4">
                        <div className="bg-gray-300 rounded-full h-12 w-12"></div>
                        <div className="flex-1 space-y-2">
                            <div className="bg-gray-300 h-4 rounded w-3/4"></div>
                            <div className="bg-gray-300 h-3 rounded w-1/2"></div>
                        </div>
                    </div>
                ))}
            </div>
            `,
        },
    ];

    const skeletonTableCode = [
        {
            Jsx: `
            No JS Needed
            `,
            Code: `
            <div className="animate-pulse">
                <div className="bg-gray-300 h-10 rounded mb-2"></div>
                {[1, 2, 3, 4].map((row) => (
                    <div key={row} className="bg-gray-200 h-12 rounded mb-1"></div>
                ))}
            </div>
            `,
        },
    ];

    const skeletonTextCode = [
        {
            Jsx: `
            No JS Needed
            `,
            Code: `
            <div className="animate-pulse max-w-2xl">
                {/* Title */}
                <div className="bg-gray-300 h-8 rounded w-2/3 mb-6"></div>
                
                {/* Paragraph 1 */}
                <div className="space-y-2 mb-4">
                    <div className="bg-gray-300 h-4 rounded w-full"></div>
                    <div className="bg-gray-300 h-4 rounded w-full"></div>
                    <div className="bg-gray-300 h-4 rounded w-5/6"></div>
                </div>
                
                {/* Paragraph 2 */}
                <div className="space-y-2 mb-4">
                    <div className="bg-gray-300 h-4 rounded w-full"></div>
                    <div className="bg-gray-300 h-4 rounded w-4/5"></div>
                    <div className="bg-gray-300 h-4 rounded w-full"></div>
                    <div className="bg-gray-300 h-4 rounded w-3/4"></div>
                </div>
            </div>
            `,
        },
    ];

    const skeletonCardTab = [
        {
            name: "HTML",
            current: true,
            content: `${skeletonCardCode[0].Code}`,
        },
        {
            name: "JSX",
            current: false,
            content: `${skeletonCardCode[0].Jsx}`,
        },
    ];

    const skeletonListTab = [
        {
            name: "HTML",
            current: true,
            content: `${skeletonListCode[0].Code}`,
        },
        {
            name: "JSX",
            current: false,
            content: `${skeletonListCode[0].Jsx}`,
        },
    ];

    const skeletonTableTab = [
        {
            name: "HTML",
            current: true,
            content: `${skeletonTableCode[0].Code}`,
        },
        {
            name: "JSX",
            current: false,
            content: `${skeletonTableCode[0].Jsx}`,
        },
    ];

    const skeletonTextTab = [
        {
            name: "HTML",
            current: true,
            content: `${skeletonTextCode[0].Code}`,
        },
        {
            name: "JSX",
            current: false,
            content: `${skeletonTextCode[0].Jsx}`,
        },
    ];

    const SectionhandleTabClick = (index) => {
        setSectionTab(index);
    };
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const [CopyCodeToolipMessage, setCopyCodeToolipMessage] = useState(
        "Click here to Copy Code"
    );

    const [showCode, setshowCode] = useState(false);
    const [showCode2, setshowCode2] = useState(false);
    const [showCode3, setshowCode3] = useState(false);
    const [showCode4, setshowCode4] = useState(false);
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
                lastChildMentioned="Skeleton"
            />
            <div className=" bg-white m-5 mb-10">

                {activeSectionTab == 0 && (
                    <>
                        {/* Skeleton Card */}
                        <div className="border border-atom_silver rounded p-5 mb-4" id="skeleton1">
                            <div className="flex items-center justify-between mb-5">
                                <h3 className="text-lg leading-[32px] mb-[16px] text-atom_dimgray">
                                    Skeleton Card
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
                                            onClick={() => setshowCode(!showCode)}
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
                                                    {skeletonCardTab.map((tab, index) => (
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
                                                id="SkeletonCardCode"
                                            >
                                                {skeletonCardTab[activeTab].content}
                                            </pre>
                                            <div className="absolute top-[40px] right-[50px] block">
                                                <Tooltip message={CopyCodeToolipMessage}>
                                                    <a
                                                        className="cursor-pointer"
                                                        onClick={() => CopyClickView("SkeletonCardCode")}
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

                            {/* UI Preview */}
                            <div className="animate-pulse w-96 flex flex-col space-y-3 rounded-lg">
                                <div className="h-40 bg-gray-300 rounded-lg"></div>
                                <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                                <div className="h-10 bg-gray-300 rounded"></div>
                            </div>
                        </div>

                        {/* Skeleton List */}
                        <div className="border border-atom_silver rounded p-5 mb-4" id="skeleton2">
                            <div className="flex items-center justify-between mb-5">
                                <h3 className="text-lg leading-[32px] mb-[16px] text-atom_dimgray">
                                    Skeleton List
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
                                            onClick={() => setshowCode2(!showCode2)}
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
                                                    {skeletonListTab.map((tab, index) => (
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
                                                id="SkeletonListCode"
                                            >
                                                {skeletonListTab[activeTab].content}
                                            </pre>
                                            <div className="absolute top-[40px] right-[50px] block">
                                                <Tooltip message={CopyCodeToolipMessage}>
                                                    <a
                                                        className="cursor-pointer"
                                                        onClick={() => CopyClickView("SkeletonListCode")}
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

                            {/* UI Preview */}
                            <div className="animate-pulse space-y-4 max-w-md">
                                {[1, 2, 3, 4].map((item) => (
                                    <div key={item} className="flex items-center space-x-4">
                                        <div className="bg-gray-300 rounded-full h-12 w-12"></div>
                                        <div className="flex-1 space-y-2">
                                            <div className="bg-gray-300 h-4 rounded w-3/4"></div>
                                            <div className="bg-gray-300 h-3 rounded w-1/2"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Skeleton Table */}
                        <div className="border border-atom_silver rounded p-5 mb-4" id="skeleton3">
                            <div className="flex items-center justify-between mb-5">
                                <h3 className="text-lg leading-[32px] mb-[16px] text-atom_dimgray">
                                    Skeleton Table
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
                                            onClick={() => setshowCode3(!showCode3)}
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
                                                    {skeletonTableTab.map((tab, index) => (
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
                                                id="SkeletonTableCode"
                                            >
                                                {skeletonTableTab[activeTab].content}
                                            </pre>
                                            <div className="absolute top-[40px] right-[50px] block">
                                                <Tooltip message={CopyCodeToolipMessage}>
                                                    <a
                                                        className="cursor-pointer"
                                                        onClick={() => CopyClickView("SkeletonTableCode")}
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

                            {/* UI Preview */}
                            <div className="animate-pulse max-w-xl">
                                <div className="bg-gray-300 h-10 rounded mb-2"></div>
                                {[1, 2, 3, 4, 5].map((row) => (
                                    <div key={row} className="bg-gray-200 h-12 rounded mb-1"></div>
                                ))}
                            </div>
                        </div>

                        {/* Skeleton Text */}
                        <div className="border border-atom_silver rounded p-5 mb-4" id="skeleton4">
                            <div className="flex items-center justify-between mb-5">
                                <h3 className="text-lg leading-[32px] mb-[16px] text-atom_dimgray">
                                    Skeleton Text (Article)
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
                                            onClick={() => setshowCode4(!showCode4)}
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
                                                    {skeletonTextTab.map((tab, index) => (
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
                                                id="SkeletonTextCode"
                                            >
                                                {skeletonTextTab[activeTab].content}
                                            </pre>
                                            <div className="absolute top-[40px] right-[50px] block">
                                                <Tooltip message={CopyCodeToolipMessage}>
                                                    <a
                                                        className="cursor-pointer"
                                                        onClick={() => CopyClickView("SkeletonTextCode")}
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

                            {/* UI Preview */}
                            <div className="animate-pulse max-w-2xl">
                                {/* Title */}
                                <div className="bg-gray-300 h-8 rounded w-2/3 mb-6"></div>
                                
                                {/* Paragraph 1 */}
                                <div className="space-y-2 mb-4">
                                    <div className="bg-gray-300 h-4 rounded w-full"></div>
                                    <div className="bg-gray-300 h-4 rounded w-full"></div>
                                    <div className="bg-gray-300 h-4 rounded w-5/6"></div>
                                </div>
                                
                                {/* Paragraph 2 */}
                                <div className="space-y-2 mb-4">
                                    <div className="bg-gray-300 h-4 rounded w-full"></div>
                                    <div className="bg-gray-300 h-4 rounded w-4/5"></div>
                                    <div className="bg-gray-300 h-4 rounded w-full"></div>
                                    <div className="bg-gray-300 h-4 rounded w-3/4"></div>
                                </div>
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
