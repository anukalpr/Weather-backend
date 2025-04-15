const express = require("express");
const cors = require("cors");
const weatherRoutes = require("./routes/weather");

const app = express();
const port=3000;
app.use(cors());
app.use(express.json());
app.use("/weather", weatherRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));