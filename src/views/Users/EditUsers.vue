<template>
  <div>
    <h1>Usuário {{ user.name }}</h1>
    <br />
    <form action="#" method="post" @submit.prevent="updateUser">
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
        placeholder="Nova Senha"
        v-model="user.password"
      />
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import UsersService from "../../services/users.services";
import router from "../../router";

export default {
  name: "UserView",

  props: {
    id: {
      required: true,
    },
  },

  setup(props) {
    const user = reactive({
      name: "",
      email: "",
      password: "",
    });

    onMounted(() => {
      UsersService.show(props.id)
        .then((response) => {
          let userR = response.data;
          user.name = userR.name;
          user.email = userR.email;
          user.password = userR.password;
        })
        .catch((error) => {
          console.warn(error);
        });
    });

    const updateUser = () => {
      UsersService.update(props.id, user).then(() => {
        router.push({ name: "home" });
      });
    };

    return { user, updateUser };
  },
};
</script>

<style scoped></style>
