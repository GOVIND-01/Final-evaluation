import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import { Sign } from "./Components/Sign";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
    </div>
  );
}

export default App;