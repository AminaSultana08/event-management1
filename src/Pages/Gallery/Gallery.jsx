
import { useEffect } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';
import Aos from 'aos'
import "aos/dist/aos.css"

const Gallery = () => {
    useEffect (()=>{
        Aos.init({duration:2000})
      } ,[])
    return (
        <div>
        <Navbar></Navbar>
            <h1 className='text-3xl w-auto  mx-10   lg:mx-64 font-bold text-center my-7 text-pink-700 border-2 p-4 bg-pink-200 rounded-lg mb-20 '> Gallery</h1>
           <div className='grid grid-cols-1 mx-3 lg:mx-0 lg:grid-cols-2 gap-10 lg:ml-32 mb-16 items-center justify-center '>
           <div data-aos="fade-up"
           data-aos-anchor-placement="top-bottom" className="relative flex w-full max-w-[26rem] flex-col rounded-tr-3xl rounded-bl-3xl bg-red-100 bg-clip-border text-pink-900 shadow-lg">
           <div   className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
             <img className=' rounded-tr-3xl rounded-bl-3xl'
               src="https://i.ibb.co/MZpVKDv/wedding-couple-love-kissing-smiling-young-pretty-elegant-bride-her-handsome-groom-posing-green-park.jpg"
               alt="ui/ux review check"
             />
             <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
             <button
               className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
               type="button"
               data-ripple-dark="true"
             >
               <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 24 24"
                   fill="currentColor"
                   aria-hidden="true"
                   className="h-6 w-6"
                 >
                   <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                 </svg>
               </span>
             </button>
           </div>
           <div className="p-6">
             <div className="mb-3  items-center justify-center">
             <p className='p-5 bg-red-200 text-pink-700 text-center  rounded-3xl w-full'>15/04/2023</p>
             <br/>  
             <h5  className="block font-Lobster text-center  text-2xl font-bold leading-snug tracking-normal text-pink-900 antialiased  ">
               Nicole & Michael
               </h5>
             
             </div>
             <p className="block font-Montserrat text-center text-base font-semibold leading-relaxed text-pink-700 antialiased">
             Scottsdale, Arizona
             </p>
            
             
           </div>
          
         </div>

         {/**2nd card */}

         <div data-aos="fade-up"
         data-aos-anchor-placement="center-bottom" className="relative flex w-full max-w-[26rem] flex-col rounded-tr-3xl rounded-bl-3xl bg-red-100 bg-clip-border text-pink-900 shadow-lg">
           <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
             <img className=' rounded-tr-3xl rounded-bl-3xl'
               src="https://i.ibb.co/BczCzH9/wedding-couple-posing-park.jpg"
               alt="ui/ux review check"
             />
             <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
             <button
               className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
               type="button"
               data-ripple-dark="true"
             >
               <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 24 24"
                   fill="currentColor"
                   aria-hidden="true"
                   className="h-6 w-6"
                 >
                   <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                 </svg>
               </span>
             </button>
           </div>
           <div className="p-6">
             <div className="mb-3  items-center justify-center">
             <p className='p-5 bg-red-200 text-pink-700 text-center  rounded-3xl
              w-full'>20/05/2023</p>
             <br/>  
             <h5  className="block font-Lobster text-center  text-2xl font-bold leading-snug tracking-normal text-pink-900 antialiased  ">
             Jorge & Abbie
               </h5>
             
             </div>
             <p className="block font-Montserrat text-center text-base font-semibold leading-relaxed text-pink-700 antialiased">
             Dhaka,Bangladesh
             </p>
            
             
           </div>
          
         </div>
            
       {/**3rd */}

       <div data-aos="fade-up"
       data-aos-anchor-placement="center-bottom" className="relative flex w-full max-w-[26rem] flex-col rounded-tr-3xl rounded-bl-3xl bg-red-100 bg-clip-border text-pink-900 shadow-lg">
       <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
         <img className=' rounded-tr-3xl rounded-bl-3xl'
           src="https://i.ibb.co/PrpqqCh/side-view-confident-groom-dressed-elegant-suit-keeping-hand-pocket-looking-bride-which-standing-oppo.jpg"
           alt="ui/ux review check"
         />
         <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
         <button
           className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
           type="button"
           data-ripple-dark="true"
         >
           <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
               fill="currentColor"
               aria-hidden="true"
               className="h-6 w-6"
             >
               <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
             </svg>
           </span>
         </button>
       </div>
       <div className="p-6">
         <div className="mb-3  items-center justify-center">
         <p className='p-5 bg-red-200 text-pink-700 text-center  rounded-3xl
          w-full'>05/06/2023</p>
         <br/>  
         <h5  className="block font-Lobster text-center  text-2xl font-bold leading-snug tracking-normal text-pink-900 antialiased  ">
         Jose & Clarence
           </h5>
         
         </div>
         <p className="block font-Montserrat text-center text-base font-semibold leading-relaxed text-pink-700 antialiased">
         Scottsdale, Arizona
         </p>
        
         
       </div>
      
     </div>

     {/**4th */}

     <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="relative flex w-full max-w-[26rem] flex-col rounded-tr-3xl rounded-bl-3xl bg-red-100 bg-clip-border text-pink-900 shadow-lg">
           <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
             <img className=' rounded-tr-3xl rounded-bl-3xl'
               src="https://i.ibb.co/NsSL3kC/full-shot-couple-posing-together.jpg"
               alt="ui/ux review check"
             />
             <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
             <button
               className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
               type="button"
               data-ripple-dark="true"
             >
               <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 24 24"
                   fill="currentColor"
                   aria-hidden="true"
                   className="h-6 w-6"
                 >
                   <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                 </svg>
               </span>
             </button>
           </div>
           <div className="p-6">
             <div className="mb-3  items-center justify-center">
             <p className='p-5 bg-red-200 text-pink-700
              text-center  rounded-3xl w-full'>15/06/2023</p>
             <br/>  
             <h5  className="block font-Lobster text-center  text-2xl font-bold leading-snug tracking-normal text-pink-900 antialiased  ">
             Gilbert & William
               </h5>
             
             </div>
             <p className="block font-Montserrat text-center text-base font-semibold leading-relaxed text-pink-700 antialiased">
            Dhaka,Bangladesh
             </p>
            
             
           </div>
          
         </div>
   {/**5th */}

   <div data-aos="fade-up"
   data-aos-anchor-placement="center-bottom" className="relative flex w-full max-w-[26rem] flex-col rounded-tr-3xl rounded-bl-3xl bg-red-100 bg-clip-border text-pink-900 shadow-lg">
   <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
     <img className=' rounded-tr-3xl rounded-bl-3xl'
       src="https://i.ibb.co/pwZ9ytv/portrait-happy-married-couple-handsome-groom-stylish-gray-suit-hugging-bride-wedding-dress-with-bouq.jpg.jpg"
       alt="ui/ux review check"
     />
     <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
     <button
       className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
       type="button"
       data-ripple-dark="true"
     >
       <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
         <svg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="currentColor"
           aria-hidden="true"
           className="h-6 w-6"
         >
           <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
         </svg>
       </span>
     </button>
   </div>
   <div className="p-6">
     <div className="mb-3  items-center justify-center">
     <p className='p-5 bg-red-200 text-pink-700 text-center  rounded-3xl 
     w-full'>15/07/2023</p>
     <br/>  
     <h5  className="block font-Lobster text-center  text-2xl font-bold leading-snug tracking-normal text-pink-900 antialiased  ">
     Alberta & Ryan
       </h5>
     
     </div>
     <p className="block font-Montserrat text-center text-base font-semibold leading-relaxed text-pink-700 antialiased">
     Scottsdale, Arizona
     </p>
    
     
   </div>
  
 </div>
 {/**6th */}

 <div data-aos="fade-up"
 data-aos-anchor-placement="center-bottom" className="relative flex w-full max-w-[26rem] flex-col rounded-tr-3xl rounded-bl-3xl bg-red-100 bg-clip-border text-pink-900 shadow-lg">
 <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
   <img className=' rounded-tr-3xl rounded-bl-3xl'
     src="https://i.ibb.co/J5zbLDX/happy-brides-are-wedding-day.jpg.jpg"
     alt="ui/ux review check"
   />
   <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
   <button
     className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
     type="button"
     data-ripple-dark="true"
   >
     <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
       <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         fill="currentColor"
         aria-hidden="true"
         className="h-6 w-6"
       >
         <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
       </svg>
     </span>
   </button>
 </div>
 <div className="p-6">
   <div className="mb-3  items-center justify-center">
   <p className='p-5 bg-red-200 text-pink-700 text-center  rounded-3xl w-full'>10/07/2023</p>
   <br/>  
   <h5  className="block font-Lobster text-center  text-2xl font-bold leading-snug tracking-normal text-pink-900 antialiased  ">
     Alen & Jose
     </h5>
   
   </div>
   <p className="block font-Montserrat text-center text-base font-semibold leading-relaxed text-pink-700 antialiased">
   Scottsdale, Arizona
   </p>
  
   
 </div>

</div>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Gallery;