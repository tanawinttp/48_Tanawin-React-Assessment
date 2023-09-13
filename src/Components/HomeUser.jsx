import Navbar from "./Navbar";
import { mockEmployees } from "./data/Home";
import { Link } from "react-router-dom"

function HomeUser() {
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
          {mockEmployees.map((items, index) => (
            <tr key={index}>
              <td className="border-2 border-black">{items.name}</td>
              <td className="border-2 border-black">{items.lastname}</td>
              <td className="border-2 border-black">{items.position}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default HomeUser;
