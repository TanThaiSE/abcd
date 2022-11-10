import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Componets/Footer/index";
import Login from "./Pages/Login";
import DefaultLayout from "./Componets/DefaultLayout";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<DefaultLayout />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
