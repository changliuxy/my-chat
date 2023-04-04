import { createRouter, createWebHistory } from "vue-router";
import Chat from "../components/Chat.vue";
import FriendList from "../components/FriendList.vue";
import GroupList from "../components/GroupList.vue";
import Profile from "../components/Profile.vue";
import Settings from "../components/Settings.vue";

const routes = [
  {
    path: "/",
    redirect: "/chat",
  },
  {
    path: "/chat",
    component: Chat,
  },
  {
    path: "/friends",
    component: FriendList,
  },
  {
    path: "/groups",
    component: GroupList,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/settings",
    component: Settings,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
