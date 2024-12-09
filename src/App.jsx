import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Index.jsx";
import ExportInfo from "./pages/Home/exportInfo.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<ExportInfo />} path="/relatorio" />
    </Routes>
  );
}

export default App;
