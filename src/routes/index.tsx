import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Login from "../pages/Login";
import { ProtectedLayout } from "../components/ProtectedLayout";
import Register from "../pages/Register";
import RepositoryList from "../pages/RepositoryList";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Catalog />} />
                <Route path="/repoList" element={<RepositoryList />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/cart" element={ <Cart /> } />
            </Routes>
        </Router>
    );
}