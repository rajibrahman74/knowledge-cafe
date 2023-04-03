import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FAQ from './components/FAQ/FAQ';

const App = () => {

  return (
    <React.Fragment>
      <Header/>
      <Home/>
      <FAQ/>
      <ToastContainer />
    </React.Fragment>
  );
};

export default App;