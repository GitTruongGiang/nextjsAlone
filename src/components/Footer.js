import { Box, Link, Typography } from "@mui/material";
import { Link as routerLink } from "next/link";

export default function Footer() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography> Copyright &copy; DJ Events</Typography>
      <Link
        component={routerLink}
        href="/about"
        sx={{ textDecoration: "none" }}
      >
        About This Project
      </Link>
    </Box>
  );  
}
