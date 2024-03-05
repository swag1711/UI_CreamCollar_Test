import {useState} from 'react';
import notstarted from '../../../assets/img/ep_lock.png';
import completed from '../../../assets/img/simple-line-icons_check.png';
import inprogress from '../../../assets/img/Frame 4.png';
import $ from 'jquery';
import oidcConfig from './oidcconfic';
export function TopicSubcomponent({ modules }) {
  return (
    <div style={{ width: '100%', height: 'auto', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5, display: 'flex' }}>
      <div style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>{modules.name}</div>
      <div style={{ color: '#697077', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}> <div dangerouslySetInnerHTML={{ __html: modules.summary }} /></div>
    </div>
  );
}
  const Valuesof_TopicSubcomponent1 ={"topic":"Automotive Industry Value Chain","description":"Video  |  10 min"};
  const Valuesof_TopicSubcomponent2 ={"topic":"utomotive Industry Value Chain","description":"Video  |  20 min"};
  const Valuesof_TopicSubcomponent3 ={"topic":"tomotive Industry Value Chain","description":"Video  |  30 min"};
  
export function ModulesSubcomponent({content,target}){
  console.log('content', content)

  const modules = content && Array.isArray(content.modules) ? content.modules : [];
  const Handlearrow = (targetvalue) =>{
    var value = ($('#'+targetvalue).val());
    if(value)
    $('#'+targetvalue).css({'transform' : 'rotate(0deg)'});
    else
    $('#'+targetvalue).css({'transform' : 'rotate(180deg)'});
    
    $('#'+targetvalue).val(!value);
  }

  const generateMoodleModuleUrl = (id) => {
    return `${oidcConfig.moodleBaseUrl}/course/view.php?id=16#sectionid-${id}-title`;
  };

  return (
    <div style={{marginRight: 5,borderRadius: 20, paddingRight: 10,alignSelf: 'stretch', height:'auto',padding: 32, background: 'white', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 20, display: 'flex'}}>
        
        <div style={{width:'100%', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex'}}>
                <div style={{width: '90%', alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex'}}>
                    <div style={{alignSelf: 'stretch', color: '#4A5965', fontSize: 12, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>MODULE {target+1}</div>
                    <div style={{alignSelf: 'stretch',  flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                        <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                        <a href={generateMoodleModuleUrl(content.id)} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none',color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '700',  wordWrap: 'break-word'}}>{content.name}</a>                        </div>
                       
                        {content.summary ?
                       ( <div className="div_has_ptag" style={{alignSelf: 'stretch', color: '#4A5965', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}> <div dangerouslySetInnerHTML={{ __html: content.summary }}></div>
                        
                        </div>):''}
                         </div>
                         <div style={{alignSelf: 'stretch',color: '#4A5965', fontSize: 12, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word',}}>5 hours</div>
            
                   
                </div>
                <div className='arrowcontainer' style={{width: 40, height: 40, position: 'relative'}}>
                   
                    <div
                    id={"arrow"+target}
              onClick={()=>Handlearrow("arrow"+target)}    
              className="arrowexpand"
              type="button"
              value="0"
              data-bs-toggle="collapse"
              data-bs-target={"#"+target}
              role="button"
              
              style={{width: 21, height: 20, left: 10, top: 14.50, position: 'absolute',}}
              
            ><i  className="bi bi-chevron-down" ></i>
               </div>
                    
                </div>
            </div>
            <div style={{ width: '100%' }} id={target} className="collapse">
        <div style={{ width: '100%', alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 20, display: 'flex' }}>
          <div style={{ alignSelf: 'stretch', height: 0, border: '1px #DDE1E6 solid' }}></div>
          {modules.map((module, index) => (
        <TopicSubcomponent key={index} modules={module} />
      ))}
        </div>
      </div>
    </div>
  );
}


export function VideoSubTopics({content,icontype}){
  let iconvalue;
  switch(icontype){
    case "completed":
      iconvalue = (completed);
      break;
    case "inprogress":
      iconvalue = (inprogress);
      break;
    case "notstarted":
      iconvalue = (notstarted);
      break;
  }

  return(
    <div style={{alignSelf: 'stretch', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'inline-flex'}}>
                        <div style={{ position: 'relative'}}>
                            <div>
                              <img src={iconvalue} alt=""></img>
                            </div>
                        </div>
                        <div style={{flex: '1 1 0', color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>Automotive Industry Value Chain </div>
                    </div>
  );
}

export function VideoTopics({content,targetid}){
  const Handlearrow = (targetvalue) =>{
    var value = ($('#'+targetvalue).val());
    if(value)
    $('#'+targetvalue).css({'transform' : 'rotate(0deg)'});
    else
    $('#'+targetvalue).css({'transform' : 'rotate(180deg)'});
    
    $('#'+targetvalue).val(!value);
  }
  
  return(
    <div style={{alignSelf: 'stretch', height: 'auto', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                <div style={{alignSelf: 'stretch', paddingLeft: 25, paddingRight: 25, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 15, display: 'inline-flex'}}>
                    <div style={{flex: '1 1 0', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '600',  wordWrap: 'break-word'}}>Awareness On Automotive Industry</div>
                    <div style={{width: 24, height: 24, position: 'relative', transformOrigin: '0 0'}}>
                    <div
                     id={"arrow"+targetid}
                     onClick={()=>Handlearrow("arrow"+targetid)}   
                   type="button"
                   value="0"
                   data-bs-toggle="collapse"
                   data-bs-target={"#"+targetid}
                   role="button"
                   style={{width: 12.60, height: 6.60}}
                   
                   ><i  className="bi bi-chevron-down"></i>
                    </div>
                        
                    </div>
                </div>
                <div id={targetid} className="collapse">
                    <div  style={{alignSelf: 'stretch', height: 'auto', paddingLeft: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                    
                      <VideoSubTopics icontype="completed" />
                      <VideoSubTopics icontype="inprogress"/>
                      <VideoSubTopics icontype="notstarted"/>
                    </div>
                </div>
            </div>
  );
}