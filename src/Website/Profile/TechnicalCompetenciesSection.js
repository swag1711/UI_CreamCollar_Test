
import { Profile_details_header } from "./Profile_components";
import { TechnicalCompetencies,TechnicalCompetenciesSelected } from "./Profile_components";
import add_details from "../../assets/img/add_details.svg";


const TechnicalCompetenciesSection = props => {

    console.log('sgsg')
    const { skillSectionEditState, sectionRefs, profileData, handleSkillEditState
    ,saveSkillData,returnbackskillsnormal
    } = props 

     return skillSectionEditState ? (
        <div
          ref={sectionRefs.interestid}
          id="interestid"
          style={{
            width: "100%",
            height: "auto",
            padding: 40,
            background: "white",
            boxShadow: "0px 8px 40px rgba(9, 44, 76, 0.08)",
            borderRadius: 20,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 32,
            display: "inline-flex",
          }}
        >
          <Profile_details_header
            bottomborder={`${
              profileData.technicalSkills.length
                ? "profilebottomborder"
                : ""
            }`}
            clickname={handleSkillEditState}
            imgtoshow={add_details}
            topic="Technical Competencies"
            subTopic="Maximum 7 Skills can be added"
          />

          <TechnicalCompetencies
            saveSkillData={saveSkillData}
            discardSkills={returnbackskillsnormal}
            selectedSkill={profileData.technicalSkills}
            toggleSkillSection={handleSkillEditState}
          />
        </div>
      ) : (
        <div
          ref={sectionRefs.interestid}
          id="interestid"
          style={{
            width: "100%",
            height: "auto",
            padding: 40,
            background: "white",
            boxShadow: "0px 8px 40px rgba(9, 44, 76, 0.08)",
            borderRadius: 20,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 32,
            display: "inline-flex",
          }}
        >
          <Profile_details_header
            bottomborder={`${
              profileData.technicalSkills.length
                ? "profilebottomborder"
                : ""
            }`}
            adddetailsbtn="yes"
            clickname={handleSkillEditState}
            imgtoshow={add_details}
            topic="Technical Competencies"
          />

          <TechnicalCompetenciesSelected
            selectedSkill={profileData.technicalSkills}
          />
        </div>
      )}




export default TechnicalCompetenciesSection