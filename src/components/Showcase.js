import { Box, Typography } from "@mui/material";
import showcase from "../../public/images/showcase.jpg";

export default function Showcase() {
  return (
    <Box sx={{ width: " 100%", height: "100%" }}>
      <Box
        sx={{
          width: "100%",
          height: "300px",
          position: "relative",
          background: `url(${showcase.src}) no-repeat center center`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "0px",
            left: "0",
            zIndex: 20,
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            gap: "10px",
            color: "white",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "rgb(0,0,0,0.65)",
          }}
        >
          <Typography variant="h1" sx={{ fontWeight: "600" }}>
            Welcome To the party
          </Typography>
          <Typography variant="h4">Find the hottest DJ events</Typography>
        </Box>
      </Box>
    </Box>
  );
}
