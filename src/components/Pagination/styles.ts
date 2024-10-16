import styled from "styled-components";

export const PaginationContainer = styled.div`
  gap: 8px;
  display: flex;
`;

interface PaginationButtonProps {
  $isActive: boolean;
}

export const PaginationButton = styled.button<PaginationButtonProps>`
  cursor: pointer;
  background-color: transparent;
  border: 2px solid var(--cor-destaque);
  color: var(--cor-destaque);
  border-radius: 6px;
  height: 32px;
  width: 32px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fonts.fontWeights.bold};

  &:hover {
    transform: matrix(0.95, 0, 0, 0.95, 0, 0);
  }

  ${({ $isActive }) => {
    return $isActive
      ? `
        background-color: var(--cor-destaque);
        color: var(--cor-branco);
        border: 2px solid var(--cor-branco);
      `
      : `
        background-color: transparent;
        border: 2px solid var(--cor-destaque);
        color: var(--cor-destaque);

        &:hover {
        background-color: var(--cor-destaque);
        color: white;
      }
      `;
  }}
`;
