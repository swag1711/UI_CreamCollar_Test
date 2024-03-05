import React, { useState, useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';
import Navpages from './Navpages';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Footer from './Footer';
import { Card, CardBody, CardImg, CardTitle, CardText, Button, CardHeader, Row, Col, FormGroup} from 'reactstrap';
import ErrorModal from './ErrorModal';
import googleicon from '../../src/assets/img/googleicon.png';
import './register.css';
import { NavLink } from 'react-router-dom';
import Keycloak_config from '../services/Keycloak_config';
import UserService from '../services/UserService';

 
function Register() {
    const nodeapiBaseUrl = process.env.REACT_APP_NODEJS_URL;
    const [otpVerified, setOtpVerified] =useState(false);
    const navigate = useNavigate();
    const [useremail, setUseremail]=useState('')
    const [mobileNumberFocused, setMobileNumberFocused]=useState(false)
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        mobileNumber: '',
            specialization: 'Select',
            area:'Select',
    });
 
    const [registrationStatus, setRegistrationStatus] = useState(false);
    const [emptyFieldsError, setEmptyFieldsError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [countryCodes, setCountryCodes] = useState([]);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatchError, setPasswordMatchError] = useState('');
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
    const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?#&]{8,}$/;
    const [phoneNumber, setPhoneNumber] = useState('');
    
  const [selectedCountryCode, setSelectedCountryCode] = useState('');
    const [enteredOTP, setEnteredOTP] = useState('');
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [modalErrorMessage, setModalErrorMessage] = useState('');
    const [resendDisabled, setResendDisabled] = useState(false);
    const [timer, setTimer] = useState(30); // Set the initial countdown time
    const [mobileNumberError, setMobileNumberError] = useState(false);
    const [otpSent, setOtpSent] = useState(false);
    const [registrationDone, setRegistrationDone] = useState(false);
    const [emailForOtp, setEmailForOtp]=useState('');
    const [err, setErr]=useState('');
    const [err1, setErr1]=useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [countryCodeFocused, setCountryCodeFocused]=useState(false);
    const [ hilight,  sethilight]=useState(false);
    
    const startTimer = () => {
        setResendDisabled(true);
        setTimer(60); // Reset timer to 30 seconds when clicked
 
        const interval = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer === 1) {
                    clearInterval(interval);
                    setResendDisabled(false); // Enable resend after countdown finishes
                }
                return prevTimer - 1;
            });
        }, 1000);
    };

    useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
          .then(response => response.json())
          .then(data => {
              const codes = data.map(country => ({
                  name: country.name.common,
                  code: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : '')
              }));
              setCountryCodes(codes);
          })
          .catch(error => console.error('Error fetching country codes:', error));
  }, []);
 
    // Function to handle displaying the error modal
    const handleShowErrorModal = (errorMessage) => {
      setModalErrorMessage(errorMessage);
      setShowErrorModal(true);
    };
 
    // Function to close the error modal
    const handleCloseErrorModal = () => {
      setShowErrorModal(false);
    };
     

 
    const handleSendOTP = async () => {
       
      if (!formData.mobileNumber || !selectedCountryCode) {
        setMobileNumberError(true);
        return;
    } else {
        setMobileNumberError(false);
    }

    const mobileNumberWithCountryCode = selectedCountryCode + formData.mobileNumber;

    localStorage.setItem('phoneNumber', mobileNumberWithCountryCode);

    startTimer();
 
      try {
        const response = await axios.post(`${nodeapiBaseUrl}:5000/send-otp`, {
          to: mobileNumberWithCountryCode // Use profileData.mobileNumber
        });
 
        setOtpSent(true);
       
        console.log(response.data);
 
      } catch (error) {
        console.error(error.message);
        handleShowErrorModal(error.message);
      }
    };
 
    const handleEmailSendOTP = async () => {
        localStorage.setItem('emailForOtp',formData.email);
        const email=formData.email;
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
   
   
    const handleConfirmPasswordChange = (e) => {
        const { value } = e.target;
        setConfirmPassword(value);
   
        if (formData.password !== value) {
            setPasswordMatchError('Passwords do not match');
        } else {
            setPasswordMatchError('');
        }
    };
   
 
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      
      if (name === 'mobileNumber') {
        // Remove any non-digit characters from the input
        const cleanedValue = value.replace(/\D/g, '');
        const truncatedValue = cleanedValue.slice(0, 10);
          
       if ((/^[5-9]\d{0,9}/.test(truncatedValue))  ) {
          // If it's valid and not exceeding 10 digits, concatenate it with the selected country code
         
          setFormData({ ...formData, mobileNumber: truncatedValue });
        } else {
          // If it's not valid, clear the mobileNumber field
          setFormData({ ...formData, mobileNumber: '' });
        }
      } else {
        // For other inputs (firstname, lastname, email, etc.), update as usual
        setFormData({ ...formData, [name]: value });
      }
      

      if (name === 'password') {
        
          if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}/.test(value) || value.length < 8) {
              setPasswordMatchError('Password must contain at least 8 characters, including 1 uppercase, 1 lowercase, 1 number, and 1 special character');
              setIsPasswordValid(false);
              setErr1("") // Password is not valid
                          
          } else {
              setPasswordMatchError('');
              setIsPasswordValid(true); // Password is valid
          }
      }
  };

