import { FcGoogle } from "react-icons/fc";
import { RxBorderSolid } from "react-icons/rx";
import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaRegEye,FaRegEyeSlash} from "react-icons/fa";



const Register = () => {
  const { createUser } = useContext(AuthContext)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [showPassword, setShowPassword] = useState(false)



  const handleRegister = e => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')

    const email = form.get('email')
    const password = form.get('password')
    console.log(name, email, password);

    if (password.length < 6) {
      setError('password must be at least 6 characters')
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
        setSuccess('You have successfully registered')

      })
      .catch(error => {
        console.log(error);
        setError(error.message)
      })



  }

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <form onSubmit={handleRegister} className="card-body lg:w-1/2 md:3/4 mx-auto ">
          <h1 className="text-2xl">Create an Account</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Name</span>
            </label>
            <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input type="text" placeholder="Photo-Url" name="Photo-Url" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
          </div>
          <div className="form-control  relative">
            <label className="label">
              <span className="label-text">Password</span>
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
            <button className="btn  bg-amber-500">Create an Account</button>
          </div>
        </form>
        {
          error && <p className="text-red-600 text-xl text-center mb-2"> {error}</p>
        }
        {
          success && <p className="text-green-600 text-xl text-center mb-2" >{success} </p>
        }
        <p className="text-center">Already have an account?  <Link className="font-semibold text-amber-500 underline" to='/login'>Login</Link>  </p>
        <div className="space-y-4 mt-3">
          <div  >
            <h1 className="text-center justify-center flex items-center"><RxBorderSolid />  Or <RxBorderSolid /> </h1>
          </div>
          <div className="mx-auto flex items-center justify-center flex-col gap-3">

            <button className="flex items-center box-border border-2 rounded-3xl w-60 p-2 border-gray-400 gap-2"><FcGoogle className="mr-3"></FcGoogle>  Continue with Google</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Register;