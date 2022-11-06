<template>
  <div>
    <h3>Novo Carro</h3>
    <form action="#" method="post" @submit.prevent="createCar">
      <input
        type="text"
        name="model"
        placeholder="Modelo"
        v-model="car.model"
      />
      <input
        type="text"
        name="manufacturer"
        placeholder="Fabricante"
        v-model="car.manufacturer"
      />
      <input type="text" name="year" placeholder="Ano" v-model="car.year" />
      <input type="text" name="color" placeholder="Cor" v-model="car.color" />
      <input
        type="text"
        name="license_plate"
        placeholder="Placa"
        v-model="car.license_plate"
      />
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
import { reactive } from "vue";

import CarsServices from "../../services/cars.services";

import router from "../../router";

export default {
  name: "AddUser",
  setup() {
    const car = reactive({
      model: "",
      manufacturer: "",
      year: "",
      color: "",
      license_plate: "",
    });

    const createCar = () => {
      CarsServices.create(car).then(() => {
        router.push({ name: "cars" });
      });
    };

    return { createCar, car };
  },
};
</script>

<style scoped></style>
