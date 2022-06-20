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
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "20px",
                }}
              >
                <AndroidButton />
                <AppleButton />
                <a
                  style={{
                    // color: "#E65100",
                    textDecoration: "none",
                    backgroundColor: "#FF9800",
                    margin: "5px",
                    padding: "10px 20px",
                    marginTop: "12px",
                    borderRadius: "10px",
                  }}
                  href="https://www.figma.com/proto/kxPkjlnZ4teBRsdpKsTfHa/UntitledInternational?node-id=222%3A729&scaling=scale-down&page-id=0%3A1&starting-point-node-id=222%3A729"
                >
                  Use app simulator
                </a>
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
