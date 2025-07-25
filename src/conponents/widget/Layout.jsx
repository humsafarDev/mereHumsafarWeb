// src/components/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="bg-primary text-secondary min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className=" mx-auto ">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
