// const axios = require("axios");

import axios from "axios";

const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/account/20974384/lists",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmU4ZmM1OGQ3NjM1ZmVkNWI2MzljZDY5MDcxYjc0YSIsInN1YiI6IjY1YzNjZTFiYzE1Zjg5MDE2M2Y1NThmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tGkAPz2CDbgZbzrN8OaKXGg0e0arr5RwHOq8uOBNbYM",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
