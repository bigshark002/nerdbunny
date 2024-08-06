import { Next } from '@/components/icons';
import { secredCodeGift, bunnyGreen, telePremium, frens, joinSquadThree } from '@/components/images';

export const TotalRewards = 'Total Rewards';
export const TotalRewardsNumber = '0';
export const Title = 'NerdBunny Friends';

export const Contents = [
  {
    id: 0,
    image: secredCodeGift,
    size: 'w-[23px] h-[23.27px]',
    text: 'Send gift to invite friend',
  },
  {
    id: 1,
    image: bunnyGreen,
    size: 'w-[25px] h-[25px]',
    text: 'You and your invite both get 100K and random bonus',
  },
  {
    id: 2,
    image: telePremium,
    size: 'w-[25px] h-[25px]',
    text: 'Invite Telegram Premium both get 500K and random bonus',
  },
];

export const Actions = [
  {
    id: 0,
    iconLeft: frens,
    bgColor: 'bg-PurpleSecond shadow-PurpleSecond',
    text: 'Invite 1 Friends',
    iconRight: <Next width={8} height={11.82} />,
    link: '',
  },
  {
    id: 1,
    iconLeft: joinSquadThree,
    bgColor: 'bg-PurpleSecond shadow-PurpleSecond',
    text: 'Invite 3 Friends',
    iconRight: <Next width={8} height={11.82} />,
    link: '',
  }
];