import React from "react";
import { Box, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import "./Preview.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { connect } from "react-redux";
import Font from "react-font";

// Create Document Component
const Preview = ({ state }) => {
  const ref = React.createRef();
  const downloadHandler = () => {
    const input = ref.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      var width = pdf.internal.pageSize.getWidth();
      var height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      // pdf.output("pdfjsnewwindow");
      pdf.save("download.pdf");
    });
  };

  return (
    <Box sx={{ width: "100%", margin: "auto" }} py={2}>
      {console.log(state)}
      <Button variant="contained" color="primary" onClick={downloadHandler}>
        Download
      </Button>
      <Font family={state.font}>
        <Box
          size="A4"
          style={{
            backgroundColor:
              typeof state.color.backGroundColor === "object"
                ? state.color.backGroundColor["hex"]
                : state.color.backGroundColor,
            color: state.color.textColor["hex"],
          }}
          py={1}
          ref={ref}
          mt={2}
          px={1.5}
        >
          <Typography
            variant="p"
            style={{ fontWeight: 900, fontSize: state.fontSizeHeading }}
          >
            Curriculum Vitae
          </Typography>
          {/* <img
          src={
            require("C:\\fakepath\\Screen Shot 2022-04-12 at 10.14.03 PM.png")
              .default
          }
          alt="test"
        /> */}
          <header
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              padding: "0 10px",
              alignItems: "center",
              border: `${Object.values(state.profile).filter(
                (ele) => Object.values(ele).length > 0
              )}`
                ? `1px solid ${state.color.textColor["hex"]}`
                : "",
            }}
          >
            <Box>
              {state.profile.photo_url !== "" &&
              state.profile.photo_url !== null ? (
                <>
                  <img
                    src={state.profile.photo_url}
                    alt="profile"
                    width={125}
                    style={{ borderRadius: "50%" }}
                  />
                </>
              ) : (
                ""
              )}
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              <Typography
                variant="p"
                style={{
                  fontWeight: 800,
                  textAlign: "center",
                  fontSize: state.fontSizeHeading,
                }}
              >
                {state.profile.first_name} {state.profile.last_name}
              </Typography>
              <Typography
                variant="p"
                style={{
                  textAlign: "center",
                  fontSize: state.fontSizeText,
                  paddingBottom: 5,
                }}
              >
                <strong>{state.profile.role}</strong>
              </Typography>
              <Typography variant="p">
                {state.profile.email !== "" && state.profile.email !== null
                  ? `${"Email: " + state.profile.email}`
                  : ""}
              </Typography>
              <Typography variant="p">
                {state.profile.phone_number !== "" &&
                state.profile.phone_number !== null
                  ? `Phone: ${state.profile.phone_number}`
                  : ""}
              </Typography>
              <Typography variant="p">
                {state.profile.website !== "" && state.profile.website !== null
                  ? `${"Portfolio: " + state.profile.website}`
                  : ""}
              </Typography>
              <Typography variant="p">
                {state.profile.address_line1 !== "" &&
                state.profile.address_line1 !== null
                  ? `${"Address: " + state.profile.address_line1}`
                  : ""}
              </Typography>
              <Typography variant="p">
                {state.profile.address_line2 !== "" &&
                  state.profile.address_line2 !== null &&
                  (state.profile.city !== "" && state.profile.city !== null
                    ? state.profile.address_line2 + "," + state.profile.city
                    : "")}
              </Typography>
              <Typography variant="p">
                {state.profile.address_line2 !== "" &&
                state.profile.address_line2 !== null
                  ? state.profile.state
                  : ""}
              </Typography>
            </Box>
          </header>
          <section>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
              }}
              pt={1}
            >
              <Typography
                variant="p"
                style={{
                  fontWeight: 500,
                  textAlign: "left",
                  lineHeight: 1.3,
                  fontSize: state.fontSizeText,
                }}
              >
                {state.objective}
              </Typography>
            </Box>
          </section>
          <hr />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ flex: 0.3 }}>
              {state.hobbies.length > 0 && (
                <Box>
                  <Typography
                    variant="p"
                    style={{
                      backgroundColor:
                        state.color.headingBackGroundColor["hex"],
                      color: state.color.headingTextColor["hex"],
                      fontSize: state.fontSizeHeading,
                      fontWeight: 900,
                      letterSpacing: 1,
                      display: "block",
                      margin: "0 10px",
                      padding: "2px 0",
                    }}
                  >
                    Hobbies
                  </Typography>
                  <ul style={{ fontSize: state.fontSizeText }}>
                    {state.hobbies.map((ele) => (
                      <li>{ele}</li>
                    ))}
                  </ul>
                </Box>
              )}
              {state.languages.length > 0 && (
                <Box>
                  <Typography
                    variant="p"
                    style={{
                      backgroundColor:
                        state.color.headingBackGroundColor["hex"],
                      color: state.color.headingTextColor["hex"],
                      fontSize: state.fontSizeHeading,
                      fontWeight: 900,
                      letterSpacing: 1,
                      display: "block",
                      margin: "0 10px",
                      padding: "2px 0",
                    }}
                  >
                    Languages
                  </Typography>
                  <ul style={{ fontSize: state.fontSizeText }}>
                    {state.languages.map((ele) => (
                      <li>{ele}</li>
                    ))}
                  </ul>
                </Box>
              )}
              {state.skills.length > 0 && (
                <Box>
                  <Typography
                    variant="p"
                    style={{
                      backgroundColor:
                        state.color.headingBackGroundColor["hex"],
                      color: state.color.headingTextColor["hex"],
                      fontSize: state.fontSizeHeading,
                      fontWeight: 900,
                      letterSpacing: 1,
                      display: "block",
                      margin: "0 10px",
                      padding: "2px 0",
                    }}
                  >
                    Skills
                  </Typography>
                  <ul style={{ fontSize: state.fontSizeText }}>
                    {state.skills.map((ele) => (
                      <li>{ele}</li>
                    ))}
                  </ul>
                </Box>
              )}
              {state.honor.length > 0 && (
                <Box>
                  <Typography
                    variant="p"
                    style={{
                      backgroundColor:
                        state.color.headingBackGroundColor["hex"],
                      color: state.color.headingTextColor["hex"],
                      fontSize: state.fontSizeHeading,
                      fontWeight: 900,
                      letterSpacing: 1,
                      display: "block",
                      margin: "0 10px",
                      padding: "2px 0",
                    }}
                  >
                    Honours and Awards
                  </Typography>
                  <ul style={{ fontSize: state.fontSizeText }}>
                    {state.honor.map((ele) => (
                      <li>{ele}</li>
                    ))}
                  </ul>
                </Box>
              )}
            </Box>
            <hr />
            <Box sx={{ flex: 0.7 }}>
              {state.work_experience.length > 0 && (
                <Box>
                  <Typography
                    variant="p"
                    style={{
                      backgroundColor:
                        state.color.headingBackGroundColor["hex"],
                      color: state.color.headingTextColor["hex"],
                      fontSize: state.fontSizeHeading,
                      fontWeight: 900,
                      letterSpacing: 1,
                      display: "block",
                      margin: "0 10px",
                      padding: "2px 0",
                    }}
                  >
                    Work Experience
                  </Typography>
                  <ul style={{ fontSize: state.fontSizeText }}>
                    {state.work_experience.map((ele) =>
                      Object.values(ele).map((elem) => (
                        <li>
                          <Box py={1} style={{ textAlign: "left" }}>
                            <Typography variant="p">
                              {elem.name} - {Object.values(elem.location)},{" "}
                              {Object.values(elem.role)}
                            </Typography>
                            <Typography
                              style={{ fontSize: state.fontSizeText }}
                              variant="p"
                            >
                              {Object.values(elem.startmonth)}{" "}
                              {Object.values(elem.startyear)} -{" "}
                              {Object.values(elem.endmonth).length > 0 &&
                              Object.values(elem.endyear).length > 0 ? (
                                <>
                                  {Object.values(elem.endmonth)}{" "}
                                  {Object.values(elem.endyear)}
                                </>
                              ) : (
                                " Present"
                              )}
                            </Typography>
                            <Typography
                              style={{ fontSize: state.fontSizeText }}
                              variant="p"
                            >
                              {Object.values(elem.description)}
                            </Typography>
                          </Box>
                        </li>
                      ))
                    )}
                  </ul>
                </Box>
              )}
              {state.project.length > 0 && (
                <Box>
                  <Typography
                    variant="p"
                    style={{
                      backgroundColor:
                        state.color.headingBackGroundColor["hex"],
                      color: state.color.headingTextColor["hex"],
                      fontSize: state.fontSizeHeading,
                      fontWeight: 900,
                      letterSpacing: 1,
                      display: "block",
                      margin: "0 10px",
                      padding: "2px 0",
                    }}
                  >
                    Projects
                  </Typography>
                  <ul style={{ fontSize: state.fontSizeText }}>
                    {state.project.map((ele) =>
                      Object.values(ele).map((elem) => (
                        <li>
                          <Box
                            py={1}
                            sx={{ display: "flex", flexDirection: "column" }}
                          >
                            <Box>
                              <Typography variant="p">
                                <strong>{elem.name}</strong>
                              </Typography>
                              {" - "}
                              <Typography
                                style={{ fontSize: state.fontSizeText }}
                                variant="p"
                              >
                                {Object.values(elem.description)}
                              </Typography>
                            </Box>
                            <Typography
                              variant="p"
                              style={{ fontSize: state.fontSizeText }}
                            >
                              {Object.values(elem.deployed_link)}
                            </Typography>
                          </Box>
                        </li>
                      ))
                    )}
                  </ul>
                </Box>
              )}
              {state.education.length > 0 && (
                <Box>
                  <Typography
                    variant="p"
                    style={{
                      backgroundColor:
                        state.color.headingBackGroundColor["hex"],
                      color: state.color.headingTextColor["hex"],
                      fontSize: state.fontSizeHeading,
                      fontWeight: 900,
                      letterSpacing: 1,
                      display: "block",
                      margin: "0 10px",
                      padding: "2px 0",
                    }}
                  >
                    Education
                  </Typography>
                  <ul style={{ fontSize: state.fontSizeText }}>
                    {state.education.map((ele) =>
                      Object.values(ele).map((elem) => (
                        <li>
                          <Box
                            py={1}
                            sx={{ display: "flex", flexDirection: "column" }}
                            x
                          >
                            <Typography variant="p">
                              <strong>{elem.name}</strong>
                              {", "}
                              {elem.location}
                              {" - "}
                              {elem.degree}
                            </Typography>
                            <Typography
                              style={{ fontSize: state.fontSizeText }}
                              variant="p"
                            >
                              {Object.values(elem.startmonth)}{" "}
                              {Object.values(elem.startyear)}-{" "}
                              {Object.values(elem.endmonth).length > 0 &&
                              Object.values(elem.endyear).length > 0 ? (
                                <>
                                  {Object.values(elem.endmonth)}
                                  {Object.values(elem.endyear)}
                                </>
                              ) : (
                                " Present"
                              )}
                              {" - "}
                              {Object.values(elem.marks)}
                            </Typography>
                          </Box>
                        </li>
                      ))
                    )}
                  </ul>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Font>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(Preview);
