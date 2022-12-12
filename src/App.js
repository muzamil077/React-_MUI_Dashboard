import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Feed from "./components/feed/feed";
import Rightbar from "./components/rightbar/rightbar";
import Navbar from "./components/navbar/navbar";

import { Container, Stack } from "@mui/system";

function App() {
  return (
    <div>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </div>
  );
}

export default App;
