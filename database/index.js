const express = require("express");
const app = express();
const PORT = 2000;
const db = require("./models");
const cors = require("cors");

app.use(express.json());
app.use(cors());

const { treatmentRouter } = require("./router");
app.use("/treatment", treatmentRouter);

app.listen(PORT, () => {
    // db.sequelize.sync({ alter: true });
    // db.sequelize.sync({ alter: true, force: true });
    console.log(`Example app listening at http://localhost:${PORT}`);
});
