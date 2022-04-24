import "./App.css";
import UserInput from "./UserInput";
import Preview from "./Preview";
import Settings from "./Settings";
import { Box } from "@material-ui/core";
import { store } from "./util";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      {/* <DataProvider initialValue={initialValue} reducer={reducer}> */}
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          flexWrap: "nowrap",
          fontFamily: "seriff",
        }}
      >
        <Box
          sx={{
            flex: 0.3,
            backgroundColor: "#ddd",
            height: "100vh",
            overflow: "auto",
          }}
        >
          <UserInput />
        </Box>
        <Box sx={{ flex: 0.4, backgroundColor: "#eee", height: "100vh" }}>
          <Preview />
        </Box>
        <Box
          sx={{
            flex: 0.3,
            backgroundColor: "#ddd",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Settings />
        </Box>
      </Box>
    </Provider>
  );
}

export default App;
