<template>
    <div class="message" :class="{ 'message--me': isSenderMe }">
      <div class="message__content">{{ message.content }}</div>
    </div>
  </template>
  
  <script>
  export default {
    name: "MessageComponent",
    props: {
      message: {
        type: Object,
        required: true,
      },
    },
    computed: {
      isSenderMe() {
        return this.message.sender === "me";
      },
    },
  };
  </script>
  
  <style scoped>
  .message {
    display: flex;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    background-color: #f1f1f1;
    border-radius: 4px;
  }
  
  .message--me {
    background-color: #1e90ff;
    color: #fff;
    align-self: flex-end;
  }
  
  .message__content {
    white-space: pre-wrap;
  }
  </style>
  