import CardGrid from "@/components/advertisement";
import Banner from "@/components/banner";  
import Cursor from "@/components/cursor";
import Footer from "@/components/footer";
import Header from "@/components/header"; 

export default function Home() {
  return (
    <div>
      <Cursor />
      <Header />
      <Banner />
      <CardGrid />  
      <Footer />
    </div>
  );
}
