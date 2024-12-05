import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Index.jsx";


function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
  
    </Routes>
  );
}

export default App;
