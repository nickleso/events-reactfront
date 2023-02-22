import "./App.css";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./pages/Layout";

const HomePage = lazy(() => import("./pages/Home"));
const EventsPage = lazy(() => import("./pages/Events"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/:id/events" element={<EventsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
