import {
  Profile_details_header,
  Profile_details_generalview,
  Profile_edit_view_content,
  Profile_edit_view_footer,
} from "./Profile_components";
import add_details from "../../assets/img/add_details.svg";
import dateFormat from "dateformat";
import Pencil from "../../assets/img/Pencil.svg";
import delete_details from "../../assets/img/delete_details.svg";

const WorkExperience = (props) => {
  console.log(true);
  const {
    profileData,
    setworkexperience_action,
    deleteablebtnclick,  
    editablebtnclick,
    workexperience_action,
    sectionRefs,
    workexperience_editid,
    handleEduEditDetailsClick,
    handleInputChange2,
    handledateInputChange2,
    discardfunction,
    handleworkexperiencesubmit,
    emptydata,
    handlenewworkexperiencesubmit,
    handleadddateInputChange2,
    handleworkexperirnceadata,
  } = props;

  return (
    <div>
      {/* view start*/}
      {workexperience_action == "view" ? (
        <div
          ref={sectionRefs.workexperienceid}
          id="workexperienceid"
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
              profileData.workexperience.length ? "profilebottomborder" : ""
            }`}
            adddetailsbtn="yes"
            clickname={() => setworkexperience_action("add")}
            imgtoshow={add_details}
            topic="Work Experience Details"
          />
          <div style={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
            {profileData.workexperience.map((item, index) => {
              const isMarginNeed = index % 2 === 1 ? "0px" : "40px";

              return (
                <div style={{ width: "50%", marginBottom: "24px" }}>
                  <div
                    style={{
                      alignSelf: "stretch",
                      justifyContent: "flex-end",
                      alignItems: "flex-start",
                      gap: "40px",
                      display: "inline-flex",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        visibility: "visible",
                        flex: "1 1 0px",
                        marginRight: isMarginNeed,
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: "4px",
                        display: "inline-flex",
                        alignSelf: "stretch",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Profile_details_generalview
                          heading="Schbang"
                          deletebtnclick={() => deleteablebtnclick(index)}
                          editbtnclick={() => editablebtnclick(index)}
                          description={
                            item.designation +
                            " " +
                            dateFormat(item.joiningdate, "yyyy") +
                            " - " +
                            dateFormat(item.lastworkingday, "yyyy")
                          }
                          editicon={Pencil}
                          deleteicon={delete_details}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
      {/* view end */}

      {/* edit start */}

      {workexperience_action == "edit" &&
        profileData.workexperience &&
        profileData.workexperience.map((item, index) =>
          index === workexperience_editid ? (
            <div
              ref={sectionRefs.workexperienceid}
              id="workexpeienceid"
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
                bottomborder="profilebottomborder"
                clickname={handleEduEditDetailsClick}
                imgtoshow={add_details}
                topic="Work Experience Details"
              />
              <Profile_edit_view_content
                mydata={item}
                indexeditid={index}
                valuechange={handleInputChange2}
                changedate={handledateInputChange2}
              />
              <Profile_edit_view_footer
                clickingsubmitbtn={handleworkexperiencesubmit}
                discard_editview={discardfunction}
              />
            </div>
          ) : (
            ""
          )
        )}
      {workexperience_action == "add" ? (
        <div
          ref={sectionRefs.workexperienceid}
          id="workexpeienceid"
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
            bottomborder="profilebottomborder"
            clickname={handleEduEditDetailsClick}
            imgtoshow={add_details}
            topic="Work Experience Details"
          />
          <Profile_edit_view_content
            mydata={emptydata}
            valuechange={handleworkexperirnceadata}
            changedate={handleadddateInputChange2}
          />
          <Profile_edit_view_footer
            clickingsubmitbtn={() => handlenewworkexperiencesubmit()}
            discard_editview={discardfunction}
          />
        </div>
      ) : (
        ""
      )}

      {/* edit end */}
    </div>
  );
};

export default WorkExperience;
