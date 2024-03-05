import { useState, useEffect } from 'react';
import React  from 'react';
import { Modal, Button,  Form  } from 'react-bootstrap'; 
import '../Website/Profile/profile.css';// Assuming you're using React Bootstrap for modals

const Verifyotpmodel = ({  show, handleCloseModal, handleVerify, enteredOTP, setEnteredOTP, errorMessage,handleResendOTP }) => {
    const [timer, setTimer] = useState(60);
    const [otpError, setOtpError] = useState(''); 
    
    useEffect(() => {
      let interval;

      if (show && timer > 0) {
          interval = setInterval(() => {
              setTimer((prevTimer) => prevTimer - 1);
          }, 1000);
      } else if (!show || timer === 0) {
          clearInterval(interval);
          if (timer === 0) {
              // Additional logic if needed when timer reaches 0
          }
      }

      return () => clearInterval(interval);
  }, [show, timer]);
      const showResendLink = timer === 0;
      
      const handleotp=()=>{
        setTimer(60)
        setOtpError('');
        handleResendOTP();
       
      }
      const handleVerifyAndClose = async () => {
        const isVerified = await handleVerify(); // Wait for verification result
        if (!isVerified) {
            setOtpError("Invalid OTP entered, Please re-enter the valid OTP"); // Set error message
        } else {
            handleCloseModal(); // Close modal only if verified
        }
    };
    const handleOTPChange = (e) => {
      const value = e.target.value;
      // Allow only numeric input
      if (value === '' || (/^[0-9]+$/.test(value) && value.length <= 6)) {
          setEnteredOTP(value);
      }
       
        setOtpError(''); // Reset error message on OTP change
    };

   
    

  return (
    <Modal className="mt-5" show={show} onHide={handleCloseModal} backdrop="static" keyboard={false}>
     <div style={{position: 'relative', width: '100%', height: '100%', paddingLeft: 40, paddingRight: 40, paddingTop: 32, paddingBottom: 32, background: 'white', boxShadow: '0px 8px 40px rgba(9, 44, 76, 0.08)', borderRadius: 20, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 40, display: 'inline-flex'}}>
     <button 
            onClick={handleCloseModal}
            style={{ 
              position: 'absolute', 
              backgroundColor: 'white',
              color: 'gray',
              width: '25px',
              top: 10, 
              right: 10, 
              height: '25px',
              border: '1px solid #E2EBF3', // Add a gray border
              background: '#E2EBF3', // Set the background to white
              fontSize: '1rem', 
              cursor: 'pointer', 
              borderRadius: '10px', // Round the corners of the button
              padding: '5px', // Add some padding around the icon
              display: 'flex', // Use flex to center the icon
              alignItems: 'center', // Align icon vertically
              justifyContent: 'center', // Align icon horizontally
          }}
        >
            X
        </button>
    <div style={{alignSelf: 'stretch', height: 70, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'flex'}}>
        <div style={{alignSelf: 'stretch', color: '#00213D', fontSize: 24, fontFamily: 'Inter', fontWeight: '700',  wordWrap: 'break-word'}}>Mobile Number Verification</div>
        <div style={{alignSelf: 'stretch', color: '#4A5965', fontSize: 12, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>An SMS with the One Time Password (OTP) have been sent to your mobile number</div>
    </div>
    {otpError && (
    <div style={{ color: 'red', alignSelf: 'stretch', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', textAlign: 'center' }}>
        {otpError}
    </div>
)}

    <div style={{alignSelf: 'stretch', height: 174, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'flex'}}>
                         
                        
                            <input 
                                type="otp"
                                style={{alignSelf: 'stretch', height: 80, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', gap: 24, display: 'flex'}}
                                id="otp"
                                name="otp"
                                placeholder="Enter Mobile Number OTP"
                                value={enteredOTP}
                                onChange={handleOTPChange}
                                required
                                />
           
        
        <div style={{alignSelf: 'stretch', justifyContent: 'flex-end', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
            <div style={{color: '#80919F', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Time Remaining: {timer}s</div>
            {timer === 0 && (
          <>
            <div style={{ color: '#0B6AEA', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', textDecoration: 'underline', cursor: 'pointer', wordWrap: 'break-word' }} onClick={handleotp}>
              Resend OTPs
            </div>
          </>
        )}        </div>
        <div >
        <button 
          onClick={handleVerifyAndClose}
          
          style={{
            fontWeight: '700',
            color: enteredOTP.trim().length > 0 ? 'white' : '#4A5965',
            width: 420,
            alignSelf: 'stretch',
            paddingLeft: 32,
            paddingRight: 32,
            paddingTop: 16,
            paddingBottom: 16,
            background: enteredOTP.trim().length > 0 ? '#0B6AEA' : '#E2EBF3', 
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'inline-flex'
        }}            >
          Verify OTP
        </button>       
         </div>
         
    
    </div>
    <div style={{alignSelf: 'stretch'}}><span style={{color: '#4A5965', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>By creating an account or logging in, you agree to CreamCollar’s </span><span style={{color: '#4A5965', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', textDecoration: 'underline', wordWrap: 'break-word'}}>Conditions of Use</span><span style={{color: '#4A5965', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}> and </span><span style={{color: '#4A5965', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', textDecoration: 'underline', wordWrap: 'break-word'}}>Privacy Policy</span><span style={{color: '#4A5965', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>.</span></div>
</div>

    </Modal>
  );
};

export default Verifyotpmodel;
