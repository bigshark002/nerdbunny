import { type FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import { Box, Image, Typography, Button } from '@/components/common';
import ConnectWalletModal from '@/modals/ConnectWalletModal';
import { background, chest } from '@/components/images';

import { Title, Onboarding, Explore, Actions } from './Earn.constant';
interface ActionItem {
  id: number;
  title: string;
  iconLeft: string;
  size: string;
  bgColor: string;
  text: string;
  iconRight: JSX.Element;
  link: string;
}
interface Item {
  id: number;
  image: string;
  size: string;
  text: string;
  icon: JSX.Element;
  reward: string;
  iconCheck: JSX.Element;
  iconRight: JSX.Element;
}

const RenderItem = ({ item, isBackground }: { item: Item, isBackground: boolean }) => {
  const { t } = useTranslation();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleItemClick = () => {
    if (item.id === 0) {
      setModalOpen(true);
    }
  };

  return (
    <Box
      className='w-[280px] flex items-center justify-between'
      onClick={handleItemClick}
    >
      <Box className='flex items-center gap-3'>
        {item.image && (
          <Box
            className={`w-[33px] h-[33px] p-0 flex items-center justify-center ${isBackground ? 'bg-BluePrimary rounded-[10px]' : ''}`}
          >
            <Image className={`${item.size}`} src={item.image} />
          </Box>
        )}
        <Box className='flex flex-col'>
          <Typography className='font-Montserrat font-extrabold leading-5 text-[12px]' text={t(item.text)} />
          <Box className='flex items-center mb-[6px] gap-1'>
            {item.icon}
            <Typography
              className='font-Montserrat font-extrabold leading-5 text-[14px] text-YellowPrimary'
              text={`+${item.reward}`}
            />
          </Box>
        </Box>
      </Box>
      <Box className='flex gap-4'>
        {item.iconCheck}
        {item.iconRight}
      </Box>
      <ConnectWalletModal open={isModalOpen} onClose={() => setModalOpen(false)} />
    </Box>
  );
};

const Section = (title: string, items: Item[][], bgColor: string, shadowColor: string, iconBackgroundFlag: boolean) => (
  <Box className='flex flex-col mb-[18px]'>
    <Typography
      className='font-Montserrat font-extrabold leading-5 text-[18px] text-stroke-1 text-stroke-BluePrimary mb-2'
      text={title}
    />
    <Box className='w-[341px] pb-1 flex gap-3 overflow-x-auto scrollbar-none'>
      {items.map((group, index) => (
        <Box
          key={index}
          className={`w-[315px] flex ${bgColor} ${shadowColor} border-2 border-white flex-col px-5 py-[6px] rounded-[25px]`}
        >
          {group.map(item => (
            <RenderItem key={item.id} item={item} isBackground={iconBackgroundFlag} />
          ))}
        </Box>
      ))}
    </Box>
  </Box>
);

export const EarnPage: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const firstOnboardingItems = Onboarding.slice(0, 4);
  const secondOnboardingItems = Onboarding.slice(4);
  const firstExploreItems = Explore.slice(0, 5);
  const secondExploreItems = Explore.slice(5);

  return (
    <Box className='flex flex-col w-full bg-cover bg-center h-screen overflow-y-auto overflow-x-hidden' background={background}>
      <Header />
      <Box className='flex flex-col items-center px-4'>
        <Box className='flex flex-col items-center mt-[33px] mb-[15px]'>
          <Image src={chest} />
          <Typography
            className='font-Montserrat font-extrabold leading-5 text-[18px] text-stroke-1 text-stroke-BluePrimary mt-[14px]'
            text={t(Title)}
          />
        </Box>
        {Actions.map((item: ActionItem) => (
          <Box key={item.id} className='w-[338px] flex flex-col gap-2 mb-[23px]'>
            <Typography
              className='font-Montserrat font-extrabold leading-5 text-[18px] text-stroke-1 text-stroke-BluePrimary'
              text={t(item.title)}
            />
            <Button
              className={`h-[45.46px] ${item.bgColor} shadow-${item.bgColor} rounded-[18px] p-3 flex items-center justify-between border-2 border-white`}
              onClick={() => navigate(item.link)}
            >
              <Box className='flex gap-3'>
                <Image className={item.size} src={item.iconLeft} />
                <Typography
                  className='flex justify-center text-[13px] leading-4 items-center font-Montserrat font-bold text-BluePrimary'
                  text={t(item.text)}
                />
              </Box>
              {item.iconRight}
            </Button>
          </Box>
        ))}
        {Section(t('Onboarding'), [firstOnboardingItems, secondOnboardingItems], 'bg-PurpleSecond', 'shadow-PurplePrimary', false)}
        {Section(t('Explore'), [firstExploreItems, secondExploreItems], 'bg-BlueThird', 'shadow-BlueThird', true)}
      </Box>
    </Box>
  );
};