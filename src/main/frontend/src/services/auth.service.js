import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  async login(username, password) {
    return await axios
      .post(API_URL + "login", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  async register(username, phone, profilePic, password) {
     await axios.post(API_URL + "signup", {
      username,
      phone,
      profilePic,
      password
    });
    this.login(username,password);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();