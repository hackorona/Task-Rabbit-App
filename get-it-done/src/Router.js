import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
//cmps
import Navbar from './Layout/Navbar';

//Pages
import Homepage from './Pages/homepage/Homepage';
import DeedsPage from './Pages/deeds/DeedsPage';


const Router = () => {
  return (
    <BrowserRouter>
     <Navbar/>
      <Route path="/deeds" component={DeedsPage} />
      <Route exact path="/" component={Homepage} />
    </BrowserRouter>
  );
};
export default Router;
