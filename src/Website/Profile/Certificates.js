import React from 'react';
import { Profile_details_generalview, Profile_details_header, Profile_edit_view_footer, Profile_interest_edit_view } from './Profile_components';
import add_details from '../../assets/img/add_details.svg';
import delete_details from '../../assets/img/delete_details.svg';
import dateFormat from "dateformat";
import Pencil from '../../assets/img/Pencil.svg';
import 'react-image-crop/dist/ReactCrop.css';

const Certificates = (props) => {
    console.log(true);
    const {
        profileData,
        setcert_action,
        deleteablebtnclick2,
        editablebtnclick2,
        cert_action,
        sectionRefs,
        cert_editid,
        handleEduEditDetailsClick,
        handleInputChange3,
        handledateInputChange3,
        discardfunction2,
        handlecertsubmit,
        emptydata2,
        handlenewcertsubmit,
        handleadddateInputChange3,
        handlecertdata,
    } = props;


    return (
        <div>
            {/* view start*/}
            {cert_action == "view" ? (
                <div
                    ref={sectionRefs.certificateid}
                    id="certificateid"
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
                        bottomborder={`${profileData.certificate.length ? "profilebottomborder" : ""
                            }`}
                        clickname={() => setcert_action("add")}
                        imgtoshow={add_details}
                        topic="Certificates"
                    />
                    <div style={{ display: "flex", width: "100%", flexWrap: "wrap" }} >
                        {profileData.certificate.map((item, index) => {
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
                                                    heading="Courses"
                                                    deletebtnclick={() =>
                                                        deleteablebtnclick2(index)
                                                    }
                                                    editbtnclick={() => editablebtnclick2(index)}
                                                    description={
                                                        item.certificatio_course_name +
                                                        " " +
                                                        "-" +
                                                        " " +
                                                        dateFormat(item.certification_date, "yyyy")
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
            )
            }

            {
                cert_action == "edit" &&
                profileData.certificate &&
                profileData.certificate.map((item, index) =>
                    index === cert_editid ? (
                        <div
                            ref={sectionRefs.certificateid}
                            id="certificateid"
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
                                topic="Certificates"
                            />
                            <Profile_interest_edit_view
                                mydata={item}
                                valuechange={handleInputChange3}
                                changedate={handledateInputChange3}
                            />
                            <Profile_edit_view_footer
                                clickingsubmitbtn={handlecertsubmit}
                                discard_editview={discardfunction2}
                            />
                        </div>
                    ) : (
                        ""
                    )
                )
            }

            {
                cert_action == "add" ? (
                    <div
                        ref={sectionRefs.certificateid}
                        id="certificateid"
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
                            topic="Certificates"
                        />
                        <Profile_interest_edit_view
                            mydata={emptydata2}
                            valuechange={handlecertdata}
                            changedate={handleadddateInputChange3}
                        />
                        <Profile_edit_view_footer
                            clickingsubmitbtn={handlenewcertsubmit}
                            discard_editview={discardfunction2}
                        />
                    </div>
                ) : (
                    ""
                )
            }
        </div>
    );
};
export default Certificates;