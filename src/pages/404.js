import Layout from "@/components/Layout";
import { Box, Link, Typography } from "@mui/material";
import { Link as routerLink } from "next/link";

export default function NotFoundPage() {
  return (
    <Layout>
      <Box>
        <Typography variant="h1" sx={{ fontWeight: 600 }}>
          404
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          Sory, there is nothing here
        </Typography>
        <Link
          component={routerLink}
          href="/"
          sx={{ textDecoration: "none", fontSize: "25px" }}
        >
          Go Back Home
        </Link>
      </Box>
    </Layout>
  );
}
