import avatar from "../../assets/img/Avatar.svg";
import add_details from "../../assets/img/add_details.svg";
import delete_details from "../../assets/img/delete_details.svg";
import { useStateWithCallbackLazy } from "use-state-with-callback";
import dateFormat from "dateformat";
// import fluentcalendar from '../../assets/img/fluentcalendar.png';
// import India from '../../assets/img/India.png';
import Pencil from "../../assets/img/Pencil.svg";
import { CircularProgressbar } from "react-circular-progressbar";
// import UpArrowIcon from '../../assets/img/UpArrowIcon.jpg';
import "./profile.css";
import React, { useState, useEffect, useRef } from "react";
import Verifyotpmodel from "../verifyotpmodel";
import axios from "axios";
import qs from "qs";
import { useLocation } from "react-router-dom";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Button,
  CardHeader,
  Row,
  Col,
  FormGroup,
} from "reactstrap";
import Footer from "../Footer";
import "react-image-crop/dist/ReactCrop.css";
import UserService from "../../services/UserService";

import Keycloak_config from "../../services/Keycloak_config";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Journey from "../Platform/Journey/Jounney";
import Describing from "../Platform/Journey/Describing";
import Group from "../../assets/img/Group.png";
import FieldLabelComponent from "../../components/FieldLabelComponent";
import ProfilePageFLComponent from "../../components/ProfilePageFLComponent";
import WorkExperience from "./WorkExperience";
import EducationField from "./EducationField";
import TechnicalCompetenciesSection from "./TechnicalCompetenciesSection";
import Certificates from "./Certificates"

import {
  TechnicalCompetencies,
  TechnicalCompetenciesSelected,
  Profile_details_generalview,
  Profile_details_header,
  Profile_details_interestview,
  Profile_edit_view_content,
  Profile_edit_view_footer,
  Profile_interest_edit_view,
  Addlanguages,
  Profile_edit_educational_content,
  Profile_edit_educational_content2,
} from "./Profile_components";
import { Personaldetails } from "./PersonalDetails";

