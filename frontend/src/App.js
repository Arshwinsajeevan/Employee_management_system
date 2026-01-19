import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    salary: ""
  });

  const fetchEmployees = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/employees/active/");
    setEmployees(res.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addEmployee = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/employees/", {
        ...form,
        salary: Number(form.salary)
      });
      setForm({ name: "", email: "", department: "", salary: "" });
      fetchEmployees();
    } catch (error) {
      if (error.response && error.response.data) {
        const message = Object.values(error.response.data).flat().join(" ");
        alert(message);
      } else {
        alert("Something went wrong. Please try again.");
      }
    }
  };
  

  const deleteEmployee = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/employees/${id}/`);
    fetchEmployees();
  };

  return (
    <div className="app-container">
      <h1 className="title">Employee Management System</h1>

      <div className="card">
        <h2>Add Employee</h2>
        <form className="form" onSubmit={addEmployee}>
          <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
          <input name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />
          <input name="department" placeholder="Department" value={form.department} onChange={handleChange} required />
          <input name="salary" placeholder="Salary" type="number" value={form.salary} onChange={handleChange} required />
          <button type="submit" className="primary-btn">Add Employee</button>
        </form>
      </div>

      <div className="card">
        <h2>Active Employees</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>No active employees</td>
              </tr>
            ) : (
              employees.map(emp => (
                <tr key={emp.id}>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.department}</td>
                  <td>₹{emp.salary}</td>
                  <td>
                    <button className="danger-btn" onClick={() => deleteEmployee(emp.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
