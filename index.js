const express = require("express");
const blogRoutes = require("./routes/blog");

const app = express();
const port = 3000;

app.use("/blog", blogRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
