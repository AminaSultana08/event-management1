
import { useEffect } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';
import Aos from 'aos'
import "aos/dist/aos.css"

const AboutUs = () => {
    useEffect (()=>{
        Aos.init({duration:2000})
      } ,[])
    return (
        <div>
        <Navbar></Navbar>
        <div>
            <div  className=' mb-16 bg-gradient-to-tr from-gray-600 to-gray-700 h-96 w-full relative' >
                <img    className="w-full h-full object-cover absolute mix-blend-overlay" src="https://i.ibb.co/CwwsDxq/just-married-couple-night-city-walk.jpg" alt=""/>
                <div className=' flex flex-col items-start w-1/3 text-white m-1 lg:m-11 lg:p-10 pt-4'>
                <h1 className='lg:text-4xl md:text-4xl  text-xl font-Lobster mb-2 font-extrabold'>
                VENUE FEATURES!</h1>
                <p className='font-Montserrat flex text-xs lg:text-lg items-start mb-3'>Conveniently located historic estate hosts up to 190 guests
                bright and open main terrace hall large covered front porch  expansive outdoor deck & patio indoor bar, dressing suites, four acres of grounds & gardens outdoor ceremony space under willow trees & pergola countless picture spots one event per day family owned and operated.</p>
                <div>
                    
                </div>
                </div>
            </div>

            <div className='flex lg:flex-row flex-col items-center justify-center gap-6 mx-auto text-pink-700 p-9'>
                <div data-aos="fade-up-right" className='border-8 rounded-tr-3xl rounded-bl-3xl  border-white lg:w-1/2 '>
                <img  className='lg:w-full w-96 h-full rounded-tr-3xl rounded-bl-3xl ' src="https://i.ibb.co/MG5s7YX/bride-groom-pose-large-circle-lilac-garden.jpg" alt=""/>
                </div>
                <div data-aos="fade-up-left" className='lg:text-4xl md:text-4xl space-y-4  w-1/2 text-xl  text-center mb-2 font-extrabold'>
                    <h1 className='font-Lobster'>Entry And Foyer</h1>
                    <p className='font-Montserrat flex text-xs lg:text-lg items-start mb-3'> Upon arriving at the Farmhouse , your guests will enter underneath a covered front porch, designed with ornate metal railings and overlooking our beautiful front walkway and gardens.
                    </p>
                </div>
            </div>
           
            <div className='flex lg:flex-row flex-col items-center justify-center gap-6 mx-auto text-pink-700 p-9'>
               
                <div data-aos="fade-up-left" className='lg:text-4xl md:text-4xl space-y-4  w-1/2 text-xl font-Lobster text-center mb-2 font-extrabold'>
                    <h1 className='font-Lobster'>Historic Mulberry Room</h1>
                    <p className='font-Montserrat flex lg:font-bold text-xs lg:text-lg items-start mb-3'> 
                    The historic Mulberry Room is situated in the original section of the Farmhouse
                    The Mulberry Room features an antique brick fireplace, gleaming hardwood floors and space for additional guest tables (if needed).  
                    The space can also be utilized for indoor portraits or other uses.
                    </p>
                </div>
                <div data-aos="fade-up-right" className='border-8 border-w  rounded-tr-3xl rounded-bl-3xl  border-white  lg:w-80 '>
                <img  className='lg:w-80 w-96 h-96 rounded-tr-3xl rounded-bl-3xl  ' src="https://i.ibb.co/Jv0k30S/beautiful-bride-white-dress-crown-his-head-standing-near-window.jpg" alt=""/>
                </div>
            </div>
           
            <div className='flex lg:flex-row flex-col items-center justify-center gap-6 mx-auto text-pink-700 p-9'>
               
                <div data-aos="fade-up-right" className='lg:text-4xl md:text-4xl space-y-4  w-1/2 text-xl  text-center mb-2 font-extrabold border-8 rounded-tr-3xl rounded-bl-3xl  border-white '>
                <img  className='lg:w-full w-96 h-full rounded-tr-3xl rounded-bl-3xl ' src="https://i.ibb.co/K61NZfJ/attractive-brunette-caucasian-bride-is-looking-luxury-mirror-indoor-wedding-day.jpg" alt=""/>
                </div>
                <div data-aos="fade-up-left" className='lg:text-4xl md:text-4xl space-y-4  w-1/2 text-xl font-Lobster text-center mb-2 font-extrabold'>
                <h1 className='font-Lobster'>
                Dressing Suites</h1>
                <p className='font-Montserrat flex text-xs lg:text-lg items-start mb-3'> 
                The Farmhouse offers two separate dressing areas for the wedding party to utilize when getting ready and during the reception.
                <br/>
                <br/>

                ​Upstairs Suites: Situated on the second floor of The Farmhouse, the main dressing room boasts an antique silver floor mirror underneath a beautiful chandelier, as well as an updated private bathroom. The adjoining room features a table and chairs, as well as more room to spread out.
                 <br/>
                 <br/>
                Downstairs Suite: Furnished with a leather sofa, television and table & chairs, there is also an adjoining private bathroom 
                </p>
            </div>
            </div>
           
        </div>
           
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;