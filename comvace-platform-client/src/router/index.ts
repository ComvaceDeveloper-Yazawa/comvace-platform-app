import { createRouter, createWebHistory } from "vue-router";
import ApiTest from "@/views/ApiTest.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "ApiTest",
      component: ApiTest,
    },
  ],
});

export default router;
