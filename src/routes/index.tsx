import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Login from "../pages/Login";
import { ProtectedLayout } from "../components/ProtectedLayout";
import Register from "../pages/Register";
import Catalog from "../pages/Catalog";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import RepositoryList from "../pages/RepositoryList";

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/repoList" element={<RepositoryList />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={
                    <ProtectedLayout>
                        <h2>Esse é o componente profile!</h2>
                    </ProtectedLayout>
                } />
            </Routes>
        </Router>
    );
}