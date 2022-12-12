import { Button, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [user, setUser] =  useState([])
  console.log(user, "hello users  how are you all")

  const callAPI = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const saman = await res.json();
      console.log(saman);
      setUser(saman)
      user.push(saman)
    } catch (err) {
      console.log(err);
    }
  }; 
  useEffect(() => {
    callAPI()
  },[])
  
  return (
    <div>
      <Box>
        <Box>
          {
           user.map((item)=>{
            return( 
              <>
              {/* <h2>{item.id}</h2> */}
              <img width={50} src={item.image}/>
              <h2 color={blue} font >{item.title}</h2>
             
              </>
            )
                    
           })
          }
        </Box>
        <Box>
          <Typography  sx={{ marginLeft: "18px" }} >Our Data is here</Typography>
        </Box>
        <Box>
          <Button
            sx={{ marginLeft: "18px" }}
            variant="contained"
            onClick={callAPI}
          >
            Make API Call
          </Button>
        </Box>
      </Box>
    </div>
  );
};
export default Home;
