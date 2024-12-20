const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Server } = require("socket.io");
const http = require("http");
require("dotenv").config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// Middleware

app.use(cors({
  origin: "http://localhost:3000", // Allow requests from the frontend
  methods: ["GET", "POST"],
}));
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Failed", err));

// Message Model
const Message = mongoose.model("Message", new mongoose.Schema({
  username: String,
  content: String,
  timestamp: { type: Date, default: Date.now },
}));

// Routes
app.get("/", (req, res) => res.send("Chat App Backend"));
app.get("/messages", async (req, res) => {
  const messages = await Message.find().sort({ timestamp: 1 });
  res.json(messages);
});

app.post("/messages", async (req, res) => {
  const { username, content } = req.body;
  const message = await Message.create({ username, content });
  io.emit("message", message);
  res.json(message);
});

// Socket.IO
io.on("connection", (socket) => {
  console.log("New client connected");
  socket.on("disconnect", () => console.log("Client disconnected"));
});

// Start Server
const PORT = process.env.PORT || 5001;
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
