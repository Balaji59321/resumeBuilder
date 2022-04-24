import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import SingleRow from "./SingleRow";
import { updateProject } from "./util";
import { Typography } from "@material-ui/core";

function Projects({ data, dispatch }) {
  const [val, setVal] = useState(data);
  const [str, setStr] = useState({
    name: "",
    description: "",
    deployed_link: "",
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
    console.log(ind);
    setVal((prev) => prev.filter((ele, index) => ind !== index));
  };

  const submitHandler = async () => {
    await setVal((prev) => [...prev, { str }]);
    setStr({
      name: "",
      description: "",
      deployed_link: "",
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
      <SingleRow
        value={"Project Title"}
        placeholder={"e-commerce"}
        name={"name"}
        handle={changeHandler}
        val={str.name}
      />
      <SingleRow
        value={"Project Description"}
        placeholder={"Built with the following technology stacks"}
        name={"description"}
        handle={changeHandler}
        val={str.description}
      />
      <SingleRow
        value={"Project Link"}
        placeholder={"https://test.netlify.app"}
        name={"deployed_link"}
        handle={changeHandler}
        val={str.deployed_link}
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
                <strong>{Object.values(elem.name)}</strong>
              </Typography>
              <Typography style={{ fontSize: 13 }}>
                {Object.values(elem.deployed_link)}
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
    data: state.project,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    dispatch: (val) => dispatch(updateProject(val)),
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(Projects);
