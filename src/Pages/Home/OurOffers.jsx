import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react';

const OurOffers = () => {
    useEffect (()=>{
        Aos.init({duration:2000})
      } ,[])
    return (
        <div>
            <div data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" className='bg-gradient-to-tr from-red-400 to-pink-300 text-white h-auto mb-16 p-20' >
                <h1 className='text-4xl  font-Lobster font-bold text-center pb-10'>Our Offers</h1> <br/>
                <h1 className="text-3xl  font-Lobster font-bold">Whether your dreams take you …</h1> <br/>
                <p>to the shores of Hawaii, the vineyards of Tuscany, the valleys of Montana, the city lights of Manhattan, the lavender fields of Provence, or your family’s own private farm or estate, we will join you to create an exceptional destination wedding experience for you and your guests.</p> <br/>
                <h1 className='text-3xl font-Lobster font-bold'>We infuse the planning process with:</h1>
                <ul>
                <li>•Creative direction</li>
                <li>•Bespoke floral design</li>
                <li>•Graphic design/illustration</li>
                <li>•Original artistry to bring a grand vision to life with comprehensive logistical orchestration.</li>
                
                </ul>
 

            </div>
        </div>
    );
};

export default OurOffers;