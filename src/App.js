import Home from "./Home";
import "./Home.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicationForm from "./pages/PublicationForm";
import Login from "./pages/Login"
import Register from "./pages/Register"
import AddProjectForm from "./pages/AddProjectForm";
import FacultySystem from "./pages/FacultySystem";
import AwardsPage from "./pages/AwardPage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publication" element={<PublicationForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/project" element={<AddProjectForm />} />
        <Route path="/faculty" element={<FacultySystem />} />
        <Route path="/award" element={<AwardsPage />} />
        <Route path="/product" element={<ProductPage />} />


      </Routes>
    </Router>



  )
}

export default App;
