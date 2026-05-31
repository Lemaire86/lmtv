const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

// ⭐ Pèmèt CORS pou tout demann
app.use(cors({
    origin: "*",
    methods: "GET"
}));

// ⭐ Sèvi tout fichye sit la otomatikman
app.use(express.static(path.join(__dirname)));

// ⭐ Route prensipal
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// ⭐ Route pou chak paj HTML
app.get("/:page", (req, res) => {
    const file = path.join(__dirname, req.params.page + ".html");
    res.sendFile(file);
});

// ⭐ Kòmanse server la
const PORT = 5500;
app.listen(PORT, () => {
    console.log(`LMTV Site Server running on http://192.168.12.126:${PORT}`);
});
