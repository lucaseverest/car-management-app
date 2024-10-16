import styled from "styled-components";

export const DrawerContainer = styled.form`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 642px;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 100;
  display: flex;
  flex-direction: column;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  padding: 45px 34px;
  transition: transform 0.3s ease-in-out;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 99;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
`;

export const CreateCardTitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  height: 46px;
  align-items: end;
  margin-bottom: -15px;
`;

export const CreateCardIconBox = styled.img`
  height: 46px;
  width: 46px;
`;

export const CreateCardDivider = styled.div`
  height: 1px;
  background-color: #d4d4d4;
  width: 100%;
  margin: 45px 0;
`;

export const CreateCardButtonBox = styled.div`
  text-align: right;
`;

export const UploadInputWrapper = styled.div`
  width: 100%;
  height: 60px;
  padding: 10px 40px 10px 10px;
  font-size: ${({ theme }) => theme.fonts.sizes.large};
  border: 1px solid #b9b9b9;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s ease;
  padding-left: 25px;
`;

export const InputLabel = styled.label`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 14px;
  color: var(---cor-texto);
  line-spacing: var(--unnamed-line-spacing-18);
  font-weight: ${({ theme }) => theme.fonts.fontWeights.bold};
  cursor: default;
  text-align: start;
  margin-bottom: 12px;
`;
