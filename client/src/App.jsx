import './App.css'
import StudentForm from './Pages/StudentForm'
// import StudentForm2 from './Pages/StudentForm2'
import StudentTable from './Pages/StudentTable'
import StudentUdForm from './Pages/StudentUdForm'
import TeacherForm from './Pages/TeacherForm'
import Dashboard from './Pages/Dashboard'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold pt-2">
        School Management
      </h1 >
      <Routes>
        <Route path='/' element={<Dashboard />} />
         <Route path='/addteacher' element={<TeacherForm />}></Route>
        {/* <Route path='/updateteacher/:id' element={<TeacherUdForm />}></Route> */ }
        <Route path='/students' element={<StudentTable />} />
        <Route path='/addstudent' element={<StudentForm />}></Route>
        <Route path='/updatestudent/:id' element={<StudentUdForm />}></Route>
        {/* <Route path='/2' element={ <StudentForm2 /> }/> */}
        {/* pass the :id as it is going to get the id from the table and get the data from database  */}
      </Routes>
    </>
  )
}

export default App
