import React, { InputHTMLAttributes, LegacyRef, ReactNode } from "react";
import {
  InputContainer,
  StyledInput,
  ButtonWrapper,
  InputLabel,
} from "./styles";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  button?: ReactNode;
  inputRef?: LegacyRef<HTMLInputElement> | undefined;
  children?: ReactNode;
}

const Input: React.FC<IInputProps> = ({
  label,
  button,
  inputRef,
  children,
  ...rest
}) => {
  return (
    <InputContainer>
      {label && <InputLabel>{label}</InputLabel>}
      <div className="input-wrapper">
        <StyledInput ref={inputRef} {...rest}>
          {children}
        </StyledInput>
        {button && <ButtonWrapper>{button}</ButtonWrapper>}
      </div>
    </InputContainer>
  );
};

export default Input;
