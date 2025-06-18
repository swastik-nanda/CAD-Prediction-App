import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Base from "../pages/Base";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import DashBoard from "../pages/DashBoard";
import ProtectedRoute from "../components/ProtectedRoute";
function App() {
  return (
    <Routes>
      <Route path="/base" element={<Base></Base>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashBoard></DashBoard>
          </ProtectedRoute>
        }
      ></Route>
      <Route path="*" element={<Base></Base>}></Route>
    </Routes>
  );
}

export default App;
