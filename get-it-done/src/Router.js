import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
//cmps
import Navbar from './Layout/Navbar';

//Pages
import Homepage from './Pages/homepage/Homepage';
import DeedsPage from './Pages/DeedsPage';
import UserPage from './Pages/userPage.js/UserPage'


const Router = () => {
  return (
    <BrowserRouter>
     <Navbar/>
      <Route exact path="/deeds" component={DeedsPage} />
      <Route exact path="/user/:userId" component={UserPage}/>
      <Route exact path="/" component={Homepage} />
    </BrowserRouter>
  );
};
export default Router;
