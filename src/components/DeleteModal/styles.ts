import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 99;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
`;

export const ModalContainer = styled.div`
  width: 438px;
  height: 434px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 50px 20px 33px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconContainer = styled.div`
  width: 159px;
  height: 159px;
  background: #db25250f 0% 0% no-repeat padding-box;
  border: 6px solid #e4e4e4;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
`;

export const DeleteIcon = styled.img`
  width: 68px;
  height: 68px;
`;

export const ModalTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes.xxl};
  color: ${({ theme }) => theme.colors.error};
  font-weight: ${({ theme }) => theme.fonts.fontWeights.bold};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.main};
  line-spacing: var(--unnamed-line-spacing-40);
  margin-bottom: 13px;
`;

export const ModalText = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fonts.fontWeights.bold};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.main};
  line-spacing: var(--unnamed-line-spacing-15);
  margin-bottom: 28px;
`;

export const ButtonsContainer = styled.div`
  border-top: 1px solid #e4e4e4;
  padding-top: 23px;
  display: flex;
  justify-content: center;
  gap: 17px;
`;
