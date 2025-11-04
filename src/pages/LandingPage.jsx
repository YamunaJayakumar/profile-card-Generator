import React from 'react'
import { Link } from 'react-router-dom'



function LandingPage() {
  return (
    <div>
      <div className="w-100 d-flex justify-content-center align-items-center"style={{height:'80vh',backgroundImage:'url("https://img.freepik.com/free-vector/job-interview-conversation_74855-7566.jpg?semt=ais_hybrid&w=740&q=80")',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
        
          <div className="p-5 shadow bg-secondary border rounded"><Link to={'/ProfileCard'} className="btn btn-warning ">Make your profilecard</Link></div>
          
      </div>
    </div>
  )
}

export default LandingPage