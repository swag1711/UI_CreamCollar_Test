import {useState} from 'react';
import {VideoTopics,VideoSubTopics} from './Listoffunctions.js';
import './journey.css';
function Videolisting()  {
  const [active_videosubheading,setactive_videosubheading] = useState('Transcript');
  const [videomenuactive,setvideomenu] = useState(1);
  let videosubheadingcontent = '';
  switch(active_videosubheading){
    case "Transcript":
            videosubheadingcontent = ('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum <br/><br/> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur');
            break;
    case "Keypoints":
            videosubheadingcontent = ('keypoints');
            break;
    case "Reading":
            videosubheadingcontent = ('Reading');
            break;
    case "Notes":
            videosubheadingcontent = ('Notes');
            break;
  }
    return (
  <div className="row" style={{margin:0,padding:0}}>
    <div className="col-md-12" style={{margin:0,padding:0}}>
       <div className="commonvideolisting">
       <div className="row" style={{margin:0,padding:0}}>
            <div className="col-md-3" style={{textAlign:'center', margin:0,padding:20,borderRight: '1px #DDE1E6 solid'}}>
            <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex',textAlign:'center',alignItems:'center'}}>
            <div style={{color: '#0F62FE', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>{videomenuactive?"Hide":"Show"} Course Menu</div>
            <div style={{  position: 'relative'}} onClick={()=>setvideomenu(!videomenuactive)}>
                <div><i class="bi bi-list" style={{fontSize:'15px'}}></i></div>
            </div>
        </div>
        </div>
        <div className="col-md-9" style={{margin:0,padding:0}}>
                    <div style={{width: '100%', paddingLeft: 70, paddingRight: 70, paddingTop: 20, paddingBottom: 20,  background: '#F2F4F8', borderBottom: '1px #DDE1E6 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 5, display: 'inline-flex'}}>
        <div style={{color: '#0F62FE', fontSize: 14, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>My Journey</div>
        
        <div><i  className="bi bi-chevron-right" style={{fontSize:'12px'}}></i></div>
        
        <div style={{color: '#0F62FE', fontSize: 14, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>Automotive Industry Awareness Learning Path</div>
       
        <div><i  className="bi bi-chevron-right" style={{fontSize:'12px'}}></i></div>
       
        <div style={{color: '#0F62FE', fontSize: 14, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>Content</div>
                    </div>
                    </div>
        </div>
        <div className="row" style={{margin:0,padding:0}}>
            <div className={`${videomenuactive?"col-md-3":"videomenudisplay"}`} style={{margin:0,padding:25,borderRight: '1px #DDE1E6 solid'}}>
           
        <div className="videoselection" style={{marginTop:'10%'}}>
        <div style={{alignSelf: 'stretch', height: 'auto', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'flex'}}>
           
            <VideoTopics targetid="videotopic1" />
             <VideoTopics targetid="videotopic2"/>
             <VideoTopics targetid="videotopic3"/>
             <VideoTopics targetid="videotopic4"/>

                  </div>
                  </div>
            </div>
            <div className={`${videomenuactive?"col-md-9":"col-md-12"}`} style={{margin:0,padding:0}}>
              <div className="videolistingright">
                <div className="row" style={{margin:0,padding:0}}>
                    <div className="col-md-12" style={{margin:0,padding:0}}>
                    <div className="videorightcontainer" style={{width:'100%',padding:'2% 5%',display:"inline-flex",flexDirection:'column',justifyContent:'flex-start',gap:20}}>
                      <div style={{ color: 'black', fontSize: 28, fontFamily: 'Inter', fontWeight: '700',  wordWrap: 'break-word'}}>Different Players In The Automotive Industry</div>
                      <div style={{width: '100%', height: 476,  background: '#5A5A5A'}} />
                        <div className='videosubheading' style={{fontStyle:'bold',display:'inline-flex',gap: '5%',borderBottom: '1px #DDE1E6 solid'}}>
                          <div onClick={()=>setactive_videosubheading('Transcript')} className={`videoheadingonhover ${active_videosubheading==="Transcript"?'videoheadingonactive':''}`} style={{ color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: 'bold',  wordWrap: 'break-word',padding:'2%',paddingTop:0}}>Transcript</div>
                          <div onClick={()=>setactive_videosubheading('Keypoints')} className={`videoheadingonhover ${active_videosubheading==="Keypoints"?'videoheadingonactive':''}`} style={{ color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: 'bold',  wordWrap: 'break-word',padding:'2%',paddingTop:0}}>Key points</div>
                          <div onClick={()=>setactive_videosubheading('Reading')} className={`videoheadingonhover ${active_videosubheading==="Reading"?'videoheadingonactive':''}`} style={{ color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: 'bold', wordWrap: 'break-word',padding:'2%',paddingTop:0}}>Supplementary reading</div>
                          <div onClick={()=>setactive_videosubheading('Notes')} className={`videoheadingonhover ${active_videosubheading==="Notes"?'videoheadingonactive':''}`} style={{ color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: 'bold',  wordWrap: 'break-word',padding:'2%',paddingTop:0}}>Notes</div>
                        </div>

                        <div style={{width: '100%', height: '100%', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word',borderBottom: '1px #DDE1E6 solid',paddingBottom:'5%'}}>{videosubheadingcontent}</div>
                  
                        <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 30, display: 'inline-flex'}}>
                          <div style={{color: '#0F62FE', fontSize: 14, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>Like</div>
                          <div style={{color: '#0F62FE', fontSize: 14, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>Dislike</div>
                          <div style={{color: '#0F62FE', fontSize: 14, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>Report an issue</div>
                        </div>
                    </div>
                    </div>
                </div>    
              </div>
            </div>
            
        </div>
       </div>
    </div>
      
  </div> 
    );
  }
  
  export default Videolisting;