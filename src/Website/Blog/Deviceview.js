import {Desktoptopsectionwrapper} from "./Desktopview";
import {Mobiletopsectionwrapper} from "./Mobileview";
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';
function Deviceview()  {
const phone =  useMediaQuery("(max-width: 925.99px)");
//const tablet =  useMediaQuery("(min-width: 601px) and (max-width: 960px)");
const desktop =  useMediaQuery("(min-width: 926px)");
if(phone) return (<Mobiletopsectionwrapper/>);
//if(tablet) return (<Desktoptopsectionwrapper/>);
if(desktop) return (<Desktoptopsectionwrapper/>);
  }
  
  export default Deviceview;