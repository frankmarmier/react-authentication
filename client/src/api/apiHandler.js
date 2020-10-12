const axios = require("axios");

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

const erroHandler = (err) => {
  console.error(err);
  if (err.response && err.response.data) {
    console.error("Response =>", err.response.data);
    throw err.response.data.message;
  }
  throw err;
};

export default {
  signin(data) {
    return service
      .post("/api/auth/signin", data)
      .then((res) => res.data)
      .catch(erroHandler);
  },
  signup(data) {
    return service
      .post("/api/auth/signup", data)
      .then((res) => res.data)
      .catch(errorHandler);
  },
  isLoggedIn() {
    return service
      .get("/api/auth/isLoggedIn")
      .then((res) => res.data)
      .catch(errorHandler);
  },
};
