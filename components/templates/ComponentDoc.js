import React, { useEffect } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Breadcrumb from '@/components/reusable/Breadcrumb';
import InstallBanner from '@/components/reusable/InstallBanner';
import PropsTable from '@/components/reusable/PropsTable';
import SnackEmbed from '@/components/reusable/SnackEmbed';
import CodeBlock from '@/components/reusable/CodeBlock';
import Tooltip from '@/components/reusable/Tooltip';
import { useCopyLink } from '@/hooks/useCopyLink';

/**
 * ComponentDoc Template
 * Reusable template for all component documentation pages
 */
export default function ComponentDoc({ 
  componentMeta, 
  propsData, 
  usageCode, 
  features = [],
  peerDependencies = null,
  variants = [],
  dosAndDonts = null,
  accessibilityNotes = null,
  snackPlatform = 'web',
}) {
  const { copyLink, copied } = useCopyLink();
  const router = useRouter();
  
  // Scroll to hash section on page load
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    };

    // Run on initial load
    handleHashScroll();

    // Also handle hash changes within the same page
    window.addEventListener('hashchange', handleHashScroll);
    
    return () => {
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, [router.asPath]);
  
  const breadcrumbs = [
    { name: 'Home', isLast: false, path: '/' },
    { name: 'React Native', isLast: false, path: '/app' },
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
        <title>{componentMeta.name} | Atom Design - React Native Components</title>
        <meta name="description" content={componentMeta.description} />
        <meta property="og:title" content={`${componentMeta.name} | Atom Design`} />
        <meta property="og:description" content={componentMeta.description} />
        <meta name="keywords" content={`React Native, ${componentMeta.name}, UI Component, ${componentMeta.package}`} />
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
                    {componentMeta.hasTypeScript && (
                      <span className="feature-badge typescript" title="TypeScript Support">
                        <i className="ri-code-s-slash-line" aria-hidden="true"></i>
                        TS
                      </span>
                    )}
                  </div>
                  <p className="text-atom_dimgray dark:text-gray-400">{componentMeta.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <a 
                    href={componentMeta.npmUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="npm-link"
                    aria-label={`View ${componentMeta.name} on npm`}
                  >
                    <i className="ri-npmjs-fill" aria-hidden="true"></i>
                    view on npm
                  </a>
                  {componentMeta.githubUrl && (
                    <a 
                      href={componentMeta.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                      aria-label={`View ${componentMeta.name} source on GitHub`}
                    >
                      <i className="ri-github-fill" aria-hidden="true"></i>
                    </a>
                  )}
                </div>
              </div>
              
              {/* Variants/Types Preview */}
              {variants.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-semibold mb-2 dark:text-gray-300">
                    {componentMeta.name === 'Input' ? 'Supported Types:' : 'Variants:'}
                  </h4>
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

            {/* Installation */}
            <div className="doc-section" id="installation">
              <SectionHeader id="installation" title="Installation" />
              <InstallBanner packageName={componentMeta.package} />
              
              {peerDependencies && (
                <div className="mt-4 p-4 bg-atom_papayawhiplight dark:bg-yellow-900/20 border border-atom_harvestgold dark:border-yellow-700 rounded-lg">
                  <div className="flex items-center gap-2 text-atom_harvestgold dark:text-yellow-500 font-semibold mb-2">
                    <i className="ri-error-warning-line" aria-hidden="true"></i>
                    Peer Dependencies Required
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    This component requires the following peer dependencies:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    {peerDependencies.map((dep, i) => (
                      <li key={i} className="text-sm">
                        <code className="text-atom_rojored dark:text-red-400">{dep.name}</code>
                        {dep.note && <span className="text-gray-600 dark:text-gray-400"> - {dep.note}</span>}
                      </li>
                    ))}
                  </ul>
                  <code className="block mt-3 text-sm bg-gray-900 text-green-400 p-2 rounded">
                    npm install {peerDependencies.map(d => d.name).join(' ')}
                  </code>
                </div>
              )}
            </div>

            {/* Live Demo */}
            <div className="doc-section" id="demo">
              <SectionHeader id="demo" title="Live Demo" />
              <p className="text-atom_dimgray dark:text-gray-400 mb-4">
                Try the component in Expo Snack:
              </p>
              <SnackEmbed snackId={componentMeta.snackId} platform={snackPlatform} />
            </div>

            {/* Usage Examples - Only render if usageCode is provided */}
            {usageCode && (
              <div className="doc-section" id="usage">
                <SectionHeader id="usage" title="Usage Examples" />
                <CodeBlock code={usageCode} language="jsx" title="Usage Example" />
              </div>
            )}

            {/* Props Reference */}
            <div className="doc-section" id="props">
              <SectionHeader id="props" title="Props Reference" />
              <PropsTable props={propsData} />
              {componentMeta.propsIncomplete && (
                <p className="text-sm text-atom_battleshipgray dark:text-gray-500 mt-4 italic">
                  * Props documentation will be updated with complete details soon.
                </p>
              )}
            </div>

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
            {accessibilityNotes && (
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

            {/* NPM Package Link */}
            <div className="doc-section" id="package">
              <SectionHeader id="package" title="Package" />
              <div className="p-5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <code className="text-lg font-semibold text-atom_celticblue dark:text-blue-400">
                      {componentMeta.package}
                    </code>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Version {componentMeta.version} • MIT License
                    </p>
                  </div>
                  <a 
                    href={componentMeta.npmUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-atom_rojored hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
                    aria-label={`View ${componentMeta.name} on npm`}
                  >
                    <i className="ri-npmjs-fill text-xl" aria-hidden="true"></i>
                    View on npm
                    <i className="ri-external-link-line" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

ComponentDoc.propTypes = {
  componentMeta: PropTypes.shape({
    name: PropTypes.string.isRequired,
    package: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    npmUrl: PropTypes.string.isRequired,
    snackId: PropTypes.string.isRequired,
    githubUrl: PropTypes.string,
    status: PropTypes.oneOf(['stable', 'beta', 'deprecated', 'new', 'popular']),
    hasTypeScript: PropTypes.bool,
    propsIncomplete: PropTypes.bool,
  }).isRequired,
  propsData: PropTypes.array.isRequired,
  usageCode: PropTypes.string, // Optional - section won't render if not provided
  features: PropTypes.arrayOf(PropTypes.string),
  peerDependencies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    note: PropTypes.string,
  })),
  variants: PropTypes.arrayOf(PropTypes.string),
  dosAndDonts: PropTypes.shape({
    dos: PropTypes.arrayOf(PropTypes.string).isRequired,
    donts: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  accessibilityNotes: PropTypes.arrayOf(PropTypes.string),
  snackPlatform: PropTypes.oneOf(['web', 'ios', 'android', 'mydevice']),
};
