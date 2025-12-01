import React from "react";
import PropTypes from 'prop-types';
import Link from "next/link";

export default function Breadcrumb({ breadcrumbs, lastChildMentioned = '' }) {
  return (
    <div className="breadcrumb-banner">
      {breadcrumbs?.length > 0 && (
        <div className="atom-breadcrumb">
          {breadcrumbs.map((breadcrumb, index) => (
            <div key={index} className="breadcrumb-item">
              {breadcrumb.path ? (
                <Link href={breadcrumb.path} className="item-name hover:text-atom_celticblue">
                  <span>{breadcrumb.name}</span>
                </Link>
              ) : (
                <span className="item-name text-gray-500">{breadcrumb.name}</span>
              )}
              {!breadcrumb.isLast && (
                <i className="ri-arrow-right-s-line rightarrow text-gray-400"></i>
              )}
            </div>
          ))}
        </div>
      )}
      <h2>{lastChildMentioned}</h2>
    </div>
  );
}

Breadcrumb.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      isLast: PropTypes.bool.isRequired,
      path: PropTypes.string,
    })
  ).isRequired,
  lastChildMentioned: PropTypes.string,
};
