import { ReactNode } from "react";
import { ButtonContainer } from "./styles";
import { useCar } from "../../hooks/useCar";
import { ClipLoader } from "react-spinners";

interface IButtonProps {
  size: "primary" | "secondary";
  variant: "solid" | "outline";
  color: "red" | "orange";
  children: ReactNode;
  [key: string]: unknown;
}

const Button: React.FC<IButtonProps> = ({
  color,
  size,
  variant,
  children,
  ...rest
}) => {
  const { isHomepageLoading } = useCar();

  const clipLoaderColors: { [key: string]: { [key: string]: string } } = {
    orange: {
      solid: "#FFFFFF",
      outline: "#E76316",
    },
    red: {
      solid: "#DB2525",
      outline: "#C71616",
    },
  };

  const clipLoaderColor = clipLoaderColors[color]?.[variant] || "#FFFFFF";

  return (
    <ButtonContainer color={color} size={size} $variant={variant} {...rest}>
      {isHomepageLoading && size !== "secondary" ? (
        <ClipLoader size={12} color={clipLoaderColor} />
      ) : (
        children
      )}
    </ButtonContainer>
  );
};

export default Button;
