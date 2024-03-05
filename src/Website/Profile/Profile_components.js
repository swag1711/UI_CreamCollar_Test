import DatePicker from 'react-datepicker';
import dateFormat from "dateformat";
import { useState } from 'react';
import { IoClose } from "react-icons/io5";

export function Profile_details_header(properties)  {
    return (
  
     <div className={properties.bottomborder}  style={{ width:'100%',}}>
                                   <div style={{ width:'100%',alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 32, display: 'inline-flex'  }}>
                                    <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
                                        <div style={{ color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>{properties.topic}</div>
                                    </div>
                                    <div style={{ justifyContent: 'flex-end', alignItems: 'center', gap: 12, display: 'flex' }}>
                                        <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>
                                            <button  className="buttonbkcolornone2" onClick={properties.clickname} style={{ padding:0, color: '#0B6AEA', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }} > {properties.adddetailsbtn? (<span>Add Details <img src={properties.imgtoshow} style={{ marginLeft: 6, height: 22 }} alt="" /></span>):('')}</button>
                                        </div>

                                    </div>
                                    </div>
                                    <div style={{clear:'both !important',fontSize:14,fontWeight:400}}>{properties.subTopic}</div>
                                    
                                    
                                </div>
  
    );
  }
  
export function Profile_details_generalview(properties){
    return(
        <div style={{alignSelf: 'stretch', height: 74, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex',width:'100%'}}>
        <div style={{ alignSelf: 'stretch',padding: 16, background: '#F2F7FE', borderRadius: 8, justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'inline-flex'}}>
            <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', height: 42, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
                    <div style={{color: '#00213D', fontSize: 12, fontFamily: 'Inter', fontWeight: '600',  wordWrap: 'break-word'}}>{properties.heading}</div>
                    <div style={{alignSelf: 'stretch', color: '#4A5965', fontSize: 16, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>{properties.description}</div>
                </div>
            </div>
            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                <div style={{width: 32, height: 32, position: 'relative'}}>
                  <img src={properties.editicon} onClick={properties.editbtnclick}  style={{width: 32, height: 32, position: 'relative'}} />
                   
                </div>
                <div style={{width: 32, height: 32, position: 'relative'}}>
                    <img src={properties.deleteicon} onClick={properties.deletebtnclick} style={{width: 32, height: 32, position: 'relative'}}/>
                </div>
            </div>
        </div>
    </div>
    );
}

export function Profile_details_interestview(properties){
    return(
        

       <div style={{alignSelf: 'stretch', height: 66, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex'}}>
            <div style={{color: '#00213D', fontSize: 12, fontFamily: 'Inter', fontWeight: '600',  wordWrap: 'break-word'}}>{properties.heading}</div>
            <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
                <div style={{paddingLeft: 24, paddingRight: 24, paddingTop: 8, paddingBottom: 8, borderRadius: 20, border: '1px #E2EBF3 solid', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
                    <div style={{color: '#4A5965', fontSize: 16, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>{properties.keyelements}Figma</div>
                </div>
                <div style={{paddingLeft: 24, paddingRight: 24, paddingTop: 8, paddingBottom: 8, borderRadius: 20, border: '1px #E2EBF3 solid', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
                    <div style={{color: '#4A5965', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Photoshop</div>
                </div>
                <div style={{paddingLeft: 24, paddingRight: 24, paddingTop: 8, paddingBottom: 8, borderRadius: 20, border: '1px #E2EBF3 solid', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
                    <div style={{color: '#4A5965', fontSize: 16, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>Illustrator</div>
                </div>
            </div>
        </div>
      
    

    );
}
export function Profile_edit_educational_content(properties){
    const educationtype={"Class X":"Class X","Class XII":"Class XII","Graduation":"Graduation","Post Graduation":"Post Graduation"};
    const boardtype={"Board of Primary Education":"Board of Primary Education","Board of Secondary Education":"Board of Secondary Education","University":"University"};
    const schoolmedium = {"English":"English","Telugu":"Telugu","Tamil":"Tamil","Hindi":"Hindi"};
    return(
       
    
        <div style={{alignSelf: 'stretch', paddingBottom: 32, borderBottom: '1px #E2EBF3 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex'}}>
            <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '40px', display: 'inline-flex'}}>
            <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>                                         
                     <Textselectbox textplacing="Education"  keyname="education" valuechange={properties.specificvaluechange} selectedvalue={properties.mydata.education} datatoselect={educationtype}/>                                        
                 </div>
	            <div style={{flex: '1 1 0px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '4px', display: 'inline-flex',alignSelf:'stretch'}}>
                        <Textselectbox textplacing="Board"  keyname="board" valuechange={properties.valuechange} selectedvalue={properties.mydata.board} datatoselect={boardtype}/>             
	            </div>
             </div>
             <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '40px', display: 'inline-flex'}}>
            <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>                                         
                       <Textselectbox textplacing="School Medium"  keyname="schoolmedium" valuechange={properties.valuechange} selectedvalue={properties.mydata.schoolmedium} datatoselect={schoolmedium}/>             
	            </div>
	            <div style={{flex: '1 1 0px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '4px', display: 'inline-flex',alignSelf:'stretch'}}>
                <ProfileDatePicker textplacing="End Date" changedate={properties.changedate} keyname="enddate" valuechange={properties.valuechange} realdata={properties.mydata.enddate}/>                                        
                  </div>
             </div>
             <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '40px', display: 'inline-flex'}}>
            <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>                                         
            <Textinputfield textplacing="Mark in %" keyname="mark" valuechange={properties.valuechange} realdata={properties.mydata.mark}/>                                        
                 </div>
	            <div style={{flex: '1 1 0px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '4px', display: 'inline-flex',alignSelf:'stretch'}}>
                     </div>
             </div>
             
        </div>
   


    );
}


export function Profile_edit_educational_content2(properties){
    const educationtype={"Class X":"Class X","Class XII":"Class XII","Graduation":"Graduation","Post Graduation":"Post Graduation"};
    
    const courses ={
        'B.E': 'B.E',
        'B.B.A': 'B.B.A',
        'B.Tech': 'B.Tech',
        'B.A': 'B.A',
        'M.E': 'M.E',
        'M.B.A': 'M.B.A',
        'M.A': 'M.A'
      }
   
      const specializations = {
        'Computer Science': 'Computer Science',
        'Business Administration': 'Business Administration',
        'Electrical Engineering': 'Electrical Engineering',
        'Mechanical Engineering': 'Mechanical Engineering',
        'Psychology': 'Psychology',
        'Civil Engineering': 'Civil Engineering',
        'Mechatronics': 'Mechatronics',
        'Thermal Engineering': 'Thermal Engineering',
        'Automobile Engineering': 'Automobile Engineering'
      };
      const gradingtypelist = {"Percentage":"Percentage","GPA":"GPA"};
    return(
       
    
        <div style={{alignSelf: 'stretch', paddingBottom: 32, borderBottom: '1px #E2EBF3 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex'}}>
            <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '40px', display: 'inline-flex'}}>
            <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>                                         
                     <Textselectbox textplacing="Education"  keyname="education" valuechange={properties.specificvaluechange} selectedvalue={properties.mydata.education} datatoselect={educationtype}/>                                        
                 </div>
	            <div style={{flex: '1 1 0px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '4px', display: 'inline-flex',alignSelf:'stretch'}}>
                        <Textinputfield textplacing="University/College" keyname="university" valuechange={properties.valuechange} realdata={properties.mydata.university}/>                                        
               </div>
             </div>
             <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '40px', display: 'inline-flex'}}>
            <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>                                         
                       <Textselectbox textplacing="Courses"  keyname="courses" valuechange={properties.valuechange} selectedvalue={properties.mydata.courses} datatoselect={courses}/>             
	            </div>
	            <div style={{flex: '1 1 0px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '4px', display: 'inline-flex',alignSelf:'stretch'}}>
                <Textselectbox textplacing="Specializations"  keyname="specializations" valuechange={properties.valuechange} selectedvalue={properties.mydata.specializations} datatoselect={specializations}/>             
	             </div>
             </div>
             <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '40px', display: 'inline-flex'}}>
            <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>                                         
                     <ProfileDatePicker textplacing="Start Date" changedate={properties.changedate} keyname="startdate" valuechange={properties.valuechange} realdata={properties.mydata.startdate}/>                                        
                 </div>
	            <div style={{flex: '1 1 0px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '4px', display: 'inline-flex',alignSelf:'stretch'}}>
                    <ProfileDatePicker textplacing="End Date" changedate={properties.changedate} keyname="enddate" valuechange={properties.valuechange} realdata={properties.mydata.enddate}/>                
	            </div>
             </div>

             <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '40px', display: 'inline-flex'}}>
            <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>                                         
            <Textselectbox textplacing="Grading System"  keyname="gradingtype" valuechange={properties.valuechange} selectedvalue={properties.mydata.gradingtype} datatoselect={gradingtypelist}/>             
	          </div>
	            <div style={{flex: '1 1 0px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '4px', display: 'inline-flex',alignSelf:'stretch'}}>
                <Textinputfield textplacing="Mark in %" keyname="mark" valuechange={properties.valuechange} realdata={properties.mydata.mark}/>                                        
              </div>
             </div>
             
        </div>
   


    );
}

export function Profile_edit_view_content(properties){
    const employertype={"CurrentEmployer":"CurrentEmployer","PreviousEmployer":"PreviousEmployer"};
    const employmenttype={"FullTime":"FullTime","PartTime":"PartTime","Intenship":"Intenship"};
    return(
       
    
        <div style={{alignSelf: 'stretch', paddingBottom: 32, borderBottom: '1px #E2EBF3 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex'}}>
            <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '40px', display: 'inline-flex'}}>
            <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>                                         
                     <Textselectbox textplacing="Current Employer"  keyname="employertype" valuechange={properties.valuechange} selectedvalue={properties.mydata.employertype} datatoselect={employertype}/>                                        
                 </div>
	            <div style={{flex: '1 1 0px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '4px', display: 'inline-flex',alignSelf:'stretch'}}>
                        <Textselectbox textplacing="Employment Type"  keyname="employmenttype" valuechange={properties.valuechange} selectedvalue={properties.mydata.employmenttype} datatoselect={employmenttype}/>             
	            </div>
             </div>
             <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '40px', display: 'inline-flex'}}>
            <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>                                         
                     <Textinputfield textplacing="Company Name" keyname="companyname" valuechange={properties.valuechange} realdata={properties.mydata.companyname}/>                                        
                 </div>
	            <div style={{flex: '1 1 0px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '4px', display: 'inline-flex',alignSelf:'stretch'}}>
                        <Textinputfield textplacing="Designation" keyname="designation" valuechange={properties.valuechange} realdata={properties.mydata.designation}/>             
	            </div>
             </div>
             <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '40px', display: 'inline-flex'}}>
            <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>                                         
                     <ProfileDatePicker textplacing="Joining Date" changedate={properties.changedate} keyname="joiningdate" valuechange={properties.valuechange} realdata={properties.mydata.joiningdate}/>                                        
                 </div>
	            <div style={{flex: '1 1 0px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '4px', display: 'inline-flex',alignSelf:'stretch'}}>
                    <ProfileDatePicker textplacing="Worked Till" changedate={properties.changedate} keyname="lastworkingday" valuechange={properties.valuechange} realdata={properties.mydata.lastworkingday}/>                
	            </div>
             </div>
             <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '40px', display: 'inline-flex'}}>
            <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>                                         
                     <Textinputfieldarea textplacing="Job description" keyname="jobdescription" valuechange={properties.valuechange} realdata={properties.mydata.jobdescription} />                                        
                 </div>
	            
             </div>
        </div>
   


    );
}

export function Profile_interest_edit_view(properties){
  return(
    <div style={{alignSelf: 'stretch',  paddingBottom: 32, borderBottom: '1px #E2EBF3 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex'}}>
          <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '40px', display: 'inline-flex'}}>
            <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>                                         
                       <Textinputfield keyname="cetification_provider_name"  valuechange={properties.valuechange} realdata={properties.mydata.cetification_provider_name} textplacing="Certification Provider Name" />                                    
                 </div>
	            <div style={{flex: '1 1 0px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '4px', display: 'inline-flex',alignSelf:'stretch'}}>
                       <Textinputfield keyname="certificatio_course_name"  valuechange={properties.valuechange} realdata={properties.mydata.certificatio_course_name} textplacing="Certification Course Name" />            
	            </div>
             </div>
             <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '40px', display: 'inline-flex'}}>
            <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>                                         
                       <Textinputfield keyname="certificate_url"  valuechange={properties.valuechange} realdata={properties.mydata.certificate_url} textplacing="Designation" />                                       
                 </div>
	            <div style={{flex: '1 1 0px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '4px', display: 'inline-flex',alignSelf:'stretch'}}>
                    <ProfileDatePicker keyname="certification_date" changedate={properties.changedate} valuechange={properties.valuechange} realdata={properties.mydata.certification_date} textplacing="Worked Till"/>                
     
	            </div>
             </div>
    </div>

  );
}

export function Textinputfieldarea(properties){
    return(
    <div style={{ width: '100%', height:'159px', alignSelf: 'stretch', borderRadius: '12px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
    <label id={'log_lab_aboutyou'} style={{ marginTop: '-7px', position: 'absolute', display: 'none', color: '#0B6AEA', marginLeft: '20px', zIndex: 1, fontSize: '12px', padding: '0 8px', background: 'white', fontFamily: 'Inter', fontWeight: 400, lineHeight: '15px', wordWrap: 'break-word' }}>About You</label>
    <textarea rows="3" className="log_btn_hover" style={{  height:'159px', resize: 'none', padding: '16px 28px', alignSelf: 'stretch', paddingTop: '16px', paddingBottom: '16px', background: 'white', borderRadius: '12px', border: '1px #E2EBF3 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }} type="text" id={properties.keyname} name={properties.keyname} onChange={properties.valuechange} placeholder={properties.textplacing} maxLength={500} required autoComplete="off" >
       {properties.realdata}
        </textarea>
    <div style={{ position: 'absolute', bottom: '0px', right: '27px',paddingBottom:16, color: '#80919F', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>
         0/500
    </div>
    <span style={{ marginLeft: '28px', color: '#EB5757', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400, lineHeight: '15px', wordWrap: 'break-word' }}></span>
</div>
);
}
export function Textinputfield(properties){
    return (
        <div style={{ width: '100%', alignSelf: 'stretch', height: '57px', borderRadius: '12px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
        <label id={'log_lab_lastname'} style={{ marginTop: '-7px', position: 'absolute', display: 'none', color: '#0B6AEA', marginLeft: '20px', zIndex: 1, fontSize: '12px', padding: '0 8px', background: 'white', fontFamily: 'Inter', fontWeight: 400, lineHeight: '15px', wordWrap: 'break-word' }}>Last Name</label>
        <input className="log_btn_hover" style={{ padding: '16px 28px', alignSelf: 'stretch', height: '57px', paddingTop: '16px', paddingBottom: '16px', background: 'white', borderRadius: '12px', border: '1px #E2EBF3 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }} type="text" id={properties.keyname} name={properties.keyname} onChange={properties.valuechange} placeholder={properties.textplacing} value={properties.realdata} required autoComplete="off" />
        <span style={{ marginLeft: '28px', color: '#EB5757', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400, lineHeight: '15px', wordWrap: 'break-word' }}>
        </span>
    </div>
    );
}
export function ProfileDatePicker(properties){
    return(
        <div style={{ width: '100%', alignSelf: 'stretch', height: '57px', borderRadius: '12px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex', paddingBottom: 15 }}>
                                                                <label id={'log_lab_dob'} style={{ marginTop: '-7px', position: 'absolute', display: 'none', color: '#0B6AEA', marginLeft: '20px', zIndex: 1, fontSize: '12px', padding: '0 8px', background: 'white', fontFamily: 'Inter', fontWeight: 400, lineHeight: '15px', wordWrap: 'break-word' }}>Date of Birth</label>
                                                                
                                                                <DatePicker className="customDatePicker log_btn_hover"
                                                                    
                                                                    style={{ padding: '16px 20px !important', alignSelf: 'stretch', height: '100px', paddingTop: '16px', paddingBottom: '16px', background: 'white', borderRadius: '12px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }} 
                                                                    id={properties.keyname} name={properties.keyname}  required autoComplete="off"
                                                                    // dateFormat="dd/MM/yyyy"
                                                                    dateFormat="yyyy-mm-dd"
                                                                    maxDate={new Date()}
                                                                    
                                                                    onChange={(date) =>{properties.changedate(properties.keyname,date)}}
                                                                    showYearDropdown
                                                                    scrollableYearDropdown
                                                                    yearDropdownItemNumber={100}
                                                                    placeholderText={properties.textplacing}
                                                                /></div>
    );
}
export function Textselectbox(properties){
    return(
        <div style={{ width: '100%', alignSelf: 'stretch', height: '57px', borderRadius: '12px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex', paddingTop: 0 }}>
                                                                <label id={'log_lab_gender'} style={{ marginTop: '-7px', position: 'absolute', display: 'none', color: '#0B6AEA', marginLeft: '20px', zIndex: 1, fontSize: '12px', padding: '0 8px', background: 'white', fontFamily: 'Inter', fontWeight: 400, lineHeight: '15px', wordWrap: 'break-word' }}>Gender</label>
                                                                <select className="log_btn_hover" id={properties.keyname}  name={properties.keyname} style={{ padding: '16px 28px', alignSelf: 'stretch', height: '57px', paddingTop: '16px', paddingBottom: '16px', background: 'white', borderRadius: '12px', border: '1px #E2EBF3 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }} type="text" 
                                                                    onChange={properties.valuechange}
                                                                    // onFocus={changeinputfield_focus} onBlur={changeinputfield_blur} 
                                                                    required autoComplete="off"  >
                                                                    <option value="Select" style={{fontSize:14,fontWeight:400,fontFamily:'Inter'}} hidden>{properties.textplacing}</option>
                                                                    {Object.entries(properties.datatoselect).map(([key, value]) => (
                                                                      <option key={key} value={key}   selected={properties.selectedvalue==value?'selected':''}>
                                                                      {value}
                                                                    </option>

                                                                       ))}
                                                                
                                                                    
                                                                   

                                                                </select><span style={{ marginLeft: '28px', color: '#EB5757', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400, lineHeight: '15px', wordWrap: 'break-word' }}>
                                                                </span>
         </div>
    );
}
export function Profile_edit_view_footer(properties){
   return(
    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'inline-flex'}}>
    <button  style={{paddingLeft: 32, paddingRight: 32, paddingTop: 12, paddingBottom: 12, background: '#0B6AEA', borderRadius: 8, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
        <div style={{color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '700',  wordWrap: 'break-word'} } onClick={properties.clickingsubmitbtn} >Save Changes</div>
    </button>
    
    <button style={{background:'none'}}><div style={{color: '#0B6AEA', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}} onClick={properties.discard_editview}>Discard Changes</div></button>
    <div style={{width: 12, height: 12, background: 'white'}}></div>
</div>
   );
}


export function TechnicalCompetencies(props) {
    const softwareVehicleSkills = [
        "Select a Option",
        "C", 
        "C++", 
        "Python", 
        "Rust", 
        "QNX", 
        "VxWorks", 
        "FreeRTOS",
        "Integrity",
        "AUTOSAR", 
        "ISO 26262", 
        "Sensor Fusion",
        "Computer Vision",
        "Machine Learning",
        "Deep Learning",
        "Path Planning",
        "Control", 
        "CARLA",
        "Gazebo",
        "LGSVL Simulator",
        "V2V",
        "V2I",
        "V2P",
        "5G",
        "LTE",
        "DSRC",
        "Wi-Fi",
        "Bluetooth",
        "TCP/IP",
        "CAN bus",
        "LIN bus",
        "FlexRay",
        "OTA Updates",
        "HMI Design",
        "UX", 
        "Android Automotive",
        "Linux",
        "QNX",
        "OpenGL",
        "Qt",
        "Flutter",
        "Android Auto",
        "Apple CarPlay",
        "Encryption",
        "Authentication",
        "Secure Coding",
        "Threat Modeling",
        "Risk Assessment", 
        "IDPS",
        "Software Testing",
        "Validation",
        "Software Architecture",
        "Cloud Computing",
        "DevOps",
        "CI/CD" 
    ];
    
    const {selectedSkill,discardSkills} = props
      const selectedvalueskills = selectedSkill?selectedSkill:[];
      const [skillArr,setSkill] = useState(softwareVehicleSkills)
      const [selectedSkillArr,setSelectedSkillArr] = useState(selectedvalueskills)
      
      const chooseSkill = (event) => {
          const skillChoosed = (event.target.value)
          const filtered = softwareVehicleSkills.filter((each) => !selectedSkillArr.includes(each))
    
          setSkill([...filtered])
    
          setSelectedSkillArr([...selectedSkillArr,skillChoosed])
        }
    
        const removeSkill = (skill) => {
           const filterSelectedSkillArr = selectedSkillArr.filter((each) => each !== skill)
           setSkill([...skillArr,skill])
           setSelectedSkillArr(filterSelectedSkillArr)
        }

        const saveSkills = () => {
            console.log(selectedSkillArr)
            const {saveSkillData,toggleSkillSection} = props 
            saveSkillData(selectedSkillArr)    
            toggleSkillSection()
        }
        
        // const discardSkills = () => setSelectedSkillArr([])

      return (
        <div className='skill-section-container'>
          <div className='skill-flexbox'>
           
            <div className='skill-selection-flexbox'>
               
               <div className='selected-option-flexbox'>
               <select disabled={selectedSkillArr.length >= 7} className='skill-input-section' onChange={chooseSkill}>
                  {
                    skillArr.map((each) => <option disabled={each === 'Select a Option'} selected={each === 'Select a Option'} >{each}</option>)
                  }
                </select>
               </div>
               
                <ul className='skill-selected-section'>
                    {selectedSkillArr.map((each) => <li key={each} className='skill-selected' ><p className='skill-text'  >{each}</p> <IoClose onClick={() => removeSkill(each)}   /></li>)}
                </ul>
            </div>
                  
            

         
            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'inline-flex'}}>
    <button  style={{paddingLeft: 32, paddingRight: 32, paddingTop: 12, paddingBottom: 12, background: '#0B6AEA', borderRadius: 8, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
        <div style={{color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '700',  wordWrap: 'break-word'} }  onClick={saveSkills} >Save Changes</div>
    </button>
    
    <button style={{background:'none'}}><div style={{color: '#0B6AEA', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}} onClick={discardSkills}>Discard Changes</div></button>
    <div style={{width: 12, height: 12, background: 'white'}}></div>
</div>
          </div>
        </div>
        )
}



export function TechnicalCompetenciesSelected(props) {
    
    const {selectedSkill} = props 

      return (
        <div className='skill-section-container'>
          <div className='skill-flexbox'>
            <div className='skill-selection-flexbox'>           
                <ul className='skill-selected-section'>
                    {selectedSkill.map((each) => <li key={each} className='skill-selected' ><p className='skill-text' >{each}</p> </li>)}
                </ul>
            </div>
                   
          </div>
        </div>
        )
}

export  function Addlanguages(properties) {
    const listproficiency = {"Beginner":"Beginner","Moderate":"Moderate","Proficient":"Proficient"};
    const listoflanguages = {"English":"English","తెలుగు":"తెలుగు","தமிழ்":"தமிழ்","हिन्दी":"हिन्दी"}; 
    return (

        <div style={{width:'100%',alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '40px', display: 'inline-flex'}}>
       <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>                                         
          

<div style={{ width: '100%', alignSelf: 'stretch', height: '57px', borderRadius: '12px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex', paddingTop: 0 }}>
                                                        <label id={'log_lab_language'} style={{ marginTop: '-7px', position: 'absolute', display: 'none', color: '#0B6AEA', marginLeft: '20px', zIndex: 1, fontSize: '12px', padding: '0 8px', background: 'white', fontFamily: 'Inter', fontWeight: 400, lineHeight: '15px', wordWrap: 'break-word' }}>Language</label>
                                                        <select className="log_btn_hover" style={{ padding: '16px 28px', alignSelf: 'stretch', height: '57px', paddingTop: '16px', paddingBottom: '16px', background: 'white', borderRadius: '12px', border: '1px #E2EBF3 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }} type="text" id='Language' name='Language' key={properties.currentid} currentid={properties.currentid} onChange={properties.valuechange} placeholder='Language' required autoComplete="off"

                                                        >
                                                              <option value="" style={{fontSize:14,fontWeight:400,fontFamily:'Inter'}} hidden>Language</option>
                                                            {Object.entries(listoflanguages).map(([key, value]) => (
                                                                      <option key={key} value={key}   selected={properties.selectedvalue.Language==value?'selected':''}>
                                                                      {value}
                                                                    </option>

                                                                       ))}
                                                          
                                                          

                                                        </select><span style={{ marginLeft: '28px', color: '#EB5757', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400, lineHeight: '15px', wordWrap: 'break-word' }}>
                                                        </span>
                                                    </div>

</div>
                                                
<div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>                                         
                                                                  
                                                    <div style={{ width: '100%', alignSelf: 'stretch', height: '57px', borderRadius: '12px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex', paddingTop: 0 }}>
                                                        <label id={'log_lab_Proficiency'} style={{ marginTop: '-7px', position: 'absolute', display: 'none', color: '#0B6AEA', marginLeft: '20px', zIndex: 1, fontSize: '12px', padding: '0 8px', background: 'white', fontFamily: 'Inter', fontWeight: 400, lineHeight: '15px', wordWrap: 'break-word' }}>Proficiency</label>
                                                        <select className="log_btn_hover" style={{ padding: '16px 28px', alignSelf: 'stretch', height: '57px', paddingTop: '16px', paddingBottom: '16px', background: 'white', borderRadius: '12px', border: '1px #E2EBF3 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }} type="text" id='Proficiency' name='Proficiency' placeholder='Proficiency' currentid={properties.currentid} onChange={properties.valuechange} required autoComplete="off"

                                                        >
                                                            <option value="" style={{fontSize:14,fontWeight:400,fontFamily:'Inter'}} hidden>Proficiency</option>
                                                            {Object.entries(listproficiency).map(([key, value]) => (
                                                                      <option key={key} value={key}   selected={properties.selectedvalue.Proficiency==value?'selected':''}>
                                                                      {value}
                                                                    </option>

                                                                       ))}
                                                            

                                                        </select><span style={{ marginLeft: '28px', color: '#EB5757', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400, lineHeight: '15px', wordWrap: 'break-word' }}>
                                                        </span>
                                                       
                                                    </div>
                                                    </div>
                                                    </div>
                                        
    )
}