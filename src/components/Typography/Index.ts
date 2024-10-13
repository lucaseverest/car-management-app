import styled from "styled-components";

export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fonts.sizes.hero};
  line-height: ${({ theme }) => theme.fonts.lineHeights.hero};
  color: ${({ theme }) => theme.colors.primary};
`;

export const TitleH1 = styled.h1`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fonts.sizes.xxl};
  line-height: ${({ theme }) => theme.fonts.lineHeights.xl};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const TitleH2 = styled.h2`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fonts.sizes.large};
  line-height: ${({ theme }) => theme.fonts.lineHeights.large};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
`;

export const TitleH3 = styled.h3`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  line-height: ${({ theme }) => theme.fonts.lineHeights.large};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
`;

export const LabelPrincipal = styled.label`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  line-height: ${({ theme }) => theme.fonts.lineHeights.medium};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
`;

export const TxtTableHeader = styled.span`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  line-height: ${({ theme }) => theme.fonts.lineHeights.small};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-transform: uppercase;
`;

export const LinkSecundario = styled.a`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  line-height: ${({ theme }) => theme.fonts.lineHeights.medium};
  color: ${({ theme }) => theme.colors.secundaria};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-decoration: underline;
`;

export const LinkDestaque = styled.a`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  line-height: ${({ theme }) => theme.fonts.lineHeights.medium};
  color: ${({ theme }) => theme.colors.destaque};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-decoration: underline;
`;

export const BtLabelBranco = styled.button`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  line-height: ${({ theme }) => theme.fonts.lineHeights.large};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
`;

export const BtLabel = styled.button`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  line-height: ${({ theme }) => theme.fonts.lineHeights.large};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
`;
