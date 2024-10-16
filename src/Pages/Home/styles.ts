import styled from "styled-components";

export const HomeContainer = styled.div``;

export const BackgroundSearchImg = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 261px;
  opacity: 1;
  z-index: -1;
`;

export const PageContent = styled.div`
  position: absolute;
  top: 261px;
  left: 0px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 36px 168px;
`;

export const NewCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 36px;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(234px, 1fr));
  gap: 36px;
  align-items: center;
  justify-items: center;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 36px;
  height: 100%;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 700px;
  width: 100%;
`;
