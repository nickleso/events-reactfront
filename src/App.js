import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./pages/Layout";
import "./App.css";

const HomePage = lazy(() => import("./pages/Home"));
const EventsPage = lazy(() => import("./pages/Events"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
