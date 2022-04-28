import { FC } from 'react';
import styled from 'styled-components';

interface GiftProps {
  onClick: () => void;
}

const Image = styled.img`
  height: 10rem;
  margin-top: 3rem;
  width: 10rem;
`;

const Gift: FC<GiftProps> = ({ onClick }) => {
  return <Image src="/assets/images/gift.png" alt="Cadeau" onClick={onClick} />;
};

export default Gift;
