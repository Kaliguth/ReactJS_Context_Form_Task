import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>
        <u>
          <b>Home</b>
        </u>
      </h1>
      <Link to="/form">
        <button className="btn btn-lg btn-warning mt-5">Register</button>
      </Link>
    </div>
  );
}
