import React, { useState } from "react";


const ChatArea = ({ messages, sendMessage }) => {
  const [content, setContent] = useState("");

  const handleSend = () => {
    if (content.trim()) {
      sendMessage(content);
      setContent("");
    }
  };

  return (
    <div className="chat-area">
      <div className="chat-header">
        <div className="user-info">
          <img src="/images/kevin.jpg" alt="Kevin" />
          <div>
            <h6>Kevin</h6>
            <p>Online</p>
          </div>
        </div>
      </div>
      <div className="messages">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`message ${msg.username === "Kevin" ? "sent" : "received"}`}
          >
            <strong>{msg.username}: </strong>
            {msg.content}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatArea;
