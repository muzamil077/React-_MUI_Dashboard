import { Box } from "@mui/system";
import { useReducer, useState } from "react";
import Button from "@mui/material/Button";
import Charts from "../chart/chart";
import DetailPage from "../../pages/DatailPage/DetailPage";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  Stack,
  Typography,
  useStepContext,
} from "@mui/material";
import { blue, red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Home from "../api/api";

const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "increament":
      return { count: state.count + 1 };
    case "decreament":
      return { count: state.count - 1 };
    case "resete":
      return { count: (state.count = 0) };
    default:
      return { count: state.count };
  }
}
const Feed = () => {
  const [state, dispatech] = useReducer(reducer, initialState);
  const [open, setOpen] = useState(false);
  const [click, setClick] = useState(false);
  const hendelClick = () => {
    setClick(!click);
    console.log("hello Detail page how are you");
  };
  return (
    <Box
      p={2}
      sx={{
        backgroundColor: "white",
        flex: "4",
        borderLeft: "var(--Grid-borderWidth) solid",
      }}
    >
      <Box>
        <Charts />
      </Box>
      <h2>UseReducer</h2>
      <Typography
        sx={{
          backgroundColor: "gray",
          width: "8%",
          color: "white",
          padding: "5px",
          borderRadius: "5px",
        }}
      >
        Count:{state.count}
      </Typography>
      <Divider />
      <br />
      <br />
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          onClick={() => dispatech({ type: "increament" })}
        >
          increament
        </Button>
        <Button
          variant="contained"
          onClick={() => dispatech({ type: "decreament" })}
        >
          Decreament
        </Button>
        <Button
          variant="contained"
          onClick={() => dispatech({ type: "resete" })}
        >
          Resete
        </Button>
      </Stack>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
              M
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <Box onClick={() => setOpen(!open)}>
                <MoreVertIcon />
              </Box>
              <Box sx={{ position: "relative", top: "30px" }}>
                {open && <Typography>fined more</Typography>}
              </Box>
            </IconButton>
          }
          title="Muzamil hussain"
          subheader="September 14, 2022"
        />
        <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="dase chapshoro"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
      <Home hendelClick={hendelClick} click={click} />
    </Box>
  );
};

export default Feed;
