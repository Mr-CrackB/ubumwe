import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./Dashboard.css";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const enrollmentData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "New Students",
        data: [12, 19, 7, 15, 10, 20],
        backgroundColor: "#4f46e5",
        borderRadius: 5,
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome to School Dashboard</h1>
        <p>Monitor students, teachers, classes, and reports efficiently.</p>
      </header>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Students</h3>
          <span>240</span>
        </div>
        <div className="stat-card">
          <h3>Teachers</h3>
          <span>35</span>
        </div>
        <div className="stat-card">
          <h3>Classes</h3>
          <span>12</span>
        </div>
        <div className="stat-card">
          <h3>Subjects</h3>
          <span>45</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <button className="action-btn primary-btn">Add Student</button>
        <button className="action-btn secondary-btn">Add Teacher</button>
        <button className="action-btn tertiary-btn">Generate Report</button>
      </div>

      {/* Charts */}
      <div className="charts-grid">
        <div className="chart-card">
          <h3>Enrollment Trend</h3>
          <Bar
            data={enrollmentData}
            options={{
              responsive: true,
              plugins: {
                legend: { position: "top" },
                title: { display: true, text: "Monthly Enrollment" },
              },
              maintainAspectRatio: false,
            }}
          />
        </div>
      </div>

      {/* Recent Tables */}
      <div className="tables-grid">
        <div className="table-card">
          <h3>Recent Students</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Class</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>Grade 10</td>
                <td>john@example.com</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>Grade 9</td>
                <td>jane@example.com</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="table-card">
          <h3>Recent Teachers</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Subject</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mr. James</td>
                <td>Math</td>
                <td>james@example.com</td>
              </tr>
              <tr>
                <td>Ms. Rose</td>
                <td>Science</td>
                <td>rose@example.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
