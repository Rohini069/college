import React, { useState } from "react";
import "./BtechAdm.css";

const BtechAdm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    fatherName: "",
    motherName: "",
    tenthPercentage: "",
    twelfthPercentage: "",
    dob: "",
    gender: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = (e) => {
    // e.preventDefault();

    for (let key in formData) {
      if (formData[key] === "") {
        setAlertMessage("Please fill out all the fields");
        return;
      }
    }

    setAlertMessage("");

    console.log("Form submitted Successfully", formData);
  };

  return (
    <div>
      <div className="container">
        <h2>B.Tech Admission Form</h2>

        {alertMessage && (
          <div className="alert alert-danger">{alertMessage}</div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Student's Name */}
          <div className="form-group">
            <label htmlFor="studentName">
              Student's Name <span className="required-asterisk">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="studentName"
              value={formData.studentName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Address */}
          <div className="form-group">
            <label htmlFor="email">
              Email Address<span className="required-asterisk">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Father's Name */}
          <div className="form-group">
            <label htmlFor="fatherName">
              Father's Name<span className="required-asterisk">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="fatherName"
              placeholder="Enter father's full name"
              value={formData.fatherName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Mother's Name */}
          <div className="form-group">
            <label htmlFor="motherName">
              Mother's Name<span className="required-asterisk">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="motherName"
              placeholder="Enter mother's full name"
              value={formData.motherName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone Number */}
          <div className="form-group">
            <label htmlFor="phoneNumber">
              Phone Number<span className="required-asterisk">*</span>
            </label>
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              pattern="\d{10}"
              maxLength="10"
              required
            />
          </div>

          {/* 10th Percentage */}
          <div className="form-group">
            <label htmlFor="tenthPercentage">
              10th Percentage<span className="required-asterisk">*</span>
            </label>
            <input
              type="number"
              className="form-control"
              id="tenthPercentage"
              placeholder="Enter 10th percentage"
              min="0"
              max="100"
              step="0.01"
              value={formData.tenthPercentage}
              onChange={handleChange}
              required
            />
          </div>

          {/* 12th Percentage */}
          <div className="form-group">
            <label htmlFor="twelfthPercentage">
              12th Percentage<span className="required-asterisk">*</span>
            </label>
            <input
              type="number"
              className="form-control"
              id="twelfthPercentage"
              placeholder="Enter 12th percentage"
              value={formData.twelfthPercentage}
              onChange={handleChange}
              min="0"
              max="100"
              step="0.01"
              required
            />
          </div>

          {/* Date of Birth */}
          <div className="form-group">
            <label htmlFor="dob">
              Date of Birth<span className="required-asterisk">*</span>
            </label>
            <input type="date" className="form-control" id="dob" required />
          </div>

          {/* Gender */}
          <div className="form-group">
            <label htmlFor="gender" required>
              Gender<span className="required-asterisk">*</span>
            </label>
            <select className="form-control" id="gender">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Address */}
          <div className="form-group">
            <label htmlFor="address">
              Address<span className="required-asterisk">*</span>
            </label>
            <textarea
              className="form-control"
              id="address"
              rows="3"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BtechAdm;
