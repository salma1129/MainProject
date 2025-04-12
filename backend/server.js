require("dotenv").config();

const express = require("express");

const mysql =require("mysql");

const cors=require("cors");

const cookieParser=require("cookie-parser");

const mongoose=require("mongoose");

const app= express();


app.use(express.json()); 



const allowedOrigins = ["http://localhost:3000", "http://127.0.0.1:3001"];
app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));

app.use(cookieParser());

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=> console.log("MongoDB Connected"))
    .catch((err)=> console.error(err));


app.use("/api/auth",require("./routes/authRoutes"));

// Test root route
app.get('/', (req, res) => {
    res.send('Hello from the backend!');
  });


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

