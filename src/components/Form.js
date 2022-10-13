import { FormContact } from "./styles/Form.style";

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
          id="name"
          placeholder="John Johnson"
        />
      </div>
      <div>
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
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
          className="form-control"
          id="message"
        ></textarea>
      </div>
      <div >
        <button type="submit" className="form-control submit-btn">Submit</button>
      </div>
    </FormContact>
  );
}

export default Form;
