import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SeoStructuredData from './SeoStructuredData';
import ScrollManager from './ScrollManager';
import ScrollProgress from './motion/ScrollProgress';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#F1EEE8] text-[#131514] font-sans relative">
      <ScrollProgress />
      <SeoStructuredData />
      <ScrollManager />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
