<template>
    <div class="chat">
      <div class="messages">
        <Message v-for="(message, index) in messages" :key="index" :message="message" />
      </div>
      <div class="input-area">
        <textarea v-model="messageInput" @keydown.enter.prevent="sendMessage" placeholder="Type a message"></textarea>
        <button @click="sendMessage">Send</button>
      </div>
    </div>
  </template>
  
  <script>
  import Message from "./Message.vue";
  
  export default {
    name: "ChatComponent",
    components: {
      Message,
    },
    data() {
      return {
        messageInput: "",
        messages: [],
      };
    },
    methods: {
      sendMessage() {
        if (this.messageInput.trim() === "") return;
        this.messages.push({ content: this.messageInput, sender: "me" });
        this.messageInput = "";
      },
    },
  };
  </script>
  
  <style scoped>
  .chat {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .messages {
    flex: 1;
    overflow-y: auto;
  }
  
  .input-area {
    display: flex;
    align-items: center;
    padding: 0.5rem;
  }
  
  input-area textarea {
    flex: 1;
    resize: none;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
  }
  
  .input-area button {
    margin-left: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: #1e90ff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
  }
  </style>
  