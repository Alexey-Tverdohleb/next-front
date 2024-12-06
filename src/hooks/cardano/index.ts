import { CardanoContext } from '@/context/cardano';
import { useContext } from 'react';

export default function useCardano() {
  const cardanoContext = useContext(CardanoContext);

  return cardanoContext;
}
