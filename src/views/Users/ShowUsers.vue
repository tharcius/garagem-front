<template>
  <div>
    <h1>Usuário {{ user.name }}</h1>
    <p>e-mail: {{ user.email }}</p>

    <br />

    <h2>Carros</h2>
    <div v-for="car in user.cars">
      <h3>{{ car.manufacturer }} {{ car.model }} {{ car.year }}</h3>
      <p>Cor: {{ car.color }}</p>
      <p>Placa: {{ car.license_plate }}</p>
      <p>&nbsp;</p>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import UsersService from "../../services/users.services";

export default {
  name: "ShowUsers",

  props: {
    id: {
      required: true,
    },
  },

  setup(props) {
    const user = ref([]);

    const loading = ref(false);

    onMounted(() => {
      UsersService.show(props.id)
        .then((response) => {
          user.value = response.data;
        })
        .catch((error) => {
          console.warn(error);
        })
        .finally(() => {
          loading.value = false;
        });
    });
    return { user, loading };
  },
};
</script>

<style scoped>
h3 {
  font-weight: bold;
}
</style>
