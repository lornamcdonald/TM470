import { Route, Routes } from "react-router-dom"
import './App.css';

import Navbar from "./Pages/Navbar";
import NewReflection from "./Pages/NewReflection";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <> 
      <Navbar/>
      
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />}  />
          <Route path="/NewReflection" element={<NewReflection />}  />
        </Routes>
      </div>
      
    </>
  )  
}

export default App;