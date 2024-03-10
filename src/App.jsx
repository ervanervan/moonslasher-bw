import { Routes, Route } from "react-router-dom";
import HomepageBlack from "./pages/HomepageBlack";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomepageBlack></HomepageBlack>}></Route>
        <Route
          path="/home-white"
          element={<HomepageBlack></HomepageBlack>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
