import {
  DrawerContainer,
  Overlay,
  CreateCardTitleBox,
  CreateCardIconBox,
  CreateCardDivider,
  CreateCardButtonBox,
} from "./styles";
import CreateCardIcon from "../../assets/icone_criar.svg";
import { TitleH1Bold } from "../Typography/Index";
import Input from "../Input/Index";
import Button from "../Button/Index";
import useFile from "../../hooks/useFile";
import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import { useCar } from "../../hooks/useCar";
import { ICar } from "../../types/car";

interface ICardDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  car?: ICar;
}

const CardDrawer = ({ isOpen, onClose, car }: ICardDrawerProps) => {
  const { handleCreateCar, handleUpdateCar } = useCar();
  const [carName, setCarName] = useState<string>(car?.name || "");
  const {
    file,
    setFile,
    handleFileChange,
    fileInputRef,
    handleInputButtonClick,
    convertToBase64,
  } = useFile();
  if (!isOpen) return;

  const handleChangeCarName = (event: ChangeEvent<HTMLInputElement>) => {
    setCarName(event.target.value);
  };

  const closeModal = () => {
    setFile(null);
    onClose();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (car) {
      const photoBase64 = file ? await convertToBase64(file) : car.photoBase64;

      await handleUpdateCar({
        ...car,
        name: carName,
        photoBase64,
      });

      closeModal();
      return;
    }

    if (!carName) {
      alert("Por favor, preencha o nome do card.");
      return;
    }

    await handleCreateCar({ name: carName, file });
    setCarName("");

    closeModal();
  };

  return (
    <>
      <Overlay onClick={closeModal} />
      <DrawerContainer onSubmit={handleSubmit}>
        <CreateCardTitleBox>
          <CreateCardIconBox src={CreateCardIcon} />
          <TitleH1Bold>Criar card</TitleH1Bold>
        </CreateCardTitleBox>
        <CreateCardDivider />
        <Input
          label="DIGITE UM NOME PARA O CARD"
          placeholder="Digite o título"
          className="first-input"
          value={carName}
          onChange={(event) => handleChangeCarName(event)}
        />
        <Input
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={handleFileChange}
          inputRef={fileInputRef}
          label="INCLUA UMA IMAGEM PARA APARECER NO CARD"
          placeholder="Nenhum arquivo selecionado"
          button={
            <Button
              size="secondary"
              color="orange"
              variant="outline"
              onClick={(e: MouseEvent<HTMLButtonElement>) =>
                handleInputButtonClick(e)
              }
            >
              Escolher arquivo
            </Button>
          }
        />
        <CreateCardDivider />
        <CreateCardButtonBox>
          <Button type="submit" size="primary" color="orange" variant="solid">
            {car ? "Atualizar card" : "Criar card"}
          </Button>
        </CreateCardButtonBox>
      </DrawerContainer>
    </>
  );
};

export default CardDrawer;
