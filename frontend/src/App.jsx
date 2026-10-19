import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import History from "./pages/History";
import Store from "./pages/Store";
import AboutMe from "./pages/AboutMe";

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
                    path="/aboutMe"
                    element={<AboutMe />}
                />

                

                {/* <Route
                    path="/analytics"
                    element={<Analytics />}
                /> */}

            </Routes>

        </BrowserRouter>

    );

}