import logo from "./sunn-logo.png";
import logo2 from "./sunn-logo2.png";
import ig from "./ig.png";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import PrivacyPolicy from "./PrivacyPolicy";
import AndroidButton from "./AndroidButton";
import AppleButton from "./AppleButton";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "#81d4fa",
                height: "100%",
              }}
            >
              <img src={logo2} height={250} alt="Logo"></img>
              <h1 style={{ color: "white", marginBottom: "6vh" }}>suun</h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "20px",
                }}
              >
                <a
                  style={{
                    // color: "#E65100",
                    fontSize: "1.2rem",
                    textDecoration: "none",
                    backgroundColor: "#BBDEFB",
                    margin: "5px",
                    padding: "10px 20px",
                    marginBottom: "8vh",
                    borderRadius: "10px",
                  }}
                  href="https://www.instagram.com/suun_app/"
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={ig}
                      height={20}
                      alt="Little sun"
                      style={{ margin: "1vh 0", marginRight: "6px" }}
                    ></img>
                    <span>suun_app</span>
                  </div>
                </a>

                <AndroidButton />
                <AppleButton />
                <a
                  style={{
                    // color: "#E65100",
                    fontSize: "1.2rem",
                    textDecoration: "none",
                    backgroundColor: "#4FC3F7",
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
              <img
                src={logo}
                height={60}
                alt="Little sun"
                style={{ margin: "1vh 0" }}
              ></img>
            </div>
          }
        ></Route>
        <Route path="*" element={<PrivacyPolicy />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
