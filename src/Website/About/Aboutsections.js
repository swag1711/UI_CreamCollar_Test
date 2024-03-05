import shrikanth from '../../assets/img/shrikanth.webp';
import kiran from '../../assets/img/kiran.webp';
import janakiraman from '../../assets/img/janakiraman.webp';
import about1 from '../../assets/img/about1.webp';
import OwlCarousel from "react-owl-carousel";


function Aboutsections()  {
    const variable1 = '#';
    const responsive1 = { 0:{items:1},768:{items:2},1366:{items:3}};
    
    
    return (
  
        <div>
  <img src={about1} className="about-banner" alt="" />
<section className="banner-about">  
  <div className="container-lg">
    <div className="row">
      <div className="col-md-6">
        <h3>Why we started CreamCollar</h3>
        <p>With Software defined vehicle set to have a profound impact on Automotive Industry, we decided to take this as a challenge to help young graduates and experienced automotive industry professionals to re-imagine their careers with cloud, data, security and digital business solutions through creating the collaborative ecosystem between Industry and Academia.</p>
      </div>
    </div>
  </div>
</section>
<section className="about-expertise">
  <div className="container-lg">
    <div className="row">
      <div className="col-12">
        <div className="expertise-body">
          <div className="row g-0">
            <div className="col-md-6 expertise-img"> </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="expertise-content">
                <h2>Expertise</h2>
                <p>Career and Competencies research for enabling the SDV specific capabilities in every aspiring industry player in the automotive industry within three key innovation themes (i.e) Autonomous, Electric and Connected Vehicle technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="industry">
  <div className="container-lg">
    <div className="row justify-content-center">
      <div className="col-md-8 text-center">
        <div className="page-title2">Our Leadership</div>
      </div>
      <div className="col-12">
        <OwlCarousel className="owl-carousel owl-theme" margin={30} nav dots responsive={responsive1}>
          <div className="item">
            <div className="leader-list">
              <div className="leader-header">
                <div className="leader-img"> <img src={janakiraman} alt="" /> </div>
                <div className="leader-title">
                  <h6>Janakiraman Vasudevan</h6>
                  <p>Co-Founder</p>
                </div>
              </div>
              <div className="leader-body">
                <p>Jana has 16 years of experience in the software and data industry across diverse domains. He has experience setting up innovation teams to work with global enterprise customers and collaborating with startups and deep tech providers to develop and deliver innovation use cases as pilot implementations for end-users. Jana has strong experience in understanding complex and innovative use cases of the industry to derive the granular competencies needed to develop new talent for developing engineering and software capabilities for delivering the use case.</p>
              </div>
              <div className="leader-footer">
                <ul className="leaders-links">
                  <li> <a href="https://www.linkedin.com/in/janakiraman-vasudevan-6a66a234/" target="_blank"><i className="lab la-linkedin-in"></i></a> </li>
                 
                </ul>
                <a href={variable1} className="read-more" data-bs-toggle="modal" data-bs-target="#janakiraman">Read More</a> </div>
            </div>
          </div>
          <div className="item">
            <div className="leader-list">
              <div className="leader-header">
                <div className="leader-img"> <img src={kiran} alt="" /> </div>
                <div className="leader-title">
                  <h6>Kiran Kumar G J</h6>
                  <p>Co-Founder</p>
                </div>
              </div>
              <div className="leader-body">
                <p>Kiran Kumar GJ is a business management graduate and highly connected strategy professional in the taxation, legal, and public affairs industry. His 14 years of rich experience includes marketing in banking, IT sales, taxation consulting, and public and policy affairs management. Kiran has more passion and experience towards institutional change management and administration. He is a professional with greater emphasis towards people empowerment and result-oriented leadership.</p>
              </div>
              <div className="leader-footer">
                <ul className="leaders-links">
                  <li> <a href="https://www.linkedin.com/in/kiran-kumar-gj-a9051054/" target="_blank"><i className="lab la-linkedin-in"></i></a> </li>
                 
                </ul>
                <a href={variable1} className="read-more" data-bs-toggle="modal" data-bs-target="#kiran">Read More</a> </div>
            </div>
          </div>
          <div className="item">
            <div className="leader-list">
              <div className="leader-header">
                <div className="leader-img"> <img src={shrikanth} alt="" /> </div>
                <div className="leader-title">
                  <h6>Shrikanth Jaganathan</h6>
                  <p>Mentor, Data Products</p>
                </div>
              </div>
              <div className="leader-body">
                <p>Shrikanth Jaganathan is a seasoned leader with over two decades experience in data science solutions and products. He was the chief data scientist for PipeCandy, an ecommerce market intelligence product startup that he cofounded and successfully exited. With his expertise in data science and leadership style, he is a go-to mentor for career progression and achieving product team performance. He has also served in leadership roles to set up and grow data science CoEs and delivery practices with global IT services majors.</p>
              </div>
              <div className="leader-footer">
                <ul className="leaders-links">
                  <li> <a href="https://www.linkedin.com/in/shrikanth-jagannathan-7b31402/" target="_blank"><i className="lab la-linkedin-in"></i></a> </li>
                
                </ul>
                <a href={variable1} className="read-more" data-bs-toggle="modal" data-bs-target="#shrikanth">Read More</a> </div>
            </div>
          </div>


        </OwlCarousel>
      </div>
    </div>
  </div>
</section>

	
<div className="modal fade" id="janakiraman" tabIndex="-1" aria-labelledby="janakiramanLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">      
      <div className="modal-body p-0">
       <div className="leader-list">
              <div className="leader-header">
                <div className="leader-img"> <img src={janakiraman} alt="" /> </div>
                <div className="leader-title">
                  <h6>Janakiraman Vasudevan</h6>
                  <p>Co-Founder</p>
                </div>
              </div>
              <div className="leader-body">
                <p>Jana has 16 years of experience in the software and data industry across diverse domains. He has experience setting up innovation teams to work with global enterprise customers and collaborating with startups and deep tech providers to develop and deliver innovation use cases as pilot implementations for end-users. Jana has strong experience in understanding complex and innovative use cases of the industry to derive the granular competencies needed to develop new talent for developing engineering and software capabilities for delivering the use case.</p>
              </div>
              <div className="leader-footer">
                <ul className="leaders-links">
                  <li> <a href="https://www.linkedin.com/in/janakiraman-vasudevan-6a66a234/" target="_blank"><i className="lab la-linkedin-in"></i></a> </li>
                  
                </ul>
                <a href={variable1} className="read-more" data-bs-dismiss="modal">Close</a> </div>
            </div> 
      </div>      
    </div>
  </div>
</div>
<div className="modal fade" id="kiran" tabIndex="-1" aria-labelledby="kiranLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">      
      <div className="modal-body p-0">
       <div className="leader-list">
              <div className="leader-header">
                <div className="leader-img"> <img src={kiran} alt="" /> </div>
                <div className="leader-title">
                  <h6>Kiran Kumar G J</h6>
                  <p>Co-Founder</p>
                </div>
              </div>
              <div className="leader-body">
                <p>Kiran Kumar GJ is a business management graduate and highly connected strategy professional in the taxation, legal, and public affairs industry. His 14 years of rich experience includes marketing in banking, IT sales, taxation consulting, and public and policy affairs management. Kiran has more passion and experience towards institutional change management and administration. He is a professional with greater emphasis towards people empowerment and result-oriented leadership.</p>
              </div>
              <div className="leader-footer">
                <ul className="leaders-links">
                  <li> <a href="https://www.linkedin.com/in/kiran-kumar-gj-a9051054/" target="_blank"><i className="lab la-linkedin-in"></i></a> </li>
                  
                </ul>
                <a href={variable1} className="read-more" data-bs-dismiss="modal">Close</a> </div>
            </div> 
      </div>      
    </div>
  </div>
</div>
<div className="modal fade" id="shrikanth" tabIndex="-1" aria-labelledby="shrikanthLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">      
      <div className="modal-body p-0">
       <div className="leader-list">
              <div className="leader-header">
                <div className="leader-img"> <img src={shrikanth} alt="" /> </div>
                <div className="leader-title">
                  <h6>Shrikanth Jaganathan</h6>
                  <p>Mentor, Data Products</p>
                </div>
              </div>
              <div className="leader-body">
                <p>Shrikanth Jaganathan is a seasoned leader with over two decades experience in data science solutions and products. He was the chief data scientist for PipeCandy, an ecommerce market intelligence product startup that he cofounded and successfully exited. With his expertise in data science and leadership style, he is a go-to mentor for career progression and achieving product team performance. He has also served in leadership roles to set up and grow data science CoEs and delivery practices with global IT services majors.</p>
              </div>
              <div className="leader-footer">
                <ul className="leaders-links">
                  <li> <a href="https://www.linkedin.com/in/shrikanth-jagannathan-7b31402/" target="_blank"><i className="lab la-linkedin-in"></i></a> </li>
                
                </ul>
                <a href={variable1} className="read-more" data-bs-dismiss="modal">Close</a> </div>
            </div> 
      </div>      
    </div>
  </div>
</div>
       </div>
     
    );
  }
  
  export default Aboutsections;
  