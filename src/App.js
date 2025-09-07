import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/home";
import { Archive } from "./pages/Archive/archive";
import { Bin } from "./pages/BIn/bin";
import { Important } from "./pages/Important/imp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/archive" element={<Archive />}></Route>
        <Route path="/bin" element={<Bin />}></Route>
        <Route path="/important" element={<Important />}></Route>
      </Routes>
    </>
  );
}

export default App;
