import { Box, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import SingleRow from "./SingleRow";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { updateLanguages } from "./util";

function Languages({ data, dispatch }) {
  const [val, setVal] = useState(data);
  const [str, setStr] = useState("");

  useEffect(() => {
    dispatch(val);
  }, [val]);

  const changeHandler = (name, value) => {
    setStr(value);
  };

  const deleteHandler = (value) => {
    setVal((prev) => prev.filter((ele, ind) => ind !== value));
  };

  const submitHandler = async () => {
    await setVal((prev) => [...prev, str]);
    setStr("");
  };

  return (
    <Box
      sx={{
        width: "90%",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        textAlign: "left",
      }}
      px={3}
    >
      <hr style={{ width: "100%" }} />
      <SingleRow
        value={"Languages"}
        placeholder={"Java"}
        name={"languages"}
        handle={changeHandler}
        val={str}
      />
      <Button onClick={submitHandler} variant="contained">
        + Add
      </Button>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          marginTop: 7,
        }}
      >
        {val.map((ele, ind) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid #bbb",
              borderRadius: 6,
            }}
            bgcolor="#eee"
            px={2}
          >
            <h3>{ele}</h3>
            <Button variant="outlined" onClick={() => deleteHandler(ind)}>
              Delete
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

const MapStateToProps = (state) => {
  return {
    data: state.languages,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    dispatch: (val) => dispatch(updateLanguages(val)),
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(Languages);
