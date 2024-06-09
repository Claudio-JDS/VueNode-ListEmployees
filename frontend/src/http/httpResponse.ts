import { type AxiosResponse } from "axios";
import http from "./httpInstance";
import {type Employee } from "@/interfaces/IEmployeeHttp";


export const httpGet = async (): Promise<AxiosResponse<Employee[]>> => {
  return http.get<Employee []> ('')
}
