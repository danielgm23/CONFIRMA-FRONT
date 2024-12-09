import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Index.jsx";
import ExportInfo from "./pages/Home/exportInfo.jsx";
import Login from "./components/login.jsx";



function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<ExportInfo />} path="/relatorio" />

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
