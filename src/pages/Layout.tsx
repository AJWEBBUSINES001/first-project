import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/utils/ScrollToTop';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content injected here */}
      <ScrollToTop/>
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
