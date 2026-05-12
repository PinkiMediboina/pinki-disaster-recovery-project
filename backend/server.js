const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Disaster Recovery Backend Running");
});

app.get("/status", (req, res) => {
  res.json({
    disaster: "Flood Alert",
    location: "Hyderabad",
    shelters: 5,
    status: "Emergency Active"
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});