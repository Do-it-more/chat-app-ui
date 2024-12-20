import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import Profile from "./components/Profile";
import "./App.css";

const socket = io("http://localhost:5000");

const App = () => {
  const [messages, setMessages] = useState([]);
  const [currentUser] = useState("Kevin");

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await axios.get("http://localhost:5001/messages");
      setMessages(res.data);
    };

    fetchMessages();

    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => socket.off("message");
  }, []);

  const sendMessage = async (content) => {
    await axios.post("http://localhost:5000/messages", { username: currentUser, content });
  };

  return (
    <div className="container">
      <Sidebar />
      <ChatArea messages={messages} sendMessage={sendMessage} />
      <Profile />
    </div>
  );
};

export default App;
