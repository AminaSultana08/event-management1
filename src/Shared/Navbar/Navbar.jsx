/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";



const Navbar = () => {
  const {user,logOut } = useContext(AuthContext)
  console.log(user);

  const handleLogOut=()=>{
   logOut()
    .then(()=>{
      console.log('logged out successfully');
    })
    .catch(error =>{
      console.log(error);
    })
  }

    const navLink = <>
    <li><NavLink to='/' >Home </NavLink> </li>
    <li><NavLink to='/aboutUs' >About Us</NavLink> </li>
    <li><NavLink to='/packages' >Our Packages </NavLink> </li>
    <li><NavLink to='/gallery' >Gallery </NavLink> </li>
    <li><NavLink to='/contact' >Contact</NavLink> </li>
    <li><NavLink to='/login' >Login</NavLink> </li>
   
    </>
    return (
        <div  >
        <div className="navbar bg-red-50 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost bg-pink-400 lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"    stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {navLink}
            </ul>
          </div>
         <img className="btn btn-ghost normal-case w- h-36" src={logo} alt=""/>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal bg-pink-200  rounded-2xl  px-2">
          {navLink}
          </ul>
        </div>
        <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 mr-2 rounded-full">
                        <img src={user?.photoURL} />
                    </div>
                </label>
         {
          user ?  <>
          <span className="font-Montserrat font-bold text-pink-900">{user.displayName} </span>
          <span>{user.photo} </span>
         
          <a onClick={handleLogOut} className="btn ml-2 hover:bg-pink-600 bg-pink-500 text-white btn-sm"  >  Sign Out </a>
          </>
          :
          <Link to='/login' > <button className="btn hover:bg-pink-600 bg-pink-500 text-white btn-sm" >Sign In</button> </Link>
         }
          
        </div>
      </div>
        </div>
    );
};

export default Navbar;