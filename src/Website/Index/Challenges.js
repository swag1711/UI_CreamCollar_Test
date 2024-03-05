import challenge3 from '../../assets/img/challenge3.webp';
import challenge4 from '../../assets/img/challenge4.webp';
import challenge5 from '../../assets/img/challenge5.webp';
import hour1 from '../../assets/img/hour1.webp';
import hour2 from '../../assets/img/hour2.webp';
import stakeholder1 from '../../assets/img/stakeholder1.webp';
import stakeholder2 from '../../assets/img/stakeholder2.webp';
import stakeholder3 from '../../assets/img/stakeholder3.webp';
import logo from'../../assets/img/creamcollar-logo.svg';
import { NavLink } from 'react-router-dom';
function Challenges()  {
    return (
      <div>
        <section className="challenge">
  <div className="container-lg">
    <div className="row justify-content-center">
      <div className="col-md-8 text-center">
        <div className="page-title2">Challenge</div>
        <div className="sub-title">Software Defined Vehicle industry is facing 3 key challenges</div>
      </div>
      <div className="col-12 mb-3">
        <div className="c-main">
          <div className="row g-0">
            <div className="col-sm-8 col-md-9"><div className="img-holder"> <img src={challenge3} alt="..."/></div> </div>            
            <div className="col-sm-4 col-md-3 px-3">
              <div className="c-info"><span>Industry ready <strong>Talent</strong></span></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 mb-3">
        <div className="c-main">
          <div className="row g-0">
            <div className="col-sm-4 col-md-3 px-3 order-sm-1 order-2">
              <div className="c-info"><span><strong>Technology infrastructure Readiness</strong></span></div>
            </div>            
            <div className="col-sm-8 col-md-9 order-sm-2 order-1"><div className="img-holder"> <img src={challenge4} alt="..."/></div> </div>
          </div>
        </div>
      </div>
	  <div className="col-12">
        <div className="c-main">
          <div className="row g-0">
            <div className="col-sm-8 col-md-9"><div className="img-holder"> <img src={challenge5} alt="..."/> </div>  </div>           
            <div className="col-sm-4 col-md-3 px-3">
              <div className="c-info"><span>Continuous R&D for <strong>Faster Innovation</strong></span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="hour">
  <div className="container-lg">
    <div className="row justify-content-center">
      <div className="col-md-10 text-center">
        <div className="page-title2">Need of the Hour</div>
        <div className="sub-title2">At <strong>Cream<span className="text-orange">Collar</span></strong> we are building an ecosystem where Collaboration is <strong>Frictionless.</strong> Knowledge sharing is <strong>Culture</strong> and Growth is <strong>inevitable</strong> for all our stakeholders.</div>
      </div>
      <div className="col-md-9">
        <div className="card-group hour-card">
          <div className="card"> <img src={hour1} className="card-img-top" alt="..."/>
            <div className="card-body">
              <p className="card-text">Industry and Academia joint <strong>Partnerships & Collaboration</strong></p>
            </div>
          </div>
          <div className="card"> <img src={hour2} className="card-img-top" alt="..."/>
            <div className="card-body">
              <p className="card-text">To help industry with continuous <strong>Innovation & Talent Pipeline</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="challenge">
  <div className="container-lg">
    <div className="row justify-content-center">
      <div className="col-md-8 text-center">
        <div className="page-title2">Unlocking values for stakeholders</div>
      </div>
      <div className="col-12">
        <div className="row gy-3">
          <div className="col-md-4">
            <div className="card s-card"> <img src={stakeholder1} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Industry</h5>
                <p>Access to highly skilled industry ready talent to reduce skill gap</p>
                <p>Optimize Research and Development cost through shared innovation</p>
                <p>Be the frontrunner in building new age capabilities in SDV’s</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card s-card"> <img src={stakeholder2} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Academia</h5>
                <p>Access to industrial expertise for Academic Research and Incubations</p>
                <p>Higher placements and better internships for the students</p>
                <p>Introducing more Industry relevant electives</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card s-card"> <img src={stakeholder3} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Students</h5>
                <p>Career awareness and clarity from early stages of academic courses</p>
                <p>Research oriented learning by solving real world industry problems</p>
                <p>Community based learning through Industry and academic mentorship</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="hour">
  <div className="container-lg">
    <div className="row justify-content-center">
      <div className="col-md-10 text-center">
        <div className="page-title2">Join The Movement</div>
      </div>
      <div className="col-12">
        <div className="movement"> <img src={logo} className="mb-4" alt="..."/>
          <h1>Alone we can do so little, together we can do so much - Helen Keller</h1>
          <div className="d-grid gap-4 d-flex justify-content-center">
          <NavLink to="/about" className="btn btn-primary" type="button" >About Us</NavLink>
          <NavLink to="/contact" className="btn btn-primary" type="button" >Contact Us</NavLink>
          <NavLink to="/blog" className="btn btn-primary" type="button" >Blogs</NavLink>
            
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </div>
     
    );
  }
  
  export default Challenges;