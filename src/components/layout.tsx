// import React, { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';
import { Outlet } from 'react-router-dom';

// interface LayoutProps {
//     children: ReactNode;
//   }
  
  const Layout: React.FC= () => {
    return (
      <div>
        <Header />
        {/* {children}
        <Footer /> */}
        <Outlet/>
      </div>
    );
  };

export default Layout;