import React from 'react';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h2>Products</h2>
      {children}
    </div>
  );
};

export default RootLayout;
