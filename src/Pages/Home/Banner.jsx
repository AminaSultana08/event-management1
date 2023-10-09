import bg_img from '../../assets/images/bg_img.jpg'

const Banner = () => {
    return (
        <div>
            <div className='bg-pink-100  h-96 w-full relative bg-gradient-to-tr from-gray-600 to-gray-700' >
              <img  className="w-full h-full object-cover absolute mix-blend-overlay" src={bg_img} alt=""/>  
              <div className='p-24'>
                <h1 className='text-4xl  text-white font-extrabold'>Perfect Weddings Made Easy!</h1>

              </div>
            </div>
        </div>
    );
};

export default Banner;