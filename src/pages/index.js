import CardGrid from "@/components/advertisement";
import Banner from "@/components/banner"; 
import Card from "@/components/card";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Slider from "@/components/slider";
import axios from "@/utils/axios";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <CardGrid />  
      <Footer />
    </div>
  );
}
