import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import SingleRow from "./SingleRow";
import { connect } from "react-redux";
import { updateObjective } from "./util";

function Objective({ state, dispatch }) {
  const [val, setVal] = useState(state);

  useEffect(() => {
    dispatch(val);
  }, [val]);

  const changeHandler = async (name, val) => {
    await setVal(val);
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
        value={"Objective"}
        placeholder={"Looking For challenging role"}
        name={"objective"}
        handle={changeHandler}
        val={val}
        inputType={"textarea"}
      />
      ;
    </Box>
  );
}

const MapStateToProps = (state) => {
  return {
    state: state.objective,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    dispatch: (values) => dispatch(updateObjective(values)),
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(Objective);
