import { Route, Routes } from "react-router-dom";
import Costumers from "./pages/Costumers/Costumers";
import Dashboard from "./pages/Dashboard/Dashboard";
import Pets from "./pages/Pets/Pets";
import Settings from "./pages/Settings/Settings";
import Vets from "./pages/Vets/Vets";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/pets" element={<Pets/>} />
            <Route path="/costumers" element={<Costumers/>} />
            <Route path="/vets" element={<Vets/>} />
            <Route path="/settings" element={<Settings/>} />
        </Routes>
    )
}