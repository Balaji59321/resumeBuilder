import { Select, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { MenuItem } from "@material-ui/core";
import { connect } from "react-redux";
import { Box } from "@material-ui/core";
import {
  updateColor,
  updateFont,
  updateHeadFont,
  updateTextFont,
} from "./util";
import { Slider } from "@material-ui/core";

function Settings({
  colors,
  dispatch,
  dispatchFont,
  dispatchHeadSize,
  dispatchFontSize,
}) {
  const [color, setColor] = useColor("hex", "#121212");
  const [toggleColor, setToggleColor] = useState("text-color");
  const [font, setFont] = useState("Kufam");

  useEffect(() => {
    if (toggleColor === "text-color") dispatch({ ...colors, textColor: color });
    else if (toggleColor === "bg-color")
      dispatch({ ...colors, backGroundColor: color });
    else if (toggleColor === "heading-text-color")
      dispatch({ ...colors, headingTextColor: color });
    else if (toggleColor === "heading-bg-color")
      dispatch({ ...colors, headingBackGroundColor: color });
  }, [color]);

  useEffect(() => {
    dispatchFont(font);
  }, [font]);

  const changeHandler = (e) => {
    setToggleColor(e.target.value);
  };

  const changeFontHandler = (e) => {
    setFont(e.target.value);
  };

  const headFontHandler = (e, val) => {
    dispatchHeadSize(val);
  };

  const textFontHandler = (e, val) => {
    dispatchFontSize(val);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gridGap: 40,
      }}
    >
      <Box>
        <Select onChange={changeHandler} value={toggleColor}>
          <MenuItem value="text-color">Text Color</MenuItem>
          <MenuItem value="bg-color">Background Color</MenuItem>
          <MenuItem value="heading-text-color">Heading Text Color</MenuItem>
          <MenuItem value="heading-bg-color">Heading Background Color</MenuItem>
        </Select>
        <Typography variant="h6">Select a color</Typography>
        <ColorPicker
          width={400}
          height={228}
          color={color}
          onChange={setColor}
          hideHSV
          hideHEX
          hideRGB
          dark
        />
      </Box>
      <Box>
        <Typography>Select Font Style</Typography>
        <Select onChange={changeFontHandler} value={font}>
          <MenuItem value="Kufam">Kufam</MenuItem>
          <MenuItem value="Roboto">Roboto</MenuItem>
          <MenuItem value="Ubuntu">Ubuntu</MenuItem>
          <MenuItem value="Merriweather">Merriweather</MenuItem>
          <MenuItem value="Rubik">Rubik</MenuItem>
          <MenuItem value="Arimo">Arimo</MenuItem>
          <MenuItem value="Cairo">Cairo</MenuItem>
          <MenuItem value="Signika Negative">Signika Negative</MenuItem>
          <MenuItem value="Cookie">Cookie</MenuItem>
          <MenuItem value="Public Sans">Public Sans</MenuItem>
          Arimo
        </Select>
      </Box>
      <Box>
        <Typography>Select Heading Font Size</Typography>
        <Slider
          size="small"
          defaultValue={13}
          aria-label="Small"
          valueLabelDisplay="auto"
          onChange={headFontHandler}
          style={{ width: "80%" }}
        />
      </Box>
      <Box>
        <Typography>Select Text Font Size</Typography>
        <Slider
          size="small"
          defaultValue={13}
          aria-label="Small"
          valueLabelDisplay="auto"
          onChange={textFontHandler}
          style={{ width: "80%" }}
        />
      </Box>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    colors: state.color,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (colors) => dispatch(updateColor(colors)),
    dispatchFont: (font) => dispatch(updateFont(font)),
    dispatchHeadSize: (size) => dispatch(updateHeadFont(size)),
    dispatchFontSize: (size) => dispatch(updateTextFont(size)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Settings));
