import apiSevice from "@/apiAxios/apiSevice";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function EventsPage() {
  const router = useRouter();
  console.log(router);
  return (
    <Layout>
      <h1>Events Page</h1>
      <p>this is an app to find the latest DJ and orther musical events </p>
      <p>Version: 1.0.0</p>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await apiSevice.get(`/events`);
  const data = await res.data;
  const paths = data.map((evt) => {
    return { params: { slug: evt.slug } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await apiSevice.get(`/events/${slug}`);
  const data = await res.data;

  return {
    props: { data },
    revalidate: 1,
  };
}
