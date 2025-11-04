import React from 'react'
import { FaHeart } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
function Footer() {
  return (
    < >
     <div className='p-5 bg-warning text-center'>
      <h3>Contact Us</h3>
      <h5><CiMail />demo@gmail.com</h5>
      <h5><CiPhone />4567980945</h5>
      <h4>Connect with us</h4>
      <div className="d-flex justify-content-center align-items-center  gap-3">
          <h4><FaWhatsapp /></h4>
         <h4> <CiFacebook /></h4>
         <h4> <CiInstagram /></h4>
          
      </div>
      <p className="text-center">&copy; 2025 Profile Card Generator — Built with <FaHeart  className="text-danger"/> using React</p>
      </div>  
    </>
  )
}

export default Footer