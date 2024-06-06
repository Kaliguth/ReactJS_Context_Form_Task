import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiFillGitlab } from "react-icons/ai";
import { AppContext } from "../context/Context";

export default function Header() {
  const { username } = useContext(AppContext);

  return (
    <header className="container-fluid bg-dark">
      <div className="container p-2">
        <div className="row align-items-center">
          <div className="logo col-auto">
            <h2>
              <AiFillGitlab
                style={{ width: "40px", height: "40px", color: "lightgreen" }}
              />
            </h2>
          </div>
          <nav className="col-auto d-flex justify-content">
            <Link to="/" className="col-auto px-2">
              <button className="btn btn-sm btn-primary">Home</button>
            </Link>
            <Link to="/form" className="col-auto px-2">
              <button className="btn btn-sm btn-primary">Form</button>
            </Link>
          </nav>
          <div className="col-auto ms-auto">
            {username && <h4 className="text-success mb-0">Hello {username}!</h4>}
          </div>
        </div>
      </div>
    </header>
  );
}
