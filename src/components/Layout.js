import React from 'react';
// import "../css/main.css"
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
const Layout = ({ children }) => {
  const [isOPen, setIsOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOPen);
  };
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOPen={isOPen} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
