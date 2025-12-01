import React from 'react';
import PropTypes from 'prop-types';

/**
 * ErrorBoundary Component
 * Catches JavaScript errors in child component tree
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    // Log error to an error reporting service
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[400px] flex items-center justify-center p-8">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 bg-atom_mistyrose dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-error-warning-line text-3xl text-atom_rojored" aria-hidden="true"></i>
            </div>
            <h2 className="text-xl font-semibold text-atom_onxyblack dark:text-white mb-2">
              Something went wrong
            </h2>
            <p className="text-atom_dimgray dark:text-gray-400 mb-4">
              {this.props.fallbackMessage || 'An error occurred while rendering this component.'}
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null, errorInfo: null });
                if (this.props.onReset) this.props.onReset();
              }}
              className="inline-flex items-center gap-2 bg-atom_celticblue text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-atom_bleudefrance transition-colors"
            >
              <i className="ri-refresh-line" aria-hidden="true"></i>
              Try Again
            </button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-4 text-left bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-sm">
                <summary className="cursor-pointer font-medium text-atom_rojored dark:text-red-400">
                  Error Details
                </summary>
                <pre className="mt-2 overflow-x-auto text-xs text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  fallbackMessage: PropTypes.string,
  onReset: PropTypes.func,
};

export default ErrorBoundary;
