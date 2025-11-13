import React, { useState } from "react";
import "./Table.css";

const mockTeachers = [
  { id: 1, name: "Mr. James", subject: "Math", email: "james@example.com" },
  { id: 2, name: "Ms. Rose", subject: "Science", email: "rose@example.com" },
  { id: 3, name: "Mr. Paul", subject: "History", email: "paul@example.com" },
  { id: 4, name: "Ms. Anna", subject: "English", email: "anna@example.com" },
];

const TeachersTable = () => {
  const [search, setSearch] = useState("");

  const filteredTeachers = mockTeachers.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="table-card">
      <h3>Teachers</h3>
      <input
        type="text"
        placeholder="Search teachers..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredTeachers.map((t) => (
            <tr key={t.id}>
              <td>{t.name}</td>
              <td>{t.subject}</td>
              <td>{t.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeachersTable;
