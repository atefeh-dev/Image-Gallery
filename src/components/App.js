/** @format */

import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Image from "./Image";
import SearchLocation from "./SearchLocation";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Image />} />
        <Route path="/search" element={<SearchLocation />} />
      </Routes>
    </div>
  );
};
export default App;
