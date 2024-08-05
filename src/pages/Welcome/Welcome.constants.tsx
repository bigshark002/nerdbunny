import { coin, joinSquad, upgradeBoost } from '@/components/images';
import { Telegram, X, Chat } from '@/components/icons';

export const Title = 'WELCOME TO NERDBUNNY';
export const TilteDescription = 'Yes! Join a squad to swipe and earn together. Maximize profits and climb the rankings!';

export const Contents = [
  {
    id: 0,
    image: coin,
    size: 'w-[20px] h-[22.46px]',
    text: 'Swipe the screen to collect coins, get surprise chests too',
  },
  {
    id: 1,
    image: joinSquad,
    size: 'w-[22px] h-[23.21px]',
    text: 'Invite friends to get even more coins together',    
  },
  {
    id: 2,
    image: upgradeBoost,
    size: 'w-18px h-[33.12px]',
    text: 'Upgrade various boosters to Earn coins',
  }
];

export const Actions = [
  {
    id: 1,
    icon: <X width={20} height={19.62} />,
    bgColor: 'PinkPrimary',
    text: 'x',
    link: '',
  },
  {
    id: 0,
    icon: <Telegram width={22} height={21.79} />,
    bgColor: 'PurpleSecond',
    text: 'CHANNEL',
    link: '',
  },
  
  {
    id: 2,
    icon: <Chat width={25} height={22} />,
    bgColor: 'GreenPrimary',
    text: 'CHAT 26',
    link: '',
  },
  {
    id: 3,
    icon: <Chat width={25} height={22} />,
    bgColor: 'GreenPrimary',
    text: 'CHAT 26',
    link: '',
  }
];