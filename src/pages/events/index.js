import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import apiSevice from "@/apiAxios/apiSevice";
import { Box, Button } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Events({ data }) {
  const router = useRouter();
  const handleNavigate = (slug) => {
    router.push(`/events/${slug}`);
  };
  return (
    <Layout>
      <h1> events</h1>
      {data.length ? "" : <h3>no event to show</h3>}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          height: "100%",
          width: "100%",
          borderRadius: "10px",
        }}
      >
        {data.map((evt) => {
          return (
            <Box
              key={evt.id}
              sx={{
                boxShadow:
                  "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
                height: "150px",
              }}
            >
              <Box
                sx={{
                  margin: "0 20px",
                  height: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src={evt.image}
                  sx={{ height: "100px", width: "150px", objectFit: "cover" }}
                />
                <Box
                  sx={{
                    display: " flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <h5>
                    {evt.date},{evt.time}
                  </h5>
                  <h3>{evt.name}</h3>
                </Box>
                <Button
                  variant="contained"
                  onClick={() => handleNavigate(evt.slug)}
                >
                  Details
                </Button>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await apiSevice.get("/events");
  const data = await res.data;

  return {
    props: { data },
    revalidate: 1, // will be passed to the page component as props
  };
}
