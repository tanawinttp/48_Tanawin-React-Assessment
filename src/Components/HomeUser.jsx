import Navbar from "./Navbar";
// import { mockEmployees } from "./data/Home";
import { Link } from "react-router-dom"
import axios from "axios";
import { useState , useEffect } from "react";

function HomeUser() {
  const Api = "https://jsd5-mock-backend.onrender.com/"
  const [employees , setEmployees] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${Api}members`);
      setEmployees(response.data);
    };
    // line 17 เป็นการ return ตัวแปร getData มาใช้
    getData();
  },[]);

  return (
    <div>
      <Navbar />
      {/* Head Text */}
      <div className="flex flex-col items-center mt-14">
        <h1 className="text-[4rem] font-bold">Generation Thailand</h1>
        <h1 className="text-[4rem] font-bold">Home - User Sector</h1>
      </div>
      {/* Button */}
      <div className="flex justify-center">
        <button className="w-[16rem] rounded-md shadow-2xl bg-white mt-[3rem] px-3 py-3 mr-[10rem] text-[1.5rem]  leading-6 text-black hover:bg-gray-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">
        <Link to = {'/homeuser'}>User Home Sector</Link>
        </button>
        <button className="w-[16rem] rounded-md shadow-2xl bg-white mt-[3rem] px-3 py-3 text-[1.5rem]  leading-6 text-black hover:bg-gray-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">
        <Link to = {'/homeadmin'}>Admin Home Sector</Link>
        </button>
      </div>
      {/* Table */}
      <div className="flex justify-center">
        <table className="text-center text-[1.5rem] text-white  bg-gray-500 mt-[5rem]">
          <tr>
            <th className="border-2 border-black w-[15rem]">Name</th>
            <th className="border-2 border-black w-[15rem]">Last Name</th>
            <th className="border-2 border-black w-[15rem]">Position</th>
          </tr>

      {/* map Api employee ใน map เป็นการตั้งชื่อยังไงก็ได้ให้เราเข้าใจ และสั่งให้มันไปเอาค่าที่เราต้องการจาก api มาใช้*/}
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td className="border-2 border-black">{employee.name}</td>
              <td className="border-2 border-black">{employee.lastname}</td>
              <td className="border-2 border-black">{employee.position}</td>
            </tr>
          ))}

        </table>
      </div>
    </div>
  );
}

export default HomeUser;
