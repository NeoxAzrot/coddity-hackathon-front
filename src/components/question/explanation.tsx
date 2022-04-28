import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import Flex from 'components/layout/flex';
import InlineButton from 'components/layout/inlineButton';
import Text from 'components/layout/text';

interface ExplanationProps {
  explanation: string;
  onClick: () => void;
}

const Explanation: FC<ExplanationProps> = ({ explanation, onClick }) => {
  const { t } = useTranslation();

  return (
    <Flex align="center" direction="column" marginTop="5rem">
      <Text
        dangerouslySetInnerHTML={{ __html: explanation }}
        align="center"
        size="1.8rem"
        lineHeight="2em"
        width="80%"
        marginBottom="5rem"
      />

      <InlineButton content={t('button.next')} onClick={onClick} arrowPosition="right" />
    </Flex>
  );
};

export default Explanation;
