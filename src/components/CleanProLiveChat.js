import React, { useState, useEffect, useRef, useCallback } from "react";

const LiveChat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you today?", sender: "bot" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messagesEndRef]); // Add dependencies here

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: newMessage,
      sender: "user",
    };
    setMessages([...messages, userMessage]);
    setNewMessage("");

    // Simulate bot response after a delay
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: `I received: "${newMessage}". This is a simulated response.`,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full w-auto mx-auto border border-gray-300 rounded-lg overflow-hidden bg-white right-1 bottom-0" style={{position:"absolute", zIndex:999}}>
      {/* Chat header */}
      <div className="bg-blue-600 text-white p-4">
        <h2 className="text-xl font-semibold">Live Chat Support</h2>
        <p className="text-sm opacity-80">We're here to help you!</p>
      </div>

      {/* Messages container */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.sender === "user"
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-gray-200 text-gray-800 rounded-bl-none"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message input */}
      <form
        onSubmit={handleSendMessage}
        className="border-t border-gray-300 p-4 bg-white"
      >
        <div className="flex items-center">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition duration-200"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default LiveChat;
