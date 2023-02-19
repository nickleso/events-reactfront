import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Navigation } from "../components/Navigation";

export const Layout = () => {
  return (
    <>
      <div className="container">
        <header className="header">
          <Navigation />
        </header>
      </div>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
