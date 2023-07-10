const express = require('express');
const app = express();
const port = 4000;


app.get('/', (req, res) => {
    res.send("Kết nối thành công");
});

app.listen(port, () => {
    console.log("Connect to : http://localhost:" + port);
});