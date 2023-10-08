
import { FcGoogle} from "react-icons/fc";
import { RxBorderSolid} from "react-icons/rx";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';


const Login = () => {
    const{signIn} = useContext(AuthContext)
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
        console.log('u clicked',email,password); 

        setSuccess('')

        setError('');
         
        signIn(email,password)
        .then(result=>{
            console.log(result.user);
            setSuccess('You have logged in successfully ')
            navigate( location?.state? location.state : '/')
           
        })
        .catch(error=>{
            console.log(error);
            setError(error.message)
        })
    }

    return (
        <div>
        <Navbar></Navbar>
        <section className="h-screen">
        <div className="h-full">
         {/**Left column container with background */}
          <div
            className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div
              className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample image" />
            </div>
      
            {/**Right column container */}
            <div className='mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12'>
            <form  onSubmit={handleLogin} className="card-body lg:w-1/2 md:3/4 mx-auto border-2 rounded-r-lg shadow-lg  ">
           <div className=' flex flex-col items-center justify-center lg:justify-start'>
           <h1 className="text-2xl">Login</h1>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Email</span>
             </label>
             <input type="email" placeholder="email" name="email" className="input input-bordered" required />
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Password</span>
             </label>
             <input type="password" placeholder="password" name="password" className="input input-bordered" required />
           
            
           </div>
           <div className="form-control mt-6">
             <button  className="btn  bg-amber-500">Login</button>
           </div>
           </div>
          </form>

          {
            error && <p className="text-red-600 text-xl text-center mb-2"> {error}</p>
          }
          {
            success && <p className="text-green-600 text-xl text-center mb-2" >{success} </p>
          }
          <p className="text-center">Do not have an account?  <Link className="font-semibold text-amber-500 underline" to='/register'>Create an Account</Link>  </p>
          <div className="space-y-4 mt-3">
          <div  >
              <h1 className="text-center justify-center flex items-center"><RxBorderSolid  />  Or <RxBorderSolid/> </h1>
          </div>
          <div className="mx-auto flex items-center justify-center flex-col gap-3">
         
          <button   className="flex items-center box-border border-2 rounded-3xl w-60 p-2 border-gray-400 gap-2"><FcGoogle  className="mr-3"></FcGoogle>  Continue with Google</button>
          </div>
        </div>
            </div>
            
          </div>
        </div>
      </section>
        </div>
    );
};

export default Login;