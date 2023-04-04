<template>
    <div class="friend-list">
      <h2>Friends</h2>
      <ul>
        <Friend
          v-for="(friend, index) in friends"
          :key="index"
          :friend="friend"
          @friendClicked="onFriendClicked"
        />
      </ul>
    </div>
  </template>
  
  <script>
  import Friend from "./Friend.vue";
  
  export default {
    name: "FriendListComponent",
    components: {
      Friend,
    },
    data() {
      return {
        friends: [
          { id: 1, name: "Alice", online: true },
          { id: 2, name: "Bob", online: false },
          { id: 3, name: "Charlie", online: true },
        ],
      };
    },
    methods: {
      onFriendClicked(friend) {
        this.$emit("friendSelected", friend);
      },
    },
  };
  </script>
  
  <style scoped>
  .friend-list {
    width: 100%;
  }
  
  h2 {
    margin-bottom: 1rem;
  }
  </style>
  