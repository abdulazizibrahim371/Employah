import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "../Dashboard"
import Customers from "../Messages"
import Inventory from "../Jobs"
import Orders from "../Tests"
import Jobs from "../Jobs"
import Tests from "../Tests"
import Messages from "../Messages"
import About from "../Settings"
import SkillsDev from "../Skills Dev't"
import Settings from "../Settings"

function AppRoutes() {
    return(
            <Routes>
                <Route path="/" element={<Dashboard/>}></Route>
                <Route path="/jobs" element={<Jobs/>}></Route>
                <Route path="/tests" element={<Tests/>}></Route>
                <Route path="/messages" element={<Messages/>}></Route>
                <Route path="/skillsDev" element={<SkillsDev/>}></Route>
                <Route path="/settings" element={<Settings/>}></Route>
            </Routes>
    )
}
export default AppRoutes