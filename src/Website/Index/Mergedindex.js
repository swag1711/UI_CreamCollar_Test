import Footer from "../Footer";
import Headers from "../Headers";
import Navpages from "../Navpages";
import Challenges from "./Challenges";
import Slidershow from "./Slidershow";
import Statistics from "./Statistics";


function Mergedindex()  {
    return (
      <div>

       <Headers/>
        <Navpages/>
        <Slidershow/>
        <Statistics/>
        <Challenges/>
        <Footer/>
        

        </div>
    );
  }
  
  export default Mergedindex;