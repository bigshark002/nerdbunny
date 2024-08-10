import { Telegram, X } from '@/components/icons';
import { secredCodeGift, bunnyGreen, telePremium } from '@/components/images';

export const ExpireTime = '06:55:07';
export const ExpireDescription = 'ExpireIn';
export const Title = 'SecretCode';
export const InputDescription = 'SecretCodeDescription';

export const Contents = [
  {
    id: 0,
    image: secredCodeGift,
    size: 'w-[23px] h-[23.27px]',
    text: 'SecretCodeChannel',
  },
  {
    id: 1,
    image: bunnyGreen,
    size: 'w-[25px] h-[25px]',
    text: 'SecretCodeBonus',
  },
  {
    id: 2,
    image: telePremium,
    size: 'w-[25px] h-[25px]',
    text: 'SecretCodeTelegram',
  },
];

export const Actions = [
  {
    id: 0,
    bgColor: 'bg-PinkPrimary shadow-PinkPrimary',
    icon: <Telegram width={25} height={25} />,
    text: 'Follow',
    link: '',
  },
  {
    id: 1,
    bgColor: 'bg-BlueThird shadow-BlueThird',
    icon: <X width={17} height={17} />,
    text: 'Follow',
    link: '',
  }
];