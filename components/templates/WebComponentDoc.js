import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Breadcrumb from '@/components/reusable/Breadcrumb';
import CodeBlock from '@/components/reusable/CodeBlock';
import Tooltip from '@/components/reusable/Tooltip';
import { useCopyLink } from '@/hooks/useCopyLink';

/**
 * WebComponentDoc Template
 * Reusable template for all web component documentation pages
 * Unlike native components, web components show live preview instead of Snack embed
 */
export default function WebComponentDoc({ 
  componentMeta, 
  propsData = [],
  usageCode,
  cssCode,
  features = [],
  variants = [],
  dependencies = null,
  livePreview = null,
  dosAndDonts = null,
  accessibilityNotes = null,
}) {
  const { copyLink, copied } = useCopyLink();
  const router = useRouter();
  
  // Scroll to hash section on page load
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    };

    handleHashScroll();
    window.addEventListener('hashchange', handleHashScroll);
    
    return () => {
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, [router.asPath]);
  
  const breadcrumbs = [
    { name: 'Home', isLast: false, path: '/' },
    { name: 'Web Components', isLast: false, path: '/web' },
    { name: componentMeta.name, isLast: true },
  ];

  const SectionHeader = ({ id, title }) => (
    <div className="section-header">
      <h3 id={id}>{title}</h3>
      <Tooltip message={copied === id ? "Copied!" : "Copy link"}>
        <button 
          onClick={() => copyLink(id)} 
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1 rounded transition-colors"
          aria-label={`Copy link to ${title} section`}
        >
          <i className="ri-link" aria-hidden="true"></i>
        </button>
      </Tooltip>
    </div>
  );

  return (
    <>
      <Head>
        <title>{componentMeta.name} | Atom Design - Web Components</title>
        <meta name="description" content={componentMeta.description} />
        <meta property="og:title" content={`${componentMeta.name} | Atom Design Web`} />
        <meta property="og:description" content={componentMeta.description} />
        <meta name="keywords" content={`React, Web Component, UI, ${componentMeta.name}, Tailwind CSS`} />
      </Head>
      
      <main>
        <Breadcrumb breadcrumbs={breadcrumbs} lastChildMentioned={componentMeta.name} />
        
        <div>
          {/* Main Content */}
          <div className="bg-white dark:bg-gray-900 m-5 mb-10">
            {/* Header Section */}
            <div className="doc-section" id="overview">
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-xxl font-bold text-atom_onxyblack dark:text-white">
                      {componentMeta.name}
                    </h1>
                    {componentMeta.status && (
                      <span className={`feature-badge ${componentMeta.status}`}>
                        {componentMeta.status}
                      </span>
                    )}
                    <span className="feature-badge web" title="Web Component">
                      <i className="ri-window-line" aria-hidden="true"></i>
                      Web
                    </span>
                  </div>
                  <p className="text-atom_dimgray dark:text-gray-400">{componentMeta.description}</p>
                </div>
              </div>
              
              {/* Variants Preview */}
              {variants.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-semibold mb-2 dark:text-gray-300">Variants:</h4>
                  <div className="flex flex-wrap gap-2">
                    {variants.map((variant) => (
                      <span 
                        key={variant} 
                        className="text-xs bg-atom_aliceblue dark:bg-gray-700 text-atom_celticblue dark:text-blue-300 px-2 py-1 rounded font-mono"
                      >
                        {variant}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Dependencies */}
            {dependencies && dependencies.length > 0 && (
              <div className="doc-section" id="dependencies">
                <SectionHeader id="dependencies" title="Dependencies" />
                <div className="p-4 bg-atom_papayawhiplight dark:bg-yellow-900/20 border border-atom_harvestgold dark:border-yellow-700 rounded-lg">
                  <div className="flex items-center gap-2 text-atom_harvestgold dark:text-yellow-500 font-semibold mb-2">
                    <i className="ri-error-warning-line" aria-hidden="true"></i>
                    Required Dependencies
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    This component requires the following packages:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    {dependencies.map((dep, i) => (
                      <li key={i} className="text-sm">
                        <code className="text-atom_rojored dark:text-red-400">{dep.name}</code>
                        {dep.note && <span className="text-gray-600 dark:text-gray-400"> - {dep.note}</span>}
                      </li>
                    ))}
                  </ul>
                  <code className="block mt-3 text-sm bg-gray-900 text-green-400 p-2 rounded">
                    npm install {dependencies.map(d => d.name).join(' ')}
                  </code>
                </div>
              </div>
            )}

            {/* Live Preview */}
            {livePreview && (
              <div className="doc-section" id="preview">
                <SectionHeader id="preview" title="Live Preview" />
                <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <div className="live-preview-container">
                    {livePreview}
                  </div>
                </div>
              </div>
            )}

            {/* HTML/JSX Code */}
            {usageCode && (
              <div className="doc-section" id="code">
                <SectionHeader id="code" title="Code" />
                <CodeBlock code={usageCode} language="jsx" title="JSX" />
              </div>
            )}

            {/* CSS/Tailwind Classes */}
            {cssCode && (
              <div className="doc-section" id="styling">
                <SectionHeader id="styling" title="Tailwind CSS Classes" />
                <CodeBlock code={cssCode} language="css" title="CSS Classes" />
              </div>
            )}

            {/* Props Reference */}
            {propsData && propsData.length > 0 && (
              <div className="doc-section" id="props">
                <SectionHeader id="props" title="Props / Attributes" />
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                          Class / Prop
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                          Description
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                          Default
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                      {propsData.map((prop, i) => (
                        <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                          <td className="px-4 py-3">
                            <code className="text-sm font-mono text-atom_celticblue dark:text-blue-400 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">
                              {prop.name}
                            </code>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                            {prop.description}
                          </td>
                          <td className="px-4 py-3 text-sm font-mono text-gray-500 dark:text-gray-400">
                            {prop.default || '—'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Features */}
            {features.length > 0 && (
              <div className="doc-section" id="features">
                <SectionHeader id="features" title="Features" />
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-atom_dimgray dark:text-gray-400">
                      <i className="ri-checkbox-circle-fill text-atom_officegreen" aria-hidden="true"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Do's and Don'ts */}
            {dosAndDonts && (
              <div className="doc-section" id="best-practices">
                <SectionHeader id="best-practices" title="Best Practices" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-atom_honeydew dark:bg-green-900/20 border border-atom_officegreen rounded-lg">
                    <h4 className="font-semibold text-atom_officegreen mb-3 flex items-center gap-2">
                      <i className="ri-checkbox-circle-fill" aria-hidden="true"></i>
                      Do
                    </h4>
                    <ul className="space-y-2">
                      {dosAndDonts.dos.map((item, i) => (
                        <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                          <i className="ri-check-line text-atom_officegreen mt-0.5" aria-hidden="true"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 bg-atom_mistyrose dark:bg-red-900/20 border border-atom_rojored rounded-lg">
                    <h4 className="font-semibold text-atom_rojored mb-3 flex items-center gap-2">
                      <i className="ri-close-circle-fill" aria-hidden="true"></i>
                      Don't
                    </h4>
                    <ul className="space-y-2">
                      {dosAndDonts.donts.map((item, i) => (
                        <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                          <i className="ri-close-line text-atom_rojored mt-0.5" aria-hidden="true"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Accessibility Notes */}
            {accessibilityNotes && accessibilityNotes.length > 0 && (
              <div className="doc-section" id="accessibility">
                <SectionHeader id="accessibility" title="Accessibility" />
                <div className="p-4 bg-atom_aliceblue dark:bg-blue-900/20 border border-atom_celticblue rounded-lg">
                  <ul className="space-y-2">
                    {accessibilityNotes.map((note, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <i className="ri-accessibility text-atom_celticblue mt-0.5" aria-hidden="true"></i>
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

WebComponentDoc.propTypes = {
  componentMeta: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['stable', 'beta', 'deprecated', 'new', 'popular']),
  }).isRequired,
  propsData: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    default: PropTypes.string,
  })),
  usageCode: PropTypes.string,
  cssCode: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string),
  variants: PropTypes.arrayOf(PropTypes.string),
  dependencies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    note: PropTypes.string,
  })),
  livePreview: PropTypes.node,
  dosAndDonts: PropTypes.shape({
    dos: PropTypes.arrayOf(PropTypes.string).isRequired,
    donts: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  accessibilityNotes: PropTypes.arrayOf(PropTypes.string),
};
