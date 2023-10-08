import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "./Banner";
import ServiceCard from "./ServiceCard";
import Footer from "./Footer/Footer";


const Home = () => {
   const services = useLoaderData()
   console.log(services.services);

    return (
        <div >
          <Navbar></Navbar>
           <Banner></Banner>
           <div>
            <h1 className="2xl">Our Services </h1>
            <div className="max-w-xl  mx-auto items-center justify grid grid-cols-1 gap-5">
            {
                services.services.map(service => <ServiceCard key={service.id} services={service}  ></ServiceCard>)
            }
            </div>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Home;