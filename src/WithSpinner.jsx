import React from "react";

const withSpinner = (WrappedComponent) => {
  class WithSpinner extends React.Component {
    render() {
      const { isLoading, ...otherProps } = this.props;
      return (
        <>
          {isLoading ? (
            <div className="spinner-overlay">
              <div className="spinner-container"></div>
            </div>
          ) : (
            <WrappedComponent {...otherProps} />
          )}
        </>
      );
    }
  }
  return WithSpinner;
};

export default withSpinner;
