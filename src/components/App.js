/** @format */

import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Image from "./Image";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Image />} />
      </Routes>
    </div>
  );
};
export default App;
