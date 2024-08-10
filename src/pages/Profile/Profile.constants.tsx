import { rankBronze, rankSilver, rankGold, rankPlatinum, rankDiamond } from '@/components/images';
import { StepProps } from './Profile.types';

export const InitialState = {
  profile: 'miner',
  time: 'day',
  step: 0
};

export const ProfileSteps: StepProps[] = [
  {
    id: 0,
    key: 'Bronze',
    image: rankBronze,
    imageSize: 'w-[72px] h-[87px]',
    miner: '',
    squad: ''
  },
  {
    id: 1,
    key: 'Silver',
    image:  rankSilver,
    imageSize: 'w-[72px] h-[87px]',
    miner: '100K',
    squad: '100M'
  },
  {
    id: 2,
    key: 'Gold',
    image:  rankGold,
    imageSize: 'w-[72px] h-[87px]',
    miner: '1M',
    squad: '1B'
  },
  {
    id: 3,
    key: 'Platinum',
    image:  rankPlatinum,
    imageSize: 'w-[72px] h-[85.73px]',
    miner: '10M',
    squad: '10B'
  },
  {
    id: 4,
    key: 'Diamond',
    image:  rankDiamond,
    imageSize: 'w-[72px] h-[85.73px]',
    miner: '30M',
    squad: '100B'
  }
];