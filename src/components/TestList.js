import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const TestList = () => {
  const [tests, setTests] = useState([]);
  const navigate = useNavigate();

  const deleteTest = async (e) => {
    let confirmDelete = window.confirm(
      `Yakin ingin hapus data dibawah ini?\nTest ID: ${e[0]}\nTitle: ${e[1]}\nPrice: ${e[2]}`
    );
    if (confirmDelete) {
      await axios.delete(`http://localhost:5000/deleteTest/${e[0]}`);
      getAllTests();
    }
  };

  useEffect(() => {
    getAllTests();
  }, []);


  const getAllTests = async () => {
    const response = await axios.get("http://localhost:5000/getAllTest");
    setTests(response.data);
  };

  return (
    <div className="test-list">
      <Link to="/add" className="button is-primary m-3">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tests.map((test, index) => (
            <tr key={test.id}>
              <td>{test.id}</td>
              <td>{test.title}</td>
              <td>{test.price}</td>
              <td>
                <Link
                  to={`/update/${test.id}`}
                  className="button is-small is-info"
                  id="edit-btn-id"
                >
                  Edit
                </Link>
                <button
                  className="button is-small is-danger"
                  onClick={() => deleteTest([test.id, test.title, test.price])}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestList;
