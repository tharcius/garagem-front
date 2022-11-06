<template>
  <div>
    <h1>Lista de Carros</h1>
    <h3>
      <RouterLink to="/cars/add">Adicionar novo carro</RouterLink>
    </h3>
    <br />
    <table>
      <tr>
        <th>id</th>
        <th>Modelo</th>
        <th>Fabricante</th>
        <th>Ano</th>
        <th>Cor</th>
        <th>Placa</th>
        <th>Dono</th>
        <th>Ações</th>
      </tr>
      <tr v-for="car in cars" :key="car.id">
        <td>{{ car.id }}</td>
        <td>{{ car.model }}</td>
        <td>{{ car.manufacturer }}</td>
        <td>{{ car.year }}</td>
        <td>{{ car.color }}</td>
        <td>{{ car.license_plate }}</td>
        <td>{{ car.user.name }}</td>
        <td>
          <RouterLink :to="{ name: 'cars.show', params: { id: car.id } }">
            Exibir
          </RouterLink>
          |
          <RouterLink :to="{ name: 'cars.edit', params: { id: car.id } }">
            Editar
          </RouterLink>
          |
          <a href="#" @click.prevent="deleteUser(car.id)">Apagar</a>
          |
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import CarsService from "../../services/cars.services";

export default {
  name: "CarsView",

  setup(props) {
    const cars = ref([]);

    onMounted(() => {
      CarsService.index()
        .then((response) => {
          cars.value = response.data;
        })
        .catch((error) => {
          console.warn(error);
        });
    });

    const deleteCar = () => {
      CarsService.delete(props.id);
    };

    return { cars, deleteCar };
  },
};
</script>

<style scoped>
@media (min-width: 1024px) {
  .cars {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
