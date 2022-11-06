<template>
  <div>
    <h1>Carro {{ car.model }}</h1>
    <br />
    <form action="#" method="post" @submit.prevent="updateCar">
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
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import CarsServices from "../../services/cars.services";
import router from "../../router";

export default {
  name: "UserView",

  props: {
    id: {
      required: true,
    },
  },

  setup(props) {
    const car = reactive({
      name: "",
      email: "",
      password: "",
    });

    onMounted(() => {
      CarsServices.show(props.id)
        .then((response) => {
          let carR = response.data;
          car.model = carR.model;
          car.manufacturer = carR.manufacturer;
          car.year = carR.year;
          car.color = carR.color;
        })
        .catch((error) => {
          console.warn(error);
        });
    });

    const updateCar = () => {
      CarsServices.update(props.id, car).then(() => {
        router.push({ name: "cars" });
      });
    };

    return { car, updateCar };
  },
};
</script>

<style scoped></style>
