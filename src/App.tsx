import {
    AppShell,
    ColorScheme,
    ColorSchemeProvider,
    MantineProvider,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppNavbar from "./components/Navbar/AppNavbar";
import Cars from "./pages/Cars";
import Home from "./pages/Home";
import MissingPage from "./pages/MissingPage";

function App() {
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: "color-scheme",
        defaultValue: "light",
    });

    const toggleColorScheme = () =>
        setColorScheme((current) => (current === "dark" ? "light" : "dark"));

    return (
        <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
        >
            <MantineProvider
                theme={{ primaryColor: "pink", colorScheme }}
                withNormalizeCSS
                withGlobalStyles
            >
                <BrowserRouter>
                    <AppShell navbar={<AppNavbar />}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/cars" element={<Cars />} />
                            <Route path="*" element={<MissingPage />} />
                        </Routes>
                    </AppShell>
                </BrowserRouter>
            </MantineProvider>
        </ColorSchemeProvider>
    );
}

export default App;
