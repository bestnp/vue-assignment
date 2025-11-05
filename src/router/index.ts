import { createRouter, createWebHistory } from "vue-router";
import Courses from "../views/Courses.vue";
import Summary from "../views/Summary.vue";

const routes = [
  { path: "/", name: "Courses", component: Courses },
  { path: "/summary", name: "Summary", component: Summary },
  // TODO: สร้าง Route สำหรับหน้า Summary
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
