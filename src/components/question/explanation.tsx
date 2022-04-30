import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import Flex from 'components/layout/flex';
import InlineButton from 'components/layout/inlineButton';
import Text from 'components/layout/text';

import { useViewport } from 'hooks/useViewport';

interface ExplanationProps {
  explanation: string;
  onClick: () => void;
}

const Explanation: FC<ExplanationProps> = ({ explanation, onClick }) => {
  const { t } = useTranslation();
  const { isMobile } = useViewport();

  return (
    <Flex align="center" direction="column" marginTop={isMobile ? '3rem' : '5rem'}>
      <Text
        dangerouslySetInnerHTML={{ __html: explanation }}
        align="center"
        size="1.8rem"
        lineHeight={isMobile ? '1.5em' : '2em'}
        width={isMobile ? '100%' : '80%'}
        marginBottom="5rem"
      />

      <InlineButton content={t('button.next')} onClick={onClick} arrowPosition="right" />
    </Flex>
  );
};

export default Explanation;
