import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import ServiceDetailsCard from "./ServiceDetailsCard";
import Footer from "../Home/Footer/Footer";



const ServiceDetails = () => {
    const [service, setService] = useState()
    const services = useLoaderData()
  
    const {id} =useParams()
    const idInt = parseInt(id)
     
    useEffect(()=>{
        console.log(id,services);
        const selectService= services.services.find(service=> service.id ===idInt)
        setService(selectService)
    } ,[id,idInt,services] )
    console.log(service);
    return (
        <div>
            <Navbar></Navbar>
          <ServiceDetailsCard service = {service} ></ServiceDetailsCard>
          <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;