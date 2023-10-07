import "./App.css";
import SheraAI from "./pages/SheraAI.js";
import ImageGenator from "./pages/ImageGenator.js";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<SheraAI />} exact />
        <Route path="/ImageGenator" element={<ImageGenator />} exact />
      </Routes>
    </>
  );
}

export default App;
