import { type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import { Box, Typography, Image, Button } from '@/components/common';
import InviteModal from '@/modals/InviteModal';
import ShareInviteModal from '@/modals/ShareInviteModal';
import { background } from '@/components/images';
import { Next, GiftBlue } from '@/components/icons';

import { TotalRewards, TotalRewardsNumber, Contents, Actions, Title } from './Friends.constants';

export const FriendsPage: FC = () => {

  const [modal, setModal] = useState('');
  const { t } = useTranslation();

  return (
    <Box
      className='flex flex-col w-full bg-cover bg-center h-screen overflow-y-auto overflow-x-hidden'
      background={background}
    >
      <Header />
      <Box className='flex flex-col items-center px-4 gap-4 mt-[26px]'>
        <Typography
          className='font-Rowdies font-bold text-[16px] text-YellowSecond tracking-[.5px] 
          text-stroke-1 text-stroke-Black'
          text={t(TotalRewards)}
        />
        <Typography
          className='font-Montserrat font-extrabold text-[30px] text-YellowPrimary text-stroke-2 
          text-stroke-BluePrimary'
          text={TotalRewardsNumber}
        />

        <GiftBlue width={70} height={71} />
        <Typography
          className='font-Montserrat font-extrabold text-[18px] text-white text-stroke-1 
          text-stroke-BluePrimary my-2'
          text={t(Title)}
        />
        <Button
          className='w-[306px] h-[45.6px] mx-auto flex items-center justify-center bg-YellowSecond
          shadow-YellowSecond rounded-[20px] text-white mb-[37px] font-Montserrat text-[18px] font-extrabold text-stroke-1
          tracking-[.5px] text-stroke-PurpleSecond border-2 border-White'
          content={t('SendToInvite')}
          onClick={() => setModal('invite')}
        >
        </Button>
      </Box>
      <Box className='w-[315px] flex flex-col p-4 mx-auto gap-3'>
        <Typography
          className='text-center mb-[11px] font-Montserrat font-extrabold text-[14px]
          tracking-[.5px] text-stroke-1 text-stroke-BluePrimary leading-5'
          text={t('InviteFriendTitle')}
        />
        {Contents.map(item => (
          <Box
            key={item.id}
            className='flex items-center gap-5'>
            <Image className={item.size} src={item.image} />
            <Typography
              className='font-Montserrat font-extrabold leading-4 tracking-[.5px] text-[11px]'
              text={t(item.text)}
            />
          </Box>
        ))}
      </Box>
      <Box className='mt-[31px] flex flex-col mx-auto gap-[6px] mb-7'>
        <Typography
          className='text-stroke-1 text-stroke-BluePrimary font-Montserrat font-extrabold text-[18px]'
          text={t('ExtraBonus')}
        />
        {Actions.map(item => (
          <Button
            key={item.id}
            className='w-[338px] h-[52.53px] bg-GreenPrimary rounded-[20px] shadow-GreenPrimary 
            border-2 border-white py-3 px-8 flex items-center gap-2 mt-2 justify-between'
            onClick={() => setModal('share')}
          >
            <Box className={item.class}>
              <Image className={item.size} src={item.iconLeft} />
              <Typography
                className='text-[16px] font-extrabold'
                text={t(item.text)}
              />
            </Box>
            <Next width={20} height={20} />
          </Button>
        ))}
      </Box>

      <InviteModal open={modal === 'invite'} onClose={() => setModal('')} />
      <ShareInviteModal open={modal === 'share'} onClose={() => setModal('')} peopleToInvite={1} />
    </Box>
  );
};