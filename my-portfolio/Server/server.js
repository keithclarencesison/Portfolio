require("dotenv").config();

const express = require("express");
const cors = require("cors");
const emailRoute = require("./Routes/email")

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", emailRoute);

app.get("/", (req, res) => {
    res.send("Hello")
})

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const PORT = process.env.PORT || 3001;
console.log("📂 Current working directory:", process.cwd());
console.log("📧 MAIL_USER =", process.env.MAIL_USER); 


app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
});