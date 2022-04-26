import React from "react";
import { Box } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { TextareaAutosize } from "@material-ui/core";

function SingleRow(props) {
  const changeHandler = (e) => {
    if (props.type === "file") return props.handle(e);
    return props.handle(e.target.name, e.target.value);
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
      {props.inputType === "textarea" ? (
        <TextareaAutosize
          minRows={10}
          placeholder={!props.val && props.placeholder}
          name={props.name}
          onChange={changeHandler}
          value={props.val}
          style={{ fontSize: 16, backgroundColor: "#ddd" }}
        />
      ) : (
        <TextField
          id="outlined-basic"
          label={!props.val && props.placeholder}
          variant="outlined"
          //   helperText="Some important text"
          style={{ width: "100%" }}
          name={props.name}
          onChange={changeHandler}
          value={props.val}
          type={props.type ? props.type : "text"}
        />
      )}
    </Box>
  );
}

export default SingleRow;
