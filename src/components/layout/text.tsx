import { FC } from 'react';
import styled from 'styled-components';
import theme from 'theme';

interface TextProps {
  content?: string;
  dangerouslySetInnerHTML?: { __html: string };
  type?: React.ElementType;
  color?: string;
  size?: string;
  fontFamily?: string;
  weight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  uppercase?: boolean;
  lineHeight?: string;
  marginBottom?: string;
  marginTop?: string;
  marginLeft?: string;
  marginRight?: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
  onClick?: () => void;
  className?: string;
  underline?: boolean;
  hoverColor?: string;
}

interface TextContainerProps {
  color?: string;
  size?: string;
  fontFamily?: string;
  weight?: string;
  uppercase?: boolean;
  lineHeight?: string;
  marginBottom?: string;
  marginTop?: string;
  marginLeft?: string;
  marginRight?: string;
  width?: string;
  align?: string;
  onClick?: () => void;
  underline?: boolean;
  hoverColor?: string;
}

const TextContainer = styled.p<TextContainerProps>`
  color: ${({ color }) => (color ? color : theme.colors.black)};
  cursor: ${({ onClick }) => onClick && 'pointer'};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : theme.fonts.primary)};
  font-size: ${({ size }) => (size ? size : '1.6rem')};
  font-weight: ${({ weight }) => weight && weight};
  line-height: ${({ lineHeight }) => lineHeight && lineHeight};
  margin-bottom: ${({ marginBottom }) => marginBottom && marginBottom};
  margin-left: ${({ marginLeft }) => marginLeft && marginLeft};
  margin-right: ${({ marginRight }) => marginRight && marginRight};
  margin-top: ${({ marginTop }) => marginTop && marginTop};
  text-align: ${({ align }) => align && align};
  text-decoration: ${({ underline }) => underline && 'underline'};
  text-transform: ${({ uppercase }) => uppercase && 'uppercase'};
  transition: ${({ hoverColor }) => hoverColor && 'color 0.2s ease-in-out'};
  width: ${({ width }) => width && width};

  &:hover {
    color: ${({ hoverColor }) => hoverColor && hoverColor};
  }

  a {
    color: ${theme.colors.primary};
    position: relative;

    &:before {
      background-color: ${theme.colors.primary};
      bottom: -0.1rem;
      content: '';
      height: 0.1rem;
      left: 0;
      position: absolute;
      transition: width 0.2s ease-in-out;
      width: 0;
    }

    &:hover {
      &:before {
        width: 100%;
      }
    }
  }

  .primary {
    color: ${theme.colors.primary};
  }
  .secondary {
    color: ${theme.colors.secondary};
  }
  .tertiary {
    color: ${theme.colors.tertiary};
  }
  .quaternary {
    color: ${theme.colors.quaternary};
  }
`;

const Text: FC<TextProps> = ({
  content,
  dangerouslySetInnerHTML,
  type,
  color,
  size,
  fontFamily,
  weight,
  uppercase,
  lineHeight,
  marginBottom,
  marginTop,
  marginLeft,
  marginRight,
  width,
  children,
  align,
  onClick,
  className,
  underline,
  hoverColor,
}) => {
  return (
    <TextContainer
      color={color}
      size={size}
      fontFamily={fontFamily}
      weight={weight}
      uppercase={uppercase}
      lineHeight={lineHeight}
      marginBottom={marginBottom}
      marginTop={marginTop}
      marginLeft={marginLeft}
      marginRight={marginRight}
      width={width}
      align={align}
      as={type || dangerouslySetInnerHTML ? 'div' : type}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      onClick={onClick}
      className={className}
      underline={underline}
      hoverColor={hoverColor}
    >
      {content && (
        <>
          {content}
          {children}
        </>
      )}
    </TextContainer>
  );
};

export default Text;
