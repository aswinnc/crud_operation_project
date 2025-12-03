import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/patients/";

function PatientForm({ fetchPatients, editingPatient, setEditingPatient }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    dob: "",
    homeAddress: "",
    officeAddress: "",
    selectedAddress: "Home",
  });

  useEffect(() => {
    if (editingPatient) {
      setFormData({
        name: editingPatient.name,
        age: editingPatient.age,
        dob: editingPatient.dob,
        homeAddress: editingPatient.home_address || "",
        officeAddress: editingPatient.office_address || "",
        selectedAddress: editingPatient.selected_address || "Home",
      });
    }
  }, [editingPatient]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      age: formData.age,
      dob: formData.dob,
      home_address: formData.homeAddress,
      office_address: formData.officeAddress,
      selected_address: formData.selectedAddress,
    };

    if (editingPatient) {
      await axios.put(`${API_URL}${editingPatient.id}/`, payload);
      setEditingPatient(null);
    } else {
      await axios.post(API_URL, payload);
    }

    setFormData({
      name: "",
      age: "",
      dob: "",
      homeAddress: "",
      officeAddress: "",
      selectedAddress: "Home",
    });

    fetchPatients();
  };

  return (
    <form className="form-grid" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="input-box"
      />

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
        required
        className="input-box"
      />

      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        required
        className="input-box"
      />

      <select
        name="selectedAddress"
        value={formData.selectedAddress}
        onChange={handleChange}
        className="input-box"
      >
        <option value="Home">Home Address</option>
        <option value="Office">Office Address</option>
      </select>

      <input
        type="text"
        name="homeAddress"
        placeholder="Home Address"
        value={formData.homeAddress}
        onChange={handleChange}
        className="input-box full"
      />

      <input
        type="text"
        name="officeAddress"
        placeholder="Office Address"
        value={formData.officeAddress}
        onChange={handleChange}
        className="input-box full"
      />

      <button type="submit" className="submit-btn full">
        {editingPatient ? "Update Patient" : "Add Patient"}
      </button>
    </form>
  );
}

export default PatientForm;
