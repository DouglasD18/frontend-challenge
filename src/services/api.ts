import { Response } from "@/types/response";
import axios from "axios";

const api = axios.create({
  baseURL: "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products"
});

const queryParams = {
  page: 1,
  rows: 8,
  sortBy: "id",
  orderBy: "ASC"
};

export const request = async (): Promise<Response> => {
  return (await api.get("/", { params: queryParams })).data;
}
