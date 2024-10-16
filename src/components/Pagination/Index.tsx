import { useMemo } from "react";
import { useCar } from "../../hooks/useCar";
import { PaginationButton, PaginationContainer } from "./styles";

const Pagination = () => {
  const { currentCarsPage, setCurrentCarsPage, carsQuantity, cardsPerPage } =
    useCar();

  const totalPages = useMemo(() => {
    return Math.ceil(carsQuantity / cardsPerPage);
  }, [carsQuantity, cardsPerPage]);

  return (
    <PaginationContainer className="pagination">
      {Array.from({ length: totalPages }, (_, index) => (
        <PaginationButton
          key={index}
          onClick={() => setCurrentCarsPage(index + 1)}
          disabled={index + 1 === currentCarsPage}
          $isActive={index + 1 === currentCarsPage}
        >
          {index + 1}
        </PaginationButton>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
