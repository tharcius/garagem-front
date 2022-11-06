<template>
  <div>
    <h3>Novo usuário</h3>
    <form action="#" method="post" @submit.prevent="createUser">
      <input type="text" name="name" placeholder="Nome" v-model="user.name" />
      <input
        type="text"
        name="email"
        placeholder="e-mail"
        v-model="user.email"
      />
      <input
        type="password"
        name="password"
        placeholder="Senha"
        v-model="user.password"
      />
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
import { reactive } from "vue";

import UsersService from "../../services/users.services";

import router from "../../router";

export default {
  name: "AddUser",
  setup() {
    const user = reactive({
      name: "",
      email: "",
      password: "",
    });

    const createUser = () => {
      UsersService.create(user).then(() => {
        router.push({ name: "home" });
      });
    };

    return { createUser, user };
  },
};
</script>

<style scoped></style>
