import ChatIcon from '@mui/icons-material/Chat';
import React, { useEffect, useRef, useState } from 'react';

const SupportChatPage = () => {
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState('');
  const chatAreaRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the chat area when showChat becomes true
    if (showChat && chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [showChat]);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle message submission
    console.log('Message submitted:', message);
    setMessage('');

    // Scroll to the bottom after submitting a message
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  };

  return (
    <div>
      {/* Chat icon */}
      <div
        onClick={toggleChat}
        style={{ cursor: 'pointer', fontSize: '24px', marginBottom: '20px' }}
      >
       <ChatIcon></ChatIcon> Chat Icon
      </div>

      {/* Chat interface */}
      {showChat && (
        <div
          style={{
            maxHeight: '300px', // Adjust the max height as needed
            overflowY: 'auto', // Enable vertical scrolling
          }}
          ref={chatAreaRef}
        >
          <h1>Support Chat</h1>
          {/* Messages */}
          <div>
            {/* Render chat messages here */}
            {/* For example, you can map over an array of messages */}
          </div>
          {/* Chat input form */}
          <form onSubmit={handleSubmit}>
            <textarea
              value={message}
              onChange={handleMessageChange}
              placeholder="Type your message here..."
              rows="4"
              cols="50"
            />
            <br />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SupportChatPage;
