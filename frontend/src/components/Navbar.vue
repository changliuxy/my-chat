<template>
    <nav class="navbar">
      <div class="navbar__item" @click="$emit('sectionSelected', 'chat')">Chat</div>
      <div class="navbar__item" @click="$emit('sectionSelected', 'friends')">Friends</div>
      <div class="navbar__item" @click="$emit('sectionSelected', 'groups')">Groups</div>
      <div class="navbar__item" @click="$emit('sectionSelected', 'profile')">Profile</div>
      <div class="navbar__item" @click="$emit('sectionSelected', 'settings')">Settings</div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "NavbarComponent",
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    background-color: #1e90ff;
    padding: 0.5rem 1rem;
  }
  
  .navbar__item {
    margin-right: 1rem;
    color: #fff;
    cursor: pointer;
    user-select: none;
  }
  
  .navbar__item:last-child {
    margin-right: 0;
  }
  </style>
  