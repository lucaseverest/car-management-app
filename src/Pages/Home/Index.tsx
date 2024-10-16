import React, { useState } from "react";
import Header from "../../components/Header/Index";
import {
  BackgroundSearchImg,
  CardsContainer,
  HomeContainer,
  LoadingContainer,
  NewCardContainer,
  PageContent,
  PaginationWrapper,
} from "./styles";
import BackgroundSearchImage from "../../assets/fundo-busca.png";
import SearchBox from "../../components/SearchBox/Index";
import { TitleH1 } from "../../components/Typography/Index";
import Button from "../../components/Button/Index";
import CarCard from "../../components/CarCard/Index";
import CardDrawer from "../../components/CardDrawer/Index";
import { useCar } from "../../hooks/useCar";
import Pagination from "../../components/Pagination/Index";
import { BeatLoader } from "react-spinners";

const Home: React.FC = () => {
  const { cars, isHomepageLoading } = useCar();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <HomeContainer>
      <Header />
      <BackgroundSearchImg src={BackgroundSearchImage} />
      <SearchBox />
      {isHomepageLoading ? (
        <LoadingContainer>
          <BeatLoader color="#E76316" />
        </LoadingContainer>
      ) : (
        <PageContent>
          <NewCardContainer>
            <TitleH1>Resultado de busca</TitleH1>
            <Button
              color="orange"
              size="primary"
              variant="solid"
              onClick={handleDrawerToggle}
            >
              Novo Card
            </Button>
          </NewCardContainer>
          <CardsContainer>
            {cars.map((carItem) => (
              <CarCard car={carItem} key={carItem.id} />
            ))}
          </CardsContainer>
          <PaginationWrapper>
            <Pagination />
          </PaginationWrapper>
        </PageContent>
      )}
      <CardDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
    </HomeContainer>
  );
};

export default Home;
