import Dashboard from "./Dashboard";
import Login from "./Login";
import Register from "../Website/Register";
import About from '../Website/About';
import Contact from '../Website/Contact';
 
const dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard, // Reference the component without JSX brackets
    layout: "/",
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
    layout: "/",
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    layout: "/",
  },
  {
    path: "/about",
    name: "About",
    component: About,
    layout: "/",
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    layout: "/",
  },
  {
    path: "/loginpage",
    name: "Keyclockloginpage",
    component: Keyclockloginpage,
    layout: "/",
  },
];
 
export default dashRoutes;