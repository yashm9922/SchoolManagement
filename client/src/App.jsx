import './App.css'
import StudentForm from './Pages/StudentForm'
import StudentTable from './Pages/StudentTable'
import StudentUdForm from './Pages/StudentUdForm'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold pt-5">
        School Management
      </h1 >
      <StudentUdForm />
      {/* <StudentForm />
      <StudentTable /> */}
    </>
  )
}

export default App
