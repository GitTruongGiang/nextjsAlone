import apiSevice from "@/apiAxios/apiSevice";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Header() {
  const [state, setState] = useState("");
  const router = useRouter();
  const handleNavigateHome = () => {
    router.push("/");
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "60px",
        display: "flex",
        alignItems: "center",
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
      }}
    >
      <Box
        sx={{
          padding: { xs: "0 10px", xl: "0 40px" },
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          sx={{
            fontSize: { xs: "16px", xl: "25px" },
            color: "red",
            ":hover": { backgroundColor: "white", border: "none" },
          }}
          onClick={handleNavigateHome}
        >
          DJ Events
        </Button>
        <TextField
          label="search"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <Button
          variant="contained"
          sx={{ fontSize: { xs: "10px", xl: "16px" }, borderRadius: "10px" }}
        >
          Events
        </Button>
      </Box>
    </Box>
  );
}
