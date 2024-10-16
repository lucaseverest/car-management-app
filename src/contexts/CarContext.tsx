import { createContext, Dispatch, ReactNode, useEffect, useState } from "react";
import { ICar } from "../types/car";
import {
  createCar,
  deleteCar,
  getAllCars,
  getCarsByName,
  updateCar,
} from "../services/carService";
import useFile from "../hooks/useFile";

export interface CarContextData {
  cars: ICar[];
  handleCreateCar: (createCarInfo: ICreateCarInfo) => Promise<void>;
  refreshCars: () => Promise<void>;
  handleDeleteCar: (id: string) => Promise<void>;
  handleUpdateCar: (carInfo: ICar) => Promise<void>;
  handleGetCarsByName: (name: string) => Promise<void>;
  currentCarsPage: number;
  setCurrentCarsPage: Dispatch<React.SetStateAction<number>>;
  carsQuantity: number;
  cardsPerPage: number;
  isHomepageLoading: boolean;
}

interface CarProviderProps {
  children: ReactNode;
}

interface ICreateCarInfo {
  name: string;
  file: File | null;
}

export const CarContext = createContext({} as CarContextData);

export const CarProvider: React.FC<CarProviderProps> = ({ children }) => {
  const [isHomepageLoading, setIsHomepageLoading] = useState(false);
  const [currentCarsPage, setCurrentCarsPage] = useState(1);
  const [carsQuantity, setCarsQuantity] = useState(1);
  const cardsPerPage = 12;
  const [cars, setCars] = useState<ICar[]>([]);
  const { convertToBase64 } = useFile();

  useEffect(() => {
    setIsHomepageLoading(true);
    const fetchCars = async () => {
      const getCars = await getAllCars(currentCarsPage, cardsPerPage);
      setCars(getCars.cars);
      setCarsQuantity(getCars.totalItems);
    };

    fetchCars().finally(() => setIsHomepageLoading(false));
  }, [currentCarsPage]);

  const refreshCars = async (): Promise<void> => {
    setIsHomepageLoading(true);
    const getCars = await getAllCars(currentCarsPage, cardsPerPage);
    setCars(getCars.cars);
    setCarsQuantity(getCars.totalItems);
    setIsHomepageLoading(false);
  };

  const handleCreateCar = async ({
    name,
    file,
  }: ICreateCarInfo): Promise<void> => {
    if (file) {
      try {
        setIsHomepageLoading(true);
        const base64File = await convertToBase64(file);

        await createCar({
          name,
          photoBase64: base64File,
          status: "available",
        });

        refreshCars();

        alert("Card criado com sucesso!");
      } catch (error: unknown) {
        console.error("Erro ao enviar o arquivo:", error);
        alert("Erro ao enviar o arquivo.");
      } finally {
        setIsHomepageLoading(false);
      }
    } else {
      alert("Nenhum arquivo selecionado.");
    }
  };

  const handleDeleteCar = async (id: string): Promise<void> => {
    try {
      setIsHomepageLoading(true);
      await deleteCar(id);

      refreshCars();

      alert("Card deletado com sucesso!");
    } catch (error) {
      console.error("Erro ao deletar o carro:", error);
      alert("Erro ao deletar o carro.");
    } finally {
      setIsHomepageLoading(false);
    }
  };

  const handleUpdateCar = async (carInfo: ICar): Promise<void> => {
    try {
      setIsHomepageLoading(true);
      await updateCar(carInfo);

      refreshCars();

      alert("Card atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar o carro:", error);
      alert("Erro ao atualizar o carro.");
    } finally {
      setIsHomepageLoading(false);
    }
  };

  const handleGetCarsByName = async (name: string): Promise<void> => {
    try {
      setIsHomepageLoading(true);
      const getCars = await getCarsByName(name);
      setCars(getCars);
      setCarsQuantity(getCars.length);
    } catch (error) {
      console.error("Erro ao buscar carros pelo nome:", error);
      alert("Erro ao buscar carros pelo nome.");
    } finally {
      setIsHomepageLoading(false);
    }
  };

  return (
    <CarContext.Provider
      value={{
        cars,
        isHomepageLoading,
        handleGetCarsByName,
        carsQuantity,
        cardsPerPage,
        handleCreateCar,
        refreshCars,
        handleDeleteCar,
        handleUpdateCar,
        currentCarsPage,
        setCurrentCarsPage,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
