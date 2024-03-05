import {
  Profile_details_header,
  Profile_details_generalview,
  Profile_edit_view_content,
  Profile_edit_view_footer,
  Profile_edit_educational_content,Profile_edit_educational_content2
} from "./Profile_components";
import add_details from "../../assets/img/add_details.svg";
import dateFormat from "dateformat";
import Pencil from "../../assets/img/Pencil.svg";
import delete_details from "../../assets/img/delete_details.svg";

const EducationField = (props) => {
  console.log(props);

  const { education_action, profileData, sectionRefs,
    seteducation_action, deleteablebtnclick3,
    education_editid, editablebtnclick3,
    handleEduEditDetailsClick, handleInputChange4, changeeducationform2,
    handledateInputChange4, handleeducationalsubmit, discardfunction3,
    educationtypevalue, emptydata3, changeeducationform, handleeducationdata,
    handleadddateeducationfield,handleneweducationalesubmit
  } = props;

  return (
    <div ref={sectionRefs.educationid}>
      {/* view start*/}
      {education_action == "view" ? (
        <div
          ref={sectionRefs.educationid}
          id="educationid"
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
            adddetailsbtn="yes"
            bottomborder={`${
              profileData.educationaldetails.length ? "profilebottomborder" : ""
            }`}
            clickname={() => seteducation_action("add")}
            imgtoshow={add_details}
            topic="Education Details"
          />
          <div style={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
            {profileData.educationaldetails.map((item, index) => {
              const isMarginNeed = index % 2 === 1 ? "0px" : "40px";

              return (
                <div style={{ width: "50%", marginBottom: "24px" }}>
                  <div
                    style={{
                      alignSelf: "stretch",
                      justifyContent: "flex-start",
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
                          heading={
                            item.education == "Class X" ||
                            item.education == "Class XII"
                              ? item.education
                              : item.courses +
                                " (" +
                                item.specializations +
                                ") "
                          }
                          deletebtnclick={() => deleteablebtnclick3(index)}
                          editbtnclick={() => editablebtnclick3(index)}
                          description={
                            (item.education == "Class X" ||
                            item.education == "Class XII"
                              ? item.board
                              : item.university) +
                            " - " +
                            dateFormat(item.enddate, "yyyy")
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

      {education_action == "edit" &&
        profileData.educationaldetails &&
        profileData.educationaldetails.map((item, index) =>
          //    education
          index === education_editid ? (
            <div
              ref={sectionRefs.educationid}
              id="educationid"
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
                topic="Educational Details"
              />
              {item.education == "Class X" || item.education == "Class XII" ? (
                <Profile_edit_educational_content
                  mydata={item}
                  specificvaluechange={changeeducationform2}
                  indexeditid={index}
                  valuechange={handleInputChange4}
                  changedate={handledateInputChange4}
                />
              ) : (
                <Profile_edit_educational_content2
                  mydata={item}
                  specificvaluechange={changeeducationform2}
                  indexeditid={index}
                  valuechange={handleInputChange4}
                  changedate={handledateInputChange4}
                />
              )}
              <Profile_edit_view_footer
                clickingsubmitbtn={handleeducationalsubmit}
                discard_editview={discardfunction3}
              />
            </div>
          ) : (
            ""
          )
        )}
      {education_action == "add" ? (
        <div
          ref={sectionRefs.educationid}
          id="educationid"
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
            topic="Educational Details"
          />

          {!educationtypevalue ? (
            <Profile_edit_educational_content
              mydata={emptydata3}
              specificvaluechange={changeeducationform}
              valuechange={handleeducationdata}
              changedate={handleadddateeducationfield}
            />
          ) : (
            <Profile_edit_educational_content2
              mydata={emptydata3}
              specificvaluechange={changeeducationform}
              valuechange={handleeducationdata}
              changedate={handleadddateeducationfield}
            />
          )}
          <Profile_edit_view_footer
            clickingsubmitbtn={() => handleneweducationalesubmit()}
            discard_editview={discardfunction3}
          />
        </div>
      ) : (
        ""
      )}

      {/* edit end */}
    </div>
  );
};

export default EducationField;
