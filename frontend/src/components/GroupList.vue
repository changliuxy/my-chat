<template>
    <div class="group-list">
      <h2>Groups</h2>
      <ul>
        <Group
          v-for="(group, index) in groups"
          :key="index"
          :group="group"
          @groupClicked="onGroupClicked"
        />
      </ul>
    </div>
  </template>
  
  <script>
  import Group from "./Group.vue";
  
  export default {
    name: "GroupList",
    components: {
      Group,
    },
    data() {
      return {
        groups: [
          { id: 1, name: "Group 1", membersCount: 5 },
          { id: 2, name: "Group 2", membersCount: 3 },
          { id: 3, name: "Group 3", membersCount: 7 },
        ],
      };
    },
    methods: {
      onGroupClicked(group) {
        this.$emit("groupSelected", group);
      },
    },
  };
  </script>
  
  <style scoped>
  .group-list {
    width: 100%;
  }
  
  h2 {
    margin-bottom: 1rem;
  }
  </style>
  