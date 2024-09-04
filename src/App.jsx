import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
// import SideBar from "./components/SideBar";
import Dashboad from "./components/Dashboad";
import Visitors from "./components/Visitors";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboad />} />
        <Route path="/visitors" element={<Visitors />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}
