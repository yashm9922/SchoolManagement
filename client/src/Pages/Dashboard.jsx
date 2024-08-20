import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='container flex flex-col items-center justify-center mx-auto py-8 text-left'>
      <div className="mb-4">
        <Link to={'/addteacher'} >
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Add Teacher
          </button>
        </Link>
      </div>
      <div className="mb-4">
        <Link to={'/addstudent'} >
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Add Student
          </button>
        </Link>
      </div>
      <div>
        <Link to={'/addteacher'} >  
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Add Class
          </button>
        </Link>

      </div>
    </div>

  )
}

export default Dashboard