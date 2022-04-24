import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import RepositoryList from "./pages/RepositoryList";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/repoList" element={<RepositoryList />} />
                <Route path="/menu" element={<Menu />} />
            </Routes>
        </Router>
    );
}