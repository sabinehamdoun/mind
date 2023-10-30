import CardGrid from "@/components/advertisement";
import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import axios from "@/utils/axios";

export default function Home({ data }) {
  
  console.log({data})

  return (
    
    <div>
      <Header />
      <Banner />
      <CardGrid />
      <Footer />
    </div>
  )
}

export async function getServerSideProps({ locale }) {
  let data;
  await axios
    .get("/projects", {
      headers: {
        "Accept-Language": locale,
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch(console.error);
  return { props: { data } };
}

