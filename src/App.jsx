import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/LandingPage/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
