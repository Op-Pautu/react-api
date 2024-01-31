import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookingForm = ({ show, onCloseForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    ticketQuantity: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userDetails", JSON.stringify(formData));
    toast.success("Successful! (User details stored)");
    onCloseForm();
  };

  return (
    <div className="bg-white p-8 absolute inset-0">
      <h2 className="text-3xl mb-4">Book Ticket for {show.name}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="ticketQuantity"
            className="block text-sm font-medium text-gray-700"
          >
            Ticket Quantity:
          </label>
          <input
            type="number"
            id="ticketQuantity"
            name="ticketQuantity"
            value={formData.ticketQuantity}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            min="1"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:scale-105"
        >
          Submit
        </button>

        <button
          type="button"
          onClick={onCloseForm}
          className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded cursor-pointer hover:scale-105"
        >
          Cancel
        </button>
      </form>
      <button
        onClick={onCloseForm}
        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:scale-105 mt-4"
      >
        Close Form
      </button>
    </div>
  );
};

export default BookingForm;
