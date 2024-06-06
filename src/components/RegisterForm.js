import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../context/Context";

export function RegisterForm() {
  const { setUsername } = useContext(AppContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    const username = data.name;
    setUsername(username);
  };

  return (
    <div className="container">
      <h3 className="mb-4 mt-3">
        <b>
          <u>Register form</u>
        </b>
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="container col-md-5">
        <label>Name:</label>
        <input
          {...register("name", {
            required: true,
            minLength: 2,
            pattern: /^[a-zA-Z\s]*$/gi,
          })}
          type="text"
          className="form-control"
        />
        {errors.name && (
          <h6 className="text-danger">
            Enter a valid name (Name must have at least 2 characters)
            <br />
            <br />
            ENGLISH LETTERS AND SPACES ONLY!
          </h6>
        )}
        <hr />
        <label>Email:</label>
        <input
          {...register("email", {
            required: true,
            // pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi,
          })}
          type="text"
          className="form-control"
        />
        {errors.email && (
          <div className="text-danger">
            <h6>Enter valid email</h6>
          </div>
        )}
        <label>Repeat Email:</label>
        <input
          {...register("email2", {
            required: true,
            validate: (val) => val === getValues("email"),
          })}
          type="text"
          className="form-control"
        />
        {errors.email2 && (
          <div className="text-danger">
            <h6>Emails don't match</h6>
          </div>
        )}
        <hr />
        <label>Password:</label>
        <input
          {...register("pass", {
            required: true,
            minLength: 6,
            pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/gi,
          })}
          type="text"
          className="form-control"
        />
        {errors.pass && (
          <div className="text-danger">
            <h6>Invalid password format. Passwords must have:</h6>
            <ul className="list-unstyled">
              <li>At least 6 characters</li>
              <li>At least one letter and one digit</li>
            </ul>
            <h6>ENGLISH LETTERS ONLY!</h6>
          </div>
        )}
        <button type="submit" className="btn btn-success mt-4">
          Submit
        </button>
        <button
          onClick={() => reset()}
          type="button"
          className="btn btn-warning mt-4 ms-4"
        >
          Clear all fields
        </button>
      </form>
    </div>
  );
}
