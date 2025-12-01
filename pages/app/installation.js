import React from 'react';
import Head from 'next/head';
import Breadcrumb from '@/components/reusable/Breadcrumb';
import CodeBlock from '@/components/reusable/CodeBlock';

export default function Installation() {
  const breadcrumbs = [
    { name: 'Home', isLast: false, path: '/' },
    { name: 'React Native', isLast: false, path: '/app' },
    { name: 'Installation', isLast: true },
  ];

  const basicUsageCode = `import React from 'react';
import { View } from 'react-native';
import AButton from '@atom-design-mog/buttons';
import Input from '@atom-design-mog/input';

export default function MyScreen() {
  const [value, setValue] = React.useState('');

  return (
    <View style={{ padding: 20 }}>
      <Input
        type="text"
        label="Your Name"
        placeholder="Enter name"
        value={value}
        onChangeText={setValue}
      />
      
      <AButton
        title="Submit"
        color="primary"
        variant="solid"
        onPress={() => console.log('Submitted:', value)}
      />
    </View>
  );
}`;

  return (
    <>
      <Head>
        <title>Installation | Atom Design - React Native Components</title>
        <meta name="description" content="Learn how to install and use Atom Design React Native components. Step-by-step guide for npm and yarn installation." />
        <meta property="og:title" content="Installation | Atom Design" />
        <meta property="og:description" content="Step-by-step guide for installing Atom Design React Native components" />
      </Head>
      <main>
        <Breadcrumb breadcrumbs={breadcrumbs} lastChildMentioned="Installation" />
      
      <div className="bg-white dark:bg-gray-900 m-5 mb-10">
        {/* Prerequisites */}
        <div className="doc-section" id="prerequisites">
          <div className="section-header">
            <h3>Prerequisites</h3>
          </div>
          <p className="text-atom_dimgray dark:text-gray-400 mb-4">
            Before installing Atom Design components, make sure you have:
          </p>
          <ul className="list-disc pl-6 text-atom_dimgray dark:text-gray-400 space-y-2">
            <li>React Native 0.60 or higher</li>
            <li>Node.js 14 or higher</li>
            <li>npm or yarn package manager</li>
          </ul>
        </div>

        {/* Installation Steps */}
        <div className="doc-section" id="installation">
          <div className="section-header">
            <h3>Installing Components</h3>
          </div>
          <p className="text-atom_dimgray dark:text-gray-400 mb-4">
            Each component is published as a separate npm package. Install only what you need:
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2 dark:text-white">Using npm:</h4>
              <CodeBlock 
                code="npm install @atom-design-mog/buttons @atom-design-mog/input" 
                language="bash"
              />
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 dark:text-white">Using yarn:</h4>
              <CodeBlock 
                code="yarn add @atom-design-mog/buttons @atom-design-mog/input" 
                language="bash"
              />
            </div>
          </div>
        </div>

        {/* Peer Dependencies */}
        <div className="doc-section" id="peer-dependencies">
          <div className="section-header">
            <h3>Peer Dependencies</h3>
          </div>
          <p className="text-atom_dimgray dark:text-gray-400 mb-4">
            Some components require additional peer dependencies. Install them as needed:
          </p>
          
          <div className="overflow-x-auto">
            <table className="props-table">
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Peer Dependencies</th>
                  <th>Install Command</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code className="text-atom_rojored">@atom-design-mog/buttons</code></td>
                  <td><code>react-native-vector-icons</code></td>
                  <td><code className="text-xs">npm i react-native-vector-icons</code></td>
                </tr>
                <tr>
                  <td><code className="text-atom_rojored">@atom-design-mog/calendar</code></td>
                  <td><code>react-native-calendars</code></td>
                  <td><code className="text-xs">npm i react-native-calendars</code></td>
                </tr>
                <tr>
                  <td><code className="text-atom_rojored">@atom-design-mog/datepicker</code></td>
                  <td><code>@react-native-community/datetimepicker</code></td>
                  <td><code className="text-xs">npm i @react-native-community/datetimepicker</code></td>
                </tr>
                <tr>
                  <td><code className="text-atom_rojored">@atom-design-mog/upload-field</code></td>
                  <td><code>react-native-image-picker</code>, <code>react-native-progress</code></td>
                  <td><code className="text-xs">npm i react-native-image-picker react-native-progress</code></td>
                </tr>
                <tr>
                  <td><code className="text-atom_rojored">Other components</code></td>
                  <td colSpan="2" className="text-gray-500 dark:text-gray-400">No additional dependencies required</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-4">
            <h4 className="font-semibold mb-2 dark:text-white">Install all peer dependencies at once:</h4>
            <CodeBlock 
              code="npm install react-native-vector-icons react-native-calendars @react-native-community/datetimepicker react-native-image-picker react-native-progress" 
              language="bash"
            />
          </div>
        </div>

        {/* Basic Usage */}
        {/* <div className="doc-section" id="basic-usage">
          <div className="section-header">
            <h3>Basic Usage</h3>
          </div>
          <p className="text-atom_dimgray dark:text-gray-400 mb-4">
            Import and use components in your React Native app:
          </p>
          <CodeBlock 
            code={basicUsageCode} 
            language="jsx"
            title="Example.js"
          />
        </div> */}

        {/* Available Packages */}
        <div className="doc-section" id="packages">
          <div className="section-header">
            <h3>Available Packages</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {[
              '@atom-design-mog/buttons',
              '@atom-design-mog/input',
              '@atom-design-mog/search',
              '@atom-design-mog/calendar',
              '@atom-design-mog/datepicker',
              '@atom-design-mog/dropdown',
              '@atom-design-mog/menu',
              '@atom-design-mog/controls',
              '@atom-design-mog/tabs',
              '@atom-design-mog/accordions',
              '@atom-design-mog/tooltip',
              '@atom-design-mog/cardslist',
              '@atom-design-mog/moglix-carousel',
              '@atom-design-mog/upload-field',
              '@atom-design-mog/login',
            ].map((pkg, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded p-3 flex items-center justify-between">
                <code className="text-sm text-atom_celticblue dark:text-blue-400">{pkg}</code>
                <a 
                  href={`https://www.npmjs.com/package/${pkg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-atom_rojored dark:hover:text-red-400"
                >
                  <i className="ri-external-link-line"></i>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <div className="doc-section" id="next-steps">
          <div className="section-header">
            <h3>Next Steps</h3>
          </div>
          <p className="text-atom_dimgray dark:text-gray-400">
            Explore individual component documentation to learn about all available props and features.
            Each component page includes:
          </p>
          <ul className="list-disc pl-6 text-atom_dimgray dark:text-gray-400 space-y-2 mt-4">
            <li>Live Expo Snack demos</li>
            <li>Complete props reference table</li>
            <li>Usage examples and code snippets</li>
            <li>Installation instructions</li>
          </ul>
        </div>
      </div>
    </main>
    </>
  );
}
