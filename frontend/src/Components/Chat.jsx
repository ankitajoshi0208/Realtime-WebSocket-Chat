import { useEffect, useState, useRef } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const clientRef = useRef(null);

  useEffect(() => {
    const client = new Client({
      webSocketFactory: () => new SockJS("http://localhost:8080/ws"),
      reconnectDelay: 5000,
      onConnect: () => {
        client.subscribe("/topic/messages", (msg) => {
          const data = JSON.parse(msg.body);
          setMessages((prev) => [...prev, data]);
        });
      },
    });

    client.activate();
    clientRef.current = client;
    return () => client.deactivate();
  }, []);

  const sendMessage = (text) => {
    if (!username) {
      alert("Please enter a username first!");
      return;
    }
    if (clientRef.current && text.trim()) {
      clientRef.current.publish({
        destination: "/app/chat",
        body: JSON.stringify({ sender: username, content: text }),
      });
    }
  };

  return (
    <div className="chat-box">
      <div className="chat-header">
        <input
          className="username"
          type="text"
          placeholder="Enter your name..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      {/* FIXED LINE BELOW: Added currentUser={username} */}
      <MessageList messages={messages} currentUser={username} />

      <MessageInput sendMessage={sendMessage} />
    </div>
  );
}

export default Chat;