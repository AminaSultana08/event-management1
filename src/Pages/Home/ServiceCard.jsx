/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from "react";

const ServiceCard = ({services} ) => {

  useEffect (()=>{
    Aos.init({duration:2000})
  } ,[])
    const{name,image,price,description} = services
    console.log(image);
    return (
        <div  >
        <div data-aos="fade-up-right" className="relative flex mb-5 bg-red-100 flex-col rounded-tr-3xl rounded-bl-3xl  bg-clip-border text-pink-700 shadow-lg">
        <div data-aos="fade-zoom-in"  className="relative mx-4 mt-4 h-96 overflow-hidden rounded-tr-3xl rounded-bl-3xl  bg-white bg-clip-border text-gray-700">
          <img
            src={image}
            className="h-96 w-full object-cover"
          />
         
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="block  text-2xl font-medium font-Lobster leading-relaxed text-blue-gray-900 antialiased">
              {name}
            </p>
            <p className="block font-Montserrat text-2xl font-medium leading-relaxed text-pink-900 antialiased">
              {price}
            </p>
          </div>
          <p className="block font-Montserrat text-xl font-normal leading-normal text-pink-900 antialiased opacity-75">
           {description}
          </p>
        </div>
        <div className="p-6 pt-0">
         <Link to={`/services/${services.id}`} >
         <button
         className="block w-full select-none rounded-lg bg-pink-600 text-white py-3 px-6 text-center align-middle font-sans text-2xl font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
         type="button"
       >
         View Details
       </button>
         </Link>
        </div>
      </div>
        </div>
    );
};

export default ServiceCard;