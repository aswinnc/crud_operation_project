import React from "react";

function PatientTable({ patients, handleEdit, handleDelete }) {
  return (
    <div className="table-card">
      <table className="styled-table">

        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>DOB</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {patients.map((p, i) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.age}</td>
              <td>{p.dob}</td>
              <td>
                {p.selected_address === "Home"
                  ? p.home_address
                  : p.office_address}
              </td>

              <td>
                <button className="edit-btn" onClick={() => handleEdit(p)}>
                  ✏ Edit
                </button>

                <button className="delete-btn" onClick={() => handleDelete(p.id)}>
                  🗑 Delete
                </button>
              </td>
            </tr>
          ))}

          {patients.length === 0 && (
            <tr>
              <td colSpan="5" className="empty-row">No patients found</td>
            </tr>
          )}
        </tbody>

      </table>
    </div>
  );
}

export default PatientTable;
