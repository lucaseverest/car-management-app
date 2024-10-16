import styled from "styled-components";

export const CarCardContainer = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 3px 6px #e5e5e5;
  border-radius: 8px;
  width: 234px;
  height: 267px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 28px;
`;

export const CarCardImageBox = styled.img`
  border-radius: 100%;
  width: 95px;
  height: 95px;
  background: #f6f4f6 0% 0% no-repeat padding-box;
  border: 1px solid #e4e4e4;
  margin-bottom: 22px;
`;

export const CarNameBox = styled.p`
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.grayDark};
  font-weight: ${({ theme }) => theme.fonts.fontWeights.normal};
  font-size: var(--unnamed-font-size-16);
  line-spacing: var(--unnamed-line-spacing-20);
  text-align: center;
  border-top: 1px solid #f0eff0;
  padding-top: 10px;
  width: 169px;
`;

export const CardActions = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  height: 43px;
  width: 100%;
  padding: 14px 27px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0px 0px 8px 8px;
  box-shadow: inset 0px 3px 6px #0000000f;

  &:not(:first-child) {
    border-left: 1px solid #f6f4f6;
  }
`;

export const ActionButtons = styled.span`
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 50%;
  text-align: center;
  gap: 12px;

  &:not(:first-child) {
    border-left: 1px solid #f6f4f6;
  }
`;

export const ActionButtonIcon = styled.img``;

interface ActionButtonTextProps {
  $hovercolor: "red" | "orange";
}

export const ActionButtonText = styled.span<ActionButtonTextProps>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fonts.fontWeights.normal};
  color: ${({ theme }) => theme.colors.grayDark};
  display: flex;
  align-items: center;
  opacity: 0.52;
  
  &:hover {
        color: ${({ $hovercolor, theme }) => ($hovercolor === "orange" ? theme.colors.highlight : theme.colors.error)}}
      }
`;
