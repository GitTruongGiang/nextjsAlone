import apiSevice from "@/apiAxios/apiSevice";
import Layout from "@/components/Layout";
import { Box, IconButton, Link, Typography } from "@mui/material";
import { useRouter } from "next/router";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import { Link as routerLink } from "next/link";

export default function EventsPage({ data }) {
  const router = useRouter();
  console.log(data);
  return (
    <Layout>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton sx={{ borderRadius: "10px", color: "#1e88e5" }}>
            <EditIcon />
            <Typography>Edit Event</Typography>
          </IconButton>
          <IconButton sx={{ borderRadius: "10px", color: "#e53935" }}>
            <CloseIcon />
            <Typography>Deleted Event</Typography>
          </IconButton>
        </Box>

        <Box>
          <Typography>
            {data.date} at {data.time}
          </Typography>
          <Typography sx={{ fontSize: "25px", fontWeight: 600 }}>
            {data.name}
          </Typography>
        </Box>

        <Box
          component="img"
          src={data.image}
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />

        <Box>
          <Typography sx={{ fontSize: "25px", fontWeight: 600 }}>
            performers:
          </Typography>
          <Typography>{data.performers}</Typography>
        </Box>

        <Box>
          <Typography sx={{ fontSize: "25px", fontWeight: 600 }}>
            description:
          </Typography>
          <Typography>{data.description}</Typography>
        </Box>

        <Box>
          <Typography sx={{ fontSize: "25px", fontWeight: 600 }}>
            venue: {data.venue}
          </Typography>
          <Typography>{data.address}</Typography>
        </Box>

        <Link
          component={routerLink}
          href="/events"
          sx={{ textDecoration: "none", fontSize: "20px", fontWeight: 600 }}
        >
          {"<"} Go Back
        </Link>
      </Box>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await apiSevice.get(`/events`);
  const data = await res.data;
  const paths = data.map((evt) => ({ params: { slug: evt.slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await apiSevice.get(`/events/${slug}`);
  const data = await res.data[0];
  return {
    props: { data },
    revalidate: 1,
  };
}
