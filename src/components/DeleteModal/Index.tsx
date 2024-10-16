import {
  Overlay,
  ModalContainer,
  ModalContent,
  IconContainer,
  DeleteIcon,
  ModalTitle,
  ModalText,
  ButtonsContainer,
} from "./styles";
import DeleteIconImg from "../../assets/Icon-trash.svg";
import Button from "../Button/Index";
import { useCar } from "../../hooks/useCar";

interface IDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  carId: string;
}

const DeleteModal = ({ isOpen, onClose, carId }: IDeleteModalProps) => {
  const { handleDeleteCar } = useCar();

  if (!isOpen) return null;

  const handleDelete = async () => {
    await handleDeleteCar(carId);
    onClose();
  };

  return (
    <>
      <Overlay onClick={onClose} />
      <ModalContainer>
        <ModalContent>
          <IconContainer>
            <DeleteIcon src={DeleteIconImg} alt="ícone deletar" />
          </IconContainer>
          <ModalTitle>Excluir</ModalTitle>
          <ModalText>CERTEZA QUE DESEJA EXCLUIR?</ModalText>
          <ButtonsContainer>
            <Button
              size="primary"
              color="red"
              variant="solid"
              onClick={handleDelete}
            >
              Excluir
            </Button>
            <Button
              size="primary"
              color="red"
              variant="outline"
              onClick={onClose}
            >
              Cancelar
            </Button>
          </ButtonsContainer>
        </ModalContent>
      </ModalContainer>
    </>
  );
};

export default DeleteModal;
