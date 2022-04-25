import React from "react";
import { Box, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import "./Preview.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { connect } from "react-redux";

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
      pdf.output("dataurlnewwindow");
      pdf.save("download.pdf");
    });
  };

  return (
    <Box sx={{ width: "100%", margin: "auto" }} py={2}>
      <Button variant="contained" color="primary" onClick={downloadHandler}>
        Download
      </Button>
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
        <Typography variant="h6" sx={{ fontWeight: 900 }}>
          Curriculum Vitae
        </Typography>
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
              fontSize: 13,
            }}
          >
            <Typography
              variant="h6"
              style={{ fontWeight: 800, textAlign: "center" }}
            >
              {state.profile.first_name} {state.profile.last_name}
            </Typography>
            <Typography
              variant="p"
              style={{ textAlign: "center", fontSize: 15, paddingBottom: 5 }}
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
              state.profile.phone_number !== null ? (
                <strong>{`${"Phone: " + state.profile.phone_number}`}</strong>
              ) : (
                ""
              )}
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
              variant="h6"
              style={{
                fontWeight: 500,
                textAlign: "left",
                lineHeight: 1.3,
                fontSize: 13,
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
                <Typography variant="h6">Hobbies</Typography>
                <ul>
                  {state.hobbies.map((ele) => (
                    <li>{ele}</li>
                  ))}
                </ul>
              </Box>
            )}
            {state.languages.length > 0 && (
              <Box>
                <Typography variant="h6">Languages</Typography>
                <ul>
                  {state.languages.map((ele) => (
                    <li>{ele}</li>
                  ))}
                </ul>
              </Box>
            )}
            {state.skills.length > 0 && (
              <Box>
                <Typography variant="h6">Skills</Typography>
                <ul>
                  {state.skills.map((ele) => (
                    <li>{ele}</li>
                  ))}
                </ul>
              </Box>
            )}
            {state.honor.length > 0 && (
              <Box>
                <Typography variant="h6">Honours and Awards</Typography>
                <ul>
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
                <Typography variant="h6">Work Experience</Typography>
                <ul>
                  {state.work_experience.map((ele) =>
                    Object.values(ele).map((elem) => (
                      <li>
                        <Box py={1} style={{ textAlign: "left" }}>
                          <Typography>
                            {elem.name} - {Object.values(elem.location)},{" "}
                            {Object.values(elem.role)}
                          </Typography>
                          <Typography style={{ fontSize: 13 }}>
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
                          </Typography>
                          <Typography>
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
                <Typography variant="h6">Projects</Typography>
                <ul>
                  {state.project.map((ele) =>
                    Object.values(ele).map((elem) => (
                      <li>
                        <Box py={1}>
                          <Typography>
                            <strong>{elem.name}</strong>
                          </Typography>
                          <Typography style={{ fontSize: 13 }}>
                            {Object.values(elem.description)}
                          </Typography>
                          <Typography>
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
                <Typography variant="h6">Education</Typography>
                <ul>
                  {state.education.map((ele) =>
                    Object.values(ele).map((elem) => (
                      <li>
                        <Box py={1}>
                          <Typography>
                            <strong>{elem.name}</strong>
                            {", "}
                            {elem.location}
                            {" - "}
                            {elem.degree}
                          </Typography>
                          <Typography style={{ fontSize: 13 }}>
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
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(Preview);
