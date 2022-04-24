import React, { useEffect, useState } from "react";
import { Box, TextField, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import SingleRow from "./SingleRow";
import { updateEducation, updateWorkExperience } from "./util";
import { connect } from "react-redux";

function Education({ data, dispatch }) {
  const [val, setVal] = useState(data);
  const [str, setStr] = useState({
    name: "",
    location: "",
    degree: "",
    marks: "",
    startyear: "",
    startmonth: "",
    endyear: "",
    endmonth: "",
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
      degree: "",
      marks: "",
      startyear: "",
      startmonth: "",
      endyear: "",
      endmonth: "",
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
        Add your Level from Recent to Oldest
      </Typography>
      <SingleRow
        value={"School/University Name"}
        placeholder={"Anna University"}
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
        value={"Degree"}
        placeholder={"B.E Computer Science"}
        name={"degree"}
        handle={changeHandler}
        val={str.degree}
      />
      <SingleRow
        value={"Marks in CGPA/%"}
        placeholder={"90"}
        name={"marks"}
        handle={changeHandler}
        val={str.marks}
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
                  {Object.values(elem.degree)}
                </strong>
              </Typography>
              <Typography style={{ fontSize: 13 }}>
                {Object.values(elem.startmonth)} {Object.values(elem.startyear)}
                - {Object.values(elem.endmonth)} {Object.values(elem.endyear)}
              </Typography>
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
    data: state.education,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    dispatch: (values) => dispatch(updateEducation(values)),
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(Education);
