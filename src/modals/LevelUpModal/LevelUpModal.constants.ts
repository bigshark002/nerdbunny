import { piggyBank, coin1, bolt, pacman } from '@/components/images';

export const Contents = {
  value: {
    image: piggyBank,
    imageSize: 'w-[78px] h-[80px]',
    title: 'BoosterMultiTitle',
    description: ['BoosterMultiDescription'],  
  },
  limit: {
    image: coin1,
    imageSize: 'w-[65px] h-[73px]',
    title: 'BoosterLimitTitle',
    description: ['BoosterLimitDescription'],    
  },
  rate: {
    image: bolt,
    imageSize: 'w-[55px] h-[80px]',
    title: 'BoosterRateTitle',
    description: ['BoosterRateDescription'],
  },
  pack: {
    image: pacman,
    imageSize: 'w-[114px] h-[70px]',
    title: 'BoosterPackTitle',
    description: [
      'BoosterPackDescription',
      'BoosterPackOne',
      'BoosterPackTwo',
      'BoosterPackThree',
      'BoosterPackFour',
      'BoosterPackFive'
    ],
  }
};