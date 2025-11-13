import React, { useState } from "react";
import "./Table.css";

const mockStudents = [
  { id: 1, name: "John Doe", class: "Grade 10", email: "john@example.com" },
  { id: 2, name: "Jane Smith", class: "Grade 9", email: "jane@example.com" },
  { id: 3, name: "Mark Lee", class: "Grade 11", email: "mark@example.com" },
  { id: 4, name: "Lucy Brown", class: "Grade 10", email: "lucy@example.com" },
  { id: 5, name: "Emma White", class: "Grade 12", email: "emma@example.com" },
  // add more as needed
];

const StudentsTable = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 3;

  const filteredStudents = mockStudents.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredStudents.length / rowsPerPage);
  const displayedStudents = filteredStudents.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="table-card">
      <h3>Students</h3>
      <input
        type="text"
        placeholder="Search students..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
        className="search-input"
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {displayedStudents.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.class}</td>
              <td>{s.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StudentsTable;
