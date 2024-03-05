import industry1 from '../../assets/img/industry1.svg';
import industry2 from '../../assets/img/industry2.svg';
import industry3 from '../../assets/img/industry3.svg';
import industry4 from '../../assets/img/industry4.svg';
import industry5 from '../../assets/img/industry5.svg';
import industry6 from '../../assets/img/industry6.svg';

function Statistics()  {
    return (
      <div >
        <section className="industry">
  <div className="container-lg">
    <div className="row justify-content-center">
      <div className="col-md-8 text-center">
        <div className="page-title1">Automotive industry is undergoing the disruption of a century in this decade</div>
      </div>
      <div className="col-12">
        <div className="is-main">
          <ul className="industry-list">
            <li>
              <div className="is-body">
                <div className="is-top">
                  <div className="ist-left"> 90% </div>
                  <div className="ist-right"> <img src={industry1} alt="..."/> </div>
                </div>
                <div className="is-bottom"> Software will differentiate <strong>Future cars</strong> </div>
              </div>
            </li>
            <li>
              <div className="is-body">
                <div className="is-top">
                  <div className="ist-left"> $0.5-1T </div>
                  <div className="ist-right"> <img src={industry2} alt="..."/> </div>
                </div>
                <div className="is-bottom"> Software and data driven <strong>market volume in 2035</strong> </div>
              </div>
            </li>
            <li>
              <div className="is-body">
                <div className="is-top">
                  <div className="ist-left"> 90% </div>
                  <div className="ist-right"> <img src={industry3} alt="..."/> </div>
                </div>
                <div className="is-bottom"> Autonomous vehicles can<strong> Reduce Accidents</strong> </div>
              </div>
            </li>
            <li>
              <div className="is-body">
                <div className="is-top">
                  <div className="ist-left"> 300 mn </div>
                  <div className="ist-right"> <img src={industry4} alt="..."/> </div>
                </div>
                <div className="is-bottom"> <strong>Lines of code</strong> involved for one vehicle within next few years </div>
              </div>
            </li>
            <li>
              <div className="is-body">
                <div className="is-top">
                  <div className="ist-left"> 25 GB </div>
                  <div className="ist-right"> <img src={industry5} alt="..." /> </div>
                </div>
                <div className="is-bottom"> of data generated by every connected car per hour </div>
              </div>
            </li>
            <li>
              <div className="is-body">
                <div className="is-top">
                  <div className="ist-left"> 50% </div>
                  <div className="ist-right"> <img src={industry6}alt="..." /> </div>
                </div>
                <div className="is-bottom"> of the vehicle cost will be of software by 2030 </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
      </div>
     
    );
  }
  
  export default Statistics;