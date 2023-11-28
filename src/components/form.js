import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  const isValidName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^(?!\d)[^\s@]+@[^\d\s@]+\.[^\d\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      errors.name = "Please fill in the name";
    } else if (!isValidName(trimmedName)) {
      errors.name = "Invalid name. Only letters are allowed";
    }

    if (!trimmedEmail) {
      errors.email = "Please fill in the email";
    } else if (!isValidEmail(trimmedEmail)) {
      errors.email = "Invalid email address";
    }
    if (!trimmedMessage) {
      errors.message = "Please fill in the message";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      console.log("Data:", {
        name: trimmedName,
        email: trimmedEmail,
        message: trimmedMessage,
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setFormErrors({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div className="2xl:container mx-auto flex flex-col items-center w-full pt-20 pb-20 sm:pt-0">
      <h1 className="mb-5 text-4xl font-semibold">Contact Us</h1>
      <hr className="w-24 border-[#fe424c] h-1 mb-10" />
      <form onSubmit={handleSubmit}>
        <div className="mb-7">
          <input
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`border-1 rounded-lg py-4 px-4 w-full sm:w-96 ${
              formErrors.name && "border-red-500"
            }`}
          />
          <div className={`error text-[#ed5454] h-3`}>{formErrors.name}</div>
        </div>
        <div className="mb-7">
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`border-1 rounded-lg py-4 px-4 w-full sm:w-96 ${
              formErrors.email && "border-red-500"
            }`}
          />
          <div className="error text-[#ed5454] h-3">{formErrors.email}</div>
        </div>
        <div className="mb-10">
          <textarea
            id="message"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className={`border-1 rounded-lg py-3 px-4 w-full sm:w-96 ${
              formErrors.message && "border-red-500"
            }`}
          />
          <div className="error text-[#ed5454] h-3">{formErrors.message}</div>
        </div>
        <div className="text-center">
          <button type="submit" className="bg-[#fe424c] px-6 py-2 rounded-lg">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
