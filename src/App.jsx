import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Index.jsx";
import { ExportInfo} from "../pages/Home/exportInfo";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route path="/relatorio" element={<ExportInfo/>} />
    </Routes>
  );
}

export default App;
