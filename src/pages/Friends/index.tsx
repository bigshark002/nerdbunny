import { type FC } from 'react';
import Header from '@/components/Header';
import { Box, Typography, Image, Button } from '@/components/common';
// import InviteModal from '@/modals/InviteModal';
// import ShareInviteModal from '@/modals/ShareInviteModal';
import { background } from '@/components/images';

import { GiftBlue } from '@/components/icons';

import { TotalRewards, TotalRewardsNumber, Contents, Actions, Title } from './Friends.constants';

export const FriendsPage: FC = () => {

  // const [modal, setModal] = useState('');

  return (
    <Box
      className='flex flex-col w-full bg-cover bg-center h-screen overflow-y-auto'
      background={background}
    >
      <Header />
      <Box className='flex flex-col items-center px-4 gap-4 mt-[26px]'>
        <Typography
          className='font-Rowdies font-bold text-[16px] text-YellowSecond tracking-[.5px] 
          text-stroke-1 text-stroke-Black'
          text={TotalRewards}
        />
        <Typography
          className='font-Montserrat font-extrabold text-[30px] text-YellowPrimary text-stroke-2 
          text-stroke-BluePrimary'
          text={TotalRewardsNumber} />

        <GiftBlue width={70} height={71} />
        <Typography
          className='font-Montserrat font-extrabold text-[18px] text-white text-stroke-1 
          text-stroke-BluePrimary my-2'
          text={Title} />
        <Button
          className='w-[306px] h-[45.6px] mx-auto flex items-center justify-center bg-YellowSecond
          shadow-YellowSecond rounded-[20px] text-white mb-[37px] font-Montserrat text-[18px] text-stroke-1
          tracking-[.5px] text-stroke-PurpleSecond border-2 border-White'
          content='SEND TO INVITE'
        // onClick={() => setModal('invite')}
        >
        </Button>
      </Box>
      <Box className='w-[315px] flex flex-col p-4 mx-auto gap-3'>
        <Typography
          className='text-center mb-[11px] font-Montserrat font-extrabold text-[14px]
          tracking-[.5px] text-stroke-1 text-stroke-BluePrimary leading-5'
          text='INVITE FRENS TO GET BONUSES' />
        {Contents.map(item => (
          <Box
            key={item.id}
            className='flex items-center gap-5'>
            <Image className={item.size} src={item.image} />
            <Typography
              className='font-Montserrat font-extrabold leading-4 tracking-[.5px] text-[11px]'
              text={item.text} />
          </Box>
        ))}
      </Box>
      <Box className='mt-[31px] w-[340px] flex flex-col mx-auto gap-[6px]'>
        <Typography
          className='text-stroke-1 text-stroke-BluePrimary font-Montserrat font-extrabold text-[18px]'
          text='EXTRA BONUS' />
        {Actions.map(item => (
          <Button
            key={item.id}
            className='w-[338px] h-[52.53px] bg-GreenPrimary rounded-[20px] shadow-GreenPrimary 
            border-2 border-white p-3 flex items-center gap-2 mt-2 justify-between'
          // onClick={() => setModal('share')}
          >
            <Box className='flex gap-4'>
              <Image className='w-[22px] h-[25px]' src={item.iconLeft} />
              <Typography text={item.text} />
            </Box>
            {item.iconRight}
          </Button>
        ))}
      </Box>

      {/* <InviteModal open={modal === 'invite'} onClose={() => setModal('')} /> */}
      {/* <ShareInviteModal open={modal === 'share'} onClose={() => setModal('')} /> */}
    </Box>
  )
}