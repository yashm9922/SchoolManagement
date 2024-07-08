import './App.css'
import StudentForm from './Pages/StudentForm'
import StudentTable from './Pages/StudentTable'
import StudentUdForm from './Pages/StudentUdForm'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <h1 className="text-3xl font-bold pt-5">
        School Management
      </h1 >
      <Routes>
        <Route path='/' element={<StudentTable />} />
        <Route path='/addstudent' element={<StudentForm />}></Route>
        <Route path='/updatestudent/:id' element={<StudentUdForm />}></Route>
        {/* pass the :id as it is going to get the id from the table and get the data from database  */}
      </Routes>
    </>
  )
}

export default App
