import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Navigation } from "../components/Navigation";

export const Layout = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <Navigation />
        </div>
      </header>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
