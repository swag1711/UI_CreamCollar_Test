import Footer from "./Footer";
import Headers from "./Headers";
import Navpages from "./Navpages";


function Keyclockloginpage()  {
    return (
  <div style={{backgroundColor:'#F6F9FC'}}>
     {/* <Headers/>
        <Navpages/> */}
        <iframe src="https://test1.cream-collar.com:8443/realms/creamcollar/protocol/openid-connect/auth?client_id=creamcollar_client&redirect_uri=https://ui.test.cream-collar.com/%23/dashboard/journey?&state=8316e9fd-768e-45d1-9c88-595c1ca0d541&response_mode=fragment&response_type=code&scope=openid&nonce=6fc24b3b-ef98-4f3f-b927-561c53ce947f&code_challenge=zFer1p93lWjVT38ffMpM4Xx1zPbLtozhM4IZxzUtE-s&code_challenge_method=S256"  style={{overflow:'hidden',overflowX:'hidden',overflowY:'hidden',height:'100%',width:'100%',position:'absolute',top:'0px',left:'0px',right:'0px',bottom:'0px'}} height="100%" width="100%"></iframe>
        
         {/* <iframe src="http://localhost:8080/realms/creamcollar/protocol/openid-connect/auth?client_id=creamcollar_client&redirect_uri=http://localhost:3000/%23/?&state=8316e9fd-768e-45d1-9c88-595c1ca0d541&response_mode=fragment&response_type=code&scope=openid&nonce=6fc24b3b-ef98-4f3f-b927-561c53ce947f&code_challenge=zFer1p93lWjVT38ffMpM4Xx1zPbLtozhM4IZxzUtE-s&code_challenge_method=S256" style={{height:'1000px', width:"100%",overflow:"none"}}></iframe> */}
       
        {/* <Footer/>  */}
     
  </div> 
    );
  }
  
  export default Keyclockloginpage;
  