import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./pages/authenticated/AuthPage";
import Dashboard from "./pages/authenticated/dashboard/page";
import LoginPage from "./pages/public/signin/page";
import Signup from "./pages/public/signup/page";
import ThemeProvider from "./components/ThemeProvider";

function App() {
    return (
        <ThemeProvider>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/signup" element={<Signup />} />

                <Route path="" element={<AuthPage />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>

                <Route
                    path="/*"
                    element={
                        <>
                            <Navigate to={"/"} />
                        </>
                    }
                />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
