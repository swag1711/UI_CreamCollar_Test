import '../Dashboard/dashboardstyle.css';
import { useState,useEffect,useRef } from 'react';
function Uprogress()  {
    const barRef = useRef(null);
    const valRef = useRef(null);
    const barRef2 = useRef(null);
    const valRef2 = useRef(null);
    const [percentage, setPercentage] = useState(0);
    const initialValue=53;
    useEffect(() => {
      const animationDuration = 1;
      const startValue = 0;
      
      const endValue = parseInt(initialValue, 10);
  
      const animateProgressBar = () => {
        let startTime;
  
        const updateProgressBar = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min(1, (currentTime - startTime) / animationDuration);
          var speed =2.6;
          if(endValue<50){
            
           
          const rotation =  45+ (progress * speed * endValue -45) ;
          barRef.current.style.transform = `rotate(${rotation}deg)`;
          valRef.current.textContent = Math.floor(progress * endValue);
          }
          else{
            const rotation1 =  (progress * 3.6 * (50) -45) ;
          barRef.current.style.transform = `rotate(${rotation1}deg)`;
          setTimeout(function() {
            const rotation = -(progress * speed * (endValue-50)+50) ;
          barRef2.current.style.transform = `rotate(${rotation}deg)`;
          valRef.current.textContent = Math.floor(progress * endValue)+ '%';
        }, 2);
            
          }
          if (progress < 1) {
            requestAnimationFrame(updateProgressBar);
          }
        };
  
        requestAnimationFrame(updateProgressBar);
      };
      

      animateProgressBar();
      
    }, [initialValue]);
  
    return (
  <div>
     <div class="progress2">
  <div class="barOverflow2">
    <div class="bar2"  ref={barRef}></div>
  </div>
 
</div>
 <div class="progress4">
  <div class="barOverflow4">
    <div class="bar4"  ref={barRef2}></div>
  </div>
  
</div> 
<div ref={valRef} style={{marginLeft:'38%',color: '#697077', fontSize: 32, fontFamily: 'Roboto', fontWeight: '700',  wordWrap: 'break-word'}}>{percentage}%</div>
  </div> 
    );
  }
  
  export default Uprogress;
  