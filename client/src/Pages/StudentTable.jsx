import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate } from 'react-router-dom'
import StudentUdForm from './StudentUdForm'

const StudentTable = () => {

    const [input, setInput] = useState([])
    const [deletedID, setDeletedID] = useState(null)
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const instance = axios.create({ baseURL: 'http://localhost:3000/api/student/' });

    const fecthdata = async (page) => {

        try {
            const response = await instance.get(`getall?page=${page}`);
            setInput(response.data.all_students);
            setPage(response.data.page)
        }
        catch (error) {
            console.log("Error Fetching Data", error)
        }
    };
    useEffect(() => {
        fecthdata(page);
    }, [deletedID, page])
    //here deleted id is passed to re-fetch with deleted id 

    const handleDelete = async (id) => {
        try {
            await instance.delete(`delete/${id}`)
            setDeletedID(id)
        } catch (error) {
            console.log("Error Deleting Data", error)
        }
    }

    const handleSearch = async (e) => {
        try {
            let key = e.target.value;
            if (key) {

                const response = await instance.get(`get/${key}`);
                let searchObj = response.data;
                if (searchObj) {
                    setInput(searchObj);
                }
            } else {
                fecthdata();
            }
        } catch (error) {
            console.log("error searching data", error);
        }
    };


    // const filteredStudents = input.filter(student =>
    //     student.name.toLowerCase().includes(search.toLowerCase())
    // );

    return (
        <div>
            <div className='pt-5 flex justify-center'>
                <Link to={"/addstudent"} type="button" className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2  dark:bg-green-600 dark:hover:bg-green-700 ">Add Student</Link>
                <form className="ml-4 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14" />
                    </svg>
                    <input
                        className="shadow appearance-none border rounded w-80 py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="search"
                        type="text"
                        // value={search}
                        placeholder="search by name / id / ph. number"
                        onChange={handleSearch}
                    />

                </form>

            </div>
            <div className="flex justify-center pt-5">
                <table className="text-sm border rounded-sm">
                    <thead className="text-xs border text-gray-700 uppercase  dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Sr.No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Gender
                            </th>
                            <th scope="col" className="px-6 py-3">
                                D.O.B
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Contact
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Fees_paid
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Class
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            input.length > 0 ? input.map((data, index) => (
                                <tr className=" dark:border-gray-700" key={data._id}>
                                    <td className="px-6 py-2">
                                        {index + 1}
                                    </td>
                                    <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {data.name}
                                    </th>
                                    <td className="px-6 py-2">
                                        {data.gender}
                                    </td>
                                    <td className="px-6 py-2">
                                        {new Date(data.dob).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-2">
                                        {data.contact}
                                    </td>
                                    <td className="px-6 py-2">
                                        {data.feesPaid}
                                    </td>
                                    <td className="px-6 py-2">
                                        {data.classname}
                                    </td>
                                    <td className="px-6 py-2">
                                        <button type="button" onClick={() => handleDelete(data._id)} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">Delete</button>
                                        <Link to={"updatestudent/" + data._id} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"  >Update</Link>
                                    </td>
                                </tr>
                            ))
                                : <tr>
                                    <th className='text-red-400 text-xl text-center'>chim dabak dum dum</th>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StudentTable

