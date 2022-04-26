import React, { useEffect, useState } from "react";
import { Box, Typography } from "@material-ui/core";
import SingleRow from "./SingleRow";
import { connect } from "react-redux";
import { updateProfile } from "./util";

function Profile({ profile, dispatch }) {
  const [state, setState] = useState(profile);

  useEffect(() => {
    dispatch(state);
  }, [state]);

  const changeHandler = async (name, value) => {
    await setState((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const imageHandler = async (e) => {
    console.log(URL.createObjectURL(e.target.files[0]));
    await setState((prev) => {
      return { ...prev, photo_url: URL.createObjectURL(e.target.files[0]) };
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
        value={"Photo Url"}
        placeholder={"https://image.com"}
        name={"photo_url"}
        handle={changeHandler}
        val={profile.photo_url}
      />
      <Typography
        variant="h6"
        style={{ textAlign: "center", display: "block", color: "red" }}
      >
        Or
      </Typography>
      <SingleRow
        value={"Photo Upload"}
        name={"photo_url"}
        handle={imageHandler}
        type={"file"}
      />
      {/* <input
        type="file"
        onChange={imageHandler}
        style={{ paddingBottom: "10px" }}
      /> */}
      <SingleRow
        value={"First Name"}
        placeholder={"Jane"}
        name={"first_name"}
        handle={changeHandler}
        val={profile.first_name}
      />
      <SingleRow
        value={"Last Name"}
        placeholder={"Dane"}
        name={"last_name"}
        handle={changeHandler}
        val={profile.last_name}
      />
      <SingleRow
        value={"Subtitle"}
        placeholder={"Role"}
        name={"role"}
        handle={changeHandler}
        val={profile.role}
      />
      <hr style={{ width: "100%" }} />
      <SingleRow
        value={"Address Line 1"}
        placeholder={"140 cross street"}
        name={"address_line1"}
        handle={changeHandler}
        val={profile.address_line1}
      />
      <SingleRow
        value={"Address Line 2"}
        placeholder={"Behind Vegetable Market"}
        name={"address_line2"}
        handle={changeHandler}
        val={profile.address_line2}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
        mb={1}
      >
        <SingleRow
          value={"City"}
          placeholder={"Erode"}
          name={"city"}
          handle={changeHandler}
          val={profile.city}
        />
        <SingleRow
          value={"State"}
          placeholder={"TamilNadu"}
          name={"state"}
          handle={changeHandler}
          val={profile.state}
        />
      </Box>
      <hr style={{ width: "100%" }} />
      <SingleRow
        value={"Phone Number"}
        placeholder={"+91 9876543210"}
        name={"phone_number"}
        handle={changeHandler}
        val={profile.phone_number}
      />
      <SingleRow
        value={"Website"}
        placeholder={"https://test.com"}
        name={"website"}
        handle={changeHandler}
        val={profile.website}
      />
      <SingleRow
        value={"Email Address"}
        placeholder={"test@gmail.com"}
        name={"email"}
        handle={changeHandler}
        val={profile.email}
      />
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (values) => dispatch(updateProfile(values)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
