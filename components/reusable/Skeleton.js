import React from 'react';
import PropTypes from 'prop-types';

/**
 * Skeleton Component
 * Loading placeholder for content
 */
export function Skeleton({ className = '', variant = 'rectangular', animation = 'pulse' }) {
  const baseClasses = 'bg-gray-200 dark:bg-gray-700';
  const animationClasses = animation === 'pulse' 
    ? 'animate-pulse' 
    : animation === 'wave' 
    ? 'skeleton-wave' 
    : '';
  
  const variantClasses = {
    rectangular: 'rounded',
    circular: 'rounded-full',
    text: 'rounded h-4',
  };

  return (
    <div 
      className={`${baseClasses} ${animationClasses} ${variantClasses[variant]} ${className}`}
      aria-hidden="true"
    />
  );
}

Skeleton.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['rectangular', 'circular', 'text']),
  animation: PropTypes.oneOf(['pulse', 'wave', 'none']),
};

/**
 * SnackEmbedSkeleton Component
 * Loading skeleton for Expo Snack embeds
 */
export function SnackEmbedSkeleton() {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <div className="bg-gray-100 dark:bg-gray-800 p-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Skeleton className="w-8 h-8" variant="circular" />
          <Skeleton className="w-32 h-4" variant="text" />
        </div>
        <div className="flex gap-2">
          <Skeleton className="w-16 h-6" />
          <Skeleton className="w-16 h-6" />
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 p-4 border-r border-gray-200 dark:border-gray-700">
          <Skeleton className="w-full h-4 mb-2" variant="text" />
          <Skeleton className="w-3/4 h-4 mb-2" variant="text" />
          <Skeleton className="w-5/6 h-4 mb-2" variant="text" />
          <Skeleton className="w-2/3 h-4 mb-2" variant="text" />
          <Skeleton className="w-4/5 h-4 mb-2" variant="text" />
          <Skeleton className="w-1/2 h-4 mb-2" variant="text" />
        </div>
        <div className="w-1/2 p-4 flex items-center justify-center min-h-[300px]">
          <div className="text-center">
            <Skeleton className="w-48 h-96 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * PropsTableSkeleton Component
 * Loading skeleton for props table
 */
export function PropsTableSkeleton({ rows = 5 }) {
  return (
    <div className="overflow-x-auto">
      <table className="props-table w-full">
        <thead>
          <tr>
            <th><Skeleton className="w-20 h-4" /></th>
            <th><Skeleton className="w-24 h-4" /></th>
            <th><Skeleton className="w-16 h-4" /></th>
            <th><Skeleton className="w-32 h-4" /></th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, i) => (
            <tr key={i}>
              <td><Skeleton className="w-24 h-4" /></td>
              <td><Skeleton className="w-32 h-4" /></td>
              <td><Skeleton className="w-16 h-4" /></td>
              <td><Skeleton className="w-48 h-4" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

PropsTableSkeleton.propTypes = {
  rows: PropTypes.number,
};

/**
 * ComponentCardSkeleton Component
 * Loading skeleton for component cards on homepage
 */
export function ComponentCardSkeleton() {
  return (
    <div className="component-card h-full animate-pulse">
      <div className="flex items-start justify-between mb-2">
        <Skeleton className="w-24 h-6" />
        <Skeleton className="w-16 h-5" />
      </div>
      <Skeleton className="w-full h-4 mb-1" variant="text" />
      <Skeleton className="w-3/4 h-4 mb-3" variant="text" />
      <div className="flex flex-wrap gap-1.5 mb-3">
        <Skeleton className="w-16 h-5" />
        <Skeleton className="w-20 h-5" />
        <Skeleton className="w-14 h-5" />
      </div>
      <Skeleton className="w-40 h-4" variant="text" />
    </div>
  );
}

/**
 * PageSkeleton Component
 * Full page loading skeleton
 */
export function PageSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Breadcrumb */}
      <div className="h-[140px] bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center">
        <Skeleton className="w-48 h-4 mb-4" />
        <Skeleton className="w-64 h-12" />
      </div>
      
      {/* Content */}
      <div className="m-5">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-6">
          <Skeleton className="w-48 h-8 mb-4" />
          <Skeleton className="w-full h-4 mb-2" variant="text" />
          <Skeleton className="w-3/4 h-4" variant="text" />
        </div>
        
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-6">
          <Skeleton className="w-32 h-6 mb-4" />
          <Skeleton className="w-full h-12" />
        </div>
        
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <Skeleton className="w-32 h-6 mb-4" />
          <SnackEmbedSkeleton />
        </div>
      </div>
    </div>
  );
}
