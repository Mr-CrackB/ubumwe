import React, { useState } from "react";
import "./QuickActions.css";

const QuickActions = () => {
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [showTeacherModal, setShowTeacherModal] = useState(false);

  return (
    <div className="quick-actions">
      <button onClick={() => setShowStudentModal(true)}>Add Student</button>
      <button onClick={() => setShowTeacherModal(true)}>Add Teacher</button>

      {showStudentModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add Student</h3>
            <input placeholder="Name" />
            <input placeholder="Class" />
            <input placeholder="Email" />
            <button onClick={() => setShowStudentModal(false)}>Save</button>
          </div>
        </div>
      )}

      {showTeacherModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add Teacher</h3>
            <input placeholder="Name" />
            <input placeholder="Subject" />
            <input placeholder="Email" />
            <button onClick={() => setShowTeacherModal(false)}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickActions;
