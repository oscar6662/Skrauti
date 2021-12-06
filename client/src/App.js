import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import ReactLoading from 'react-loading';

import 'antd/dist/antd.css';

import Index from "./views/Index/Index";
import Layout from "./components/Layout/Layout";
import Stjorn from "./views/Stjorn/Stjorn";
import Greinar from "./views/Greinar/Greinar";
import Greinar1 from "./views/Greinar/Greinar1";
import Greinar2 from "./views/Greinar/Greinar2";

import Admin from "./views/Admin/Admin";

export default function App() {
  
  /*const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch('/api/isauthenticated');
        const json = await result.json();
        setLoggedIn(json);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    };
    fetchData();
  }, [error]);
*/
  return (
    /*
    isLoading ? (
      <div>
        <ReactLoading type={'bubbles'} color={'black'} />
      </div>
    ) : (*/
      <Layout>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/stjorn" element={<Stjorn />} />
          <Route exact path="/greinar" element={<Greinar />} />
          <Route exact path="/greinar/1" element={<Greinar1 />} />
          <Route exact path="/greinar/2" element={<Greinar2 />} />
          <Route exact path="https://www.vatnajokulsthjodgardur.is/static/files/Stjornsysla/Fundarg-stjorn/Fundaraaetlanir/alitsgerd_vonarskard_asamt_brefi_11.11.2020.pdf" element={<Greinar2 />} />
          {//<Route exact path="/admin" element={<Admin />} />
          }
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    );
}
