import Deviceview from './Deviceview';
import OwlCarousel from "react-owl-carousel";
import React, { useState,useEffect } from 'react';
import Blogpagination from './Blogpagination';
import 'owl.carousel';
import $ from 'jquery';

function Blogtopsection()  {
  const nodeapiBaseUrl = process.env.REACT_APP_NODEJS_URL;

const responsive1 = { 0:{items:2},516:{items:3},768:{items:4},926:{items:6},1366:{items:8}};
const variable1 ='#';
const [dataList, setdataList] = useState([]);

const handleonclick = (id)=>{ 
  $(".domainactive").removeClass('domainactive');
  $("#"+id).addClass('domainactive');
}


useEffect(() => {
  fetch(`${nodeapiBaseUrl}:5000/domaindata`)
    .then(response => response.json())
    .then(data => setdataList(data))
    .catch(error => console.error('Error:', error));
}, []);

    return (
 <div>
   <section className="blog-expertise">
   {/* use loop while using round robin */}
     <Deviceview/>
     <div className='domaincategory'>

      { dataList !=''? (<OwlCarousel className="owl-carousel owl-theme"  nav={1} margin={10} dots={0} responsive={responsive1}>
        {dataList.map((item, index) => (
          <div className="item itemonhover" onClick={()=>handleonclick(index)} key={index} id={index}>
            {item.domain_name}
          </div>
        ))}
      </OwlCarousel>):''}
    
      </div>
      <div className='blogbkcolor'>
        <Blogpagination/>
      </div>

    </section>
  </div>
        
     
    );
  }
  
  export default Blogtopsection;
  