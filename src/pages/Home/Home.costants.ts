import { joinSquad, lead, build, frens, diamond } from '@/components/images';

export const Title = 'HomeEvent';

export const Squad = {
  image: joinSquad,
  text: 'JoinSquad',
  link: 'joinsquad',
};

export const Actions =[
  {
    id: 0,
    image: diamond,
    text: 'Earn',
    link: 'earn',
  },
  {
    id: 1,
    image: frens,
    text: 'Frens',
    link: 'friend',
  },
  {
    id: 2,
    image: build,
    text: 'Build',
    link: 'build',
  },
  {
    id: 3,
    image: lead,
    text: 'Lead',
    link: 'lead'
  }
];

export const MockDatas = {
  totalValue: 1452133545,
  currentValue: 1638,
  multiValue: 2,
  coinLimit: 3000,
  currentLimit: 0,
  fillRate: 20,
  secretCode: 36864100,
};