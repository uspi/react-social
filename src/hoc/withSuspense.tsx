import React from "react";

/**
 * @param WRP wrapped component props
 * @param WrappedComponent component to be wrapped in React.Suspense
 * @returns component with suspense
 */
export const withSuspense = <WRP,>(WrappedComponent: React.ComponentType) => (props: WRP) => {
  return (
    <React.Suspense fallback={<div className="content-area">Loading...</div>}>
      <WrappedComponent {...props} />
    </React.Suspense>
  );
};
