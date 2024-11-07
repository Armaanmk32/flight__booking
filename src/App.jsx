import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Bookin from "./pages/Bookin"
import About from "./pages/About"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ContactUs from "./pages/ContactUs"
import Flights from "./pages/Flights"
import SideNave from "./pages/SideNave"
import Dashboard from "./pages/Dashboard"
import Statistics from "./pages/Statistics"
import Wadamo from "./pages/Wadamo"
import Report from "./pages/Report"
import AdminLogin from "./pages/AdminLogin"
function App(){
    return <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/bookin" element={<Bookin />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/sidenave" element={<SideNave/>} />
            <Route path="/flight" element={<Flights/>} />
            <Route path="/dash" element={<Dashboard/>} />
            <Route path="/static" element={<Statistics/>} />
            <Route path="/wadamo" element={<Wadamo/>} />
            <Route path="/report" element={<Report/>} />
            <Route path="/admin" element={<AdminLogin/>} />
        </Routes>

    </div>
}
export default App