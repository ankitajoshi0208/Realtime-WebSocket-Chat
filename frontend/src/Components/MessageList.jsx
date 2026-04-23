function MessageList({ messages, currentUser }) {
  return (
    <div className="messages">
      {messages.map((msg, index) => {
        // .trim() removes accidental spaces, .toLowerCase() ignores Caps
        const isMe = msg.sender?.trim().toLowerCase() === currentUser?.trim().toLowerCase();

        return (
          <div
            key={index}
            className={`message ${isMe ? "sent" : "received"}`}
          >
            <strong>{msg.sender}</strong>
            <span>{msg.content}</span>
          </div>
        );
      })}
    </div>
  );
}

export default MessageList;