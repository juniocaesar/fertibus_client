import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditTest = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const updateTest = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/updateTest/${id}`, {
      title: title,
      price: price,
    });
    navigate("/");
  };

  useEffect(() => {
    getTestById();
  }, []);

  const getTestById = async (e) => {
    const response = await axios.get(`http://localhost:5000/getTest/${id}`)
    if (response.data) {
        console.log(response.data);
    } else {
        alert(`data ${id} gaada`);
        navigate('/');
    }
    setTitle(response.data.title);
    setPrice(response.data.price);
  };

  return (
    <div>
      <form onSubmit={ updateTest }>
        <div className="field">
          <label className="label" htmlFor="inputId">
            Test ID
          </label>
          <input
            className="input"
            type="text"
            name=""
            id="inputId"
            placeholder="Test ID"
            value={`${id}`}
            readOnly
          />
        </div>
        <div className="field">
          <label className="label" htmlFor="inputTitle">
            Title
          </label>
          <input
            className="input"
            type="text"
            name=""
            id="inputTitle"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="field">
          <label className="label" htmlFor="inputPrice">
            Price
          </label>
          <input
            className="input"
            type="text"
            name=""
            id="inputPrice"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="field">
          <button className="button is-success" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTest;
