import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Login from "../pages/Login";
import { ProtectedLayout } from "../components/ProtectedLayout";
import Register from "../pages/Register";
import Home from "../pages/Home";
import RepositoryList from "../pages/RepositoryList";

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/repoList" element={<RepositoryList />} />
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