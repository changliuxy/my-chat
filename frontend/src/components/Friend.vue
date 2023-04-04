<template>
    <li class="friend" @click="onClick">
      <div class="friend__name">{{ friend.name }}</div>
      <div class="friend__status" :class="{ 'friend__status--online': friend.online }"></div>
    </li>
  </template>
  
  <script>
  export default {
    name: "FriendComponent",
    props: {
      friend: {
        type: Object,
        required: true,
      },
    },
    methods: {
      onClick() {
        this.$emit("friendClicked", this.friend);
      },
    },
  };
  </script>
  
  <style scoped>
  .friend {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  
  .friend__name {
    flex: 1;
  }
  
  .friend__status {
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 50%;
  }
  
  .friend__status--online {
    background-color: green;
  }
  </style>
  