import bg_img from '../../assets/images/bg_img.jpg'

const Banner = () => {
    return (
        <div>
            <div  >
              <img  src={bg_img} alt=""/>  
              <div>
                <h1 className='text-2xl'>wedding</h1>

              </div>
            </div>
        </div>
    );
};

export default Banner;