//   function validateMobile() {
//     const emailInput = document.getElementById("email");
//     const email = emailInput.value;
//     const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

//     if (!isPasswordValid) {
//         // Invalid email format
//         document.getElementById("log_lab_password").style.color = '#EB5757';
//             document.getElementById("log_lab_password").innerHTML = 'Please enter a valid password';
//             return; // Stop the form submission
//         }else {
//           document.getElementById("log_lab_password").style.color = '#0B6AEA';
//             document.getElementById("log_lab_password").innerHTML = 'Password';
//             return;
//         }


// }

useEffect(() => {
  // Check if all fields are filled
  const allFieldsFilled = Object.values(formData).every(value => value.trim() !== '');
  sethilight(allFieldsFilled); // Set highlight based on whether all fields are filled
}, [formData]);
 
    const combinedClickHandler = async (event) => {
      console.log("password");
        if (event) {
            event.preventDefault();
          }
          const email=formData.email;

          const emptyFields = Object.values(formData).some((value) => value === '');
          console.log(emptyFields);
          if (emptyFields) {
              setErr1('Please fill all the fields');
              sethilight(false)
              return;  // Prevent form submission
          }  

          if (!isPasswordValid) {
            
            // document.getElementById("log_lab_password").style.color = '#EB5757';
            // document.getElementById("log_lab_password").innerHTML = 'Please enter a valid password';

            document.getElementById("log_lab_password").style.color = '#EB5757';
          document.getElementById("invalid_password").style.display='inline-flex';
          document.getElementById("password").style.border='1px solid #EB5757';
            return; // Stop the form submission
        }else {
          document.getElementById("log_lab_password").style.color = '#0B6AEA';
          document.getElementById("invalid_password").style.display='none';
            
        }

        if (formData.mobileNumber.length<10) {
         
          setErr('Please enter a valid mobile number')
          return; // Stop the form submission
      }else {
       
          setErr('')
          const mobileNumberWithCountryCode = selectedCountryCode + formData.mobileNumber;

      }
                  
 
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
                    .get(
                        `${apiBaseUrl}/admin/realms/creamcollar/users`,
                                                {
                        params: { email: formData.email },
                        headers: { Authorization: `Bearer ${accessToken}` }
                        }
                    )
                    .then((response) => {
                        if (response.data && response.data.length > 0) {
                            // User with this email already exists  
                            handleShowErrorModal('Username or Email Id is Already Registered');
                            setRegistrationStatus(true);
                            document.getElementById("invalid_email").innerHTML = ' Email Id is Already Registered';
                            document.getElementById("log_lab_email").style.color = '#EB5757';
                            document.getElementById("invalid_email").style.display='inline-flex';
                            document.getElementById("email").style.border='1px solid #EB5757';

                        } else {
                            // Proceed with user registration since email is not in use
                            console.log('Email is available for registration');
                            setRegistrationStatus(false);                   
                            handleSendOTP();
                            handleEmailSendOTP();
                            navigate('/OtpVerification', { state: { formData } });
                            // Additional registration logic here
                        }
                    })
                    .catch((error) => {
                        console.error('Error during user check:', error);
                        
                    });
            })
            .catch((error) => {
                console.error('Error getting access token:', error);
              
            });
     ;}
 
    
 
 
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
     
      };
      const toggleConfirmPasswordVisibility = () => {
     
        setShowConfirmPassword(!showConfirmPassword)
      };
      const changeinputfield_focus =(e) =>{
        var log_lab = document.getElementById(`log_lab_${e.target.id}`);
        var log_input = document.getElementById(`${e.target.id}`);
        log_input.style.border='1px solid #0B6AEA';
        log_lab.style.display='block';
        log_lab.style.color='#0B6AEA';
      }
      const changeinputfield_blur =(e) =>{

        var log_lab = document.getElementById(`log_lab_${e.target.id}`);
        var log_input = document.getElementById(`${e.target.id}`);
        
       
        
        if(log_input.value==''){
          log_lab.style.display='none';
          log_input.style.border='1px solid #EB5757';
          log_lab.style.color='#EB5757';
          document.getElementById(`invalid_${e.target.id}`).style.display='inline-flex';
        }
        else{
          log_input.style.border='1px solid #E2EBF3';
          log_lab.style.color='#4A5965';
          document.getElementById(`invalid_${e.target.id}`).style.display='none';
        }
      }

      function validateAlphabetsOnly(e) {
        const regex = /^[A-Za-z]+$/;
        if (!regex.test(e.key)) {
            e.preventDefault(); // Prevent input of non-alphabet characters
        }
    }

    function validateEmail() {
      const emailInput = document.getElementById("email");
      const email = emailInput.value;
      const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
     
      if (!regex.test(email)) {
          // Invalid email format
          document.getElementById("log_lab_email").style.color = '#EB5757';
          document.getElementById("invalid_email").style.display='inline-flex';
          document.getElementById("email").style.border='1px solid #EB5757';
          
          //document.getElementById("log_lab_email").innerHTML = 'Invalid Email ID*';
      } else {
          // Valid email format
          document.getElementById("log_lab_email").style.color = '#4A5965';
          document.getElementById("log_lab_email").innerHTML = 'Email ID';
          document.getElementById("invalid_email").style.display='none';
      }
  }

  const changeinputfield_ph_focus =(e) =>{
       
    var log_lab = document.getElementById(`log_ph_field`);
    var log_lab2 = document.getElementById(`log_lab_mobileNumber`);
    log_lab2.style.display='block';
    log_lab2.style.color='#0B6AEA ';
    log_lab.style.border='1px solid #0B6AEA ';

  }
  const changeinputfield_ph_blur =(e) =>{
   
    var log_lab = document.getElementById(`log_ph_field`);
    var log_lab2 = document.getElementById(`log_lab_mobileNumber`);
    log_lab2.style.color='#4A5965';
    log_lab.style.border='1px solid #E2EBF3';
  }
 
    return(
<div id="kc-form" style={{background: '#F6F9FC'}}>
        <div id="kc-form-wrapper" style={{background: '#F6F9FC',left:0,right:0,bottom:0,top:0, minHeight: '100vh'}}>
          <div id="content_write" style={{padding:'60px 0', width: '100%', height: '100%', position: 'relative', background: '#F6F9FC', textAlign: 'center', display: 'inline-flex', gap: '32px', flexDirection: 'column'}}>
            <div style={{width: '100%'}}>
              <div className="login_logo">
              </div>
            </div>
            <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
              <div style={{}} className='outerwhitecontainer' >
                <div style={{}} className='innerwhitecontainer'>
                  <div style={{}} classname="accounttopdiv">
                    <div style={{}} className='h2text'>Create a new account for free</div>
                    <div style={{display:'inline-flex',flexDirection:'row',gap:8}}>
                      <div style={{}} className='h5text'>Already have an account?</div>
                      <div className='h5text' style={{color: '#0B6AEA', textDecoration: 'none'}}><NavLink to="/loginpage" style={{textDecoration:'none'}}>Login</NavLink></div>
                    </div>
                  </div>
                  <div style={{alignSelf: 'stretch', height: '"auto"', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                    <div style={{}} className="belowsiginupbtn">
                      <div id="kc-social-providers" style={{width: '100%'}}>
                       
                        <button className="hgt56px btntext" style={{padding:0, width: '100%', backgroundColor:'white'}} onClick={() => UserService.doLogin({ idpHint: 'google' })} >
                          <a  style={{textDecoration: 'none' }} className='googlesignupspacing'>
                            <div style={{width: '24px', height: '24px', position: 'relative'}} className="google_icon">
                            </div>
                            <div className="" style={{color: '#0F62FE'}}>Sign up with Google </div>
                          </a>
                        </button>
                      </div>
                      <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: '24px', display: 'inline-flex'}}>
                        <div style={{flex: '1 1 0', height: '0px', border: '1px #E2EBF3 solid',opacity:'0.5'}} />
                        <div style={{color: '#4A5965', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400, lineHeight: '15px', wordWrap: 'break-word'}}>OR</div>
                        <div style={{flex: '1 1 0', height: '0px', border: '1px #E2EBF3 solid',opacity:'0.5'}} />
                      </div>
                      <form style={{width: '100%'}}>
                        <div style={{width: '100%', alignSelf: 'stretch', height: 'auto', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '20px', display: 'flex'}}>
                           <div style={{width: '100%', alignSelf: 'stretch',}}>
                           <div style={{width: '100%', alignSelf: 'stretch', height: '57px', borderRadius: '8px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                           <label id="log_lab_firstname" style={{display: 'none',border:'none', color: '#0B6AEA', marginLeft: '12px', position:'absolute', marginTop:'-7px', zIndex: 1, fontSize: '12px', padding: '0 8px', background: 'white', fontFamily: 'Inter', fontWeight: 400, lineHeight: '15px', wordWrap: 'break-word'}}>First Name</label>
                           <input className="log_btn_hover"  style={{marginBottom:0,padding: '16px 20px', alignSelf: 'stretch', height: '57px', paddingTop: '16px', paddingBottom: '16px', background: 'white', borderRadius: '8px', border: '1px #E2EBF3 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}} tabIndex={1} type="text" id="firstname" name="firstname" placeholder="First Name" value={formData.firstname} onChange={handleInputChange}  onHover={changeinputfield_focus} onFocus={changeinputfield_focus} onBlur={changeinputfield_blur}    onKeyPress={(e) => validateAlphabetsOnly(e)} required autoComplete="off" />
                          
                         </div>
                         <span id="invalid_firstname" style={{display:'none',width:'100%',justifyContent:'start', color: '#EB5757', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400, lineHeight: '15px', wordWrap: 'break-word'}}>Invalid First Name</span>
                         </div>
                         <div style={{width: '100%'}}>
                         <div style={{width: '100%', alignSelf: 'stretch', height: '57px', borderRadius: '8px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                            <label id="log_lab_lastname" style={{display: 'none',border:'none', color: '#0B6AEA', marginLeft: '12px', position:'absolute', marginTop:'-7px', zIndex: 1, fontSize: '12px', padding: '0 8px', background: 'white', fontFamily: 'Inter', fontWeight: 400, lineHeight: '15px', wordWrap: 'break-word'}}>Last Name</label>
                            <input className="log_btn_hover"  style={{marginBottom:0,padding: '16px 20px', alignSelf: 'stretch', height: '57px', paddingTop: '16px', paddingBottom: '16px', background: 'white', borderRadius: '8px', border: '1px #E2EBF3 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}} type="text" id="lastname" name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleInputChange} onFocus={changeinputfield_focus} onBlur={changeinputfield_blur}  onKeyPress={(e) => validateAlphabetsOnly(e)} required autoComplete="off" />
                            <span style={{marginLeft: '28px', color: '#EB5757', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400, lineHeight: '15px', wordWrap: 'break-word'}}>
                            </span>
                          </div>
                          <span id="invalid_lastname" style={{display:'none',width:'100%',justifyContent:'start', color: '#EB5757', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400, lineHeight: '15px', wordWrap: 'break-word'}}>Invalid Last Name</span>
                         </div>

                        <div style={{width: '100%', alignSelf: 'stretch'}}>
                        <div style={{width: '100%', alignSelf: 'stretch', height: '57px', borderRadius: '8px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                            <label id="log_lab_email" style={{display: 'none', color: '#0B6AEA', marginLeft: '12px', position:'absolute', marginTop:'-7px', zIndex: 1, fontSize: '12px', padding: '0 8px', background: 'white', fontFamily: 'Inter', fontWeight: 400, lineHeight: '15px', wordWrap: 'break-word'}}>Email ID</label>
                            <input className="log_btn_hover"  style={{marginBottom:0,padding: '16px 20px', alignSelf: 'stretch', height: '57px', paddingTop: '16px', paddingBottom: '16px', background: 'white', borderRadius: '8px', border: '1px #E2EBF3 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}} type="email" id="email" name="email" placeholder="Email ID" value={formData.email} onChange={handleInputChange} onFocus={changeinputfield_focus} onBlur={(e) => {
                                  changeinputfield_blur(e);
                                  validateEmail();
                              }} required autoComplete="off" />
                            
                            
                          </div>
                          
                          <span id="invalid_email" style={{display:'none',width:'100%',justifyContent:'start', color: '#EB5757', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400, lineHeight: '15px', wordWrap: 'break-word'}}>Invalid Email ID</span>
                            </div>
                           
                          <div style={{ width: '100%', alignSelf: 'stretch', display: 'flex' }}>
    <div style={{ width: '100%' }}>
 
<label
            className={`label ${mobileNumberFocused ? 'focused' : ''}`}
            id="log_lab_mobileNumber"
            style={{
                display:'none',
                color: '#0B6AEA',
                // height: '11px',
                marginLeft: '12px',
               position:'absolute',
              marginTop:'-7px',
                zIndex: 2,
                width: 110,
                fontSize: '12px',
                padding: '0 6px',
                background: 'white',
                fontFamily: 'Inter',
                fontWeight: 400,
                lineHeight: '15px',
                wordWrap: 'break-word',
               
                marginRight: 5,
                // paddingBottom: '1px',
            }}
        >
            Mobile Number
        </label>
    <div className="col-md-12 " id="log_ph_field"  style={{  alignSelf: 'stretch', height: '57px',  background: 'white', borderRadius: '8px', border: '1px #E2EBF3 solid ',zIndex:1020, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
    <div className='row' style={{width:'100%',margin:0,padding:0, display: 'inline-flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <div  style={{width:'24%', height:55}} >
    <select
            className={` stop_default_input_prop select-input ${countryCodeFocused ? 'focused' : ''}`}
            style={{
                width:'100%',
                padding: '16px',
                padddingLeft:'20px',
                paddingRight:'20px',
                margin:0,
                borderRadius: '8px',
                border:'none',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                overflow: 'hidden',
                wordBreak: 'break-word',
               
            }}
            id="countryCode"
            name="countryCode"
            value={selectedCountryCode}
            onChange={(e) => setSelectedCountryCode(e.target.value)}
            onFocus={(e) => {changeinputfield_ph_focus(e); setCountryCodeFocused(true);}}
            onBlur={(e) => {changeinputfield_ph_blur(e); setCountryCodeFocused(false);}}
            required
        >
            <option value="+1">+1 US</option>
            <option value="+91">+91 IND</option>
            <option value="+44">+44 UK</option>
            {/* Add more country code options here */}
        </select>
        </div>
   
       <div style={{width:1,padding:'0', margin:'10px 0 10px 0', border:'1px solid #E2EBF3 '}}></div>
        <div  style={{width:'70%' }} >
        <input
            className={`stop_default_input_prop input ${mobileNumberFocused ? 'focused' : ''}`}
            style={{
                padding: '16px',
                paddingRight:'20px',
                alignSelf: 'stretch',
                height:'55px',
                borderRadius: '8px',
                border: 'none',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                marginBottom:0,
            }}
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            onFocus={(e) => {changeinputfield_ph_focus(e); setMobileNumberFocused(true) }}
            onBlur={(e) => {changeinputfield_ph_blur(e); setMobileNumberFocused(false)}}
            required
            autoComplete="off"
        />
       
        </div>
       
        </div>
    </div>
    <span id="invalid_mobileNumber" style={{display:'none',width:'100%',justifyContent:'start', color: '#EB5757', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400, lineHeight: '15px', wordWrap: 'break-word'}}>Invalid Mobile Number</span>
                           
  </div>
{/* //end mobile box */}
    
                         </div>
                        

                          <div style={{width:'100%'}}>
                          <div style={{marginTop: 0 ,width: '100%', alignSelf: 'stretch', height: '57px', borderRadius: '8px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', gap: '8px', display: 'flex'}}>
                            <div style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'end', width: '100%'}}>
                              <div style={{width: '100%', alignSelf: 'stretch', height: '57px', borderRadius: '8px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                                <label id="log_lab_password" style={{display: 'none', color: '#0B6AEA', marginLeft: '12px', position:'absolute', marginTop:'-7px', zIndex: 1, fontSize: '12px', padding: '0 8px', background: 'white', fontFamily: 'Inter', fontWeight: 400, lineHeight: '15px', wordWrap: 'break-word'}}>Password</label>
                                <div style={{display:'inline-flex',alignItems:'center',justifyContent:'end',width:'100%'}}>
                                   <input className="log_btn_hover"  style={{marginBottom:0, padding: '16px 20px', height: '57px', alignSelf: 'stretch', paddingTop: '16px', paddingBottom: '16px', background: 'white', borderRadius: '12px', border: '1px #E2EBF3 solid', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}} tabIndex={2} type={showPassword ? 'text' : 'password'} id="password" name="password" placeholder="Password" value={formData.password}  onChange={(e) => {handleInputChange(e);}}onFocus={changeinputfield_focus} onBlur={changeinputfield_blur}  required autoComplete="off" />
                                   <input type="button" onClick={togglePasswordVisibility} className={showPassword ? "password_hide_icon" : "password_show_icon"}  id="password_icon" style={{width: '24px', height: '24px', appearance: 'none', border: 'none'}} />
                                </div>
                                
                              </div>
                             </div>
                            
                          </div>
                          <span id="invalid_password" style={{display:'none', width:'100%',justifyContent:'start', color: '#EB5757', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400, lineHeight: '15px', wordWrap: 'break-word'}}>Invalid Password</span>
                         </div>
                          <div className="error-message" style={{ color: '#4A5965',textAlign:'left', fontSize: '12px',fontFamily: 'Inter',fontWeight: '400', wordWrap: 'break-word', width: "100%"}}>
                            Must be at least 8 characters including special character, uppercase letter and a number
                            </div>

                           
                          <div id="kc-form-buttons" style={{ width: '100%'}}>
                           
                            <button tabIndex={4}  type="submit"  className="btntext hgt46px" style={{backgroundColor: hilight ? '#0B6AEA' : '#E2EBF3',color:  hilight ? 'white' : '#4A5965', cursor: hilight ?'':'not-allowed' , display: 'inline-flex'}} onClick={combinedClickHandler } disabled={!hilight}>Verify Email and Mobile Number</button>

                          </div>

                          {/* <span style={{marginLeft: '28px', color: '#EB5757', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400, lineHeight: '15px', wordWrap: 'break-word'}}>{err1}
                                </span> */}
                        </div>
                      </form></div>
                      <span style={{  color: '#EB5757', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400, lineHeight: '15px', wordWrap: 'break-word'}}>
                            {err}
                        </span>
                  </div>
                  <div style={{textAlign: 'left', alignSelf: 'stretch', color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400, wordWrap: 'break-word'}}><span style={{color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400, wordWrap: 'break-word'}}>By creating an account or logging in, you agree to CreamCollar’s </span><span style={{textDecoration: 'underline', color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400, wordWrap: 'break-word'}}>Conditions of Use</span><span style={{color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400, wordWrap: 'break-word'}}> and Privacy Policy.</span></div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
   
    )
}
 
export default Register;
