import CardGrid from "@/components/advertisement";
import Banner from "@/components/banner";  
import Footer from "@/components/footer";
import Header from "@/components/header"; 

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
