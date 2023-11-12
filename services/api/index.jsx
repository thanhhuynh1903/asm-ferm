import axios from "../../config/axios";

export class UserService {
  getUsers() {
    return axios.get("/users");
  }
  getRoles() {
    return axios.get("/roles");
  }
  postNewUser(user) {
    return axios.post("/add/user", user);
  }
  // login() {
  //   return axios.get(USER_API_BASE_URL + "/login");
  // }

  // createUser(employee) {
  //   return axios.post(USER_API_BASE_URL, employee);
  // }

  // getUserById(employeeId) {
  //   return axios.get(USER_API_BASE_URL + "/" + employeeId);
  // }

  // updateUser(employee, employeeId) {
  //   return axios.put(USER_API_BASE_URL + "/" + employeeId, employee);
  // }

  // deleteUser(employeeId) {
  //   return axios.delete(USER_API_BASE_URL + "/" + employeeId);
  // }
}
