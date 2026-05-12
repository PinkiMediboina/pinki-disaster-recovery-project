import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://disaster-backend-vxh9.onrender.com")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Disaster Recovery Dashboard</h1>

      <h2>Disaster: {data.disaster}</h2>
      <h2>Location: {data.location}</h2>
      <h2>Status: {data.status}</h2>
      <h2>Shelters Available: {data.shelters}</h2>
    </div>
  );
}

export default App;