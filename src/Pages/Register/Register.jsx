import { FcGoogle } from "react-icons/fc";
import { RxBorderSolid } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaRegEye,FaRegEyeSlash} from "react-icons/fa";
import { updateProfile } from "firebase/auth";


import swal from 'sweetalert';



const Register = () => {
  const { createUser,logOut} = useContext(AuthContext)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()



  const handleRegister = e => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const photo = form.get('photo')

    const email = form.get('email')
    const password = form.get('password')
    console.log(name,photo, email, password);

    if (password.length < 6) {
      setError ('password must be at least 6 characters')

      return;
    }
    else if (!/^(?=.*[!@#$%^&*])[a-zA-Z!@#$%^&*]{6,16}$/.test(password)) {
      setError('please enter password with upper case,lower case and special characters')
      return
    }

    setSuccess('')

    setError('');

    createUser(email, password)
      .then(result => {
        console.log(result.user);
        setSuccess(success)
        swal("success", "You have registered successfully" )
        

        updateProfile(result.user,{
          displayName:name,
          photoURL:photo,
        })
        .then(()=>{
          console.log('profile updated')
          logOut()
          navigate('/login')
          
      } )
        .catch(error=>{
          console.log(error);
        })

      })
      .catch(error => {
        console.log(error);
        setError(error.message)
      })



  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="mb-20">
        <form onSubmit={handleRegister} className="card-body lg:w-1/2 md:3/4 mx-auto  ">
          <h1 className="text-2xl  font-bold font-Lobster text-pink-800">Create an Account</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold font-Montserrat text-pink-800 "> Name</span>
            </label>
            <input type="text" placeholder="Your Name"   name="name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold font-Montserrat text-pink-800">Photo</span>
            </label>
            <input type="url" placeholder="Photo-Url"  name="photo" src="url" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold font-Montserrat text-pink-800">Email</span>
            </label>
            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
          </div>
          <div className="form-control  relative">
            <label className="label">
              <span className="label-text font-bold font-Montserrat text-pink-800">Password</span>
            </label>
            <input
            type=  {showPassword? "true"  :  "password"}
              placeholder="password"
              name="password"
              className="input input-bordered  "
              required />
            <span className="absolute   top-2/3 left-full ml-2 "  onClick={()=>setShowPassword(!showPassword) } >
            {
              showPassword? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
            }
            </span>


          </div>

          <div className="form-control mt-6">
           <button type="submit" className="btn text-white bg-pink-500">Create an Account</button>
          </div>
        </form>
        {
          error && <p className="text-red-600 text-xl text-center mb-2"> {error}</p>
        }
       
        <p className="text-center font-bold font-Montserrat text-pink-800">Already have an account?  <Link className="font-semibold text-pink-900  font-Montserrat underline" to='/login'>Login</Link>  </p>
        <div className="space-y-4 mt-3">
          <div  >
            <h1 className="text-center justify-center text-xl flex text-pink-700 font-Montserrat items-center"><RxBorderSolid />  Or <RxBorderSolid /> </h1>
          </div>
          <div className="mx-auto flex items-center justify-center flex-col gap-3">

            <button className="flex items-center box-border mb-20 border-2 rounded-3xl w-60 p-2 border-pink-700 gap-2"><FcGoogle className="mr-3"></FcGoogle>  Continue with Google</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Register;