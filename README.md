#  Real-Time Full-Stack Chat Application

A professional, real-time messaging platform built with a **Spring Boot** backend and a **React (Vite)** frontend. This project utilizes **STOMP WebSockets** to provide bi-directional, low-latency communication.

---

##  Features

* **Real-Time Bi-directional Messaging**: Instant message delivery using WebSocket protocols.
* **Modern UI/UX**: A polished, responsive interface inspired by WhatsApp and Slack.
* **Dynamic Alignment**: Smart message detection that aligns your messages to the right (green) and others to the left (white).
* **Case-Insensitive Pairing**: Robust logic to ensure usernames match regardless of casing or accidental spaces.
* **Vite Integration**: Optimized frontend build with polyfills for legacy WebSocket libraries (SockJS).

---

##  Tech Stack

### **Backend**
* **Java 21** & **Spring Boot 4.x**
* **Spring Messaging**: Using STOMP for structured message handling.
* **Spring WebSocket**: To handle low-level socket connections.

### **Frontend**
* **React 18** (Vite)
* **SockJS-client**: For cross-browser WebSocket compatibility.
* **STOMPjs**: For high-level messaging patterns.
* **CSS3**: Custom Flexbox-based layout.

---

##  Project Structure

```text
demo_WebSocket/
├── src/main/java/.../        # Spring Boot Java Source
│   ├── config/               # WebSocket & Broker Configurations
│   ├── controller/           # Chat Handling logic
│   └── model/                # Message Data Models
└── frontend/                 # React Frontend Application
    ├── src/components/       # Chat, MessageList, and Input components
    └── src/App.css           # Professional UI Styling
```

## Screenshots

<img width="485" height="583" alt="image" src="https://github.com/user-attachments/assets/c89cda49-4711-40ff-b2da-63ed94937b27" />

<img width="426" height="572" alt="image" src="https://github.com/user-attachments/assets/1f000a44-7075-494c-96f0-5bf47d4cd2da" />

