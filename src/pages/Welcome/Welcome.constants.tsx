import { coin, joinSquad, upgradeBoost } from '@/components/images';
import { Telegram, X, Chat } from '@/components/icons';

export const Title = 'Welcome';
export const TilteDescription = 'WelcomeDescription';

export const Contents = [
  {
    id: 0,
    image: coin,
    size: 'w-[20px] h-[22.46px]',
    text: 'PlayCoin',
  },
  {
    id: 1,
    image: joinSquad,
    size: 'w-[22px] h-[23.21px]',
    text: 'PlayFrens',
  },
  {
    id: 2,
    image: upgradeBoost,
    size: 'w-18px h-[33.12px]',
    text: 'PlayBoost',
  }
];

export const Actions = [  
  {
    id: 0,
    icon: <Telegram width={22} height={21.79} />,
    bgColor: 'bg-PurpleSecond shadow-PurpleSecond',
    text: 'Channel',
    link: '',
  },
  {
    id: 1,
    icon: <X width={20} height={19.62} />,
    bgColor: 'bg-PinkPrimary shadow-PinkPrimary',
    text: 'X',
    link: '',
  },
  {
    id: 2,
    icon: <Chat width={25} height={22} />,
    bgColor: 'bg-GreenPrimary shadow-GreenPrimary',
    text: 'Chat',
    link: '',
  },
  {
    id: 3,
    icon: <Chat width={25} height={22} />,
    bgColor: 'bg-GreenPrimary shadow-GreenPrimary',
    text: 'Chat',
    link: '',
  }
];