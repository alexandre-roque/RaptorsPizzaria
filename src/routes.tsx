import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
            </Routes>
        </Router>
    );
}