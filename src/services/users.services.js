import axios from "axios";

export default class UsersService {
  static async index() {
    return axios.get("/users");
  }

  static async create(params) {
    return axios.post("/users", params);
  }

  static async show(id) {
    return axios.get(`/users/${id}`);
  }

  static async update(id, user) {
    return axios.patch(`/users/${id}`, user);
  }

  static async delete(id) {
    return axios.delete(`/users/${id}`);
  }
}
