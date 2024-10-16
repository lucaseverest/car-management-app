import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  .input-wrapper {
    display: flex;
    align-items: center;
    position: relative;
  }

  .first-input {
    margin-bottom: 50px;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 60px;
  padding: 10px 40px 10px 10px;
  font-size: ${({ theme }) => theme.fonts.sizes.large};
  border: 1px solid #b9b9b9;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s ease;
  padding-left: 25px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    font-family: ${({ theme }) => theme.fonts.main};
    font-style: var(--unnamed-font-style-normal);
    color: ${({ theme }) => theme.colors.placeholder};
  }

  &::-webkit-file-upload-button {
    display: none;
  }

  &::-ms-browse {
    display: none;
  }

  &::file-selector-button {
    display: none;
  }
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

export const ButtonWrapper = styled.div`
  position: absolute;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
