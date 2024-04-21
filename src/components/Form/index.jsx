import React from "react";

export default function Form({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <h1>FORM</h1>
      <br />
      <br />
      <div>
        <label htmlFor="fname">
          First name: <input type="text" id="fname" name="fname" />
        </label>
      </div>
      <br />
      <div>
        <label htmlFor="lname">
          Last name: <input type="text" id="lname" name="lname" />
        </label>
      </div>
      <br />

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
