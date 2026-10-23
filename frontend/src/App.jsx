import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import History from "./pages/History";
import Store from "./pages/Store";
import TeamPage from "./pages/TeamPage";

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
                <Route
                    path="/TeamPage"
                    element={<TeamPage />}
                />

                

                {/* <Route
                    path="/analytics"
                    element={<Analytics />}
                /> */}

            </Routes>

        </BrowserRouter>

    );

}