import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";


const Contact = () => {
    return (
        <div>
        <Navbar></Navbar>
           
            <div className="bg-bg-gradient-to-tr from-red-400  to-pink-300">
                <h1 className="text-4xl text-center font-bold mb-10 font-Lobster text-pink-900">Contact with Us</h1>
                <div className="grid lg:grid-cols-3 grid-cols-1 space-y-4 lg:space-y-0  items-center justify-center mx-auto text-center p-20">
                   <div className=" lg:pl-20" >
                   <h1 className="text-2xl mb-2 text-pink-700">Phone</h1>
                   <p className="text-base text-pink-900">+(123) 456 789 111 <br/>
                   +(321) 111 456 789</p>
                   </div>
                   <div>
                    <h1 className="text-2xl mb-2 text-pink-700">Address</h1>
                   <p className="text-base text-pink-900"> Office:1st &  3rd floor, <br/> house : C-34 ,Block-E, <br/> Lalmatia ,Mohammadpur, <br/>
                     1207 Dhaka, Bangladesh</p>
                   </div>
                   <div>
                    <h1 className="text-2xl mb-2 text-pink-700">Email</h1>
                    <p className="text-base text-pink-900">support@happily_ever_after.com <br/> events@happily_ever_after.com</p>
                   </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;