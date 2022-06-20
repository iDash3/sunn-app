import logo from "./sunn-logo.png";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import PrivacyPolicy from "./PrivacyPolicy";
import AndroidButton from "./AndroidButton";
import AppleButton from "./AppleButton";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/privacy" element={<PrivacyPolicy />}></Route>
        <Route
          path="*"
          element={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "#FFB74D",
                height: "100vh",
              }}
            >
              <h1 style={{ color: "white" }}>SUNN</h1>
              <img
                src={logo}
                height={150}
                alt="Logo"
                style={{ marginBottom: "30px" }}
              ></img>
              <div
                style={{
                  flex: "row",
                  justifyContent: "space-between",
                  padding: "20px",
                }}
              >
                <AndroidButton />
                <AppleButton />
              </div>
              <Link to="/privacy">Privacy Policy</Link>
            </div>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
