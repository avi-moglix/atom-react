import React from 'react';
import PropTypes from 'prop-types';

/**
 * PropsTable Component
 * Displays component props in a formatted table
 */
export default function PropsTable({ props }) {
  if (!props || props.length === 0) {
    return (
      <div className="text-gray-500 dark:text-gray-400 italic p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
        No props available for this component.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="props-table" role="table" aria-label="Component props reference">
        <thead>
          <tr>
            <th scope="col">Prop</th>
            <th scope="col">Type</th>
            <th scope="col">Default</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop, index) => (
            <tr key={index}>
              <td>
                <span className="prop-name">{prop.name}</span>
                {prop.required && (
                  <span className="prop-required ml-2">*required</span>
                )}
              </td>
              <td>
                <span className="prop-type">{prop.type}</span>
              </td>
              <td>
                <span className="prop-default">
                  {prop.default !== undefined ? prop.default : '—'}
                </span>
              </td>
              <td>{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

PropsTable.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      default: PropTypes.string,
      required: PropTypes.bool,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};
