
import { FcGoogle} from "react-icons/fc";
import { RxBorderSolid} from "react-icons/rx";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaGithub } from "react-icons/fa";
import Aos from 'aos'
import "aos/dist/aos.css"
import Footer from "../Home/Footer/Footer";
import swal from "sweetalert";


const Login = () => {

  useEffect (()=>{
    Aos.init({duration:2000})
  } ,[])

    const{signIn, signInWithGoogle,   signInWithGithub} = useContext(AuthContext)
    const [error, setError] = useState ('')
  const [success, setSuccess] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    console.log('location in login',  location);

    const handleLogin=e =>{
        e.preventDefault()
        const form= new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email,password); 

        setSuccess('')

        setError('');
         
        signIn(email,password)
        .then(result=>{
            console.log(result.user);
            setSuccess(success)
            swal("success", "'You have logged in successfully")
           
            navigate( location?.state? location.state : '/')
           
        })
        .catch(error=>{
            console.log(error);
            setError(error)
            swal(error.message)
        })   
    }


   const handleSignInGoogle =()=>{
    signInWithGoogle()
    .then(result =>{
      console.log(result.user);
    })
    .catch(error=>{
      console.log(error);
    })
   }


   const handleSignInGithub =()=>{
    signInWithGithub()
    .then(result =>{
      console.log(result.user);
    })
    .catch(error=>{
      console.log(error);
    })
   }
    

    return (
        <div>
        <Navbar></Navbar>
      <div  className="grid grid-cols-1 ">
      <section className="h-auto mb-6">
      <div className="h-full">
       {/**Left column container with background */}
        <div
          className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div data-aos="zoom-in-up"
            className="shrink-1 ml-7   mb-12 grow-0  basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://i.ibb.co/xFDkFF0/outdoors-evening-ceremony-bride-with-traditional-wedding-cake.jpg"
              className="w-full border-2 border-pink-100 rounded-tr-3xl rounded-bl-3xl"
              alt="Sample image" />
          </div>
    
          {/**Right column container */}
          <div className='mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12'>
          <form  onSubmit={handleLogin} className="card-body mb-5 lg:w-1/2 md:3/4 mx-auto border-2 rounded-2xl rounded- shadow-lg  ">
         <div className=' flex flex-col items-center justify-center lg:justify-start'>
         <h1 className="text-2xl font-Lobster font-bold text-pink-800">Login</h1>
         <div className="form-control">
           <label className="label">
             <span className="label-text font-bold font-Montserrat text-pink-800">Email</span>
           </label>
           <input type="email" placeholder="email" name="email" className="input input-bordered" required />
         </div>
         <div className="form-control">
           <label className="label">
             <span className="label-text font-bold font-Montserrat text-pink-800">Password</span>
           </label>
           <input type="password" placeholder="password" name="password" className="input input-bordered" required />
         
          
         </div>
         <div className="form-control mt-6">
           <button  className="btn text-white  bg-pink-400">Login</button>
         </div>
         </div>
        </form>

        <p className="text-center  text-pink-700 font-Montserrat">Do not have an account?  <Link className="font-semibold text-pink-700 underline font-Montserrat" to='/register'>Create an Account</Link>  </p>
        <div className="space-y-4 mt-3">
        <div  >
            <h1 className="text-center justify-center font-Montserrat text-pink-800 flex items-center"><RxBorderSolid  />  Or <RxBorderSolid/> </h1>
        </div>
        <div className="mx-auto flex items-center justify-center flex-col gap-3">
       
        <button onClick={handleSignInGoogle}  className="flex font-Montserrat items-center box-border border-2 rounded-3xl w-60 p-2 border-pink-800 gap-2"><FcGoogle  className="mr-3"></FcGoogle>  Continue with Google</button>
        <button onClick={handleSignInGithub}  className="flex items-center box-border border-2 rounded-3xl w-60 p-2 border-pink-800 font-Montserrat gap-2"><FaGithub  className="mr-3"></FaGithub>  Continue with GitHub</button>
        </div>
      </div>
          </div>
          
        </div>
      </div>
    </section>
    <Footer></Footer>
      </div>
        </div>
    );
};

export default Login;