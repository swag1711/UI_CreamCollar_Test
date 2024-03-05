//import banner_video from '../assets/img/banner-video.mp4';
import banner1 from '../../assets/img/banner1.webp';
import banner2 from '../../assets/img/banner2.webp';
import banner3 from '../../assets/img/banner3.webp';

function Slidershow()  {
    return (
      <div>
        <section className="banner">
  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <video autoPlay loop muted playsInline className="banner-video">
      <source src="assets/img/banner-video.mp4" type="video/mp4"/>
    </video>
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="4000"> <img src={banner1} className="d-block w-100" alt="..."/>
        <div className="carousel-caption c1">
          <div className="container-lg">
            <div className="row">
              <div className="col-lg-5 col-md-7 col-sm-8">
                <h1 className="white">Competency Research for <span>Newer Capabilities</span> of Software defined Industries</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="4000"> <img src={banner2} className="d-block w-100" alt="..."/>
        <div className="carousel-caption c2">
          <div className="container-lg">
            <div className="row">
              <div className="col-lg-5 col-md-7 col-sm-8">
                <h1>Frictionless experience for <span>Graduating students & Professionals</span> to decide on building their <strong>Careers of choice</strong></h1>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="4000"> <img src={banner3} className="d-block w-100" alt="..."/>
        <div className="carousel-caption c3">
          <div className="container-lg">
            <div className="row">
              <div className="col-lg-5 col-md-7 col-sm-8">
                <h1>Industry Academia <span>Collaboration Contributing</span> to Continuous <strong>Innovation</strong></h1>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  
        
      </div>
     
    );
  }
  
  export default Slidershow;