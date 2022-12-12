import styled from "@emotion/styled";
import {
  Button,
  Divider,
  Grid,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { Box, padding } from "@mui/system";
import React from "react";

const MyButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  height:"10px",
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 20px",
});

const Form = () => {
  return (
    <Box position="fixed">
      <Typography sx={{ color: "black" }}>Support Form</Typography>
      <Divider />
      <Grid sx={{ alignItems: "center", height: "50%" }} item>
        <Box sx={{ marginTop: "20px" }}>
          <TextField label="Name">hello</TextField>
        </Box>
        <Box sx={{ marginTop: "20px" }}>
          <TextField height="6" label="email">
            hello
          </TextField>
        </Box>
        <Box sx={{ marginTop: "20px" }}>
          <TextField label="How can we help you...">hello</TextField>
        </Box>
        <MyButton sx={{ alignItems: "center", margin: "5px 0px 0px 0px" }}>
          Submit
        </MyButton>
      </Grid>
    </Box>
  );
};

export default Form;
