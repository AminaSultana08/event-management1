import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "./Banner";
import ServiceCard from "./ServiceCard";
import Footer from "./Footer/Footer";
import AboutUs from "./AboutUs";


const Home = () => {
   const services = useLoaderData()
   console.log(services.services);

    return (
        <div >
          <Navbar></Navbar>
           <Banner></Banner>
           <div className="mt-20">
            <h1 className="text-3xl mb-7 font-bold text-center text-pink-600 ">Our Services </h1>
            <div className="max-w-xl  mx-auto items-center justify grid grid-cols-1 gap-5">
            {
                services.services.map(service => <ServiceCard key={service.id} services={service}  ></ServiceCard>)
            }
            </div>
           </div>
           <AboutUs></AboutUs>
           <Footer></Footer>
        </div>
    );
};

export default Home;