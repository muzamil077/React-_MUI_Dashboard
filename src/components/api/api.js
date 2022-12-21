import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import DetailPage from "../../pages/DatailPage/DetailPage";
import React, { useEffect, useState } from "react";

const Home = ({ hendelClick, click }) => {
  const [user, setUser] = useState([]);
  console.log(user, "hello users  how are you all");

  const callAPI = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const products = await res.json();
      console.log(products);
      setUser(products);
      user.push(products);
    } catch (err) {
      console.log(err);
    }
  };
 callAPI()

  return (
    <div>
      <Box>
        <Box
          // columnSpacing={10}
          spacing={4}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            spacing: "2",
            marginTop: "10px",
          }}
        >
          {click && 
          
          <DetailPage hendelClick={hendelClick} />
          }
          {user.splice(0, 10).map((item) => {
            return (
              <>
                <Card onClick={hendelClick}  sx={{ maxWidth: 345, backgroundColor: "gray", cursor:"pointer" }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                    backgroundPosition="center"
                    image={item.image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </>
            );
          })}
        </Box>
      </Box>
    </div>
  );
};
export default Home;
