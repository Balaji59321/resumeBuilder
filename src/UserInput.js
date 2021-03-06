import React, { useState, useRef } from "react";
import Header from "./Header";
import { Box } from "@material-ui/core";
import Profile from "./Profile";
import Objective from "./Objective";
import Hobbies from "./Hobbies";
import Languages from "./Languages";
import Skills from "./Skills";
import Honor from "./Honor";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Projects from "./Projects";
import { Button } from "@material-ui/core";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

function UserInput() {
  const [val, setVal] = useState("profile");
  const myRef = React.createRef(null);

  const handler = (value) => {
    setVal(value);
  };

  return (
    <>
      <Box
        sx={{
          flexWrap: "nowrap",
          overflow: "auto",
          position: "relative",
        }}
      >
        <Header
          data={[
            "Profile",
            "Professional Objective",
            "Work Experience",
            "Education",
            "Projects",
            "Honours & Rewards",
            // "Certifications",
            "Skills",
            "Hobbies",
            "Languages",
            // "Additional Information",
          ]}
          value={handler}
          val={val}
          ref={myRef}
        />
        {/* <Button
          onClick={() => myRef.scrollBy(100, 100)}
          sx={{ position: "aboslute", left: 0 }}
        >
          <ArrowCircleRightIcon />
        </Button> */}
      </Box>
      {val === "profile" && <Profile />}
      {val === "professional objective" && <Objective />}
      {val === "work experience" && <WorkExperience />}
      {val === "education" && <Education />}
      {val === "projects" && <Projects />}
      {val === "honours & rewards" && <Honor />}
      {val === "skills" && <Skills />}
      {val === "hobbies" && <Hobbies />}
      {val === "languages" && <Languages />}
    </>
  );
}

export default UserInput;
