import { FC, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import Text from 'components/layout/text';

interface EmojiToShowProps {
  emoji: string;
  position: string;
  delay: number;
}

interface EmojiTextProps {
  position: string;
  delay: number;
}

const fromToptoBottom = keyframes`
  0% {
    transform: translateY(0)
  }
  100% {
    transform: translateY(calc(100vh + 5rem))
  }
`;

const EmojiContainer = styled.div`
  height: 100vh;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: -10;
`;

const EmojiText = styled(Text)<EmojiTextProps>`
  animation: ${fromToptoBottom} 5s linear infinite;
  animation-delay: ${({ delay }) => delay}s;
  left: ${({ position }) => position};
  position: absolute;
  top: -5rem;
  user-select: none;
`;

const Emoji: FC = () => {
  const [emojisToShow, setEmojisToShow] = useState<EmojiToShowProps[]>([]);

  const MAX_EMOJI = 50;

  useEffect(() => {
    const emojis = ['🥳', '🎉', '✨'];
    const newEmojisToShow: EmojiToShowProps[] = [];

    for (let i = 0; i < MAX_EMOJI; i++) {
      const emoji = emojis[Math.floor(Math.random() * emojis.length)];
      const position = `${Math.floor(Math.random() * 100)}vw`;
      const delay = Math.floor(Math.random() * 10);

      newEmojisToShow.push({ emoji, position, delay });
    }

    setEmojisToShow(newEmojisToShow);
  }, []);

  return (
    <EmojiContainer>
      {emojisToShow.map((emojiToShow, index) => {
        const { emoji, position, delay } = emojiToShow;
        return (
          <EmojiText
            key={`${emoji}-${index}`}
            content={emoji}
            position={position}
            delay={delay}
            size="4rem"
          />
        );
      })}
    </EmojiContainer>
  );
};

export default Emoji;
