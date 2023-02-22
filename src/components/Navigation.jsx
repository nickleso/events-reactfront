import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <NavLink className="nav-link" to="/">
        User events app
      </NavLink>

      {/* <NavLink className="nav-link" to="/events">
        Events
      </NavLink> */}
    </>
  );
};

// ? all events on event click
