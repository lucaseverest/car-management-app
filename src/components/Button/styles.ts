import styled, { css, DefaultTheme } from "styled-components";

interface ButtonProps {
  size: "primary" | "secondary";
  $variant: "solid" | "outline";
  color: "red" | "orange";
}

const buttonSizes = {
  primary: "167px",
  secondary: "224px",
};

const buttonColors = {
  outline: {
    orange: (theme: DefaultTheme) => theme.colors.highlight,
    red: (theme: DefaultTheme) => theme.colors.error,
  },
  solid: {
    orange: (theme: DefaultTheme) => theme.colors.highlight,
    red: (theme: DefaultTheme) => theme.colors.error,
    default: (theme: DefaultTheme) => theme.colors.primary,
  },
};

export const ButtonContainer = styled.button<ButtonProps>`
  width: ${({ size }) => buttonSizes[size]};
  height: 48px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fonts.sizes.large};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fonts.fontWeights.bold};
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    border 0.3s ease;
  border-radius: 8px;
  box-shadow: 0px 3px 6px #92207242;

  ${({ $variant, color, theme }) => {
    const isOutline = $variant === "outline";
    const buttonColor = isOutline
      ? buttonColors.outline[color](theme)
      : buttonColors.solid[color]
        ? buttonColors.solid[color](theme)
        : buttonColors.solid.default(theme);

    return css`
      background-color: ${isOutline ? "white" : buttonColor};
      border: ${isOutline ? `1px solid ${buttonColor}` : "none"};
      color: ${isOutline ? buttonColor : "white"};

      &:hover {
        background-color: ${isOutline ? buttonColor : "none"};
        transform: matrix(0.95, 0, 0, 0.95, 0, 0);
        color: ${isOutline ? "white" : "white"};
      }
    `;
  }}
`;