function Profile_page() {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const nodeapiBaseUrl = process.env.REACT_APP_NODEJS_URL;
  const [showContainer1, setShowContainer1] = useState(true);
  const [countryCodes, setCountryCodes] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  let content = "";
  const [isEduEditMode, setIsEduEditMode] = useState(false);
  const [isWorkEditMode, setIsWorkEditMode] = useState(false);
  const [isIntEditMode, setIsIntEditMode] = useState(false);
  const [isCertiEditMode, setIsCertiEditMode] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [enteredOTP, setEnteredOTP] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [modalErrorMessage, setModalErrorMessage] = useState("");
  const [crop, setCrop] = useState({ aspect: 1 }); // New state for cropping
  const [croppedImage, setCroppedImage] = useState(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [phoneNumber1, setPhoneNumber1] = useState("");
  const [showVerifyButton, setShowVerifyButton] = useState(false);
  const [selectedTab, setSelectedTab] = useState("default");
  const [selectedContent, setContentChange] = useState();
  const personalDetailsRef = useRef(null);
  const educationDetailsRef = useRef(null);
  const workExperienceRef = useRef(null);
  const interestsRef = useRef(null);
  const certificationsRef = useRef(null);
  const [unverifiedOTP, setUnverifiedOTP] = useState({ type: "", message: "" });
  const [otpsent, setOtpSent] = useState(false);
  const [isOtpModalOpen, setOtpModalOpen] = useState(false);
  const [selectedTab2, setselectedTab2] = useState("personalid");
  const [isEditModegap, setEditModegap] = useState("24");
  const [education_action, seteducation_action] = useState("view");
  const [education_editid, seteducation_editid] = useState(null);
  const [workexperience_action, setworkexperience_action] = useState("view");
  const [workexperience_editid, setworkexperience_editid] = useState(null);
  const [cert_action, setcert_action] = useState("view");
  const [cert_editid, setcert_editid] = useState(null);
  const [addlanguagedatacount, setaddlanguagedata] = useState([]);
  const [educationtypevalue, seteducationtypevalue] = useState(0);
  const [allowsubmission, setsubmission] = useState(0);
  const [sentences, setSentences] = useState([<Addlanguages />]);
  const [LanguageCount, setLanguageCount] = useState(1);
  const showRespectedSentence = () => {
    const respectedSentence = <Addlanguages />;
    setSentences((prevSentences) => [...prevSentences, respectedSentence]);
  };
  const sectionRefs = {
    personalid: useRef(null),
    educationid: useRef(null),
    workexperienceid: useRef(null),
    interestid: useRef(null),
    certificateid: useRef(null),
    // Add more sections as needed
  };

    //On the time of clicking edit button
  const editablebtnclick = (index) => {
    console.log("view my mode:" + workexperience_action);
    setworkexperience_action("edit");
    setworkexperience_editid(index);
    };
   //On the time of clicking edit button
  const editablebtnclick3 = (index) => {
    seteducation_action("edit");
    seteducation_editid(index);
    };
    //On the time of clicking delete button
  const deleteablebtnclick = (delete_index) => {
    const filteredData = profileData.workexperience.filter(
      (item, index) => index !== delete_index
    );
    setProfileData({ ...profileData, workexperience: filteredData });
    setsubmission(1);
  };
  const deleteablebtnclick3 = (delete_index) => {
    const filteredData = profileData.educationaldetails.filter(
      (item, index) => index !== delete_index
    );
    setProfileData({ ...profileData, educationaldetails: filteredData });
    setsubmission(1);
  };
  const editablebtnclick2 = (index) => {
    console.log("view my mode:" + workexperience_action);
    setcert_action("edit");
    setcert_editid(index);
  };
  const deleteablebtnclick2 = (delete_index) => {
    const filteredData = profileData.certificate.filter(
      (item, index) => index !== delete_index
    );
    setProfileData({ ...profileData, certificate: filteredData });
    setsubmission(1);
  };
//On click on discard btn change the state to view
  const discardfunction = () => {
    console.log("view my mode:" + workexperience_action);
    setworkexperience_action("view");
  };
  const discardfunction2 = () => {
    setcert_action("view");
  };
  const discardfunction3 = () => {
    seteducation_action("view");
  };
  const tabClickHandler2 = (tabName) => {
    setselectedTab2(tabName);
    scrollToSection(tabName);
    };
    //get data to display the country codes 
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const codes = data.map((country) => ({
          name: country.name.common,
          code:
            country.idd.root +
            (country.idd.suffixes ? country.idd.suffixes[0] : ""),
        }));
        setCountryCodes(codes);
      })
      .catch((error) => console.error("Error fetching country codes:", error));
  }, []);

    //scroll to particular section at the time of clicking topic name
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setselectedTab2(sectionId);
    }
  };

  const handleMobileNumberChange = (e) => {
    const newMobileNumber = e.target.value;
    const { name, value } = e.target;

    if (name === "mobileNumber") {
      // Remove any non-digit characters from the input
      const cleanedValue = value.replace(/\D/g, "");
      const truncatedValue = cleanedValue.slice(0, 10);
      // Check if it's a valid 10-digit mobile number starting with 5-9
      if (/^[5-9]\d{0,9}$/.test(truncatedValue)) {
        // If it's valid and not exceeding 10 digits, concatenate it with the selected country code
        setShowVerifyButton(truncatedValue.length === 10);
        setProfileData({ ...profileData, mobileNumber: truncatedValue });
      } else {
        // If it's not valid, clear the mobileNumber field
        setShowVerifyButton(false);
        setProfileData({ ...profileData, mobileNumber: "" });
      }
    } else {
      // For other inputs (firstname, lastname, email, etc.), update as usual
      setProfileData({ ...profileData, [name]: value });
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleworkexperirnceadata = (e) => {
    const { name, value } = e.target;
    setemptydata({ ...emptydata, [name]: value });
    console.log("handleworkexperirnceadata" + JSON.stringify(emptydata));
  };
  const handleeducationdata = (e) => {
    const { name, value } = e.target;
    setemptydata3({ ...emptydata3, [name]: value }); //changeeducationform

    console.log("handleeducationdata" + JSON.stringify(emptydata3));
  };
  const handleadddateeducationfield = (name, date) => {
    // const  name ="joiningdate";
    const value = date;
    console.log("two elements: " + name, value);
    setemptydata3({ ...emptydata3, [name]: value });
    console.log("handleeducationdata" + JSON.stringify(emptydata3));
  };
  const handlecertdata = (e) => {
    const { name, value } = e.target;
    setemptydata2({ ...emptydata2, [name]: value });
  };
  const handleInputChange2 = (e) => {
    console.log("we are boys");
    console.log("two elements hh: " + e);
    const { name, value } = e.target;
      console.log("two elements: " + name, value);
      
    // Ensure that profileData.workexperience is initialized as an array
    setProfileData((profileData) => {
      const newData = { ...profileData };
      console.log("profile data:" + newData);
      newData.workexperience[workexperience_editid][name] = value ?? {};
      return newData;
    });
  };
  const changeeducationform2 = (e) => {
    const { name, value } = e.target;
    const educationtype = value;
    if (educationtype == "Class X" || educationtype == "Class XII") {
      seteducationtypevalue(0);
    } else {
      seteducationtypevalue(1);
    }

    setProfileData((profileData) => {
      const newData = { ...profileData };
      console.log("profile data:" + newData);
      newData.educationaldetails[education_editid][name] = value ?? {};
      return newData;
    }); //changeeducationform   handleInputChange4

    console.log("handleeducationdata" + JSON.stringify(emptydata3));
  };
  const handleInputChange4 = (e) => {
    console.log("we are boys");
    console.log("two elements hh: " + e);
    const { name, value } = e.target;
    console.log("two elements: " + name, value);
    // Ensure that profileData.workexperience is initialized as an array
   

    setProfileData((profileData) => {
      const newData = { ...profileData };
      console.log("profile data:" + newData);
      newData.educationaldetails[education_editid][name] = value ?? {};
      return newData;
    });
  };
  const handleInputChange3 = (e) => {
    console.log("we are boys");
    console.log("two elements hh: " + e);
    const { name, value } = e.target;
    console.log("two elements: " + name, value);

    setProfileData((profileData) => {
      const newData = { ...profileData };
      console.log("profile data:" + newData);
      newData.certificate[cert_editid][name] = value ?? {};
      return newData;
    });
  };
  const handledateInputChange2 = (name, date) => {
    console.log("we are boys");

    const value = date;
    console.log("two elements: " + name, value);

    setProfileData((profileData) => {
      const newData = { ...profileData };
      console.log("profile data:" + newData);
      newData.workexperience[workexperience_editid][name] = value ?? {};
      return newData;
    });
  };

  const handledateInputChange4 = (name, date) => {
    console.log("we are boys");

    
    const value = date;
    console.log("two elements: " + name, value);
    
    setProfileData((profileData) => {
      const newData = { ...profileData };
      console.log("profile data:" + newData);
      newData.educationaldetails[education_editid][name] = value ?? {};
      return newData;
    });
  };
  const handledateInputChange3 = (name, date) => {
    console.log("we are boys");
    const value = date;
    console.log("two elements: " + name, value);
    
    setProfileData((profileData) => {
      const newData = { ...profileData };
      console.log("profile data:" + newData);
      newData.certificate[cert_editid][name] = value ?? {};
      return newData;
    });
  };
  const tabClickHandler = (tabName) => {
    console.log("tabClickHandler called with:", tabName);
    switch (tabName) {
      case "Journey":
        content = <Journey />;

        break;
      case "Describing":
        content = <Describing />;
        break;

      default:
        setSelectedTab("default");
        break;
    }

    setSelectedTab(tabName);
    console.log(content);
    setContentChange(content);
    console.log("Selected tab:", tabName);
    console.log("Selected content:", content);
  };

   const handleSendOTP = async () => {
    const mobileNumber =
      profileData.mobileNumber.length === 10
        ? `+${selectedCountryCode}${profileData.mobileNumber}`
        : `${profileData.mobileNumber}`;

    console.log("Sending OTP to:", mobileNumber);

    try {
      const response = await axios.post(`${nodeapiBaseUrl}:5000/send-otp`, {
        to: mobileNumber,
      });
      console.log(response.data);
      setOtpSent(true);

      setPhoneNumber1(mobileNumber); // Update the state after successful API call
      handleShowErrorModal(response.data.message); // Assuming this is for showing success message
      setShowVerifyButton(false);
    } catch (error) {
      console.error("Error sending OTP:", error);
      // If the error response is from the server
      if (error.response) {
        console.log("Response data:", error.response.data);
        console.log("Response status:", error.response.status);
        console.log("Response headers:", error.response.headers);
      }
      handleShowErrorModal(error.message);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post(`${nodeapiBaseUrl}:5000/verify-otp`, {
        phoneNumber: phoneNumber1,
        otp: enteredOTP,
      });

      console.log(response.data);

      // Add logic to handle successful OTP verification, such as updating UI or redirecting
      if (response.data.success) {
        setOtpVerified(true);
        setOtpModalOpen(false);
        setUnverifiedOTP({ type: "", message: "" });
        return true;
        // Additional actions on successful verification
      } else {
        console.log("Mobile OTP verification failed. Please try again.");
        setOtpVerified(false);
        setOtpModalOpen(true);
        setUnverifiedOTP({
          type: "Mobile OTP",
          message: "Mobile OTP verification failed. Please try again.",
        }); // Set error message for mobile OTP verification failure
        // Additional actions on failed verification
        return false;
      }
    } catch (error) {
      console.error(error.message);
      return false;
    }
  };

  const handleShowErrorModal = (errorMessage) => {
    setModalErrorMessage(errorMessage);
    setShowErrorModal(true);
  };

  const handleEditDetailsClick = () => {
    setIsEditMode(true);
    setEditModegap("32");
  };
  const handleEduEditDetailsClick = () => {
    setIsEduEditMode(true);
  };
  const handleWorkEditDetailsClick = () => {
    setIsWorkEditMode(true);
  };

  const handleIntEditDetailsClick = () => {
    setIsIntEditMode(true);
  };
  const handleCertiEditDetailsClick = () => {
    setIsCertiEditMode(true);
  };

  // Function to close the error modal
  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
  };

  const [emptydata2, setemptydata2] = useState({
    cetification_provider_name: "",
    certificatio_course_name: "",
    certification_date: "",
    certificate_url: "",
  });
  const [emptydata, setemptydata] = useState({
    employertype: "",
    employmenttype: "",
    companyname: "",
    designation: "",
    joiningdate: "",
    lastworkingday: "",
    jobdescription: "",
  });
  const [emptydata3, setemptydata3] = useState({
    education: "",
    board: "",
    schoolmedium: "",
    enddate: "",
    mark: "",
  });
  const [emptylanguage, setemptylanguage] = useState({
    Language: "",
    Proficiency: "",
  });
  const [profileData, setProfileData] = useStateWithCallbackLazy({
    firstname: "",
    lastname: "",
    // username: '',
    email: "",
    City: "",
    Nationality: "",
    State: "",
    mobileNumber: "",
    permanentAddress: "",
    college: "",
    degree: "",
    Gender: "Select",
    dateOfBirth: null,
    Enddate: null,
    Languages: [],
    aboutyou: "",
    Education: "Select",
    Board: "Select",
    SchoolMedium: "Select",
    Marks: "",
    linkedinlink: "",
    educationaldetails: [],
    workexperience: [],
    certificate: [],
    technicalSkills: [],
  });

  const [editMode, setEditMode] = useState(false); // Track edit mode
  const [eduEditMode, setEduEditMode] = useState(false); // Track edit mode
  const [dataLoaded, setDataLoaded] = useState(false);
  const [skillSectionEditState, setSkillSectionEditState] = useState(false);

  const returnbackskillsnormal = () => {
    setSkillSectionEditState(false);
  };
  // const location = useLocation();
  // const user = location.state;
  // console.log(user.email)
  console.log(UserService.getUsername());
  const email = UserService.getUsername();
  const [registrationStatus, setRegistrationStatus] = useState(null);

  const [activeSection, setActiveSection] = useState("Personal Details");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };
  const changeeducationform = (e) => {
    const { name, value } = e.target;
    const educationtype = value;
    if (educationtype == "Class X" || educationtype == "Class XII") {
      seteducationtypevalue(0);
    } else {
      seteducationtypevalue(1);
    }

    setemptydata3({ ...emptydata3, [name]: value }); //changeeducationform   handleInputChange4

    console.log("handleeducationdata" + JSON.stringify(emptydata3));
  };
  const handleDateChange = (date) => {
    setProfileData({ ...profileData, dateOfBirth: date });
  };
  const handleadddateInputChange2 = (name, date) => {
    // const  name ="joiningdate";
    const value = date;
    console.log("two elements: " + name, value);
    setemptydata({ ...emptydata, [name]: date });
  };
  const handleadddateInputChange3 = (name, date) => {
    console.log("we are boys");

    // const  name ="joiningdate";
    const value = date;
    console.log("two elements: " + name, value);
    setemptydata2({ ...emptydata2, [name]: date });
  };
  // Use apiBaseUrl in your code

  // Define the getUserIdByEmail function within the Profile component
  const getUserIdByEmail = async (adminAccessToken, email) => {
    console.log(email);
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
      console.error("Failed to get user ID by email in Keycloak:", error);
    }
    return null;
  };

  useEffect(() => {
    if (!dataLoaded) {
      // Define your Keycloak client credentials and token URL

      // Make a POST request to obtain an access token
      try {
        axios
          .post(
            `${apiBaseUrl}/realms/creamcollar/protocol/openid-connect/token`,
            qs.stringify(Keycloak_config),
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          )
          .then(async (response) => {
            const accessToken = response.data.access_token;
            console.log(accessToken);

            // Get the user's ID by email using the inner getUserIdByusername function
            const userId = await getUserIdByEmail(
              accessToken,
              UserService.getUsername()
            );
            console.log("User ID by user:", userId);

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
                console.log(
                  "Keys in userProfile.attributes:",
                  Object.keys(userProfile.attributes)
                );

                console.log(
                  "this is my company name:" +
                    Object.keys(JSON.parse('{"name": "Company A"}'))
                );
                console.log("Profile Data1:", userProfile); // Log the profile data for debugging
                //  console.log("store experience"+store_workexperience.companyname);
                setProfileData({
                  firstname: userProfile.firstName,
                  lastname: userProfile.lastName,
                  // username: userProfile.username,
                  email: userProfile.email,
                  //password: "", // Password should not be fetched or displayed
                  City: userProfile.attributes
                    ? userProfile.attributes["City"]?.[0] || ""
                    : "",
                  aboutyou: userProfile.attributes
                    ? userProfile.attributes["About You"]?.[0] || ""
                    : "",
                  Nationality: userProfile.attributes
                    ? userProfile.attributes[" Nationality"]?.[0] || ""
                    : "",
                  State: userProfile.attributes
                    ? userProfile.attributes["State"]?.[0] || ""
                    : "",
                  mobileNumber: userProfile.attributes
                    ? userProfile.attributes["Mobile Number"]?.[0] || ""
                    : "",
                  permanentAddress: userProfile.attributes
                    ? userProfile.attributes["Permanent Address"]?.[0] || ""
                    : "",
                  college: userProfile.attributes
                    ? userProfile.attributes["College"]?.[0] || ""
                    : "",
                  Gender: userProfile.attributes
                    ? userProfile.attributes["Gender"]?.[0] || "Select"
                    : "Select",
                  degree: userProfile.attributes
                    ? userProfile.attributes.Degree?.[0] || ""
                    : "",
                  
                  Languages:
                    userProfile.attributes &&
                    userProfile.attributes["Languages"]
                      ? JSON.parse(userProfile.attributes["Languages"])
                      : [],
                 
                  Board: userProfile.attributes
                    ? userProfile.attributes["Board"]?.[0] || "Select"
                    : "Select",
                  aboutyou: userProfile.attributes
                    ? userProfile.attributes["About You"]?.[0] || ""
                    : "",

                  Education: userProfile.attributes
                    ? userProfile.attributes["Education"]?.[0] || "Select"
                    : "Select",
                  SchoolMedium: userProfile.attributes
                    ? userProfile.attributes["School Medium"]?.[0] || "Select"
                    : "Select",

                  Marks: userProfile.attributes
                    ? userProfile.attributes["Marks"]?.[0] || ""
                    : "",

                  dateOfBirth: userProfile.attributes?.dateOfBirth?.[0]
                    ? new Date(userProfile.attributes.dateOfBirth[0])
                    : null,
                  Enddate: userProfile.attributes?.Enddate?.[0]
                    ? new Date(userProfile.attributes.Enddate[0])
                    : null,
                 
                  educationaldetails:
                    userProfile.attributes &&
                    userProfile.attributes["educationaldetails"]
                      ? JSON.parse(userProfile.attributes["educationaldetails"])
                      : [],
                  linkedinlink:
                    userProfile.attributes &&
                    userProfile.attributes["linkedinlink"]
                      ? userProfile.attributes["linkedinlink"]
                      : "",

                  technicalSkills:
                    userProfile.attributes &&
                    userProfile.attributes["technicalSkills"]
                      ? JSON.parse(userProfile.attributes["technicalSkills"])
                      : [],
                  workexperience:
                    userProfile.attributes &&
                    userProfile.attributes["workexperience"]
                      ? JSON.parse(userProfile.attributes["workexperience"])
                      : [],
                  certificate:
                    userProfile.attributes &&
                    userProfile.attributes["certificate"]
                      ? JSON.parse(userProfile.attributes["certificate"])
                      : [],
                });
                setDataLoaded(true);
                const myvals = JSON.parse(userProfile.attributes["Languages"]);
                setLanguageCount(myvals.length);
              })
              .catch((error) => {
                console.error("Error fetching user profile:", error);
              });
          })
          .catch((error) => {
            console.error("Error obtaining access token:", error);
          });
      } catch (error) {
        console.error("Axios Error", error);
      }
    }
  }, [dataLoaded, UserService]);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);

    console.log("Selected Image:", event.target.files[0]);
  };

  
  useEffect(() => {
    if (registrationStatus === "success") {
      // Registration successful, you can redirect or perform other actions.
    }
  }, [registrationStatus]);

    //At the time of submiting, data will be saved and send to keyclock 
  const handleSubmit = (e) => {
    console.log(UserService.getUsername());
    
    const registrationData = {
      attributes: {
        "City": profileData.City,
        "Personal Email": profileData.personalEmail,
        "Mobile Number": profileData.mobileNumber,
        "Permanent Address": profileData.permanentAddress,
        "Gender": profileData.Gender,
        "dateOfBirth": profileData.dateOfBirth,
        "Nationality": profileData.Nationality,
        "State": profileData.State,
        "About You": profileData.aboutyou,
        "Marks": profileData.Marks,
        "Board": profileData.Board,
        "City": profileData.City,
        "School Medium": profileData.SchoolMedium,
        "Enddate": profileData.Enddate,
        "educationaldetails": JSON.stringify(profileData.educationaldetails),
        "workexperience": JSON.stringify(profileData.workexperience),
        "certificate": JSON.stringify(profileData.certificate),
        "linkedinlink": profileData.linkedinlink,
        "technicalSkills": JSON.stringify(profileData.technicalSkills),
        "Languages": JSON.stringify(profileData.Languages),
      },

      // username: profileData.username,
      firstName: profileData.firstname,
      lastName: profileData.lastname,
      email: profileData.email,
      emailVerified: true,
      enabled: true,
    };
    console.log("this is my profile: " + JSON.stringify(profileData));

    try {
      axios
        .post(
          `${apiBaseUrl}/realms/creamcollar/protocol/openid-connect/token`,
          qs.stringify(Keycloak_config),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then(async (response) => {
          const accessToken = response.data.access_token;

          const userId = await getUserIdByEmail(
            accessToken,
            UserService.getUsername()
          );
          console.log(userId);

          axios
            .put(
              `${apiBaseUrl}/admin/realms/creamcollar/users/` + userId + ``,
              registrationData,
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                  "Content-Type": "application/json",
                },
              }
            )
            .then((response) => {
              //   window.alert("Profile updated successfully",)
              console.log("Profile updated successfully");
              axios.put(
                `${apiBaseUrl}/admin/realms/creamcollar/users/${userId}/execute-actions-email`,
                ["UPDATE_PROFILE"], // Use the appropriate action here
                {
                  headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                  },
                }
              );
            })
            .catch((error) => {
              //   window.alert('Error updating profile:', error);
              console.error("Error updating profile:", error);
            });
        })
        .catch((error) => {
          console.error("Error getting access token:", error);
          setRegistrationStatus("error");
        });
    } catch (error) {
      console.log("Axios Error: ", error);
    }
     
  };

  const discardchanges = () => {
    setIsEditMode(false);
  };
  const discardEduchanges = () => {
    setIsEduEditMode(false);
  };

  const discardWorkchanges = () => {
    setIsWorkEditMode(false);
  };
  const discardIntchanges = () => {
    setIsIntEditMode(false);
  };
  const discardCertichanges = () => {
    setIsCertiEditMode(false);
  };

  const handleBack = () => {
    setsubmission(1);
    // updatelanguagedata();
    handleBackToProfileClick();
  };
 
  const handleBackToProfileClick = () => {
    setIsEduEditMode(false);
    setIsEditMode(false);
  };
  const handleSkillEditState = () => {
    setSkillSectionEditState(!skillSectionEditState);
  };
  const handleworkexperiencesubmit = () => {
    
    console.log("my empty data" + JSON.stringify(emptydata));
    setsubmission(1);
    setworkexperience_action("view");

    setemptydata([]);
    setemptydata2([]);
    setemptydata3([]);
  };
  //handles at the time editing and submitting the educational details 
  const handleeducationalsubmit = () => {
    setsubmission(1);
    seteducation_action("view");
    setemptydata([]);
    setemptydata2([]);
    setemptydata3([]);
  };
  function addlanguaesadditionaly() {
    setaddlanguagedata(addlanguagedatacount + 1);
  }
  useEffect(() => {
    console.log("---check profile data---", profileData);
  }, [profileData]);
  const handlenewworkexperiencesubmit = () => {
    // Update state
    setProfileData((profileData) => ({
      ...profileData,
      workexperience: [...profileData.workexperience, emptydata],
    }));
    // Moved handleSubmit into useEffect
    setsubmission(1);
    setworkexperience_action("view");
    setemptydata([]);
    setemptydata2([]);
    setemptydata3([]);
  };


  const handleneweducationalesubmit = () => {
    // Update state
    setProfileData((profileData) => ({
      ...profileData,
      educationaldetails: [...profileData.educationaldetails, emptydata3],
    }));
    // Moved handleSubmit into useEffect
    setsubmission(1);
    seteducation_action("view");
    setemptydata([]);
    setemptydata2([]);
    setemptydata3([]);
  };


  useEffect(() => {
    if (allowsubmission) {
      handleSubmit(); // This assumes handleSubmit uses profileData from state

    }
    
  }, [profileData.workexperience,profileData.educationaldetails,profileData.certificate,profileData.technicalSkills,allowsubmission]);
  const handlecertsubmit = () => {

    console.log("my empty data2" + JSON.stringify(emptydata2));
    setsubmission(1);
    //handleSubmit();
    setcert_action("view");

    setemptydata([]);
    setemptydata2([]);
    setemptydata3([]);
  };

  const handlenewcertsubmit = () => {
    // Update state
    setProfileData((profileData) => ({
      ...profileData,
      certificate: [...profileData.certificate, emptydata2],
    }));
    // Moved handleSubmit into useEffect
    setsubmission(1);
    setcert_action("view");
    setemptydata([]);
    setemptydata2([]);
    setemptydata3([]);
  };


  const saveSkillData = (dataArr) => {
    setProfileData({ ...profileData, technicalSkills: dataArr });
    setsubmission(1);
  };

  // const updatelanguagedata = () => {
   
  // };

  const addmylanguages = (e) => {
    const { name, value } = e.target;
    const currentid = e.target.getAttribute("currentid");

    console.log("we are boys");
    // console.log("two elements hh: "+e)

    console.log("two elements: " + name, value, currentid);
    // setemptylanguage({...emptylanguage,[name]:value});

    setProfileData((profileData) => {
      const newData = { ...profileData };
      console.log("profile data3:" + newData);
      newData.Languages[currentid] = {
        ...newData.Languages[currentid],
        [name]: value,
      };
      return newData;
    });
  };


  // useEffect(() => {
  //   if (allowsubmission) {
  //     handleSubmit();
  //   }
    
  // }, [profileData.technicalSkills, workexperience_action]);

  const isOnlyNumbers = (str) => {
    return /^\d+$/.test(str);
  };

  const handleLanguageChange = (e) => {
    console.log("we are boys");
    console.log("two elements hh: " + e);
    const { name, value } = e.target;
    console.log("two elements: " + name, value);

    setProfileData((profileData) => {
      const newData = { ...profileData };
      console.log("profile data:" + newData);
      newData.Languages[0][name] = value ?? {};
    });
    console.log("handleLanguageChange" + JSON.stringify(profileData));
  };

  localStorage.setItem(
    "fullname",
    profileData.firstname + " " + profileData.lastname
  );

  const changeinputfield_focus = (e) => {
    var log_lab = document.getElementById(`log_lab_${e.target.id}`);
    log_lab.style.display = "block";
    log_lab.style.color = "#0B6AEA";
  };
  const changeinputfield_blur = (e) => {
    var log_lab = document.getElementById(`log_lab_${e.target.id}`);
    log_lab.style.color = "#4A5965";
  };

    //To move the left panel topic at the time of scroll
  useEffect(() => {
    const handleScroll = () => {
      for (const section in sectionRefs) {
        // console.log(section);
        const target = sectionRefs[section].current;
        if (target) {
          const rect = target.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setselectedTab2(section);
            //console.log("section: "+section+" state: "+selectedTab2)
            break;
          }
        }
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionRefs]); // Include sectionRefs in the dependency array

  return (
    <div>
      <div
        className="row"
        style={{
          margin: 0,
          marginBottom: 100,
          padding: "0px",
          width: "100%",
          marginTop: 30,
          height: "100%",
          background: "#F6F9FC",
        }}
      >
        <div
          style={{
            marginLeft: 15,
            width: "100%",
            background: "#F6F9FC",
            justifyContent: "flex-start",
            alignItems: "center",
            display: "inline-flex",
          }}
        ></div>
        <div
          className=" col-md-2"
          style={{ paddingTop: 15, margin: 0, padding: 0, paddingLeft: 32 }}
        >
          <div className="desktopview_sticky">
            {/* <button style={{marginBottom: 2, color: '#0B6AEA', fontSize: 16, fontFamily: 'Inter', fontWeight: '700',  wordWrap: 'break-word', fontWeight: '600'}} className="buttonbkcolornone3" onClick={() => tabClickHandler('Journey')} >  My Journey <img src={Right_Arrow_Icon} style={{marginLeft: 6, height: 22}} alt="" /></button> */}

            <div
              style={{
                height: 653,
                paddingTop: 20,
                paddingBottom: 48,
                paddingLeft: 8,
                paddingRight: 8,
                background: "white",
                borderRadius: 10,
                border: "1px #E2EBF3 solid",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 32,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  paddingLeft: 12,
                  paddingRight: 12,
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 4,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    flex: "1 1 0",
                    color: "#00213D",
                    fontSize: 16,
                    fontFamily: "Inter",
                    fontWeight: "700",
                    wordWrap: "break-word",
                  }}
                >
                  Quick Links
                </div>
              </div>

              <div
                style={{
                  alignSelf: "stretch",
                  height: 350,
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 8,
                  display: "flex",
                }}
              >
                <nav class="navigation">
                  <ul style={{ paddingLeft: 0 }}>
                    <li
                      style={{
                        listStyle: "none",
                        display: "inline-flex",
                        flexDirection: "column",
                      }}
                    >
                      <div
                        onClick={() => tabClickHandler2("personalid")}
                        className={
                          selectedTab2 == "personalid"
                            ? "activeprofiletab"
                            : "none"
                        }
                      >
                        {" "}
                        <div
                          className={`highlightable-field ${
                            activeSection === "Personal Details" ? "active" : ""
                          }`}
                          style={{
                            width: "100%",
                            alignSelf: "stretch",
                            paddingLeft: 12,
                            paddingRight: 12,
                            paddingTop: 12,
                            paddingBottom: 12,
                            borderRadius: 4,
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: 8,
                            display: "inline-flex",
                          }}
                        >
                          <span
                            style={{
                              flex: "1 1 0",
                              color: "#00213D",
                              fontSize: 16,
                              fontFamily: "Inter",
                              fontWeight: "400",
                              wordWrap: "break-word",
                            }}
                          >
                            Personal Details
                          </span>
                        </div>
                      </div>
                      <div
                        onClick={() => tabClickHandler2("educationid")}
                        className={
                          selectedTab2 == "educationid"
                            ? "activeprofiletab"
                            : "none"
                        }
                      >
                        {" "}
                        <div
                          className={`highlightable-field ${
                            activeSection === "Education Details"
                              ? "active"
                              : ""
                          }`}
                          style={{
                            width: "100%",
                            alignSelf: "stretch",
                            paddingLeft: 12,
                            paddingRight: 12,
                            paddingTop: 12,
                            paddingBottom: 12,
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: 8,
                            display: "inline-flex",
                          }}
                        >
                          <span
                            style={{
                              flex: "1 1 0",
                              color: "#00213D",
                              fontSize: 16,
                              fontFamily: "Inter",
                              fontWeight: "400",
                              wordWrap: "break-word",
                            }}
                          >
                            Education Details
                          </span>
                        </div>
                      </div>
                      <div
                        onClick={() => tabClickHandler2("workexperienceid")}
                        className={
                          selectedTab2 == "workexperienceid"
                            ? "activeprofiletab"
                            : "none"
                        }
                      >
                        {" "}
                        <div
                          className={`highlightable-field ${
                            activeSection === "Work Experience" ? "active" : ""
                          }`}
                          style={{
                            width: "100%",
                            alignSelf: "stretch",
                            paddingLeft: 12,
                            paddingRight: 12,
                            paddingTop: 12,
                            paddingBottom: 12,
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: 8,
                            display: "inline-flex",
                          }}
                        >
                          <span
                            style={{
                              flex: "1 1 0",
                              color: "#00213D",
                              fontSize: 16,
                              fontFamily: "Inter",
                              fontWeight: "400",
                              wordWrap: "break-word",
                            }}
                          >
                            Work Experience
                          </span>
                        </div>
                      </div>
                      <div
                        onClick={() => tabClickHandler2("interestid")}
                        className={
                          selectedTab2 == "interestid"
                            ? "activeprofiletab"
                            : "none"
                        }
                      >
                        {" "}
                        <div
                          className={`highlightable-field ${
                            activeSection === "Interests" ? "active" : ""
                          }`}
                          style={{
                            width: "100%",
                            alignSelf: "stretch",
                            paddingLeft: 12,
                            paddingRight: 12,
                            paddingTop: 12,
                            paddingBottom: 12,
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: 8,
                            display: "inline-flex",
                          }}
                        >
                          <span
                            style={{
                              flex: "1 1 0",
                              color: "#00213D",
                              fontSize: 16,
                              fontFamily: "Inter",
                              fontWeight: "400",
                              wordWrap: "break-word",
                            }}
                          >
                            Interests
                          </span>
                        </div>
                      </div>
                      <div
                        onClick={() => tabClickHandler2("certificateid")}
                        className={
                          selectedTab2 == "certificateid"
                            ? "activeprofiletab"
                            : "none"
                        }
                      >
                        {" "}
                        <div
                          className={`highlightable-field ${
                            activeSection === "Certifications" ? "active" : ""
                          }`}
                          style={{
                            width: "100%",
                            alignSelf: "stretch",
                            paddingLeft: 12,
                            paddingRight: 12,
                            paddingTop: 12,
                            paddingBottom: 12,
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: 8,
                            display: "inline-flex",
                          }}
                        >
                          <span
                            style={{
                              flex: "1 1 0",
                              color: "#00213D",
                              fontSize: 16,
                              fontFamily: "Inter",
                              fontWeight: "400",
                              wordWrap: "break-word",
                            }}
                          >
                            Certifications
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-10"
          style={{ margin: 0, padding: 0, paddingRight: 32, paddingLeft: 40 }}
        >
          <div
            style={{
              marginBottom: "58px",
              justifyContent: "center",
              alignItems: "center",
              gap: 24,
              display: "inline-flex",
            }}
          >
            <div style={{ width: 140, height: 146.75, position: "relative" }}>
              <div>
                <img src={avatar} className="prof_circular_status1" alt="" />
              </div>
              <div
                style={{ width: 140, height: 140, transform: "rotateZ(42deg)" }}
              >
                <CircularProgressbar value={70} maxValue={131} />
              </div>
              <div
                style={{
                  width: 84.34,
                  height: 33.74,
                  paddingTop: 6.75,
                  paddingBottom: 3.37,
                  paddingLeft: 20.24,
                  paddingRight: 20.24,
                  left: 28.68,
                  top: 0,
                  position: "absolute",
                  background: "white",
                  borderRadius: 26.99,
                  border: "1px #E2EBF3 solid",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 16.87,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    color: "#27AE60",
                    fontSize: 20.24,
                    fontFamily: "Inter",
                    fontWeight: "700",
                    wordWrap: "break-word",
                  }}
                >
                  70%
                </div>
              </div>
            </div>
            <div
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 40,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 24,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 8,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      color: "#00213D",
                      fontSize: 32,
                      fontFamily: "Inter",
                      wordWrap: "break-word",
                    }}
                  >
                    {" "}
                    <strong className="pb-3" style={{ fontWeight: "700" }}>
                      {profileData.firstname} {profileData.lastname}
                    </strong>
                  </div>
                  <div
                    style={{
                      color: "#4A5965",
                      fontSize: 16,
                      fontFamily: "Inter",
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                  >
                    {" "}
                    {profileData.Board ? profileData.Board : "Board"}{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "inline-flex",
              flexDirection: "column",
              gap: 32,
            }}
                  >
                      
                

                      <Personaldetails
                          refid={sectionRefs.personalid}
                          isEditModegap_opt={isEditModegap}
                          isEditMode_opt={isEditMode}
                          edit_btn_img={Pencil}
                          aboutyouCount={profileData.aboutyou}
                          inputChangeFunction={handleInputChange}
                          inputFocus={changeinputfield_focus}
                          inputBlur={changeinputfield_blur}
                          userPersonalDetails={profileData}
                          LanguageCount_opt={LanguageCount}
                          handleSendOTP_opt={handleSendOTP}
                          showVerifyButton_opt={showVerifyButton}
                          handleMobileNumberChange_opt={handleMobileNumberChange}
                          handleEditDetailsClick={handleEditDetailsClick}
                          isEditModegap ={isEditModegap}
                          setProfileData = {setProfileData}
                          DatePicker ={DatePicker}
                          handleDateChange = {handleDateChange}
                          selectedCountryCode = {selectedCountryCode} 
                          setSelectedCountryCode = {setSelectedCountryCode}
                          countryCodes = {countryCodes}
                          sentences ={sentences}
                          Addlanguages = {Addlanguages}
                          addmylanguages = {addmylanguages}
                          setLanguageCount = {setLanguageCount}
                          handleBack = {handleBack}
                          discardchanges ={discardchanges}
                                        />

                       {/*Education Field */}
            <EducationField
              profileData={profileData}
              education_action={education_action}
              sectionRefs={sectionRefs}
              seteducation_action={seteducation_action}
              deleteablebtnclick3={deleteablebtnclick3}
              editablebtnclick3={editablebtnclick3}
              education_editid={education_editid}
              handleEduEditDetailsClick={handleEduEditDetailsClick}
              changeeducationform2={changeeducationform2}
              handleInputChange4={handleInputChange4}
              handledateInputChange4={handledateInputChange4}
              handleeducationalsubmit={handleeducationalsubmit}
              discardfunction3={discardfunction3}
              educationtypevalue={educationtypevalue}
              emptydata3={emptydata3}
              changeeducationform={changeeducationform}
              handleeducationdata={handleeducationdata}
              handleadddateeducationfield={handleadddateeducationfield}
              handleneweducationalesubmit={handleneweducationalesubmit}

            />

            {/* work experience */}
            <WorkExperience
              handleworkexperirnceadata={handleworkexperirnceadata}
              handleadddateInputChange2={handleadddateInputChange2}
              handlenewworkexperiencesubmit={handlenewworkexperiencesubmit}
              emptydata={emptydata}
              handledateInputChange2={handledateInputChange2}
              handleInputChange2={handleInputChange2}
              handleEduEditDetailsClick={handleEduEditDetailsClick}
              workexperience_editid={workexperience_editid}
              setworkexperience_editid={setworkexperience_editid}
              sectionRefs={sectionRefs.educationid}
              workexperience_action={workexperience_action}
              setworkexperience_action={setworkexperience_action}
              editablebtnclick={editablebtnclick}
              deleteablebtnclick={deleteablebtnclick}
              handleworkexperiencesubmit={handleworkexperiencesubmit}
              discardfunction={discardfunction}
              profileData={profileData}
            />

            <TechnicalCompetenciesSection
              skillSectionEditState={skillSectionEditState}
              sectionRefs={sectionRefs}
              profileData={profileData}
              handleSkillEditState={handleSkillEditState}
              saveSkillData={saveSkillData}
              
            />

            {/* Certificates */}
                        <Certificates
                            handlecertdata={handlecertdata}
                            handleadddateInputChange3={handleadddateInputChange3}
                            handlenewcertsubmit={handlenewcertsubmit}
                            emptydata2={emptydata2}
                            handledateInputChange3={handledateInputChange3}
                            handleInputChange3={handleInputChange3}
                            handleEduEditDetailsClick={handleEduEditDetailsClick}
                            cert_editid={cert_editid}
                            setcert_editid={setcert_editid}
                            sectionRefs={sectionRefs.certificateid}
                            cert_action={cert_action}
                            setcert_action={setcert_action}
                            editablebtnclick2={editablebtnclick2}
                            deleteablebtnclick2={deleteablebtnclick2}
                            handlecertsubmit={handlecertsubmit}
                            discardfunction2={discardfunction2}
                            profileData={profileData}
                        />
                    </div>
        </div>
      </div>

      <Verifyotpmodel
        show={showErrorModal}
        handleCloseModal={() => setShowErrorModal(false)}
        handleVerify={handleVerifyOTP}
        handleResendOTP={handleSendOTP}
        enteredOTP={enteredOTP}
        setEnteredOTP={setEnteredOTP}
        errorMessage={unverifiedOTP}
      />
    </div>
  );
}

export default Profile_page;
