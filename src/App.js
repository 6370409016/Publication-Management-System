import Home from "./Home";
import "./Home.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicationForm from "./pages/PublicationForm";
import Login from "./pages/Login"
import Register from "./pages/Register"
function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publication" element={<PublicationForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>


    
  )
}

export default App;
