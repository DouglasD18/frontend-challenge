import axios from "axios";

export const api = axios.create({
  baseURL: "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products"
});

export const queryParams = {
  page: 1,
  rows: 8,
  sortBy: "id",
  orderBy: "ASC"
};
