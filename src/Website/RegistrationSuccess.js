import CC_Logo from '../../src/assets/img/CC_Logo.svg';
import CheckIcon from '../../src/assets/img/CheckIcon.svg';
import './RegistrationSuccess.css';
import Navpages from './Navpages';
import { Button } from 'reactstrap';
import { NavLink, useNavigate } from 'react-router-dom';



function RegistrationSuccess() {
    return (
        <div style={{ width: '100%', top: 0, bottom: 0, right: 0, left: 0, paddingTop: '60px', position: 'absolute', textAlign: 'center', alignItems: 'center', display: 'inline-flex', flexDirection: 'column', backgroundColor: 'rgb(246, 249, 252)' }}>
            <div style={{ background: '#F6F9FC', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 32, display: 'inline-flex' }}>
                <div style={{ flex: '1 1 0', height: 32, width: 152, paddingTop: 5, paddingBottom: 5, justifyContent: 'flex-start', alignItems: 'center', gap: 15, display: 'flex' }}>
                    <div style={{ color: '#5A5A5A', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}><img src={CC_Logo} alt="" /></div>
                </div>

                <div style={{}} className='fg_outer'>
                    <div className='fg_inner' style={{ width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
                        <div style={{}}>
                            <img className='fg_icon' src={CheckIcon} alt="" />
                        </div>
                        <div className='fg_box' style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex' }}>
                            <div className='fg_acc' style={{ color: '#00213D', fontFamily: 'Inter', wordWrap: 'break-word' }}>Your account has been successfully created</div>
                            <div style={{ color: '#4A5965', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Now lets explore the platform. Your future awaits you!</div>
                        </div>
                        <Button style={{ paddingLeft: 32, paddingRight: 32, paddingTop: 12, paddingBottom: 12, background: '#0B6AEA', borderRadius: 8, justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                            <NavLink to="/loginpage" className={({ isActive }) => (isActive ? "active nav-link" : 'none nav-link')} style={{ textDecoration: 'none' }}>
                                <div className='fg_exp' style={{ color: 'white', fontFamily: 'Inter', wordWrap: 'break-word' }}>Explore The Platform </div>
                            </NavLink>
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default RegistrationSuccess;