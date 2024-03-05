import React, { useState, useEffect } from 'react';
import Navbar1 from './Navbar1';
import axios from 'axios';
import qs from 'qs';

import { Card, CardBody, CardImg, CardTitle, CardText, Button, CardHeader, Row, Col, FormGroup} from 'reactstrap';
import Footer from './Footer';
import ErrorModal from './ErrorModal';

import 'react-image-crop/dist/ReactCrop.css';
import UserService from '../services/UserService';

import PanelHeader from "../components/PanelHeader";
import Keycloak_config from '../services/Keycloak_config';

function Profile() {
  const nodeapiBaseUrl = process.env.REACT_APP_NODEJS_URL;
  const [otpVerified, setOtpVerified] =useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [enteredOTP, setEnteredOTP] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [modalErrorMessage, setModalErrorMessage] = useState('');
  const [crop, setCrop] = useState({ aspect: 1 }); // New state for cropping
  const [croppedImage, setCroppedImage] = useState(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  // const handleVerifyOTP = async () => {
  //   console.log(enteredOTP);
    
  //   try {
  //     const response = await axios.post(`${nodeapiBaseUrl}:5000/verify-otp`, {
  //       phoneNumber: profileData.mobileNumber,
  //       otp: enteredOTP,
  //     });

  //     console.log(response.data);

  //     // Add logic to handle successful OTP verification, such as updating UI or redirecting
  //     if (response.data.success) {
  //       window.alert('OTP verified successfully!');
  //       setOtpVerified(true);
  //       // Additional actions on successful verification
  //     } else {
  //       window.alert('OTP verification failed. Please try again.');
  //       // Additional actions on failed verification
  //     }
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  // const handleSendOTP = async () => {
    
  //   setPhoneNumber(profileData.mobileNumber);

  //   try {
  //     const response = await axios.post(`${nodeapiBaseUrl}:5000/send-otp`, {
  //       to: profileData.mobileNumber // Use profileData.mobileNumber
  //     });

  //     console.log(response.data);

  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  const handleShowErrorModal = (errorMessage) => {
    setModalErrorMessage(errorMessage);
    setShowErrorModal(true);
  };

  // Function to close the error modal
  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
  };


  const [profileData, setProfileData] = useState({
    firstname: '',
    lastname: '',
    // username: '',
    email: '',
    password: '',
    collegeEmail: '',
    personalEmail: '',
    mobileNumber: '',
    permanentAddress: '',
    college: '',
    degree: '',
    specialization: 'Select',
    currentSemester: '',
    area:'Select',
    
  });
  const [editMode, setEditMode] = useState(false); // Track edit mode
  const [dataLoaded, setDataLoaded] = useState(false);  
  // const location = useLocation();
  // const user = location.state;
  // console.log(user.email)
  console.log(UserService.getUsername())
  const email = UserService.getUsername()
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
// Use apiBaseUrl in your code

  // Define the getUserIdByEmail function within the Profile component
  const getUserIdByEmail = async (adminAccessToken, email) => {
    
    try {
      const keycloakResponse = await axios.get(
        `${apiBaseUrl}/admin/realms/creamcollar/users?username=${email}`,
        {
          headers: {
            Authorization: `Bearer ${adminAccessToken}`,
          },
        }
      );

      if (keycloakResponse.status === 200) {
        const users = keycloakResponse.data;
        if (users.length > 0) {
          return users[0].id;
          
        }
      }
    } catch (error) {
      console.error('Failed to get user ID by email in Keycloak:', error);
    }
    return null;
  };

  useEffect(() => {
    if (!dataLoaded){
    // Define your Keycloak client credentials and token URL
    

    // Make a POST request to obtain an access token
    axios
      .post(`${apiBaseUrl}/realms/creamcollar/protocol/openid-connect/token`, qs.stringify(Keycloak_config), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then(async (response) => {
        const accessToken = response.data.access_token;
        // Get the user's ID by email using the inner getUserIdByusername function
        const userId = await getUserIdByEmail(accessToken, UserService.getUsername());
        console.log('User ID by user:', userId);
      
        // Use the obtained access token to fetch user profile data
        axios
          .get(`${apiBaseUrl}/admin/realms/creamcollar/users/${userId}`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then((profileResponse) => {
            const userProfile = profileResponse.data;
            // Check the structure of userProfile.attributes
            console.log('Keys in userProfile.attributes:', Object.keys(userProfile.attributes));


            console.log('Profile Data:', userProfile); // Log the profile data for debugging
            setProfileData({
              firstname: userProfile.firstName,
              lastname: userProfile.lastName,
              // username: userProfile.username,
              email: userProfile.email,
              password: '', // Password should not be fetched or displayed
              collegeEmail: userProfile.attributes ? userProfile.attributes['College Email']?.[0] || '' : '',
              personalEmail: userProfile.attributes ? userProfile.attributes['Personal Email']?.[0] || '' : '',
              mobileNumber: userProfile.attributes ? userProfile.attributes['Mobile Number']?.[0] || '' : '',
              permanentAddress: userProfile.attributes ? userProfile.attributes['Permanent Address']?.[0] || '' : '',
              college: userProfile.attributes ? userProfile.attributes['College']?.[0] || '' : '',             
              area: userProfile.attributes ? userProfile.attributes['Area of Intrest']?.[0] || 'Select' : 'Select',             
              degree: userProfile.attributes ? userProfile.attributes.Degree?.[0] || '' : '',
              specialization: userProfile.attributes ? userProfile.attributes.Specialization?.[0] || 'Select' : 'Select',
              currentSemester: userProfile.attributes ? userProfile.attributes['Current Semester']?.[0] || '' : '',
              
            });
            setDataLoaded(true);
          })
          .catch((error) => {
            console.error('Error fetching user profile:', error);
          });
      })
      .catch((error) => {
        console.error('Error obtaining access token:', error);
      });
  }
  }, [dataLoaded, UserService]);
 
  const handleImageChange = (event) => {
   
    setSelectedImage(event.target.files[0]);
   
    console.log('Selected Image:', event.target.files[0]);
  };
 
  const handlePhotoChange = async () => {
    try {
      const formData = new FormData();
      formData.append('image', selectedImage);
      formData.append('userEmail', profileData.email);
     
      // Upload the image
      const uploadResponse = await axios.post(`${nodeapiBaseUrl}:5000/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
 
      console.log('Image uploaded successfully:', uploadResponse.data);
     
      // Retrieve the updated profile picture after successful upload
      const profilePictureResponse = await axios.get(`${nodeapiBaseUrl}:5000/getProfilePicture/${profileData.email}`, {
        responseType: 'arraybuffer',
      });
 
      const binary = profilePictureResponse.data;
      const base64String = btoa(
        new Uint8Array(binary).reduce((data, byte) => data + String.fromCharCode(byte), '')
      );
      const imageUrl = `data:image/jpeg;base64,${base64String}`;
     
      // Update the profile picture state with the updated image URL
      setProfilePicture(imageUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
      // Handle error, show error message, etc.
    }
  };
 
  useEffect(() => {
    if (dataLoaded) {
      // Fetch the profile picture based on the user's email
      axios.get(`${nodeapiBaseUrl}:5000/getProfilePicture/${profileData.email}`, {
        responseType: 'arraybuffer',
      })
      .then((response) => {
        const binary = response.data;
        const base64String = btoa(
          new Uint8Array(binary).reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
        const imageUrl = `data:image/jpeg;base64,${base64String}`;
       
        // Update the profile picture state with the retrieved image
        setProfilePicture(imageUrl);
      })
      .catch((error) => {
        console.error('Error fetching profile picture:', error);
      });
    }
  }, [dataLoaded, profileData.email]);
 
  useEffect(() => {
    if (registrationStatus === 'success') {
        // Registration successful, you can redirect or perform other actions.
    }
}, [registrationStatus]);

  const handleSubmit = (e) => {
    console.log(UserService.getUsername())

    const registrationData = {
        attributes: {
            "College Email": profileData.collegeEmail,
            "Personal Email": profileData.personalEmail,
            "Mobile Number": profileData.mobileNumber,
            "Permanent Address": profileData.permanentAddress,
            "College": profileData.college,
            "Degree": profileData.degree,
            "Specialization": profileData.specialization,
            "Current Semester": profileData.currentSemester,
            "Area of Interest": profileData.area,
            
        },
       
        // username: profileData.username,
        firstName: profileData.firstname, 
        // lastName: profileData.lastname,
        email: profileData.email,
        emailVerified: true,
        enabled: true,
       
    };
    console.log(profileData)

    

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
        .then(async (response) => {
            const accessToken = response.data.access_token;

            const userId = await getUserIdByEmail(accessToken, UserService.getUsername());
            console.log(userId)
            
            axios
              .put(`${apiBaseUrl}/admin/realms/creamcollar/users/`+userId+``, registrationData, {
              headers: {
                Authorization: `Bearer ${accessToken}`, 
                'Content-Type': 'application/json',
              },
            })
            .then(response => {
              window.alert("Profile updated successfully")
              console.log('Profile updated successfully');
              axios.put(
                `${apiBaseUrl}/admin/realms/creamcollar/users/${userId}/execute-actions-email`,
                ['UPDATE_Profile'], // Use the appropriate action here
                {
                  headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                  },
                }
              );
            })
            .catch(error => {
              window.alert('Error updating profile:', error);
              console.error('Error updating profile:', error);
            });
        })
        .catch((error) => {
            console.error('Error getting access token:', error);
            setRegistrationStatus('error');
        });
};

  return (
    <>
    <PanelHeader />
    {/* <Navbar1 /> */}
    <div className='m-3 d-flex flex-column justify-content-center align-items-center'>
      
      <h1 className='p-3'>Welcome to CreamCollar</h1>
      <Card className='m-3 text-center' style={{ width: '100%', maxWidth: '1000px' }}>
        <CardHeader>
        <div className='d-flex flex-column align-items-center'>
          <div>
            <img id="profile-picture" src={profilePicture || 'cc_logo_icon.png'} alt="Profile" style={{ width: '150px', height: '150px', borderRadius: '50%', marginTop: '4px'}}/>
          </div>
        <br />
        <strong className='pb-3'>{UserService.getFullname()}</strong>
        <input style={{ width: '180px' }} type="file" accept="image/*" onChange={handleImageChange} />
        <button onClick={handlePhotoChange}>Upload Image</button>
      </div>
      </CardHeader>
      <CardBody className='pl-5'>
      <CardTitle className='mt-3 ml-3'>
      <strong>Profile Details</strong>
      </CardTitle>
      <CardText className='p-5 text-center' >
      <div className="row">
        <label className='mb-2'>Full Name:</label>
        <input type="text" name="firstname" value={profileData.firstname} readOnly />
        {/* <label className='mb-2'>Last Name:</label>
        <input type="text" name="lastname" value={profileData.lastname} readOnly />
        <label className='mb-2'>Username:</label>
        <input type="text" name="username" value={profileData.username} readOnly /> */}
        <label className='mb-2'>Email:</label>
        <input type="text" name="email" value={profileData.email} readOnly />
        <label className='mb-2'>CollegeEmail:</label>
        <input type="text" name="collegeEmail" value={profileData.collegeEmail} readOnly={editMode} onChange={(e) => setProfileData({ ...profileData, collegeEmail: e.target.value })}/>
        <label className='mb-2'>PersonalEmail:</label>
        <input type="text" name="email" value={profileData.personalEmail} readOnly={editMode} onChange={(e) => setProfileData({ ...profileData, personalEmail: e.target.value })} />
        <label className='mb-2'>MobileNumber: </label>
        <input type="text" name="text" value={profileData.mobileNumber} readOnly={editMode}  onChange={(e) => setProfileData({ ...profileData, mobileNumber: e.target.value })}  />
        <label className='mb-2'>PermanentAddress:</label>
        <input type="text" name="text" value={profileData.permanentAddress} readOnly={editMode} onChange={(e) => setProfileData({ ...profileData, permanentAddress: e.target.value })} />
        <label for="area">Area of Interest:</label>
                <select style={{ width: '500px'}}   id="area" name="area" value={profileData.area} readOnly={editMode} onChange={(e) => setProfileData({ ...profileData, area: e.target.value })} required>
                <option value="Select">Select</option>
                    <option value="Advanced Driver Assistance Systems">ADAS</option>
                    <option value="Battery Management System">BMS</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="Power Train">Power Train</option>
                    <option value="E/E Architecture">E/E Architecture</option>
                    <option value="Other">Other</option>
                </select>
        <label className='mb-2'>College:</label>
        <select style={{ width: '500px'}} name="text" value={profileData.college} readOnly={editMode} onChange={(e) => setProfileData({ ...profileData, college: e.target.value })}>
                    <option value="Select">Select</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Business">Business</option>
                    <option value="Other">Other</option>
                </select>
        <label className='mb-2'>Degree:</label>
        <select style={{ width: '500px'}} name="text" value={profileData.degree} readOnly={editMode} onChange={(e) => setProfileData({ ...profileData, degree: e.target.value })}>
                    <option value="Select">Select</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Business">Business</option>
                    <option value="Other">Other</option>
                </select>
        <label className='mb-2'> Specialization:</label>
        <select style={{ width: '500px'}} id="specialization" name="specialization" value={profileData.specialization} readOnly={editMode}  onChange={(e) => setProfileData({ ...profileData, specialization: e.target.value })} required>
                    <option value="Select">Select</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Business">Business</option>
                    <option value="Other">Other</option>
                </select>
        <label className='mb-2'>CurrentSemester:</label>
        <input type="text" name="text" value={profileData.currentSemester} readOnly={editMode} onChange={(e) => setProfileData({ ...profileData, currentSemester: e.target.value })} />
        {/* Add similar input fields for other profile information */}
      
      </div>
      </CardText>
      </CardBody>
      <div>
     
      <button className='mb-3' onClick={handleSubmit}>Save</button>
    </div>
      </Card>
      
    </div>
    <ErrorModal show={showErrorModal} handleClose={handleCloseErrorModal} errorMessage={modalErrorMessage} />
    {/* <Footer/> */}
    </>
    
  );
}

export default Profile;