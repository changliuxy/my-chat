<template>
    <li class="group" @click="onClick">
      <div class="group__name">{{ group.name }}</div>
      <div class="group__members">{{ group.membersCount }} members</div>
    </li>
  </template>
  
  <script>
  export default {
    name: "GroupComponent",
    props: {
      group: {
        type: Object,
        required: true,
      },
    },
    methods: {
      onClick() {
        this.$emit("groupClicked", this.group);
      },
    },
  };
  </script>
  
  <style scoped>
  .group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  </style>
  