import React from "react";

import { FormContact } from "./styles/Form.style";
function inputHandler() {}

function Form() {
  return (
    <FormContact>
      <div>
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="name"
          name="name"
          className="form-control"
          value={""}
          onChange={inputHandler}
          id="name"
        />
      </div>
      <div>
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          value={""}
          onChange={inputHandler}
          name="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          name="message"
          value={""}
          onChange={inputHandler}
          className="form-control"
          id="message"
        ></textarea>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </FormContact>
  );
}

export default Form;
