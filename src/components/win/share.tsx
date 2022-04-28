import { Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import theme from 'theme';

import Button from 'components/layout/button';
import Flex from 'components/layout/flex';
import Text from 'components/layout/text';

interface ShareProps {
  score: number;
  setShowShare: Dispatch<SetStateAction<boolean>>;
}

const Share: FC<ShareProps> = ({ score, setShowShare }) => {
  const { t } = useTranslation();

  const handleShareClick = () => {
    const twitterUrl = 'https://twitter.com/intent/tweet';
    const text = t('share.text', {
      score: score * 10,
    });
    const hashtags = t('share.hashtags');
    const url = process.env.REACT_APP_WEBSITE_URL;
    const urlToShare = `${twitterUrl}?text=${text}&hashtags=${hashtags}&url=${url}`;

    const urlEncoded = encodeURI(urlToShare);
    window.open(urlEncoded, '_blank');
  };

  return (
    <Flex direction="column" align="center" marginTop="2rem">
      <Text content={t('quiz.result.share')} size="1.8rem" weight="500" />

      <Flex marginTop="2rem">
        <Button content={t('button.share')} onClick={handleShareClick} />

        <Button
          content={t('quiz.result.challenge')}
          onClick={() => setShowShare(true)}
          backgroundColor={theme.colors.secondary}
          marginLeft="3rem"
        />
      </Flex>
    </Flex>
  );
};

export default Share;
