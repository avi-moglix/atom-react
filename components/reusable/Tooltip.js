import PropTypes from 'prop-types';

/**
 * Tooltip Component
 * Displays a tooltip on hover with customizable message
 */
export default function Tooltip({ message, children, position = 'bottom' }) {
  const positionClasses = {
    top: 'bottom-full mb-2 left-1/2 -translate-x-1/2',
    bottom: 'top-full mt-2 left-1/2 -translate-x-1/2',
    left: 'right-full mr-2 top-1/2 -translate-y-1/2',
    right: 'left-full ml-2 top-1/2 -translate-y-1/2',
  };

  const arrowClasses = {
    top: 'top-full left-1/2 -translate-x-1/2 [clip-path:polygon(50%_100%,0%_0%,100%_0%)]',
    bottom: 'bottom-full left-1/2 -translate-x-1/2 [clip-path:polygon(50%_0%,100%_100%,0%_100%)]',
    left: 'left-full top-1/2 -translate-y-1/2 [clip-path:polygon(100%_50%,0%_0%,0%_100%)]',
    right: 'right-full top-1/2 -translate-y-1/2 [clip-path:polygon(0%_50%,100%_0%,100%_100%)]',
  };

  return (
    <div className="group relative flex max-w-max flex-col items-center justify-center">
      {children}
      <div 
        role="tooltip"
        className={`absolute z-[999] min-w-max scale-0 transform transition-all duration-200 group-hover:scale-100 group-focus-within:scale-100 ${positionClasses[position]}`}
      >
        <div className="flex flex-col items-center shadow-lg relative">
          <div className={`absolute h-2 w-4 bg-gray-800 dark:bg-gray-700 ${arrowClasses[position]}`}></div>
          <div className="rounded bg-gray-800 dark:bg-gray-700 px-2 py-1.5 text-center text-xs text-white whitespace-nowrap">
            {message}
          </div>
        </div>
      </div>       
    </div>
  );
}

Tooltip.propTypes = {
  message: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
};
