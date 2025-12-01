import React, { useState, useEffect } from "react";
import { ComponentShowcase } from "../../../components/reusable/CodeBlock";
import Image from "next/image";
import Select from 'react-select';
import { useForm, Controller } from "react-hook-form";
import Breadcrumb from "../../../components/reusable/Breadcrumb";
import { useRouter } from 'next/router';

export default function Form() {
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
    { name: "Form", isLast: true },
  ];
  
  const [activeSectionTab, setSectionTab] = useState(0);
    
  const dropOptions = [
    { value: 'schneider', label: 'Schneider Electric' },
    { value: 'kei', label: 'KEI Wires & Cables' },
    { value: 'telemacanique', label: 'Telemacanique Sensors' },
    { value: 'apar', label: 'APAR' },
    { value: 'socomec', label: 'Socomec' },
    { value: 'wago', label: 'Wago' },
  ];

  const selectedBrand = '';
  const [selectedOptions, setSelectedOptions] = useState([dropOptions[selectedBrand]] || []);

  const { control } = useForm({});
 
  const handleChange = (selected) => {
    setSelectedOptions(selected || []);
  };

  // Code strings for ComponentShowcase
  const multiSelectJsx = `// Import statements
import React, { useState } from "react";
import Select from 'react-select';
import { useForm, Controller } from "react-hook-form";

// Inside your component
const dropOptions = [
  { value: 'schneider', label: 'Schneider Electric' },
  { value: 'kei', label: 'KEI Wires & Cables' },
  { value: 'telemacanique', label: 'Telemacanique Sensors' },
  { value: 'apar', label: 'APAR' },
  { value: 'socomec', label: 'Socomec' },
  { value: 'wago', label: 'Wago' },
];

const [selectedOptions, setSelectedOptions] = useState([]);
const { control } = useForm({});

const handleChange = (selected) => {
  setSelectedOptions(selected || []);
};`;

  const multiSelectHtml = `<div className="relative">
  <Controller
    name="brands"
    control={control}
    defaultValue={selectedOptions}
    render={({ field }) => (
      <Select
        {...field}
        options={dropOptions}
        isMulti
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        onChange={(selected) => {
          field.onChange(selected);
          handleChange(selected);
        }}
        value={field.value}
        instanceId="brands-select"
        styles={{
          control: (provided) => ({
            ...provided,
            fontSize: '14px',
            outline: 'none',
            color: '#000',
            border: '1px solid #707070',
            borderRadius: '4px',
          }),
          multiValue: (provided) => ({
            ...provided,
            backgroundColor: '#e0e0e0',
            borderRadius: '4px',
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
          }),
          multiValueLabel: (provided) => ({
            ...provided,
            color: '#333',
          }),
          multiValueRemove: (provided) => ({
            ...provided,
            color: '#999',
            ':hover': {
              backgroundColor: '#ccc',
              color: '#333',
            },
          }),
        }}
      />
    )}
  />
</div>`;

  return (
    <main className="dark:bg-gray-900">
      <Breadcrumb
        breadcrumbs={breadcrumbs}
        lastChildMentioned="Forms"
      />
      <div className="bg-white dark:bg-gray-800 m-5 mb-10 rounded-lg p-5">
        {activeSectionTab == 0 && (
          <ComponentShowcase
            title="React Multi Select (Using react-select)"
            id="reactMultiSelect"
            description="Install react-select using: npm i --save react-select"
            htmlCode={multiSelectHtml}
            jsxCode={multiSelectJsx}
          >
            <div className="bg-white dark:bg-gray-700 shadow-icon-btn-shadow rounded-[8px] py-4 px-5 lg:w-full lg:max-w-[350px] md:max-w-[350px] border border-gray-100 dark:border-gray-600">
              <Controller
                name="brands"
                control={control}
                defaultValue={selectedOptions}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={dropOptions}
                    isMulti
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    onChange={(selected) => {
                      field.onChange(selected);
                      handleChange(selected);
                    }}
                    value={field.value}
                    instanceId="brands-select"
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        fontSize: '14px',
                        outline: 'none',
                        color: '#000',
                        border: '1px solid #707070',
                        borderRadius: '4px',
                      }),
                      multiValue: (provided) => ({
                        ...provided,
                        backgroundColor: '#e0e0e0',
                        borderRadius: '4px',
                        padding: '2px 4px',
                        display: 'flex',
                        alignItems: 'center',
                      }),
                      multiValueLabel: (provided) => ({
                        ...provided,
                        color: '#333',
                      }),
                      multiValueRemove: (provided) => ({
                        ...provided,
                        color: '#999',
                        ':hover': {
                          backgroundColor: '#ccc',
                          color: '#333',
                        },
                      }),
                      dropdownIndicator: (provided) => ({
                        ...provided,
                        padding: '4px',
                      }),
                    }}
                  />
                )}
              />
            </div>
          </ComponentShowcase>
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
