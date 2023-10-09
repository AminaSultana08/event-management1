


import Aos from 'aos'
import "aos/dist/aos.css"
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';
import { useEffect } from 'react';

const OurPackages = () => {

    useEffect (()=>{
        Aos.init({duration:2000})
      } ,[])
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h1 className='text-3xl w-auto  mx-10   lg:mx-64 font-bold text-center my-7 text-pink-700 border-2 p-4 bg-pink-200 rounded-lg'>Our Packages</h1>
                <div className='text-pink-700 mx-2 lg:mx-0 md:mx-0 '>
                    <div className='flex flex-col md:flex-row lg:flex-row items-center justify-center gap-16 m-auto mb-10'>
                    <div  data-aos="fade-up-left" className='border-white border-8 rounded-tr-3xl rounded-bl-3xl '>
                    <img className='lg:w-full w-80 h-72  lg:h-96 rounded-tr-3xl rounded-bl-3xl '  src="https://i.ibb.co/8xM71MX/wedding-archway-backyard-happy-wedding-couple-outdoors-before-wedding-ceremony-1.jpgalt="/>
                    </div>
                    <div data-aos="fade-up-left">
                        <h1 className='text-4xl font-Lobster font-bold'>Together Forever</h1>
                        <p className='text-2xl font-Montserrat '>Sunday Wedding</p>
                        <ul className='font-Montserrat'>
                            <li>8 Hour Timeline</li>
                            <li>Access to All Buildings & Grounds</li>
                            <li>Up to 100 Guests</li>
                            <li>Indoor Reception (Standard Floor Plan)</li>
                            <li>Outdoor Ceremony</li>
                        </ul>
                        <p className='font-Lobster text-3xl'>$6000</p>
                    </div>
                    </div>


                    <div className='flex  flex-col md:flex-row lg:flex-row  items-center justify-center gap-16 m-auto mb-10'>

                    <div data-aos="fade-up-left">
                        <h1 className='text-4xl font-Lobster font-bold'>Duchess Says I Do</h1>
                        <p className='text-2xl font-Montserrat'>Traditional Saturday Wedding</p>
                        <ul>
                            <li>10 Hour Timeline</li>
                            <li>Access to All Buildings & Grounds</li>
                            <li>Up to 150 Guests</li>
                            <li>Indoor Reception (Standard Floor Plan)</li>
                            <li>Day of Coordination for Ceremony & Reception</li>
                            <li>Final Walkthrough 45 Days Before Event</li>
                            <li>Outdoor Ceremony</li>
                        </ul>
                        <p className='font-Lobster text-3xl' >$8000</p>
                    </div>
                    <div  data-aos="fade-up-right" className='border-white border-8 rounded-tr-3xl rounded-bl-3xl '>
                    <img className='lg:w-full w-80 h-72  lg:h-96 rounded-tr-3xl rounded-bl-3xl '  src="https://i.ibb.co/7bm5PCw/wedding-couple-dancing-tent.jpg" alt=""/>
                    </div>
                    </div>


                    <div className='flex  flex-col md:flex-row lg:flex-row  items-center justify-center gap-16 m-auto mb-10'>
                    <div  data-aos="fade-up-right" className='border-white border-8 rounded-tr-3xl rounded-bl-3xl '>
                    <img className='lg:w-full w-80 h-72  lg:h-96 rounded-tr-3xl rounded-bl-3xl '  src="https://i.ibb.co/ydyNCdw/side-view-confident-groom-dressed-elegant-suit-keeping-hand-pocket-looking-bride-which-standing-oppo.jpg" alt=""/>
                    </div>
                    <div data-aos="fade-up-left">
                        <h1 className='text-4xl font-Lobster font-bold  '>The Royal Wedding</h1>
                        <p className='text-2xl font-Montserrat'>The Complete Weekend Wedding</p>
                        <ul>
                            <li>11 Hour Timeline</li>
                            <li>Access to All Buildings & Grounds</li>
                            <li>Up to 180 Guests</li>
                            <li>Customizable Indoor & Outdoor Ceremony and Reception</li>
                            <li>Day of Coordination for Ceremony and Reception</li>
                            <li>Friday Setup </li>
                            <li>Onsite Rehearsal Dinner</li>
                            <li>1 Hour Rehearsal the Day Before</li>
                            <li>Final Walkthrough 45 Days Before Event</li>
                        </ul>
                        <p className='font-Lobster text-3xl'>$10000</p>
                    </div>
                    </div>
                   
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default OurPackages;