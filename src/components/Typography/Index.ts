import styled from "styled-components";

export const TitleH1 = styled.h1`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fonts.sizes.xxl};
  line-height: ${({ theme }) => theme.fonts.lineHeights.xl};
  color: ${({ theme }) => theme.colors.primary};
  font-style: var(--unnamed-font-style-normal);
  line-spacing: var(--unnamed-line-spacing-40);
  font-weight: ${({ theme }) => theme.fonts.fontWeights.normal};
`;

export const TitleH1Bold = styled.h1`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fonts.sizes.xxl};
  line-height: ${({ theme }) => theme.fonts.lineHeights.xl};
  color: ${({ theme }) => theme.colors.primary};
  font-style: var(--unnamed-font-style-normal);
  line-spacing: var(--unnamed-line-spacing-40);
  font-weight: ${({ theme }) => theme.fonts.fontWeights.bold};
`;
