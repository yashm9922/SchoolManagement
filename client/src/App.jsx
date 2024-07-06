import './App.css'
import StudentForm from './Pages/StudentForm'
import StudentTable from './Pages/StudentTable'
import StudentUdForm from './Pages/StudentUdForm'
import { Routes,Route } from 'react-router-dom'
function App() {

  return (
    <>
      <h1 className="text-3xl font-bold pt-5">
        School Management
      </h1 >
    
     
      <Routes>
        <Route path='/' element={ <StudentTable />}></Route>
        <Routes path='/addstudent' element={<StudentForm />}></Routes>
        <Route path='/updatestudent' element={  <StudentUdForm />}></Route>
      </Routes>
    </>
  )
}

export default App
