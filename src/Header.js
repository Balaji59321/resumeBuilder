import React from "react";
import { Box } from "@material-ui/core";

function Header({ data, value, val }) {
  const clickHandler = (val) => {
    value(val.toLowerCase());
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 25,
        flexWrap: "nowrap",
        fontSize: 12,
      }}
      p={2}
      px={4}
      pb={5}
    >
      {data.map((ele) => (
        <Box
          sx={{
            flexGrow: 1,
            flexShrink: 0,
            textTransform: "uppercase",
            letterSpacing: 1,
            fontWeight: 600,
            cursor: "pointer",
            userSelect: "none",
            backgroundColor: `${val === ele.toLowerCase() ? "#aaa" : ""}`,
            borderRadius: 3,
            padding: 5,
          }}
          key={Math.random()}
          onClick={() => clickHandler(ele)}
        >
          {ele}
        </Box>
      ))}
    </Box>
  );
}

export default Header;
