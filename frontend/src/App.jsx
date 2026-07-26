import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import History from "./pages/History";
import Store from "./pages/Store";

export default function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/history"
                    element={<History />}
                />

                <Route
                    path="/store"
                    element={<Store />}
                />

            </Routes>

        </BrowserRouter>

    );

}