import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const DetailPage = ({hendelClick}) => {
  return (
    <div>
      <Box>
        <Typography>This is a detail page of products</Typography>
        <Button onClick={hendelClick}>GO back</Button>
      </Box>
    </div>
  );
};

export default DetailPage;
