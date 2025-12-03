import { useState, useEffect } from "react";
import axios from "axios";
import PatientForm from "./components/PatientForm";
import PatientTable from "./components/PatientTable";

const API_URL = "http://127.0.0.1:8000/api/patients/";

function App() {
  const [patients, setPatients] = useState([]);
  const [editingPatient, setEditingPatient] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPatients = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL);
      setPatients(res.data);
    } catch (error) {
      alert("Failed to load patients. Check API server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const handleEdit = (patient) => {
    setEditingPatient(patient);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete?")) return;

    try {
      await axios.delete(`${API_URL}${id}/`);
      fetchPatients();
    } catch (error) {
      alert("Delete failed.");
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center p-10 
    bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-200">

      <h1 className="text-5xl font-extrabold mb-10 text-indigo-700 drop-shadow-lg tracking-wide 
      animate__animated animate__fadeInDown">
        🏥 Patient Management
      </h1>

      <div className="w-full max-w-3xl bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl 
      border border-white/40 animate__animated animate__zoomIn">
        <PatientForm
          fetchPatients={fetchPatients}
          editingPatient={editingPatient}
          setEditingPatient={setEditingPatient}
        />
      </div>

      {loading ? (
        <p className="text-center text-gray-600 mt-6">Loading patients...</p>
      ) : (
        <div className="w-full max-w-4xl mt-10 animate__animated animate__fadeInUp">
          <PatientTable
            patients={patients}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </div>
      )}

    </div>
  );
}

export default App;
