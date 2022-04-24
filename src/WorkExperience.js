import React, { useEffect, useState } from "react";
import { Box, TextField, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import SingleRow from "./SingleRow";
import { updateWorkExperience } from "./util";
import { connect } from "react-redux";

function WorkExperience({ data, dispatch }) {
  const [val, setVal] = useState(data);
  const [str, setStr] = useState({
    name: "",
    location: "",
    role: "",
    startyear: "",
    startmonth: "",
    endyear: "",
    endmonth: "",
    description: "",
  });

  useEffect(() => {
    dispatch(val);
  }, [val]);

  const changeHandler = (name, value) => {
    setStr((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const deleteHander = (ind) => {
    setVal((prev) => prev.filter((ele, index) => ind !== index));
  };

  const submitHandler = async () => {
    await setVal((prev) => [...prev, { str }]);
    setStr({
      name: "",
      location: "",
      role: "",
      startyear: "",
      startmonth: "",
      endyear: "",
      endmonth: "",
      description: "",
    });
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
      <Typography style={{ color: "red", textAlign: "center" }}>
        Add your Experience from Recent to Oldest
      </Typography>
      <SingleRow
        value={"Company Name"}
        placeholder={"Wipro"}
        name={"name"}
        handle={changeHandler}
        val={str.name}
      />
      <SingleRow
        value={"Location"}
        placeholder={"Chennai"}
        name={"location"}
        handle={changeHandler}
        val={str.location}
      />
      <SingleRow
        value={"Role"}
        placeholder={"Developer"}
        name={"role"}
        handle={changeHandler}
        val={str.role}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <SingleRow
          value={"Start Month"}
          placeholder={"January"}
          name={"startmonth"}
          handle={changeHandler}
          val={str.startmonth}
        />
        <SingleRow
          value={"Start Year"}
          placeholder={"2017"}
          name={"startyear"}
          handle={changeHandler}
          val={str.startyear}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <SingleRow
          value={"End Month"}
          placeholder={"January"}
          name={"endmonth"}
          handle={changeHandler}
          val={str.endmonth}
        />
        <SingleRow
          value={"End Year"}
          placeholder={"2018"}
          name={"endyear"}
          handle={changeHandler}
          val={str.endyear}
        />
      </Box>
      <SingleRow
        value={"Description"}
        placeholder={"describe your experience"}
        name={"description"}
        handle={changeHandler}
        val={str.description}
      />
      <Button variant="outlined" onClick={submitHandler}>
        +Add
      </Button>
      {val.map((ele, ind) =>
        Object.values(ele).map((elem) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 3,
              border: "1px solid black",
            }}
            py={1}
            px={1}
            my={1}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography style={{ fontSize: 15 }}>
                <strong>
                  {Object.values(elem.name)} - {Object.values(elem.location)},{" "}
                  {Object.values(elem.role)}
                </strong>
              </Typography>
              <Typography style={{ fontSize: 13 }}>
                {Object.values(elem.startmonth)} {Object.values(elem.startyear)}
                - {Object.values(elem.endmonth)} {Object.values(elem.endyear)}
              </Typography>
              {/* <Typography style={{ fontSize: 13 }}>
                {Object.values(elem.description)}
              </Typography> */}
            </Box>
            <Button variant="contained" onClick={() => deleteHander(ind)}>
              Delete
            </Button>
          </Box>
        ))
      )}
    </Box>
  );
}

const MapStateToProps = (state) => {
  return {
    data: state.work_experience,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    dispatch: (values) => dispatch(updateWorkExperience(values)),
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(WorkExperience);
