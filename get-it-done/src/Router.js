import React from "react";
import { HashRouter, Route } from "react-router-dom";
//cmps
import Navbar from './Layout/Navbar';
//Pages
import Homepage from './Pages/Homepage';
import DeedsPage from './Pages/DeedsPage';


// import HomePage from './Pages/HomePage';

const Router = () => {
  return (
    <HashRouter>
     <Navbar/>
      <Route exact path="/deeds" component={DeedsPage} />
      <Route exact path="/" component={Homepage} />
    </HashRouter>
  );
};
export default Router;
