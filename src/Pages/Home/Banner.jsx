import bg_img from '../../assets/images/bg_img.jpg'

const Banner = () => {
    return (
        <div>
            <div className='bg-pink-100  h-96 w-full relative bg-gradient-to-tr from-gray-600 to-gray-700' >
              <img  className="w-full h-full object-cover absolute mix-blend-overlay" src="https://i.ibb.co/jG8dyjW/luxury-wedding-tent-with-decor-banquet.jpg" alt=""/>  
              <div className='p-20 '>
                <h1 className='text-4xl font-Lobster text-white text-start mt-14 items-center font-extrabold'>'They could not remember a time, until now,
                <br/>
                 that forever did not seem long enough.'</h1>

              </div>
            </div>
        </div>
    );
};

export default Banner;