<template>
  <div class="users">
    <h1>Lista de Usuários</h1>
    <h3>
      <RouterLink to="/users/add">Adicionar novo usuário</RouterLink>
    </h3>
    <br />
    <table>
      <tr>
        <th class="th-id">id</th>
        <th class="th-name">Nome</th>
        <th class="th-email">e-mail</th>
        <th class="th-actions">Ações</th>
      </tr>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>
          <RouterLink :to="{ name: 'users.show', params: { id: user.id } }">
            Exibir
          </RouterLink>
          |
          <RouterLink :to="{ name: 'users.edit', params: { id: user.id } }">
            Editar
          </RouterLink>
          |
          <a href="#" @click.prevent="deleteUser(user.id)">Apagar</a>
          |
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import UsersService from "../../services/users.services";

export default {
  name: "IndexUsers",
  setup(props) {
    const users = ref([]);

    onMounted(() => {
      UsersService.index()
        .then((response) => {
          users.value = response.data;
        })
        .catch((error) => {
          console.warn(error);
        });
    });

    const deleteUser = () => {
      UsersService.delete(props.id);
    };

    return { users, deleteUser };
  },
};
</script>

<style scoped>
@media (min-width: 1024px) {
  table {
    width: 100%;
  }
}
</style>
