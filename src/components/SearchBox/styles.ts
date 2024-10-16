import styled from "styled-components";

export const SearchBoxContainer = styled.div`
  position: absolute;
  top: 147px;
  left: 168px;
  width: 1046px;
  height: 75px;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  padding: 13px 25px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 2;
  justify-content: space-between;
  opacity: 1;
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  outline: none;
  font-size: var(--unnamed-font-size-24);
  letter-spacing: ${({ theme }) => theme.fonts.letterSpacing};

  &::placeholder {
    font-family: ${({ theme }) => theme.fonts.main};
    font-style: var(--unnamed-font-style-normal);
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;

export const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  img {
    width: 49px;
    height: 49px;
  }
`;
