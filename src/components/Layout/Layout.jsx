import React from 'react';
import Footer from './footer/Footer';
import './Layout.css';
import Main from './main/Main';
import Navbar from './navbar/Navbar';

const Layout = ({ children, title, backdrop, background }) => {
  const renderLayout = () => (
    <div className="layout">
      <Navbar />
      <Main title={title} background={background} backdrop={backdrop}>
        {children}
      </Main>
      <Footer />
    </div>
  );

  return <>{renderLayout()}</>;
};

export default Layout;
