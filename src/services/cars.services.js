import axios from "axios";

export default class CarsServices {
  static async index() {
    return axios.get("/cars");
  }

  static async create(params) {
    return axios.post("/cars", params);
  }

  static async show(id) {
    return axios.get(`/cars/${id}`);
  }

  static async update(id, car) {
    return axios.patch(`/cars/${id}`, car);
  }

  static async delete(id) {
    return axios.delete(`/cars/${id}`);
  }
}
