<template>
  <div>
    <h1>Carro</h1>
    <h3>{{ car.manufacturer }} {{ car.model }} {{ car.year }}</h3>
    <p>Cor: {{ car.color }}</p>
    <p>Placa: {{ car.license_plate }}</p>
    <p>&nbsp;</p>
    <br />
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import CarsServices from "../../services/cars.services";

export default {
  name: "ShowCars",

  props: {
    id: {
      required: true,
    },
  },

  setup(props) {
    const car = ref([]);

    onMounted(() => {
      CarsServices.show(props.id)
        .then((response) => {
          car.value = response.data;
        })
        .catch((error) => {
          console.warn(error);
        });
    });
    return { car };
  },
};
</script>

<style scoped>
h3 {
  font-weight: bold;
}
</style>
