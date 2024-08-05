import { type FC, useState } from 'react';
import Header from '@/components/Header';
import { Box, Typography, Image, Button } from '@/components/common';
import InviteModal from '@/modals/InviteModal';
import ShareInviteModal from '@/modals/ShareInviteModal';

import Background from '@/assets/images/bg_welcome.png';
import Icon from '@/assets/images/icon.png';
import { Group, Chevron } from '@/components/icons';

export const FriendsPage: FC = () => {

  const [modal, setModal] = useState('');

  return (
    <Box
      className='flex flex-col w-full bg-cover bg-center h-screen'
      background={Background}
    >
      <Header />
      <Box className='flex flex-col items-center px-4 gap-4'>
        <Typography text='Total Rewards' />
        <Typography text='0' />
        <Image src={Icon} />
        <Typography text='NERD BUNNY FRIENDS' />
        <Button 
          className='w-[318px] h-[48px] mx-auto mt-[40px] flex items-center justify-center bg-[#F7FB8B] rounded-lg text-black'
          content='SEND TO INVITE' 
          onClick={() => setModal('invite')}>
        </Button>
      </Box>
      <Box className='w-[340px] flex flex-col p-4 mx-auto rounded-lg gap-6 bg-[#C58BFB] mt-4'>
        <Typography className='text-center' text='INVITE FRENS TO GET BONUSES' />
        <Box className='flex gap-4'>
          <Image className='w-[24px] h-[24px]' src={Icon}/>
          <Typography text='Send gift to invite friend' />        
        </Box>
        <Box className='flex gap-4'>
          <Image className='w-[24px] h-[24px]' src={Icon} />
          <Typography text='You and your invite both get 100k and random bonus' />
        </Box>
        <Box className='flex gap-4'>
          <Image className='w-[24px] h-[24px]' src={Icon} />
          <Typography text='Invite Telegram Premium both get 500k and random bonus' />
        </Box>
      </Box>
      <Box className='mt-4 w-[340px] flex flex-col mx-auto gap-4'>
        <Typography text='EXTRA BONUS' />
        <Box>
          <Button className='w-[342px] h-[56px] bg-[#C58BFB] rounded-[21px] p-3 flex items-center gap-2 mt-2' onClick={() => setModal('share')}>
            <Group />
            <Typography text='INVITE 1 FRIEND' />
            <Chevron />
          </Button>
          <Button className='w-[342px] h-[56px] bg-[#C58BFB] rounded-[21px] p-3 flex items-center gap-2 mt-2' onClick={() => setModal('share')}>
            <Group />
            <Typography text='INVITE 3 FRIENDS' />
            <Chevron />
          </Button>
          <Button className='w-[342px] h-[56px] bg-[#C58BFB] rounded-[21px] p-3 flex items-center gap-2 mt-2' onClick={() => setModal('share')}>
            <Group />
            <Typography text='INVITE 10 FRIENDS' />
            <Chevron />
          </Button>        
        </Box>
      </Box>

      <InviteModal open={modal === 'invite'} onClose={() => setModal('')} />
      <ShareInviteModal open={modal === 'share'} onClose={() => setModal('')} />
    </Box>
  )
}