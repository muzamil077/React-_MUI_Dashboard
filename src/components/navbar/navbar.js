import {
  AppBar,
  Avatar,
  Grid,
  IconButton,
  Input,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import React from "react";
import { useTheme } from "@emotion/react";
import { blue } from "@mui/material/colors";

const Navbar = () => {
  const theme = useTheme();
  return (
    <Box>
      <AppBar position="sticky" sx={{backgroundColor:"gray"}}>
        <Toolbar>
          <Grid sx={{ backgroundColor: "gray", alignItems:"center", borderRadius:"5px"}} p={1} top={7} position="fixed">
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                postion: "fixed",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "block", sm: "none" } }}
              >
                <MenuIcon />
              </Typography>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
              >
                {/* <FiberManualRecordIcon /> */}
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                meixu
              </Typography>
              <Grid sx={{ margin: "0px 0px 0px 20px" }}>
                <Input
                  sx={{color:"white", opacity:"100"  }}
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Grid>
              <Grid>
                <AccountCircleRoundedIcon />
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
