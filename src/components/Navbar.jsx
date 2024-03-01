import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOutUser } from "../features/auth/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOutUser());
    navigate("/login");
  };

  return (
    <nav className="navbar " style={{backgroundColor:"#CD5C08"}}>
      <div className="container-fluid">
        <Link to={"/"}>
          <span className="navbar-brand mb-0 h1 text-light">Auth App</span>
        </Link>
        <span>
          {!user ? (
            <>
                 <Link to={"/login"} className="btn  mx-1"  style={{backgroundColor:"#F5E8B7"}}>
                Login
              </Link>
              <Link to={"/register"} className="btn mx-1" style={{backgroundColor:"#F5E8B7"}}>
                Register
              </Link>
            
            </>
          ) : (
            <button className="btn btn-dark mx-2" onClick={handleLogout}>
              Logout
            </button>
          )}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
