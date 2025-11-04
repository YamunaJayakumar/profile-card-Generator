import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div className="w-100 d-flex  flex-column justify-content-center align-items-center"style={{height:'80vh'}}>
      <img  className="w-25"src="https://www.shutterstock.com/shutterstock/videos/1009626296/thumb/10.jpg?ip=x480" alt="404" />
      <Link to={'/'} className="btn btn-warning m-5"> Back to home</Link>
    </div>
  )
}

export default Pnf