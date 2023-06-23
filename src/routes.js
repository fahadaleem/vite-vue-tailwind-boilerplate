import { createRouter, createWebHashHistory } from "vue-router";

// Define your routes
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./views/Home.vue"), // Example component for the home route
  },
  {
    path: "/about",
    name: "About",
    component: () => import("./views/About.vue"), // Example component for the home route
  },
];
// Create the router instance
const router = createRouter({
  history: createWebHashHistory(),
  routes, // Pass the defined routes to the router
});
export default router;
