import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import Text from 'components/layout/text';

interface FooterProps {
  fullPage?: boolean;
}

interface FooterContainerProps {
  fullPage?: boolean;
}

const FooterContainer = styled.footer<FooterContainerProps>`
  align-items: center;
  bottom: ${({ fullPage }) => fullPage && '6rem'};
  display: flex;
  flex-direction: column;
  left: ${({ fullPage }) => fullPage && '6rem'};
  position: ${({ fullPage }) => fullPage && 'absolute'};
  right: ${({ fullPage }) => fullPage && '6rem'};
`;

const Footer: FC<FooterProps> = ({ fullPage }) => {
  const { t } = useTranslation();
  return (
    <FooterContainer fullPage={fullPage}>
      <Text content={t('footer.rights')} size="1.4rem" />
      <Text dangerouslySetInnerHTML={{ __html: t('footer.credits') }} size="1.2rem" />
    </FooterContainer>
  );
};

export default Footer;
