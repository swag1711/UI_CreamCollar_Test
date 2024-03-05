// import './App.css';
// import React from 'react';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Mergedindex from './Website/Index/Mergedindex';
// import About from './Website/About/About';
// import Contact from './Website/Contact/Contact';

// import ComponentB from './Website/Dummy/ComponentB';
// import Login from './Website/Login';
// import Logout from './Website/Logout';
// import ForgotPassword from './Website/ForgotPassword';
// import Dashboard from './Website/Dashboard';
// import Register from './Website/Register';
// import Blogmerge from './Website/Blog/Blogmerge'
// import Mergedindex from './Website/Index/Mergedindex';
// import About from './Website/About/About';
// import Contact from './Website/Contact/Contact';
// import Platform from './Website/Platform/Platform';

// function App()  {
//   return (
// <Router>

//     <Routes>
//       <Route  path='/' Component={<Mergedindex/>}/>
//       <Route  path='/about' Component={<About/>}/>
//       <Route  path='/contact' Component={<Contact/>}/>
//       <Route path="/blog" element={<Blogmerge />} />
//       <Route path='/login' element={<Login/>}/>
//       <Route path='logout' element={<Logout/>}/>
//       <Route path="/forgotpassword" element={<ForgotPassword/>}/>
//       <Route path='/dashboard' element={<Dashboard/>}/>
//       <Route path='/register' element={<Register/>}/>
//       <Route path="/platform" element={<Platform />} />
//     </Routes>

// </Router>
      
   
//   );
// }

// export default App;


import { Provider } from "react-redux";
import { BrowserRouter,HashRouter } from "react-router-dom";

import RenderOnAnonymous from "../src/components/RenderOnAnonymous";
import RenderOnAuthenticated from "../src/components/RenderOnAuthenticated";
import Main from "../src/Website/Index/Main";
import Mergedindex from "./Website/Index/Mergedindex";
import Platform from "./Website/Platform/Platform";
import { HashRouter as Router} from 'react-router-dom';

const App = ({ store }) => (

  <Provider store={store}>
    {/* <HashRouter> */}
      <div>
      
        <RenderOnAnonymous>
        
          <Main/>
          
        </RenderOnAnonymous>
        <RenderOnAuthenticated>
       
          <Platform/>
         
        </RenderOnAuthenticated>
        
      </div>
    {/* </HashRouter> */}
  </Provider>
  
);

export default App;