import Loginpage from "./Main/Loginpage";
import Userpg from "./Main/Userpg";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage />}></Route>
          <Route path="/log" element={<Userpg />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
