<template>
    <div class="profile">
      <div class="profile__avatar">
        <img :src="avatarUrl" alt="Avatar" />
      </div>
      <div class="profile__info">
        <h3>{{ name }}</h3>
        <p>{{ email }}</p>
        <p v-if="isAdmin">Admin</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProfileComponent",
    props: {
      avatarUrl: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      isAdmin: {
        type: Boolean,
        default: false,
      },
    },
  };
  </script>
  
  <style scoped>
  .profile {
    display: flex;
    align-items: center;
    padding: 1rem;
  }
  
  .profile__avatar img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 1rem;
  }
  
  .profile__info h3 {
    margin-bottom: 0.5rem;
  }
  </style>
  