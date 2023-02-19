import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <NavLink className="nav-link" to="/">
        Main page
      </NavLink>
      <NavLink className="nav-link" to="/events">
        Events
      </NavLink>
    </>
  );
};
