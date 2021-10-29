import React from 'react';

import Navbar from '../Navbar/Navbar';
import Footer from "../Footer/Footer";

import s from './Layout.module.scss';

export default function Layout({ children }) {


  return (
    <div className={s.layout}>
      <Navbar/>
        {children}
      <Footer></Footer>
    </div>
  );
}