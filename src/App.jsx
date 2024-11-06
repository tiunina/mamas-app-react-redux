import { Suspense } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Something from "./pages/Something/Something";

function App() {
  return (
    <header>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/something" element={<Something />} />
        </Routes>
      </Suspense>
    </header>
  );
}

export default App;
