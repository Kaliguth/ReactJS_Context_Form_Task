import React from "react";
import { Link } from "react-router-dom";
import { RegisterForm } from "../components/RegisterForm";

export default function FormPage() {
  return (
    <div>
      <RegisterForm />
      <Link to="/">
        <button className="btn btn-lg btn-primary mt-5">Back to home</button>
      </Link>
    </div>
  );
}
