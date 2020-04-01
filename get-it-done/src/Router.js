import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
//cmps
import Navbar from './Layout/Navbar';

//Pages
import Homepage from './Pages/homepage/Homepage';
import DeedsPage from './Pages/deeds/DeedsPage';
import UserPage from './Pages/userPage.js/UserPage';
import { content } from './App.module.scss';

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className={content}>
        <Route path="/deeds" component={DeedsPage} />
        <Route exact path="/user/:userId" component={UserPage} />
        <Route exact path="/" component={Homepage} />
      </div>
    </BrowserRouter>
  );
};
export default Router;
