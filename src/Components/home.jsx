import Logo from "../style/logo.png"
import '../style/home.css';
import { useNavigate } from "react-router";


import { GiHamburgerMenu } from "react-icons/gi";
// import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"

function App() {

  const navigate = useNavigate()
  return (


    <div className='main' >


      <div className='navbar'>

        <img className="logo" src={Logo} />


        <div className="links">

          <p  onClick={() => navigate("/")} >Home</p>
          <p onClick={() => navigate("/")} >Consulting Service</p>
          <p onClick={() => navigate("/")} >About Us</p>
          <p onClick={() => navigate("/")} >News and Events</p>
          <p onClick={() => navigate("/")} >Corporate Training</p>
          
          <p onClick={() => navigate("/")} >Personal Training</p>
          <p onClick={() => navigate("/")} >Caoch Training</p>
          <p onClick={() => navigate("/")} >Get a quote</p>
          <p onClick={() => navigate("/")} >Resoource</p>
          <p onClick={() => navigate("/")} >Contact Us</p>

        </div>

        <GiHamburgerMenu className="ham" />



      </div>

    </div>


  )
}

export default App;
