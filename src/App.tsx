import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MissingPage from "./pages/MissingPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/404" element={<MissingPage />} />
                <Route path="/" element={<Home />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
