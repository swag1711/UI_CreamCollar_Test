// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import reportWebVitals from './reportWebVitals';
// import './App.css';
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import Mergedindex from './Website/Index/Mergedindex';
// import About from './Website/About/About';
// import Contact from './Website/Contact/Contact';
// import Login from './Website/Login';
// import Logout from './Website/Logout';
// import ForgotPassword from './ForgotPassword';
// import Dashboard from './Website/Dashboard';
// import Register from './Website/Register';
// import Blogmerge from './Website/Blog/Blogmerge';
// import Platform from './Website/Platform/Platform';
// import OtpVerification from "./Website/OtpVerification";
// import Keyclockloginpage from "./Website/Keyclockloginpage";

// import CourseDescribing from './Website/Platform/CourseDescribing';
// import ProfileAccount from './Website/Platform/ProfileAccount';

// ReactDOM.render(
//   <Router>
//     <Routes>
//       <Route path="/" element={<Mergedindex />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="/blog" element={<Blogmerge />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/logout" element={<Logout />} />
//       <Route path="/forgotpassword" element={<ForgotPassword />} />
//       <Route path="/dashboard" element={<Dashboard />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/platform" element={<Platform />} />
//     </Routes>
//   </Router>,
//   document.getElementById('root')
// );
 
// reportWebVitals();


import React from 'react';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './modules';
import axiosMiddleware from 'redux-axios-middleware';
import {thunk} from 'redux-thunk';
import axios from 'axios';
import UserService from './services/UserService';
import { createRoot } from 'react-dom/client';


const middleware = applyMiddleware(thunk, axiosMiddleware(axios));
const store = createStore(rootReducer, middleware);

const container = document.getElementById('root');
const root = createRoot(container);



const renderApp = () => {
  root.render(
   
    <React.StrictMode>
        
      <App store={store} />
      
    </React.StrictMode>
    
   
    
  );
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

UserService.initKeycloak(renderApp);

export default store;

