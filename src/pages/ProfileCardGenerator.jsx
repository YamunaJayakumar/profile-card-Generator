import React from 'react'
import { Link } from 'react-router-dom'
import { SiGoogleforms } from "react-icons/si";
import { FaFileArrowDown } from "react-icons/fa6";

function ProfileCardGenerator() {
  return (
    <div>
      <div className="p-5">
        <h1 className="text-center">create youe profilecards in seconds</h1>
      </div>
      <div classNmae="container ">
        <div className="row m-5" >
          <div className="col-md-5 p-5 border shadow rounded text-center ">
                <SiGoogleforms className='fs-1 text-primary' />
                <h2>enter your details</h2>
                <p>Add pre -written examples to each section</p>
                <h5>step-1</h5>
          </div>
          <div className="col-md-2"></div>
          <div  className="col-md-5 p-5 border shadow rounded text-center">
              <FaFileArrowDown className='fs-1 text-danger' />
              <h2>download your card</h2>
              <p>Dowload and start applying</p>
              <h5>step-2</h5>
          </div>
        </div>
        
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <Link to={'/forms'} className="bg-warning btn m-5 ">start</Link>
      </div>
    </div>
  )
}

export default ProfileCardGenerator