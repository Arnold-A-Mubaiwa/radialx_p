import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    // <div className="App">
      <Routers>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Routers>
    // </div>
  );
}

export default App;
