import Home from "./Home";
import "./Home.css"

import { BrowserRouter as  Route, Routes } from "react-router-dom";
function App() {
  return (
 <>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  
 
 </>
  )
}

export default App;
