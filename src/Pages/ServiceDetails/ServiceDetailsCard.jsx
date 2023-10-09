/* eslint-disable react/prop-types */


const ServiceDetailsCard = ({service} ) => {
    
    const{name,image,price,description} =service || {}
    return (
        <div>
        <div>
        <h1 className="text-4xl font-Lobster text-center text-pink-800">Service details  </h1>
        <div>
        <div className="relative flex w-50% max-w-[48rem] h-96 mt-36 mb-40 flex-row mx-auto overflow-hidden rounded-tr-3xl rounded-bl-3xl border-2 border-white   bg-pink-50 bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-r-none  bg-white bg-clip-border text-gray-700">
          <img
            src={image}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <h6 className="mb-4 block font-Lobster text-2xl font-semibold uppercase leading-relaxed tracking-normal text-pink-600 antialiased">
            {name}
          </h6>
          <h4 className="mb-2 block font-Lobster text-pink-600 text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
           {price}
          </h4>
          <p className="mb-8 block font-Montserrat text-pink-600  text-base font-normal leading-relaxed  antialiased">
            {description}
          </p>
          
        </div>
      </div>
        </div>
    </div>
        </div>
    );
};

export default ServiceDetailsCard;