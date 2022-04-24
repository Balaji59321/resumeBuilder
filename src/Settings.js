import { Select, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { MenuItem } from "@material-ui/core";
import { connect } from "react-redux";
import { updateColor } from "./util";

function Settings({ colors, dispatch }) {
  const [color, setColor] = useColor("hex", "#121212");
  const [toggleColor, setToggleColor] = useState("text-color");

  useEffect(() => {
    if (toggleColor === "text-color") dispatch({ ...colors, textColor: color });
    else dispatch({ ...colors, backGroundColor: color });
  }, [color]);

  const changeHandler = (e) => {
    setToggleColor(e.target.value);
  };

  return (
    <>
      <Select onChange={changeHandler} value={toggleColor}>
        <MenuItem value="text-color">Text Color</MenuItem>
        <MenuItem value="bg-color">Background Color</MenuItem>
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
      <Typography>Select Font Style</Typography>
    </>
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Settings));
