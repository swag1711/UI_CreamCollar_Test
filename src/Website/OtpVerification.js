import React, { useState, useEffect } from 'react';
import CCLogonew from '../../src/assets/CCLogonew.png';
import CC_Logo from '../../src/assets/img/CC_Logo.svg';
import bell from '../../src/assets/img/bell.png'
import Navpages from './Navpages';
import { Button } from 'reactstrap';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import Profile_Avatar from '../../src/assets/img/Profile_Avatar.png';
import { Card } from 'reactstrap';
import qs from 'qs';
import { useLocation } from 'react-router-dom';
import Keycloak_config from '../services/Keycloak_config';
import { error } from 'jquery';
import './OtpVerify.css';


const OtpVerification = () => {

  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const nodeapiBaseUrl = process.env.REACT_APP_NODEJS_URL;
  const navigate = useNavigate();
  const location = useLocation();
  const formData = location.state?.formData || {};
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [enteredOTP, setEnteredOTP] = useState('');
  const [enteredEmailOTP, setEnteredEmailOTP] = useState('');
  const [activeprofilebar, setactiveprofilebar] = useState(0);
  const [otpVerified, setOtpVerified] = useState(false);
  const [emailOtpVerified, setEmailOtpVerified] = useState(false);
  const [unverifiedOTP, setUnverifiedOTP] = useState({ type: '', message: '' });
  const [thilight, sethilight] = useState(false)
  const [message, setMessage] = useState('');
  const [registrationDone, setRegistrationDone] = useState(false);
  const [timer, setTimer] = useState(60);
  const [mobileNumberError, setMobileNumberError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [registrationStatus, setRegistrationStatus] = useState(false);
  // const handleShowErrorModal = (errorMessage) => {
  //   setModalErrorMessage(errorMessage);
  //   setShowErrorModal(true);

  // };



  const Handleusericon = () => {
    setactiveprofilebar(!activeprofilebar);
  }

  const handleSubmit = () => {

    console.log('handleSubmit called');
    const registrationData = {
      attributes: {

        "Mobile Number": formData.mobileNumber,
        "Area of Interest": formData.area,
        "Specialization": formData.specialization,

      },
      credentials: [
        {
          temporary: false,
          type: 'password',
          value: formData.password,
        },
      ],

      firstName: formData.firstname,
      lastName: formData.lastname,
      email: formData.email,
      emailVerified: true,
      enabled: true,
      requiredActions: ['VERIFY_EMAIL'],
    };


    axios
      .post(
        `${apiBaseUrl}/realms/creamcollar/protocol/openid-connect/token`,
        qs.stringify(Keycloak_config),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )
      .then((response) => {
        const accessToken = response.data.access_token;
        axios
          .post(
            `${apiBaseUrl}/admin/realms/creamcollar/users`,
            registrationData,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
              },
            }
          )
          .then((response) => {
            console.log('User registration successful:', response.data);

            // After user registration, get the user ID
            axios
              .get(`${apiBaseUrl}/admin/realms/creamcollar/users?username=${formData.email}`, {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              })
              .then((response) => {
                const user = response.data[0]; // Assuming there's only one user with the given username
                const userId = user.id; // This is the user ID
                console.log('User ID:', userId);
              })
              .catch((error) => {


                console.error('Error retrieving user information:', error);
                setRegistrationStatus('error');
              });
          })
          .catch((error) => {
            // handleShowErrorModal('Username or EmailId is Already Registered');

            console.error('Error during registration:', error);
            console.log('Response data:', error.response.data);  // Log the response data for more details
            console.log('Response status:', error.response.status);  // Log the response status code
            console.log('Response headers:', error.response.headers);  // Log the response headers

            setRegistrationStatus('error');
          });
      })
      .catch((error) => {
        console.error('Error getting access token:', error);
        setRegistrationStatus('error');
      });
  };

  const handleSendOTP = async () => {


    const phone = localStorage.getItem('phoneNumber');
    if (!phone) {
      setMobileNumberError(true);
      return;
    } else {
      setMobileNumberError(false);
    }

    try {
      const response = await axios.post(`${nodeapiBaseUrl}:5000/send-otp`, {
        to: phone // Use profileData.mobileNumber
      });

      setOtpSent(true);

      console.log(response.data);

    } catch (error) {
      console.error(error.message);
      // handleShowErrorModal(error.message);
    }
  };

  const handleEmailSendOTP = async () => {
    const email = localStorage.getItem('emailForOtp')

    console.log(email)
    try {
      const response = await axios.post(`${nodeapiBaseUrl}:5000/send-email-otp`, {
        email: email,
      });

      const result = true// Assuming the server returns JSON
      console.log(result)
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  useEffect(() => {
    let interval;

    if (timer > 0) {
      // Start the timer countdown
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      // Timer reached 0, you can activate the "Resend OTPs" link here
      clearInterval(interval);
    }

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    // Redirect if both OTPs are verified
    if (otpVerified && emailOtpVerified) {
      setRegistrationDone(true);
      setTimeout(() => {

        navigate('/');
      }, 2000); // Adjust the delay time (in milliseconds) as needed
    }
  }, [otpVerified, emailOtpVerified, unverifiedOTP, navigate]);

  const showResendLink = timer === 0;

  const handleVerifyOTP = async () => {
    console.log(enteredOTP);
    const phone = localStorage.getItem('phoneNumber')
    try {
      const response = await axios.post(`${nodeapiBaseUrl}:5000/verify-otp`, {
        phoneNumber: phone,
        otp: enteredOTP,
      });

      console.log(response.data);

      // Add logic to handle successful OTP verification, such as updating UI or redirecting
      if (response.data.success) {

        setOtpVerified(true);
        setUnverifiedOTP({ type: '', message: '' });
        setErrorMessage('')
        // Additional actions on successful verification
      } else {
        console.log('Mobile OTP verification failed. Please try again.');
        setOtpVerified(false);
        // setErrorMessage('Mobile OTP verification failed.')
        setErrorMessage('Invalid OTPs entered, Please re-enter the valid OTP')
        setUnverifiedOTP({ type: 'Mobile OTP', message: 'Mobile OTP verification failed. Please try again.' }); // Set error message for mobile OTP verification failure
        // Additional actions on failed verification
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleVerifyEmailOTP = async () => {
    const email = localStorage.getItem('emailForOtp')
    const otp = enteredEmailOTP;
    console.log(otp);
    try {
      // Call the server to verify OTP
      const response = await fetch(`${nodeapiBaseUrl}:5000/verify-email-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
      });

      const result = await response.json(); // Assuming the server returns JSON
      console.log(result);

      if (result.message != '') {
        setEmailOtpVerified(true);
        setUnverifiedOTP({ type: '', message: '' });
        setErrorMessage('')
      } else {
        setEmailOtpVerified(false);
        // setErrorMessage('Email OTP verification failed.')
        setErrorMessage('Invalid OTPs entered, Please re-enter the valid OTP')
        setUnverifiedOTP({ type: 'Email OTP', message: 'Email OTP verification failed. Please try again.' }); // Set error message for email OTP verification failure

      }
    } catch (error) {
      setOtpVerified(false);
      console.error('Error verifying OTP:', error);
    }
  };

  const combinedOtpClickHandler = async () => {
    try {
      // Assume these functions return true if verification is successful
      await handleVerifyEmailOTP();
      await handleVerifyOTP();


      handleSubmit();

    }
    catch (error) {
      console.error("Error during OTP verification:", error);
      // Handle any exceptions thrown during verification
    }
  };


  const handleResendOTP = (event) => {
    if (event) {
      event.preventDefault();
    }

    handleSendOTP();
    handleEmailSendOTP();
    setTimer(60); // Reset the timer to 60 seconds
  };

  return (
    <div style={{ width: '100%', minHeight: '100vh', paddingTop: '60px', position: 'absolute', textAlign: 'center', alignItems: 'center', display: 'inline-flex', flexDirection: 'column', backgroundColor: 'rgb(246, 249, 252)' }}>
      {/* <div style={{width:'100%',height: 83, padding:'2%', background: 'white', justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'flex'}}>
            <div style={{flex: '1 1 0', height: 52, paddingTop: 10, paddingBottom: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 15, display: 'flex'}}>
                <div style={{color: '#5A5A5A', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}><img src={CC_Logo} alt="" /></div>
            </div>
            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 30, display: 'flex',paddingRight:'5%'}}>
                <div style={{width: 24, height: 24, position: 'relative'}}>
                    <div style={{width: 20, height: 21.50, left: 2, top: 1, position: 'absolute'}}><img src={bell} alt="" /></div>
                    
                </div>
                <div style={{width: 53, height: 53  , position: 'relative'}} onClick={()=>Handleusericon()}>
                    <div  >
                      <img src={Profile_Avatar} alt="" style={{width: 53, height: 53, left: 0, top: 0, position: 'absolute', background: 'green', borderRadius: 9999}} />
                    </div>
                </div>
            </div>
        </div> */}


      {!registrationDone && (
        <div style={{ background: '#F6F9FC', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 32, display: 'inline-flex' }}>
          <div style={{ flex: '1 1 0', height: 32, width: 152, paddingTop: 5, paddingBottom: 5, justifyContent: 'flex-start', alignItems: 'center', gap: 15, display: 'flex' }}>
            <div style={{ color: '#5A5A5A', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}><img src={CC_Logo} alt="" /></div>
          </div>

          <div style={{}} className='fg_outerlayer'>
            <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'flex' }}>
              <div style={{}} className='fg_verification' >Verification</div>
              <div style={{ alignSelf: 'stretch', color: '#4A5965', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>An SMS and email with the One Time Password (OTP) have been sent to your mobile number and email ID respectively</div>
            </div>
            <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'flex' }}>
              <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', gap: 20, display: 'flex' }}>
                <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>

                  <input style={{}} className='fg_mobile'
                    type="otp"
                    value={enteredOTP}
                    onChange={(e) => {

                      const value = e.target.value;
                      if (!value || value.match(/^\d+$/) || value.length > 6) {
                        setEnteredOTP(value);
                      }
                    }}

                    placeholder="Mobile Number OTP" required />

                </div>
                <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>

                  <input style={{}} className='fg_mobile'
                    type="otp"
                    value={enteredEmailOTP}
                    onChange={(e) => {

                      const value = e.target.value;
                      if (!value || value.match(/^\d+$/) || value.length > 6) {
                        setEnteredEmailOTP(value);
                      }
                    }}
                    placeholder="Email ID OTP" required />

                </div>
              </div>
              <div style={{ alignSelf: 'stretch', justifyContent: 'flex-end', alignItems: 'flex-start', gap: 8, display: 'inline-flex' }}>
                <div style={{ color: '#80919F', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>
                  Time Remaining: {timer}s
                </div>

                {timer === 0 && (
                  <>
                    <div style={{ color: '#0B6AEA', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', textDecoration: 'underline', cursor: 'pointer', wordWrap: 'break-word' }} onClick={handleResendOTP}>
                      Resend OTPs
                    </div>
                  </>
                )}
              </div>
              <Button style={{ alignSelf: 'stretch', paddingLeft: 32, paddingRight: 32, paddingTop: 12, paddingBottom: 12, background: (enteredOTP.trim().length == 6 && enteredEmailOTP.trim().length == 6) ? '#0B6AEA' : '#E2EBF3', borderRadius: 8, justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }} onClick={combinedOtpClickHandler}>
                <div className='fg_account' style={{ color: (enteredOTP.trim().length == 6 && enteredEmailOTP.trim().length == 6) ? 'white' : '#4A5965', fontFamily: 'Inter', wordWrap: 'break-word' }}>Create Your Account</div>
              </Button>
              <Button style={{ backgroundColor: '#fff', alignSelf: 'stretch', paddingLeft: 32, paddingRight: 32, paddingTop: 12, paddingBottom: 12, borderRadius: 8, border: '1px #0B6AEA solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                <NavLink to="/register" className={({ isActive }) => (isActive ? "active nav-link" : 'none nav-link')} style={{ textDecoration: 'none' }}>
                  <div className='fg_account' style={{ color: '#0B6AEA', fontFamily: 'Inter', wordWrap: 'break-word' }}>Go Back</div>
                </NavLink>
              </Button>
            </div>
            <div style={{ alignSelf: 'stretch' }}><span style={{ color: '#4A5965', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>By creating an account or logging in, you agree to CreamCollar’s </span><span style={{ color: '#4A5965', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', textDecoration: 'underline', wordWrap: 'break-word' }}>Conditions of Use</span><span style={{ color: '#4A5965', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}> and </span><span style={{ color: '#4A5965', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', textDecoration: 'underline', wordWrap: 'break-word' }}>Privacy Policy</span><span style={{ color: '#4A5965', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>.</span></div>
          </div>

          {errorMessage && (
            <div style={{ color: 'red', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', textAlign: 'center' }}>
              {errorMessage}
            </div>
          )}


        </div>

      )}

      {registrationDone && (
        <div style={{ width: '100%', height: '100%', paddingTop: 15, paddingBottom: 110, paddingLeft: 464, paddingRight: 464, background: '#F6F9FC', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 32, display: 'inline-flex' }}>
          <div style={{ flex: '1 1 0', height: 50, paddingTop: 5, paddingBottom: 5, justifyContent: 'flex-start', alignItems: 'center', gap: 15, display: 'flex' }}>
            <div style={{ color: '#5A5A5A', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}><img src={CC_Logo} alt="" /></div>
          </div>

          <div style={{ alignSelf: 'stretch', height: 505, paddingLeft: 40, paddingRight: 40, paddingTop: 10, paddingBottom: 32, background: 'white', boxShadow: '0px 8px 40px rgba(9, 44, 76, 0.08)', borderRadius: 20, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 40, display: 'inline-flex' }}>
            <div style={{ marginTop: 200, color: '#5A5A5A', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', alignItems: 'center' }}>
              <h2 className="success-message" style={{ color: '#00213D', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>You're all set! Registration completed successfully.</h2>

            </div>
          </div>
        </div>
      )}


      {/* 
       <div className='d-flex flex-column justify-content-center align-items-center' style={{marginTop: 100 }}>
         <Card className='m-3 text-start' style={{  background: '#F6F9FC',width: '35%', maxWidth: '1000px', alignItems: 'center'}}>
         {registrationDone && (
            <div className="success-message m-5" style={{ color: 'green', fontSize: '1rem', width: '100%', height: '200px', textAlign: 'center'}}>
                
                <div style={{marginBottom: 40, flex: '1 1 0', height: 55, paddingTop: 15, paddingLeft: '35%', paddingBottom: 15, justifyContent: 'flex-start', alignItems: 'center', gap: 15, display: 'flex'}}>
                <div style={{color: '#5A5A5A', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}><img src={CC_Logo} alt="" /></div>
            </div>
            <div style={{color: '#5A5A5A', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', alignItems: 'center'}}>
                <h2 className="success-message" style={{color: '#00213D', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>You're all set! Registration completed successfully.</h2> 
                <h2 className="success-message " style={{color: '#00213D', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>A verification link has been sent to your email.</h2>
                </div>
            </div>
        )}
        
        </Card>
        </div> */}
    </div>
  );
}

export default OtpVerification;
