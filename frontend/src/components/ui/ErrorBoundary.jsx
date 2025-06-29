import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 flex flex-col items-center justify-center min-h-screen bg-white">
          <div className="max-w-md px-8 py-12 text-center">
            <h1 className="text-2xl font-semibold text-gray-900 mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-600 mb-8">
              An error occurred while loading this page. Please try again.
            </p>
            <button
              onClick={this.handleReload}
              className="px-6 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
