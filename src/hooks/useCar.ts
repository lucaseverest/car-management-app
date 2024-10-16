import { useContext } from "react";
import { CarContext } from "../contexts/CarContext";

export function useCar() {
  return useContext(CarContext);
}
