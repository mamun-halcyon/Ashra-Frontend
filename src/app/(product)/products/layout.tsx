import Footer from '@/components/footer';
import TopHeader from '@/components/header';
import Navbar from '@/components/navbar';
import React from 'react';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <TopHeader />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
