import React from "react";

export default function DeleteScreen() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>DATA DELETION</h2>
      <h3 style={{ textAlign: "center" }}>Instructions</h3>
      <p>Effective date: 2024-01-01</p>
      <p>Welcome to suun.</p>
      <p>Data we collect:</p>
      <ul>
        <li>Required Personal information at Sign-Up:</li>
        <li>Name, email, description, international city</li>
        <li>Optional information at Sign-Up:</li>
        <li>Profile Image, Host, Airbnb, AbleToAnswer</li>
        <li>Information inside the App:</li>
        <li>Flags (visited countries), messages, events, suggestions</li>
      </ul>
      <p>How to get your data deleted?</p>
      <p>
        {
          "Inside suun, go to Profile -> Settings -> Account Settings -> Delete Account Information"
        }
      </p>
    </div>
  );
}
