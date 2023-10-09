
import logo from '../../../assets/logo.png'
const Footer = () => {
    return (
        <div>
        <footer className="footer bg-red-200 flex text-pink-700  justify-center lg:justify-evenly text-center  mx-auto p-10  ">
        <img className="btn btn-ghost normal-case w-28 h-20" src={logo} alt=""/>
        <nav>
          <header className="footer-title">Services</header> 
          <a className="link link-hover">Venue Rental</a>
          <a className="link link-hover">Catering</a>
          <a className="link link-hover">Photography</a>
          <a className="link link-hover">Floral Arrangements</a>
          <a className="link link-hover">Music & Entertainment</a>
        </nav> 
        <nav>
          <header className="footer-title">Company</header> 
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Press kit</a>
        </nav> 
        <nav>
          <header className="footer-title">Legal</header> 
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
        </div>
    );
};

export default Footer;