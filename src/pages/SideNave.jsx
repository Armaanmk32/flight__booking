import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import sokeProfile from "../Images/sokeProfile.jpg";

const SideNave = () => {
  const [collapsed, setCollapsed] = useState(false); 
  const navigate = useNavigate(); 

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const getAdmin = localStorage.getItem("admin");
  const protectRouter = () => {
    if (!getAdmin) {
      navigate("/admin");
    }
  };

  useEffect(() => {
    protectRouter();
  }, [navigate]);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={`${
        collapsed ? 'w-[120px]' : 'sm:w-[18%]'
      } sm:fixed bg-sky-500 sm:h-screen text-white p-6 transition-all duration-300`}
    >
      <div className="mb-10 flex justify-between items-center">
        <div className="flex-col items-center">
          <img
            src={sokeProfile}
            alt="User Profile"
            className="rounded-full w-16 h-16 hover:bg-slate-900"
          />
          <h1 className="text-white underline pt-1 font-serif">Admin Profile</h1>
        </div>

        <i
          className="text-3xl pb-10 m-2 cursor-pointer fa-solid fa-circle-xmark"
          onClick={handleCollapse}
        ></i>
      </div>

      <ul className={`${collapsed ? 'text-center' : ''}`}>
        <Link to="/dash">
          <li className="text-xl font-bold pt-4">
            <i className="fa-brands fa-microsoft"></i> {!collapsed && 'Dashboard'}
          </li>
        </Link>

        <Link to="/flight">
          <li className="p-1 text-2xl pt-4">
            <i className="fa-solid fa-table-list"></i> {!collapsed && 'Flights'}
          </li>
        </Link>

        <Link to="/static">
          <li className="p-1 text-2xl pt-4">
            <i className="fa-solid fa-square-poll-vertical"></i> {!collapsed && 'Statistics'}
          </li>
        </Link>

        <Link to="/report">
          <li className="p-1 text-2xl pt-4">
            <i className="fa-solid fa-pen-to-square"></i> {!collapsed && 'Reports'}
          </li>
        </Link>

        <Link to="/admin">
          <h1 className="text-2xl ml-1 pt-4">
            <li onClick={logout}>
              <i className="fa-solid fa-right-from-bracket"></i> {!collapsed && 'Logout'}
            </li>
          </h1>
        </Link>
      </ul>
    </div>
  );
};

export default SideNave;
