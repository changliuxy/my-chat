<template>
    <div class="settings">
      <h2>Settings</h2>
      <div class="settings__section">
        <h3>Profile</h3>
        <div class="settings__item">
          <label for="name">Name:</label>
          <input id="name" v-model="name" type="text" />
        </div>
        <div class="settings__item">
          <label for="email">Email:</label>
          <input id="email" v-model="email" type="email" />
        </div>
        <button @click="saveProfile">Save</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SettingsComponent",
    data() {
      return {
        name: "John Doe",
        email: "john.doe@example.com",
      };
    },
    methods: {
      saveProfile() {
        // Save profile settings
        console.log("Profile saved");
      },
    },
  };
  </script>
  
  <style scoped>
  .settings {
    width: 100%;
  }
  
  .settings__section {
    margin-bottom: 2rem;
  }
  
  .settings__item {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .settings__item label {
    width: 100px;
  }
  
  .settings__item input {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
  }
  
  button {
    padding: 0.5rem 1rem;
    background-color: #1e90ff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
  }
  </style>
  