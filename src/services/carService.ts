import { api } from "../lib/api";
import { ICar, ICreateCar } from "../types/car";

export const getAllCars = async (page: number, pageSize: number) => {
  const skip = (page - 1) * pageSize;
  const response = await api.get<ICar[]>(`/car?$top=${pageSize}&$skip=${skip}`);

  const totalItems = response.headers["x-total-count"];

  return {
    cars: response.data,
    totalItems: Number(totalItems),
  };
};

export const createCar = async ({ name, photoBase64, status }: ICreateCar) => {
  const response = await api.post("/car", {
    name,
    status,
    photoBase64,
  });

  return response.data;
};

export const deleteCar = async (id: string) => {
  const response = await api.delete(`/car/${id}`);

  return response.data;
};

export const updateCar = async (carInfo: ICar) => {
  const response = await api.put(`/car/${carInfo.id}`, carInfo);
  return response.data;
};

export const getCarsByName = async (carName: string) => {
  const response = await api.get<ICar[]>(
    `/car?$filter=contains(Name,'${carName}')&$top=100`
  );

  return response.data;
};
