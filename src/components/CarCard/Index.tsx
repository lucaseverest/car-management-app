import {
  ActionButtons,
  ActionButtonIcon,
  ActionButtonText,
  CarCardContainer,
  CarCardImageBox,
  CardActions,
  CarNameBox,
} from "./styles";
import DeleteIcon from "../../assets/Icon-trash.svg";
import EditIcon from "../../assets/Icon-edit.svg";
import DeleteModal from "../DeleteModal/Index";
import { useState } from "react";
import { ICar } from "../../types/car";
import CardDrawer from "../CardDrawer/Index";

interface ICarCardPorps {
  car: ICar;
}

const CarCard: React.FC<ICarCardPorps> = ({ car }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleModalToggle = () => {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };

  return (
    <CarCardContainer>
      <CarCardImageBox src={car.photoBase64} alt="Car Image"></CarCardImageBox>
      <CarNameBox>{car.name}</CarNameBox>
      <CardActions>
        <ActionButtons onClick={handleModalToggle}>
          <ActionButtonIcon src={DeleteIcon} alt="Deletar" />
          <ActionButtonText $hovercolor="red">Excluir</ActionButtonText>
        </ActionButtons>
        <ActionButtons onClick={handleDrawerToggle}>
          <ActionButtonIcon src={EditIcon} alt="Deletar" />
          <ActionButtonText $hovercolor="orange">Editar</ActionButtonText>
        </ActionButtons>
      </CardActions>
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={handleModalToggle}
        carId={car.id}
      />

      <CardDrawer
        isOpen={isDrawerOpen}
        onClose={handleDrawerToggle}
        car={car}
      />
    </CarCardContainer>
  );
};

export default CarCard;
