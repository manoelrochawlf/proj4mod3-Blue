require("dotenv").config();
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3333;
const route = require("./src/routes/rolex.route")
const connectToDatabase = require('./src/database/database');

connectToDatabase();

app.use(express.json());
app.use(cors());
app.use('/rolex', route);


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
