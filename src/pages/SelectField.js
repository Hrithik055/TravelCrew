import React from "react";

const SelectField = ({ label, id, value, onChange, options }) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <label htmlFor={id}>{label}:</label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        required
        style={{
          marginLeft: "10px",
          padding: "5px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      >
        <option value="">Select {label}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
