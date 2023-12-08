import React from 'react'
import Header from '../components/Header/Header'
import Routers from '../router/Routers'
import Footer from '../components/Footer/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <Routers />
      <Footer/>
    </>
  );
}

export default Layout
