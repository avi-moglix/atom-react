import React from 'react';
import Head from 'next/head';
import Breadcrumb from '@/components/reusable/Breadcrumb';

/**
 * Changelog Page
 * Documents version history and updates for Atom Design components
 */

const changelog = [
  {
    version: '1.0.3',
    date: '2025-11-28',
    components: ['@atom-design-mog/buttons'],
    changes: [
      { type: 'feature', description: 'Added ghost variant for subtle button styling' },
      { type: 'fix', description: 'Fixed icon alignment in loading state' },
      { type: 'improvement', description: 'Improved touch target size for accessibility' },
    ],
  },
  {
    version: '1.0.2',
    date: '2025-11-20',
    components: ['@atom-design-mog/search'],
    changes: [
      { type: 'feature', description: 'Added multi-select filter chips' },
      { type: 'feature', description: 'Added live search updates' },
      { type: 'improvement', description: 'Optimized FlatList rendering performance' },
    ],
  },
  {
    version: '1.0.1',
    date: '2025-11-15',
    components: ['@atom-design-mog/input'],
    changes: [
      { type: 'feature', description: 'Added selectWithSearch type' },
      { type: 'feature', description: 'Added chips input type with add/remove callbacks' },
      { type: 'fix', description: 'Fixed multiselect footer button alignment' },
      { type: 'fix', description: 'Fixed placeholder color in dark mode' },
    ],
  },
  {
    version: '1.0.0',
    date: '2025-11-01',
    components: ['All Components'],
    changes: [
      { type: 'release', description: 'Initial release of Atom Design React Native Components' },
      { type: 'feature', description: '15 production-ready UI components' },
      { type: 'feature', description: 'Full documentation with live Expo Snack demos' },
      { type: 'feature', description: 'Consistent API design across all components' },
    ],
  },
];

const changeTypeIcons = {
  feature: { icon: 'ri-sparkles-line', color: 'text-green-500', bg: 'bg-green-100 dark:bg-green-900/30' },
  fix: { icon: 'ri-bug-line', color: 'text-red-500', bg: 'bg-red-100 dark:bg-red-900/30' },
  improvement: { icon: 'ri-arrow-up-circle-line', color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/30' },
  breaking: { icon: 'ri-error-warning-line', color: 'text-orange-500', bg: 'bg-orange-100 dark:bg-orange-900/30' },
  release: { icon: 'ri-rocket-line', color: 'text-purple-500', bg: 'bg-purple-100 dark:bg-purple-900/30' },
  deprecated: { icon: 'ri-forbid-line', color: 'text-gray-500', bg: 'bg-gray-100 dark:bg-gray-900/30' },
};

export default function Changelog() {
  const breadcrumbs = [
    { name: 'Home', isLast: false, path: '/' },
    { name: 'Changelog', isLast: true },
  ];

  return (
    <>
      <Head>
        <title>Changelog | Atom Design - React Native Components</title>
        <meta name="description" content="Version history and release notes for Atom Design React Native components. See what's new, fixed, and improved." />
        <meta property="og:title" content="Changelog | Atom Design" />
        <meta property="og:description" content="Version history and release notes for Atom Design components" />
      </Head>

      <main>
        <Breadcrumb breadcrumbs={breadcrumbs} lastChildMentioned="Changelog" />
        
        <div className="bg-white dark:bg-gray-900 m-5 mb-10">
          <div className="doc-section">
            <div className="mb-8">
              <h1 className="text-xxl font-bold text-atom_onxyblack dark:text-white mb-2">
                Changelog
              </h1>
              <p className="text-atom_dimgray dark:text-gray-400">
                Version history and release notes for all Atom Design components.
              </p>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Legend:</span>
              {Object.entries(changeTypeIcons).map(([type, config]) => (
                <span key={type} className="inline-flex items-center gap-1.5 text-sm">
                  <i className={`${config.icon} ${config.color}`} aria-hidden="true"></i>
                  <span className="capitalize text-gray-600 dark:text-gray-400">{type}</span>
                </span>
              ))}
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" aria-hidden="true"></div>

              <div className="space-y-8">
                {changelog.map((release, index) => (
                  <div key={release.version} className="relative pl-12">
                    {/* Timeline dot */}
                    <div 
                      className={`absolute left-2 top-1 w-5 h-5 rounded-full border-2 border-white dark:border-gray-900 ${
                        index === 0 ? 'bg-atom_celticblue' : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                      aria-hidden="true"
                    />

                    <article className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <header className="flex flex-wrap items-center gap-3 mb-4">
                        <h2 className="text-xl font-bold text-atom_onxyblack dark:text-white">
                          v{release.version}
                        </h2>
                        <time 
                          dateTime={release.date}
                          className="text-sm text-gray-500 dark:text-gray-400"
                        >
                          {new Date(release.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                        {index === 0 && (
                          <span className="px-2 py-0.5 bg-atom_honeydew text-atom_officegreen text-xs font-medium rounded-full">
                            Latest
                          </span>
                        )}
                      </header>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {release.components.map((component) => (
                          <span 
                            key={component}
                            className="px-2 py-1 bg-atom_aliceblue dark:bg-gray-800 text-atom_celticblue dark:text-blue-400 text-xs font-mono rounded"
                          >
                            {component}
                          </span>
                        ))}
                      </div>

                      <ul className="space-y-2">
                        {release.changes.map((change, changeIndex) => {
                          const config = changeTypeIcons[change.type] || changeTypeIcons.improvement;
                          return (
                            <li 
                              key={changeIndex}
                              className="flex items-start gap-3"
                            >
                              <span className={`inline-flex items-center justify-center w-6 h-6 rounded ${config.bg} flex-shrink-0`}>
                                <i className={`${config.icon} ${config.color} text-sm`} aria-hidden="true"></i>
                              </span>
                              <span className="text-gray-700 dark:text-gray-300">
                                {change.description}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            {/* Subscribe CTA */}
            <div className="mt-12 p-6 bg-gradient-to-r from-atom_aliceblue to-atom_honeydew dark:from-gray-800 dark:to-gray-800 rounded-lg text-center">
              <h3 className="text-lg font-semibold text-atom_onxyblack dark:text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-atom_dimgray dark:text-gray-400 mb-4">
                Follow our npm packages to get notified of new releases.
              </p>
              <a
                href="https://www.npmjs.com/~avi-moglix"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-atom_rojored text-white px-4 py-2 rounded-md font-medium hover:bg-red-700 transition-colors"
              >
                <i className="ri-npmjs-fill" aria-hidden="true"></i>
                View on npm
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
