import { Group } from '@/components/icons';
import { StepProps } from './Profile.types';

export const INITIAL_STATE = {
  profile: 'miner',
  time: 'day',
  step: 0
};

export const PROFILE_STEPS: StepProps[] = [
  {
    id: 0,
    key: 'Bronze',
    icon: <Group />,
    miner: '',
    squad: ''
  },
  {
    id: 1,
    key: 'Silver',
    icon: <Group />,
    miner: '100K',
    squad: '100M'
  },
  {
    id: 2,
    key: 'Gold',
    icon: <Group />,
    miner: '1M',
    squad: '1B'
  },
  {
    id: 3,
    key: 'Platinum',
    icon: <Group />,
    miner: '10M',
    squad: '10B'
  },
  {
    id: 4,
    key: 'Diamond',
    icon: <Group />,
    miner: '30M',
    squad: '100B'
  }
];