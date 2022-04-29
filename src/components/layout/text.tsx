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
  text-transform: ${({ uppercase }) => uppercase && 'uppercase'};
  width: ${({ width }) => width && width};

  a {
    color: ${theme.colors.primary};
    position: relative;

    &:before {
      content: '';
      width: 0;
      height: 0.1rem;
      background-color: ${theme.colors.primary};
      position: absolute;
      bottom: -0.1rem;
      left: 0;
      transition: width 0.2s ease-in-out;
    }

    &:hover {
      &:before {
        width: 100%;
      }
    }
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
