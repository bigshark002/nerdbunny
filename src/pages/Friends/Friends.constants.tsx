import { secredCodeGift, bunnyGreen, telePremium, frens, joinSquadThree } from '@/components/images';

export const TotalRewards = 'TotalRewards';
export const TotalRewardsNumber = '0';
export const Title = 'FriendTitle';

export const Contents = [
  {
    id: 0,
    image: secredCodeGift,
    size: 'w-[23px] h-[23.27px]',
    text: 'InviteFriendGift',
  },
  {
    id: 1,
    image: bunnyGreen,
    size: 'w-[25px] h-[25px]',
    text: 'InviteFriendInvite',
  },
  {
    id: 2,
    image: telePremium,
    size: 'w-[25px] h-[25px]',
    text: 'InviteFriendTelegram',
  },
];

export const Actions = [
  {
    id: 0,
    iconLeft: frens,
    size:'w-[18px] h-[24px]',
    bgColor: 'bg-PurpleSecond shadow-PurpleSecond',
    text: 'InviteOneFriend',
    class: 'flex gap-4 pl-2',
    link: '',
  },
  {
    id: 1,
    iconLeft: joinSquadThree,
    size:'w-[29px] h-[25px]',
    bgColor: 'bg-PurpleSecond shadow-PurpleSecond',
    text: 'InviteThreeFriend',
    class: 'flex gap-3',
    link: '',
  }
];