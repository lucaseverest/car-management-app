interface ICar {
  id: string;
  name: string;
  status: string;
  photo: string;
  photoBase64: string;
}

interface ICreateCar {
  name: string;
  status: string;
  photoBase64: string;
}

export type { ICar, ICreateCar };
