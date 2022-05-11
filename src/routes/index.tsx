import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Catalog />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/cart" element={ <Cart /> } />
            </Routes>
        </Router>
    );
}