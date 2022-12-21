import zIndex from "@mui/material/styles/zIndex";
import { Box } from "@mui/system";
import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Work", 20],
  ["Eat", 4],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];
const options = {
  title: "My Daily Activities",
  title2: "Pie chart",
};

const Charts = () => {
  return (
    <Box sx={{ cursore: "pointer",  zIndex:"-1" }}>
      <Chart
        chartType="PieChart"
        data={data}
        options={options} 
        option={options}
        width={"100%"}
        height={"400px"}
      />
    </Box>
  );
};
export default Charts;
