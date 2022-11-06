import { createRouter, createWebHistory } from "vue-router";
import IndexUsers from "../views/Users/IndexUsers.vue";
import AddUsers from "../views/Users/AddUser.vue";
import ShowUsers from "../views/Users/ShowUsers.vue";
import EditUsers from "../views/Users/EditUsers.vue";
import IndexCars from "../views/Cars/IndexCars.vue";
import AddCars from "../views/Cars/AddCars.vue";
import ShowCars from "../views/Cars/ShowCars.vue";
import EditCars from "../views/Cars/EditCars.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: IndexUsers,
    },
    {
      path: "/users/add",
      name: "users.add",
      component: AddUsers,
    },
    {
      path: "/users/:id",
      name: "users.show",
      component: ShowUsers,
      props: true,
    },
    {
      path: "/users/:id/edit",
      name: "users.edit",
      component: EditUsers,
      props: true,
    },
    {
      path: "/cars",
      name: "cars",
      component: () => IndexCars,
    },
    {
      path: "/cars/add",
      name: "cars.add",
      component: AddCars,
    },
    {
      path: "/cars/:id",
      name: "cars.show",
      component: ShowCars,
      props: true,
    },
    {
      path: "/cars/:id/edit",
      name: "cars.edit",
      component: EditCars,
      props: true,
    },
  ],
});

export default router;
