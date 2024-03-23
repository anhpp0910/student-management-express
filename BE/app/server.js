const express = require("express");
const app = express();
const router = require("./routers");
app.use(express.json());

app.use(router);

app.listen(3000, () => {
  console.log(`Server started on http://localhost:3000`);
});

// setup sequelize
const { sequelize } = require("./models");
sequelize.sync({ alter: true });
