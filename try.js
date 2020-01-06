const express = require("express")

const exStatic = require("express-static");

const app = express();

app.use(exStatic('./www'));
app.listen(3000);