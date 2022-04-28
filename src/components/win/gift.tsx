import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { keyframes } from 'styled-components';
import theme from 'theme';

import Flex from 'components/layout/flex';
import Modal from 'components/layout/modal';
import Text from 'components/layout/text';

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

const GiftImage = styled.img`
  animation: ${shake} 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  animation-delay: 1s;
  cursor: pointer;
  height: 10rem;
  margin-top: 3rem;
  width: 10rem;
`;

const QRCodeImage = styled.img`
  height: 20rem;
  width: 20rem;
`;

const Gift: FC = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <GiftImage
        src="/assets/images/gift.png"
        alt="Cadeau"
        onClick={() => {
          setIsModalOpen(true);
        }}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <Flex direction="column" align="center">
          <Text
            content={t('quiz.gift.title')}
            fontFamily={theme.fonts.secondary}
            size="2.2rem"
            weight="700"
            marginBottom="3rem"
          />

          <QRCodeImage src="/assets/images/qr-code.png" alt="QR code" />
          <Text
            content={t('quiz.gift.qr_code')}
            fontFamily={theme.fonts.secondary}
            size="2.2rem"
            weight="700"
            marginTop="2rem"
          />
        </Flex>
      </Modal>
    </>
  );
};

export default Gift;
