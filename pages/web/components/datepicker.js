import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Breadcrumb from "../../../components/reusable/Breadcrumb";
import { ComponentShowcase } from "../../../components/reusable/CodeBlock";

const breadcrumbs = [
  { name: "Home", isLast: false, path: '/' },
  { name: "Web Components", isLast: false, path: '/web' },
  { name: "Datepicker", isLast: true },
];

export default function DatePickerComponent() {
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

  const [startDate, setStartDate] = useState(new Date());
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDateRange, endDateRange] = dateRange;

  // Code examples
  const basicDatePickerJsx = `import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BasicDatePicker() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="max-w-xs">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Select Date
      </label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        dateFormat="dd/MM/yyyy"
      />
    </div>
  );
}`;

  const basicDatePickerHtml = `<div class="max-w-xs">
  <label class="block text-sm font-medium text-gray-700 mb-2">
    Select Date
  </label>
  <input 
    type="date" 
    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  />
</div>`;

  const dateRangePickerJsx = `import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateRangePicker() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <div className="max-w-xs">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Select Date Range
      </label>
      <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => setDateRange(update)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholderText="Select date range"
        isClearable={true}
      />
    </div>
  );
}`;

  const dateTimePickerJsx = `import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateTimePicker() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="max-w-xs">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Select Date & Time
      </label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        dateFormat="Pp"
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
}`;

  const monthYearPickerJsx = `import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function MonthYearPicker() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="max-w-xs">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Select Month & Year
      </label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showMonthYearPicker
        dateFormat="MM/yyyy"
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
}`;

  const yearPickerJsx = `import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function YearPicker() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="max-w-xs">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Select Year
      </label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showYearPicker
        dateFormat="yyyy"
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
}`;

  const inlineDatePickerJsx = `import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function InlineDatePicker() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="inline-block">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        inline
      />
    </div>
  );
}`;

  return (
    <main className="dark:bg-gray-900">
      <Breadcrumb
        breadcrumbs={breadcrumbs}
        lastChildMentioned="Datepicker"
      />
      <div className="bg-white dark:bg-gray-800 m-5 mb-10 rounded-lg p-5">
        {/* Basic DatePicker */}
        <ComponentShowcase
          title="Basic DatePicker"
          id="basicDatepicker"
          jsxCode={basicDatePickerJsx}
          htmlCode={basicDatePickerHtml}
        >
          <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="max-w-xs">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Select Date
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>
        </ComponentShowcase>

        {/* Date Range Picker */}
        <ComponentShowcase
          title="Date Range Picker"
          id="dateRangePicker"
          jsxCode={dateRangePickerJsx}
        >
          <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="max-w-xs">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Select Date Range
              </label>
              <DatePicker
                selectsRange={true}
                startDate={startDateRange}
                endDate={endDateRange}
                onChange={(update) => setDateRange(update)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                placeholderText="Select date range"
                isClearable={true}
              />
            </div>
          </div>
        </ComponentShowcase>

        {/* DatePicker with Time */}
        <ComponentShowcase
          title="DatePicker with Time"
          id="dateTimePicker"
          jsxCode={dateTimePickerJsx}
        >
          <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="max-w-xs">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Select Date & Time
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                dateFormat="Pp"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
              />
            </div>
          </div>
        </ComponentShowcase>

        {/* Month Year Picker */}
        <ComponentShowcase
          title="Month Year Picker"
          id="monthYearPicker"
          jsxCode={monthYearPickerJsx}
        >
          <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="max-w-xs">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Select Month & Year
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showMonthYearPicker
                dateFormat="MM/yyyy"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
              />
            </div>
          </div>
        </ComponentShowcase>

        {/* Year Picker */}
        <ComponentShowcase
          title="Year Picker"
          id="yearPicker"
          jsxCode={yearPickerJsx}
        >
          <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="max-w-xs">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Select Year
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showYearPicker
                dateFormat="yyyy"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
              />
            </div>
          </div>
        </ComponentShowcase>

        {/* Inline DatePicker */}
        <ComponentShowcase
          title="Inline DatePicker"
          id="inlineDatepicker"
          jsxCode={inlineDatePickerJsx}
        >
          <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="inline-block">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                inline
              />
            </div>
          </div>
        </ComponentShowcase>
      </div>
    </main>
  );
}
