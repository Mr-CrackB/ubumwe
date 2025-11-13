import React from "react";
import "./Sidebar.css";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
  FaChartBar,
  FaHome,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-logo">UBUMWE</h2>
      <ul className="sidebar-menu">
        <li>
          <FaHome /> Dashboard
        </li>
        <li>
          <FaUserGraduate /> Students
        </li>
        <li>
          <FaChalkboardTeacher /> Teachers
        </li>
        <li>
          <FaBook /> Classes
        </li>
        <li>
          <FaChartBar /> Reports
        </li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
