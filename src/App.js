import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/home";
import { Archive } from "./pages/Archive/archive";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/archive" element={<Archive />}></Route>
      </Routes>
    </>
  );
}

export default App;
