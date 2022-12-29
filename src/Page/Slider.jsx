import React from "react";

export default function Slider({ min, max, value, handleChange }) {
  return (
    <div className="slider-container">
      <input
        type="range"
        className="form-range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        list='rating'
      />
      
        <datalist id="rating">
<option value="1" label="1"></option>
<option value="2"></option>
<option value="3"></option>
<option value="4"></option>
<option value="5" label="5"></option>

</datalist>
    </div>
  );
}
