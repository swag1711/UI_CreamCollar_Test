import React, { useState, useEffect } from 'react';

function ProfilePageFLComponent(props) {
   

    const [profileData, setProfileData] = useState({
        firstname: '',
        lastname: '',
        // username: '',
        email: '',
        city: '',
        nationality: '',
        mobileNumber: '',
        permanentAddress: '',
        college: '',
        degree: '',
        gender: 'Select',
        dateOfBirth: new Date(),
        Enddate: new Date(),
        Languages: [{
            Language: 'English',
            Proficiency: 'Beginner',

        }],
        aboutyou: '',
        Education: 'Select',
        Board: 'Select',
        SchoolMedium: 'Select',
        Marks: '',
        linkedinprofile: '',

    });

    var labelId = props.labelId; //lastname
    var labelName = props.labelName; //Last Name*  
    const changeinputfield_focus =(e) =>{
        var log_lab = document.getElementById(`log_lab_${e.target.id}`);
        log_lab.style.display='block';
        log_lab.style.color='#0B6AEA';
      }
      const changeinputfield_blur =(e) =>{
        var log_lab = document.getElementById(`log_lab_${e.target.id}`);
        log_lab.style.color='#4A5965';
      }

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value });
    };

    if(labelId == 'aboutyou'){
        return (<div style={{ width: '100%', alignSelf: 'stretch',  borderRadius: '12px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex', paddingBottom:30 }}>
        <label id={'log_lab_'+labelId} style={{ display: 'none', color: '#0B6AEA', marginLeft: '20px', marginBottom: '-5px', zIndex: 1, fontSize: '12px', padding: '0 8px', background: 'white', fontFamily: 'Inter', fontWeight: 400, lineHeight: '15px', wordWrap: 'break-word' }}>{labelName}</label>
        <textarea rows="3" className="log_btn_hover" style={{resize: 'none' , padding: '16px 28px', alignSelf: 'stretch',  paddingTop: '16px', paddingBottom: '16px', background: 'white', borderRadius: '12px', border: '1px #0B6AEA solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }} type="text" id={labelId} name={labelId}  placeholder='What are you upto' value={profileData[labelId]} onChange={handleInputChange} onFocus={changeinputfield_focus} onBlur={changeinputfield_blur} maxLength={500} required autoComplete="off" />
        <div style={{ alignSelf: 'stretch', textAlign: 'right', color: '#80919F', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>
                                                                {profileData.aboutyou ? profileData.aboutyou.length : 0}/500

                                                            </div>
        <span style={{ marginLeft: '28px', color: '#EB5757', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400, lineHeight: '15px', wordWrap: 'break-word' }}>
       
        </span>
        
    </div>);
    }

   

    return (
        <div style={{ width: '100%', alignSelf: 'stretch', height: '57px', borderRadius: '12px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex', paddingTop:5}}>
            <label id={'log_lab_'+labelId} style={{ display: 'none', color: '#0B6AEA', marginLeft: '20px', marginBottom: '-5px', zIndex: 1, fontSize: '12px', padding: '0 8px', background: 'white', fontFamily: 'Inter', fontWeight: 400, lineHeight: '15px', wordWrap: 'break-word' }}>{labelName}</label>
            <input className="log_btn_hover" style={{ padding: '16px 28px', alignSelf: 'stretch', height: '57px', paddingTop: '16px', paddingBottom: '16px', background: 'white', borderRadius: '12px', border: '1px #0B6AEA solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }} type="text" id={labelId} name={labelId} placeholder={labelName} value={props.value} onChange={handleInputChange} onFocus={changeinputfield_focus} onBlur={changeinputfield_blur} required autoComplete="off" />
            <span style={{ marginLeft: '28px', color: '#EB5757', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400, lineHeight: '15px', wordWrap: 'break-word' }}>
            </span>
        </div>
    );
}

export default ProfilePageFLComponent;