import React from "react";
import "./InputField.css"; // Import CSS for styling if required

const InputField = ({ label, id, type, value, onChange, placeholder, min }) => {
  return (
    <div className="input-field">
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-box"
        min={min || ""}
      />
    </div>
  );
};

export default InputField;
