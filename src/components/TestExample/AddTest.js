import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AddTest = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

const saveTest = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/createTest', {
        title: title,
        price: price,
    });
    navigate('/');
}

  return (
    <div>
      <form onSubmit={ saveTest }>
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
            value={ title }
            onChange = { (e) => setTitle(e.target.value) }
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
            value={ price }
            onChange = { (e) => setPrice(e.target.value) }
          />
        </div>
        <div className="field">
          <button className="button is-success" type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddTest;
