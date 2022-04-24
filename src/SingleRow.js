import React from "react";
import { Box } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { ChangeCircle } from "@mui/icons-material";

function SingleRow(props) {
  const changeHandler = (e) => {
    props.handle(e.target.name, e.target.value);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
      mb={1}
    >
      <label
        style={{
          display: "block",
          paddingBottom: 7,
          fontWeight: 600,
          fontSize: 12,
          textTransform: "uppercase",
        }}
      >
        {props.value}
      </label>
      <TextField
        id="outlined-basic"
        label={!props.val && props.placeholder}
        variant="outlined"
        //   helperText="Some important text"
        style={{ width: "100%" }}
        sx={{}}
        name={props.name}
        onChange={changeHandler}
        value={props.val}
      />
    </Box>
  );
}

export default SingleRow;
