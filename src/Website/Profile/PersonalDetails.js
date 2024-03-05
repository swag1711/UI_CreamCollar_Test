export function Personaldetails(properties) {
  const {
    handleEditDetailsClick,
    isEditModegap,
    isEditMode_opt,
    setProfileData,
    DatePicker,
    handleDateChange,
    selectedCountryCode,
    setSelectedCountryCode,
    countryCodes,
    sentences,
    Addlanguages,
    addmylanguages,
    setLanguageCount,
    handleBack,
    discardchanges,
  } = properties;
  return (
    <div ref={properties.refid} id="personalid" className="container1">
      <div
        style={{
          paddingBottom: 40,
          width: "100%",
          height: "auto",
          padding: 40,
          background: "white",
          borderRadius: 20,
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
            paddingBottom: 10,
            alignSelf: "stretch",
            height: "auto",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: `${properties.isEditModegap}px`,
            display: "flex",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              paddingBottom: 24,
              borderBottom: "1px #E2EBF3 solid",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 32,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                flex: "1 1 0",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 10,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  color: "black",
                  fontSize: 24,
                  fontFamily: "Inter",
                  fontWeight: "700",
                  wordWrap: "break-word",
                }}
              >
                Personal Details
              </div>
            </div>
            <div
              style={{
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 12,
                display: "flex",
              }}
            >
              {/* <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}> */}
              <button
                className="buttonbkcolornone2"
                onClick={handleEditDetailsClick}
                style={{
                  color: "#0B6AEA",
                  fontSize: 16,
                  fontFamily: "Inter",
                  fontWeight: "700",
                  wordWrap: "break-word",
                }}
              >
                {" "}
                {!properties.isEditMode_opt && (
                  <span style={{ marginRight: 10 }}> Edit Details </span>
                )}
                {!properties.isEditMode_opt && (
                  <img
                    src={properties.edit_btn_img}
                    style={{ marginRight: -18, height: 22 }}
                    alt=""
                  />
                )}
              </button>
              {/* </div> */}
            </div>
          </div>
          {/* <ProfilePageFLComponent labelId='firstname' labelName='First Name' /> */}
          <div
            style={{
              alignSelf: "stretch",
              height: "auto",
              paddingBottom: 32,
              borderBottom: "1px #E2EBF3 solid",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: `${isEditModegap}px`,
              display: "flex",
              position: "relative",
            }}
          >
            {!properties.isEditMode_opt ? (
              <div
                style={{
                  alignSelf: "stretch",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 4,
                  display: "flex",
                  position: "relative",
                }}
              >
                <div>
                  <div
                    style={{
                      color: "#00213D",
                      fontSize: 12,
                      fontFamily: "Inter",
                      fontWeight: "600",
                      wordWrap: "break-word",
                    }}
                  >
                    About You
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      color: "#4A5965",
                      fontSize: 16,
                      fontFamily: "Inter",
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                  >
                    {properties.aboutyouCount
                      ? properties.aboutyouCount
                      : "Hi I am ....  . I have a special relationship with my best friend. They are not just a friend but someone who understands me better than anyone else. We have shared countless laughs, tears, and adventures. We felt an instant connection that grew stronger as soon as we met.  One of the things that makes my best friend so incredible is their unwavering support. We can talk about anything and everything, knowing our conversations are safe and judgment-free. They make me feel understood and accepted for who I am without judgment."}
                  </div>
                </div>
              </div>
            ) : (
              <div
                style={{
                  height: "159px",
                  alignSelf: "stretch",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 4,
                  display: "flex",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "159px",
                    alignSelf: "stretch",
                    borderRadius: "12px",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    display: "flex",
                  }}
                >
                  <label
                    id={"log_lab_aboutyou"}
                    style={{
                      marginTop: "-7px",
                      position: "absolute",
                      color: "#00213D",
                      marginLeft: "20px",
                      zIndex: 1,
                      fontSize: "12px",
                      padding: "0 8px",
                      background: "white",
                      fontFamily: "Inter",
                      fontWeight: 400,
                      lineHeight: "15px",
                      wordWrap: "break-word",
                    }}
                  >
                    About You
                  </label>
                  <textarea
                    rows="3"
                    className="log_btn_hover"
                    style={{
                      height: "159px",
                      resize: "none",
                      padding: "16px 28px",
                      alignSelf: "stretch",
                      paddingTop: "16px",
                      paddingBottom: "16px",
                      background: "white",
                      borderRadius: "12px",
                      border: "1px #E2EBF3 solid",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      display: "flex",
                    }}
                    type="text"
                    id="aboutyou"
                    name="aboutyou"
                    placeholder="What are you upto"
                    value={properties.aboutyouCount}
                    onChange={properties.inputChangeFunction}
                    onFocus={properties.inputFocus}
                    onBlur={properties.inputBlur}
                    maxLength={500}
                    required
                    autoComplete="off"
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0px",
                      right: "27px",
                      paddingBottom: 16,
                      color: "#80919F",
                      fontSize: 12,
                      fontFamily: "Inter",
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                  >
                    {properties.aboutyouCount
                      ? properties.aboutyouCount.length
                      : 0}
                    /500
                  </div>
                  <span
                    style={{
                      marginLeft: "28px",
                      color: "#EB5757",
                      fontSize: "12px",
                      fontFamily: "Inter",
                      fontWeight: 400,
                      lineHeight: "15px",
                      wordWrap: "break-word",
                    }}
                  ></span>
                </div>
              </div>
            )}
            <div
              style={{
                alignSelf: "stretch",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 40,
                display: "inline-flex",
                position: "relative",
              }}
            >
              <div
                style={{
                  flex: "1 1 0",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 4,
                  display: "inline-flex",
                }}
              >
                {!properties.isEditMode_opt ? (
                  <div>
                    <div
                      style={{
                        color: "#00213D",
                        fontSize: 12,
                        fontFamily: "Inter",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      First Name
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        color: "#4A5965",
                        fontSize: 16,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      {properties.userPersonalDetails.firstname
                        ? properties.userPersonalDetails.firstname
                        : "FirstName"}
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      width: "100%",
                      alignSelf: "stretch",
                      height: "57px",
                      borderRadius: "12px",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      display: "flex",
                    }}
                  >
                    <label
                      id={"log_lab_firstname"}
                      style={{
                        marginTop: "-7px",
                        position: "absolute",
                        color: "#00213D",
                        marginLeft: "20px",
                        zIndex: 1,
                        fontSize: "12px",
                        padding: "0 8px",
                        background: "white",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        lineHeight: "15px",
                        wordWrap: "break-word",
                      }}
                    >
                      First Name
                    </label>
                    <input
                      className="log_btn_hover"
                      style={{
                        marginBottom: "0px",
                        padding: "16px 28px",
                        alignSelf: "stretch",
                        height: "57px",
                        paddingTop: "16px",
                        paddingBottom: "16px",
                        background: "white",
                        borderRadius: "12px",
                        border: "1px #E2EBF3 solid",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        display: "flex",
                      }}
                      type="text"
                      id="firstname"
                      name="firstname"
                      placeholder="First Name"
                      value={properties.userPersonalDetails.firstname}
                      onChange={properties.inputChangeFunction}
                      onFocus={properties.inputFocus}
                      onBlur={properties.inputBlur}
                      required
                      autoComplete="off"
                    />
                    <span
                      style={{
                        marginLeft: "28px",
                        color: "#EB5757",
                        fontSize: "12px",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        lineHeight: "15px",
                        wordWrap: "break-word",
                      }}
                    ></span>
                  </div>
                )}
              </div>

              <div
                style={{
                  flex: "1 1 0",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 4,
                  display: "inline-flex",
                }}
              >
                {!properties.isEditMode_opt ? (
                  <div>
                    <div
                      style={{
                        color: "#00213D",
                        fontSize: 12,
                        fontFamily: "Inter",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      Last Name
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        color: "#4A5965",
                        fontSize: 16,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      {properties.userPersonalDetails.lastname
                        ? properties.userPersonalDetails.lastname
                        : "LastName"}
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      width: "100%",
                      alignSelf: "stretch",
                      height: "57px",
                      borderRadius: "12px",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      display: "flex",
                    }}
                  >
                    <label
                      id={"log_lab_lastname"}
                      style={{
                        marginTop: "-7px",
                        position: "absolute",
                        color: "#00213D",
                        marginLeft: "20px",
                        zIndex: 1,
                        fontSize: "12px",
                        padding: "0 8px",
                        background: "white",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        lineHeight: "15px",
                        wordWrap: "break-word",
                      }}
                    >
                      Last Name
                    </label>
                    <input
                      className="log_btn_hover"
                      style={{
                        padding: "16px 28px",
                        alignSelf: "stretch",
                        height: "57px",
                        paddingTop: "16px",
                        paddingBottom: "16px",
                        background: "white",
                        borderRadius: "12px",
                        border: "1px #E2EBF3 solid",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        display: "flex",
                      }}
                      type="text"
                      id="lastname"
                      name="lastname"
                      placeholder="Last Name"
                      value={properties.userPersonalDetails.lastname}
                      onChange={properties.inputChangeFunction}
                      onFocus={properties.inputFocus}
                      onBlur={properties.inputBlur}
                      required
                      autoComplete="off"
                    />
                    <span
                      style={{
                        marginLeft: "28px",
                        color: "#EB5757",
                        fontSize: "12px",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        lineHeight: "15px",
                        wordWrap: "break-word",
                      }}
                    ></span>
                  </div>
                )}
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 40,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  flex: "1 1 0",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 4,
                  display: "inline-flex",
                }}
              >
                {!properties.isEditMode_opt ? (
                  <div>
                    <div
                      style={{
                        color: "#00213D",
                        fontSize: 12,
                        fontFamily: "Inter",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      Gender
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        color: "#4A5965",
                        fontSize: 16,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      {properties.userPersonalDetails.Gender}
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      width: "100%",
                      alignSelf: "stretch",
                      height: "57px",
                      borderRadius: "12px",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      display: "flex",
                      paddingTop: 0,
                    }}
                  >
                    <label
                      id={"log_lab_gender"}
                      style={{
                        marginTop: "-7px",
                        position: "absolute",
                        color: "#00213D",
                        marginLeft: "20px",
                        zIndex: 1,
                        fontSize: "12px",
                        padding: "0 8px",
                        background: "white",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        lineHeight: "15px",
                        wordWrap: "break-word",
                      }}
                    >
                      Gender
                    </label>
                    <select
                      className="log_btn_hover"
                      style={{
                        padding: "16px 28px",
                        alignSelf: "stretch",
                        height: "57px",
                        paddingTop: "16px",
                        paddingBottom: "16px",
                        background: "white",
                        borderRadius: "12px",
                        border: "1px #E2EBF3 solid",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        display: "flex",
                      }}
                      type="text"
                      id="Gender"
                      name="Gender"
                      placeholder="Gender"
                      value={properties.userPersonalDetails.Gender}
                      onChange={(e) =>
                        setProfileData({
                          ...properties.userPersonalDetails,
                          Gender: e.target.value,
                        })
                      }
                      required
                      autoComplete="off"
                    >
                      <option value="Select">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Female">Transgender</option>
                    </select>
                    <span
                      style={{
                        marginLeft: "28px",
                        color: "#EB5757",
                        fontSize: "12px",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        lineHeight: "15px",
                        wordWrap: "break-word",
                      }}
                    ></span>
                  </div>
                )}
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 4,
                  display: "inline-flex",
                }}
              >
                {/* <div style={{ alignSelf: 'stretch', color: '#4A5965', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}> */}

                {!properties.isEditMode_opt ? (
                  <div>
                    {" "}
                    <div
                      style={{
                        color: "#00213D",
                        fontSize: 12,
                        fontFamily: "Inter",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      Date of Birth
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        color: "#4A5965",
                        fontSize: 16,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      <div>
                        {" "}
                        {properties.userPersonalDetails.dateOfBirth instanceof
                        Date
                          ? properties.userPersonalDetails.dateOfBirth.toLocaleDateString()
                          : "dd/MM/yyyy"}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      width: "100%",
                      alignSelf: "stretch",
                      height: "57px",
                      borderRadius: "12px",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      display: "flex",
                      paddingBottom: 15,
                    }}
                  >
                    <label
                      id={"log_lab_dob"}
                      style={{
                        marginTop: "-7px",
                        position: "absolute",
                        color: "#00213D",
                        marginLeft: "20px",
                        zIndex: 1,
                        fontSize: "12px",
                        padding: "0 8px",
                        background: "white",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        lineHeight: "15px",
                        wordWrap: "break-word",
                      }}
                    >
                      Date of Birth
                    </label>

                    <DatePicker
                      className="customDatePicker log_btn_hover"
                      selected={properties.userPersonalDetails.dateOfBirth}
                      style={{
                        padding: "16px 28px",
                        alignSelf: "stretch",
                        height: "100px",
                        paddingTop: "16px",
                        paddingBottom: "16px",
                        background: "white",
                        borderRadius: "12px",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        display: "flex",
                      }}
                      onChange={handleDateChange}
                      id="dob"
                      name="dob"
                      placeholder="Date of Birth"
                      value={properties.userPersonalDetails.dateOfBirth}
                      onFocus={properties.inputFocus}
                      onBlur={properties.inputBlur}
                      required
                      autoComplete="off"
                      dateFormat="dd/MM/yyyy"
                      maxDate={new Date()}
                      showYearDropdown
                      scrollableYearDropdown
                      yearDropdownItemNumber={100}
                      placeholderText="Select a date"
                    />
                  </div>
                )}
                {/* </div> */}
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 40,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  flex: "1 1 0",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 4,
                  display: "inline-flex",
                  marginBottom: "-8px",
                }}
              >
                {!properties.isEditMode_opt ? (
                  <div>
                    <div
                      style={{
                        color: "#00213D",
                        fontSize: 12,
                        fontFamily: "Inter",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      Email Address
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        color: "#4A5965",
                        fontSize: 16,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      {properties.userPersonalDetails.email
                        ? properties.userPersonalDetails.email
                        : "Email Address"}
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      width: "100%",
                      alignSelf: "stretch",
                      height: "57px",
                      borderRadius: "12px",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      display: "flex",
                    }}
                  >
                    <label
                      id={"log_lab_email"}
                      style={{
                        marginTop: "-7px",
                        position: "absolute",
                        color: "#00213D",
                        marginLeft: "20px",
                        zIndex: 1,
                        fontSize: "12px",
                        padding: "0 8px",
                        background: "white",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        lineHeight: "15px",
                        wordWrap: "break-word",
                      }}
                    >
                      Email Address
                    </label>
                    <input
                      className="log_btn_hover"
                      style={{
                        padding: "16px 28px",
                        alignSelf: "stretch",
                        height: "57px",
                        paddingTop: "16px",
                        paddingBottom: "16px",
                        background: "white",
                        borderRadius: "12px",
                        border: "1px #E2EBF3 solid",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        display: "flex",
                      }}
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      value={properties.userPersonalDetails.email}
                      readonly="true"
                      onChange={properties.inputChangeFunction}
                      onFocus={properties.inputFocus}
                      onBlur={properties.inputBlur}
                      required
                      autoComplete="off"
                    />
                    <span
                      style={{
                        marginLeft: "28px",
                        color: "#EB5757",
                        fontSize: "12px",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        lineHeight: "15px",
                        wordWrap: "break-word",
                      }}
                    ></span>
                  </div>
                )}
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 4,
                  display: "inline-flex",
                }}
              >
                {!properties.isEditMode_opt ? (
                  <div>
                    <div
                      style={{
                        color: "#00213D",
                        fontSize: 12,
                        fontFamily: "Inter",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      Phone Number
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        color: "#4A5965",
                        fontSize: 16,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      {properties.userPersonalDetails.mobileNumber}
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        border: "1px solid #E2EBF3",
                        height: "57px",
                        borderRadius: "8px",
                        display: "inline-flex",
                        flexDirection: "row",
                        width: "100%",
                        padding: 0,
                      }}
                    >
                      <div
                        style={{
                          width: "30%",
                          alignSelf: "stretch",
                          height: "57px",
                          marginRight: 8,
                          borderRadius: "12px",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          display: "flex",
                        }}
                      >
                        <label
                          id={"log_lab_phone"}
                          style={{
                            marginTop: "-7px",
                            position: "absolute",
                            color: "#00213D",
                            marginLeft: "20px",
                            zIndex: 1,
                            fontSize: "12px",
                            padding: "0 8px",
                            background: "white",
                            fontFamily: "Inter",
                            fontWeight: 400,
                            lineHeight: "15px",
                            wordWrap: "break-word",
                          }}
                        >
                          Phone Number
                        </label>

                        <select
                          style={{
                            outline: "none",
                            padding: "16px 20px",
                            alignSelf: "stretch",
                            height: "57px",
                            paddingTop: "16px",
                            paddingBottom: "16px",
                            background: "white",
                            borderRadius: "12px",
                            border: "none",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            display: "flex",
                          }}
                          id="countryCode"
                          name="countryCode"
                          required
                          autoComplete="off"
                          value={selectedCountryCode}
                          onChange={(e) =>
                            setSelectedCountryCode(e.target.value)
                          }
                        >
                          {countryCodes.map((country, index) => (
                            <option key={index} value={country.code}>
                              {country.code}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div
                        style={{
                          width: 1,
                          padding: "0",
                          margin: "10px 0 10px 0",
                          border: "1px solid #E2EBF3 ",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "70%",
                          alignSelf: "stretch",
                          height: "57px",
                          borderRadius: "12px",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          display: "flex",
                        }}
                      >
                        {/* <label id={'log_lab_phone'} style={{ marginTop: '-7px', position: 'absolute',color: '#00213D', marginLeft: '20px',  zIndex: 1, fontSize: '12px', padding: '0 8px', background: 'white', fontFamily: 'Inter', fontWeight: 400, lineHeight: '15px', wordWrap: 'break-word' }}>Phone Number</label> */}

                        <input
                          type="tel"
                          style={{
                            outline: "none",
                            marginBottom: 2,
                            padding: "16px 28px",
                            alignSelf: "stretch",
                            height: "57px",
                            paddingTop: "16px",
                            paddingBottom: "16px",
                            background: "white",
                            borderRadius: "12px",
                            border: "none",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            display: "flex",
                            border: "none",
                          }}
                          id="mobileNumber"
                          name="mobileNumber"
                          placeholder="Phone Number"
                          value={properties.userPersonalDetails.mobileNumber}
                          onChange={properties.handleMobileNumberChange_opt}
                          required
                          autoComplete="off"
                        />
                      </div>
                    </div>

                    <div
                      style={{
                        width: "30%",
                        alignSelf: "stretch",
                        height: "57px",
                        borderRadius: "12px",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        display: "flex",
                      }}
                    >
                      {properties.showVerifyButton_opt && (
                        <button
                          className="button3"
                          onClick={properties.handleSendOTP_opt}
                          style={{
                            marginLeft: "10px",
                            fontWeight: 700,
                            padding: "16px 28px",
                            alignSelf: "stretch",
                            height: "57px",
                            paddingTop: "16px",
                            paddingBottom: "16px",
                            background: "white",
                            borderRadius: "12px",
                            border: "1px #0B6AEA solid",
                            color: "#0B6AEA",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            display: "flex",
                          }}
                          id="verify"
                          name="verify"
                        >
                          Verify
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 40,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  flex: "1 1 0",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 4,
                  display: "inline-flex",
                }}
              >
                {!properties.isEditMode_opt ? (
                  <div>
                    <div
                      style={{
                        color: "#00213D",
                        fontSize: 12,
                        fontFamily: "Inter",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      Nationality
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        color: "#4A5965",
                        fontSize: 16,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      {properties.userPersonalDetails.Nationality
                        ? properties.userPersonalDetails.Nationality
                        : "Nationality"}
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      width: "100%",
                      alignSelf: "stretcfh",
                      height: "57px",
                      borderRadius: "12px",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      display: "flex",
                    }}
                  >
                    <label
                      id={"log_lab_Nationality"}
                      style={{
                        marginTop: "-7px",
                        position: "absolute",
                        color: "#00213D",
                        marginLeft: "20px",
                        zIndex: 1,
                        fontSize: "12px",
                        padding: "0 8px",
                        background: "white",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        lineHeight: "15px",
                        wordWrap: "break-word",
                      }}
                    >
                      Nationality
                    </label>
                    <input
                      className="log_btn_hover"
                      style={{
                        padding: "16px 28px",
                        alignSelf: "stretch",
                        height: "57px",
                        paddingTop: "16px",
                        paddingBottom: "16px",
                        background: "white",
                        borderRadius: "12px",
                        border: "1px #E2EBF3 solid",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        display: "flex",
                      }}
                      type="text"
                      id="Nationality"
                      name="Nationality"
                      placeholder="Nationality"
                      value={properties.userPersonalDetails.Nationality}
                      onChange={properties.inputChangeFunction}
                      onFocus={properties.inputFocus}
                      onBlur={properties.inputBlur}
                      required
                      autoComplete="off"
                    />
                    <span
                      style={{
                        marginLeft: "28px",
                        color: "#EB5757",
                        fontSize: "12px",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        lineHeight: "15px",
                        wordWrap: "break-word",
                      }}
                    ></span>
                  </div>
                )}
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 4,
                  display: "inline-flex",
                }}
              >
                {!properties.isEditMode_opt ? (
                  <div>
                    <div
                      style={{
                        color: "#00213D",
                        fontSize: 12,
                        fontFamily: "Inter",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      State
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        color: "#4A5965",
                        fontSize: 16,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      {properties.userPersonalDetails.State
                        ? properties.userPersonalDetails.State
                        : "State"}
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      width: "100%",
                      alignSelf: "stretcfh",
                      height: "57px",
                      borderRadius: "12px",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      display: "flex",
                      paddingTop: 5,
                    }}
                  >
                    <label
                      id={"log_lab_State"}
                      style={{
                        marginTop: "-7px",
                        position: "absolute",
                        color: "#00213D",
                        marginLeft: "20px",
                        zIndex: 1,
                        fontSize: "12px",
                        padding: "0 8px",
                        background: "white",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        lineHeight: "15px",
                        wordWrap: "break-word",
                      }}
                    >
                      State
                    </label>
                    <input
                      className="log_btn_hover"
                      style={{
                        padding: "16px 28px",
                        alignSelf: "stretch",
                        height: "57px",
                        paddingTop: "16px",
                        paddingBottom: "16px",
                        background: "white",
                        borderRadius: "12px",
                        border: "1px #E2EBF3 solid",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        display: "flex",
                      }}
                      type="text"
                      id="State"
                      name="State"
                      placeholder="State"
                      value={properties.userPersonalDetails.State}
                      onChange={properties.inputChangeFunction}
                      onFocus={properties.inputFocus}
                      onBlur={properties.inputBlur}
                      required
                      autoComplete="off"
                    />
                    <span
                      style={{
                        marginLeft: "28px",
                        color: "#EB5757",
                        fontSize: "12px",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        lineHeight: "15px",
                        wordWrap: "break-word",
                      }}
                    ></span>
                  </div>
                )}
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 40,
                display: "inline-flex",
              }}
            >
              {/* <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start',  display: 'inline-flex' }}> */}
              <div
                style={{
                  flex: "1 1 0",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 4,
                  display: "inline-flex",
                }}
              >
                {!properties.isEditMode_opt ? (
                  <div>
                    <div
                      style={{
                        color: "#00213D",
                        fontSize: 12,
                        fontFamily: "Inter",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      City
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        color: "#4A5965",
                        fontSize: 16,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      {properties.userPersonalDetails.City
                        ? properties.userPersonalDetails.City
                        : "City"}
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      width: "100%",
                      alignSelf: "stretch",
                      height: "57px",
                      borderRadius: "12px",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      display: "flex",
                      paddingTop: 5,
                    }}
                  >
                    <label
                      id={"log_lab_City"}
                      style={{
                        marginTop: "-7px",
                        position: "absolute",
                        color: "#00213D",
                        marginLeft: "20px",
                        zIndex: 1,
                        fontSize: "12px",
                        padding: "0 8px",
                        background: "white",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        lineHeight: "15px",
                        wordWrap: "break-word",
                      }}
                    >
                      City
                    </label>
                    <input
                      className="log_btn_hover"
                      style={{
                        padding: "16px 28px",
                        alignSelf: "stretch",
                        height: "57px",
                        paddingTop: "16px",
                        paddingBottom: "16px",
                        background: "white",
                        borderRadius: "12px",
                        border: "1px #E2EBF3 solid",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        display: "flex",
                      }}
                      type="text"
                      id="City"
                      name="City"
                      placeholder="City"
                      value={properties.userPersonalDetails.City}
                      onChange={properties.inputChangeFunction}
                      onFocus={properties.inputFocus}
                      onBlur={properties.inputBlur}
                      required
                      autoComplete="off"
                    />
                    <span
                      style={{
                        marginLeft: "28px",
                        color: "#EB5757",
                        fontSize: "12px",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        lineHeight: "15px",
                        wordWrap: "break-word",
                      }}
                    ></span>
                  </div>
                )}
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 4,
                  display: "inline-flex",
                }}
              >
                {!properties.isEditMode_opt ? (
                  <div>
                    <div
                      style={{
                        color: "#00213D",
                        fontSize: 12,
                        fontFamily: "Inter",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      Permanent Address
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        color: "#4A5965",
                        fontSize: 16,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      {properties.userPersonalDetails.permanentAddress
                        ? properties.userPersonalDetails.permanentAddress
                        : "permanentAddress"}
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      width: "100%",
                      alignSelf: "stretch",
                      height: "57px",
                      borderRadius: "12px",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      display: "flex",
                      paddingTop: 5,
                    }}
                  >
                    <label
                      id={"log_lab_permanentAddress"}
                      style={{
                        marginTop: "-7px",
                        position: "absolute",
                        color: "#00213D",
                        marginLeft: "20px",
                        zIndex: 1,
                        fontSize: "12px",
                        padding: "0 8px",
                        background: "white",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        lineHeight: "15px",
                        wordWrap: "break-word",
                      }}
                    >
                      Permanent Address
                    </label>
                    <input
                      className="log_btn_hover"
                      style={{
                        padding: "16px 28px",
                        alignSelf: "stretch",
                        height: "57px",
                        paddingTop: "16px",
                        paddingBottom: "16px",
                        background: "white",
                        borderRadius: "12px",
                        border: "1px #E2EBF3 solid",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        display: "flex",
                      }}
                      type="text"
                      id="permanentAddress"
                      name="permanentAddress"
                      placeholder="Permanent Address"
                      value={properties.userPersonalDetails.permanentAddress}
                      onChange={properties.inputChangeFunction}
                      onFocus={properties.inputFocus}
                      onBlur={properties.inputBlur}
                      required
                      autoComplete="off"
                    />
                    <span
                      style={{
                        marginLeft: "28px",
                        color: "#EB5757",
                        fontSize: "12px",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        lineHeight: "15px",
                        wordWrap: "break-word",
                      }}
                    ></span>
                  </div>
                )}
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 40,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  flex: "1 1 0",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 4,
                  display: "inline-flex",
                }}
              >
                {!properties.isEditMode_opt ? (
                  <div>
                    {" "}
                    <div
                      style={{
                        color: "#00213D",
                        fontSize: 12,
                        fontFamily: "Inter",
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      Linkedin Profile URL
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        color: "#4A5965",
                        fontSize: 16,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      {properties.userPersonalDetails.linkedinlink
                        ? properties.userPersonalDetails.linkedinlink
                        : "LinkedIn Profile URL"}
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      width: "48%",
                      alignSelf: "stretch",
                      height: "57px",
                      borderRadius: "12px",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      display: "flex",
                      paddingTop: 5,
                    }}
                  >
                    <label
                      id={"log_lab_linkedin"}
                      style={{
                        marginTop: "-7px",
                        position: "absolute",
                        color: "#00213D",
                        marginLeft: "20px",
                        zIndex: 1,
                        fontSize: "12px",
                        padding: "0 8px",
                        background: "white",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        lineHeight: "15px",
                        wordWrap: "break-word",
                      }}
                    >
                      LinkedIn Profile URL
                    </label>
                    <input
                      className="log_btn_hover"
                      style={{
                        padding: "16px 28px",
                        alignSelf: "stretch",
                        height: "57px",
                        paddingTop: "16px",
                        paddingBottom: "16px",
                        background: "white",
                        borderRadius: "12px",
                        border: "1px #E2EBF3 solid",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        display: "flex",
                      }}
                      type="text"
                      id="linkedinlink"
                      name="linkedinlink"
                      placeholder="LinkedIn Profile URL"
                      value={properties.userPersonalDetails.linkedinlink}
                      onChange={properties.inputChangeFunction}
                      required
                      autoComplete="off"
                    />
                    <span
                      style={{
                        marginLeft: "28px",
                        color: "#EB5757",
                        fontSize: "12px",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        lineHeight: "15px",
                        wordWrap: "break-word",
                      }}
                    ></span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "auto",
            width: "100%",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            display: "inline-flex",
          }}
        >
         
          <div
            style={{
              color: "#00213D",
              fontSize: 20,
              fontFamily: "Inter",
              fontWeight: "700",
              wordWrap: "break-word",
              marginBottom: "24px",
            }}
          >
            Languages
          </div>

          {/* start */}

          {properties.isEditMode_opt && sentences != "" ? (
            <div
              id="addlanguagearea"
              style={{
                marginTop: 32,
                width: "100%",
                display: "inline-flex",
                gap: 32,
                flexDirection: "column",
              }}
            >
              {Array.from(
                { length: properties.LanguageCount_opt },
                (_, index) => {
                  // Perform the desired operation inside the map callback

                  return (
                    <Addlanguages
                      selectedvalue={
                        properties.userPersonalDetails.Languages[index]
                          ? properties.userPersonalDetails.Languages[index]
                          : []
                      }
                      currentid={index}
                      valuechange={addmylanguages}
                    />
                  );
                }
              )}
             
            </div>
          ) : (
            ""
          )}
          {!properties.isEditMode_opt ? (
            <div style={{ width: "100%" }}>
              <div
                style={{
                  width: "100%",
                  alignSelf: "stretch",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 40,
                  display: "inline-flex",
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    flex: "1 1 0",
                    color: "#00213D",
                    fontSize: 12,
                    fontFamily: "Inter",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Language
                </div>
                <div
                  style={{
                    flex: "1 1 0",
                    color: "#00213D",
                    fontSize: 12,
                    fontFamily: "Inter",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Proficiency
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  height: 0,
                  border: "1px #E2EBF3 solid",
                  marginBottom: 16,
                }}
              ></div>
              <div
                style={{
                  alignSelf: "stretch",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 20,
                  display: "flex",
                }}
              >
                {properties.userPersonalDetails.Languages.map((item, index) => (
                  <div
                    style={{
                      alignSelf: "stretch",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 40,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        flex: "1 1 0",
                        color: "#4A5965",
                        fontSize: 16,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      {item.Language}
                    </div>
                    <div
                      style={{
                        flex: "1 1 0",
                        color: "#4A5965",
                        fontSize: 16,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      {item.Proficiency}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div
              style={{
                width: "100%",
                marginTop: 20,
                display: "inline-flex",
                gap: 32,
                flexDirection: "column",
              }}
            >
              <button
                className="buttonbkcolornone"
                style={{
                  padding: 0,
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 4,
                  display: "inline-flex",
                }}
              >
                <div
                  onClick={() => {
                    setLanguageCount(properties.LanguageCount_opt + 1);
                  }}
                  style={{
                    color: "#0B6AEA",
                    fontSize: 16,
                    fontFamily: "Inter",
                    fontWeight: "700",
                    wordWrap: "break-word",
                  }}
                >
                  Add Language
                </div>
              </button>
              <div
                style={{
                  alignSelf: "stretch",
                  height: 0,
                  border: "1px #E2EBF3 solid",
                  marginBottom: 32,
                }}
              ></div>
            </div>
          )}
          {properties.isEditMode_opt && (
            <div
              style={{
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 24,
                display: "inline-flex",
              }}
            >
              <button
                style={{
                  paddingLeft: 32,
                  paddingRight: 32,
                  paddingTop: 12,
                  paddingBottom: 12,
                  background: "#0B6AEA",
                  borderRadius: 8,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    color: "white",
                    fontSize: 16,
                    fontFamily: "Inter",
                    fontWeight: "700",
                    wordWrap: "break-word",
                  }}
                  onClick={handleBack}
                >
                  Save Changes
                </div>
              </button>
              <button
                onClick={discardchanges}
                className="buttonbkcolornone"
                style={{
                  color: "#0B6AEA",
                  fontSize: 16,
                  fontFamily: "Inter",
                  fontWeight: "700",
                  wordWrap: "break-word",
                }}
              >
                Discard Changes
              </button>
              <div style={{ width: 12, height: 12, background: "white" }}></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
