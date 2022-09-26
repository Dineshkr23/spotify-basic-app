import "./App.css";
import { Login } from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Callback } from "./components/Callback";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/callback" element={<Callback />} />
          <Route path="/home" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
