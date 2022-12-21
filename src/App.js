import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Feed from "./components/feed/feed";
import Rightbar from "./components/rightbar/rightbar";
import Navbar from "./components/navbar/navbar";
import { BrowserRoute, BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Stack } from "@mui/system";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Stack marginTop="50px" direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
      </BrowserRouter>
    </div>
  );
}

export default App;
