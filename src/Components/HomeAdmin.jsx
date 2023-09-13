import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { mockEmployees } from "./data/Home";
function HomeAdmin() {
  return (
    <div>
      <Navbar />


      {/* Head Text */}
      <div className="flex flex-col items-center mt-14">
        <h1 className="text-[4rem] font-bold">Generation Thailand</h1>
        <h1 className="text-[4rem] font-bold">Home - Admin Sector</h1>
      </div>


      {/* Button */}
      <div className="flex justify-center">
        <button className="w-[16rem] rounded-md shadow-2xl bg-white mt-[3rem] px-3 py-3 mr-[10rem] text-[1.5rem]  leading-6 text-black hover:bg-gray-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">
          <Link to={"/homeuser"}>User Home Sector</Link>
        </button>
        <button className="w-[16rem] rounded-md shadow-2xl bg-white mt-[3rem] px-3 py-3 text-[1.5rem]  leading-6 text-black hover:bg-gray-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">
          <Link to={"/homeadmin"}>Admin Home Sector</Link>
        </button>
      </div>


      {/* Input data */}
      <h1 className="text-center mt-10 text-3xl font-bold">Create User Here</h1>
      <form className="text-center flex justify-center items-center gap-6 mt-5">
        <div className="border">
          <input
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="border">
          <input
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div className="border">
          <input
            type="text"
            placeholder="Position"
          />
        </div>
        <div>
          <button className="text-white text-[1.5rem] rounded-md bg-slate-500 p-1 hover:bg-black" type="submit">
            Save
          </button>
        </div>
      </form>


      
      {/* Table */}
      <div className="flex justify-center">
        <table className="text-center text-[1.5rem] text-white  bg-gray-500 mt-[2rem]">
          <tr>
            <th className="border-2 border-black w-[15rem]">Name</th>
            <th className="border-2 border-black w-[15rem]">Last Name</th>
            <th className="border-2 border-black w-[15rem]">Position</th>
            <th className="border-2 border-black w-[15rem]">Action</th>
          </tr>
          {mockEmployees.map((items, index) => (
            <tr key={index}>
              <td className="border-2 border-black">{items.name}</td>
              <td className="border-2 border-black">{items.lastname}</td>
              <td className="border-2 border-black">{items.position}</td>
              <td className="border-2 border-black">
                <p 
                className="text-red-600 hover:text-red-300 hover:cursor-pointer"
                >
                  Delete
                </p>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default HomeAdmin;
