import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Box, Image, Typography, Button } from '@/components/common';
import { Group, Chevron } from '@/components/icons';

import Icon from '@/assets/images/icon.png';
import Background from '@/assets/images/bg_welcome.png';

export const EarnPage: FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      className='flex flex-col w-full bg-cover bg-center h-screen'
      background={Background}
    >
      <Header />
      <Box className='flex flex-col items-center px-4 gap-4'>
        <Box className='w-[318px] flex flex-col items-center gap-4'>
          <Image src={Icon} />
          <Typography text='EARN MORE NerdBunnyFrontend' />
        </Box>
        <Box
          className='w-[340px] flex flex-col gap-4'
        >
          <Typography text='INVITE' />
          <Button className='h-[56px] bg-[#C58BFB] rounded-[21px] p-3 flex items-center gap-2' onClick={() => navigate(`/friend`)}>
            <Group />
            <Typography text='Send gift to friend up to 1M bonus' />
            <Chevron />
          </Button>
        </Box>
        <Box
          className='w-[340px] flex flex-col gap-4'
        >
          <Typography text='DAILY CRYPTO LEARNING TASK' />
          <Button className='w-full h-[56px] bg-[#C58BFB] rounded-[21px] p-3 flex items-center gap-2' onClick={() => navigate(`/dailytask`)}>
            <Group />
            <Typography text='Learn to get bunnybox up to 10M' />
            <Chevron />
          </Button>
        </Box>
        <Box className='flex flex-col gap-4'>
          <Typography text='ONBOARDING' />
          <Box className='w-[340px] flex gap-3 overflow-x-auto'>
            <Box className='w-[320px] flex bg-[#C58BF8] flex-col gap-4 mx-1 p-2'>
              <Box className='w-[320px] flex'>
                <Image className='w-[20px] h-[20px]' src={Icon} />
                <Typography text='Connect Wallet' />
                <Image className='w-[20px] h-[20px]' src={Icon} />
                <Typography text='+5K' />
                <Chevron />
              </Box>
              <Box className='flex'>
                <Image className='w-[20px] h-[20px]' src={Icon} />
                <Typography text='Up to Silver' />
                <Image className='w-[20px] h-[20px]' src={Icon} />
                <Typography text='+10K' />
                <Chevron />
              </Box>
              <Box className='flex'>
                <Image className='w-[20px] h-[20px]' src={Icon} />
                <Typography text='Join NerdBunnyFrontend.com' />
                <Image className='w-[20px] h-[20px]' src={Icon} />
                <Typography text='+1M' />
                <Chevron />
              </Box>
              <Box className='flex'>
                <Image className='w-[20px] h-[20px]' src={Icon} />
                <Typography text='BunnyUniverse-RT post' />
                <Image className='w-[20px] h-[20px]' src={Icon} />
                <Typography text='+150K' />
                <Chevron />
              </Box>
            </Box>
            <Box className='w-[320px] bg-[#C58BF8] flex flex-col gap-4 mx-1 p-2'>
              <Box className='w-[320px] flex'>
                <Image className='w-[20px] h-[20px]' src={Icon} />
                <Typography text='Coin Hero' />
                <Image className='w-[20px] h-[20px]' src={Icon} />
                <Typography text='+50K' />
                <Chevron />
              </Box>
              <Box className='flex'>
                <Image className='w-[20px] h-[20px]' src={Icon} />
                <Typography text='Anouncement' />
                <Image className='w-[20px] h-[20px]' src={Icon} />
                <Typography text='+10K' />
                <Chevron />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className='flex flex-col gap-4'>
          <Typography text='Explore' />
          <Box className='w-[340px] flex gap-3 overflow-x-auto'>
            <Box className='w-[320px] flex bg-[#3a74de] flex-col gap-4 mx-1 p-2'>
              <Box className='w-[320px] flex'>
                <Image className='w-[20px] h-[20px]' src={Icon} />
                <Typography text='Connect Wallet' />
                <Image className='w-[20px] h-[20px]' src={Icon} />
                <Typography text='+5K' />
                <Chevron />
              </Box>
              <Box className='flex'>
                <Image className='w-[20px] h-[20px]' src={Icon} />
                <Typography text='Up to Silver' />
                <Image className='w-[20px] h-[20px]' src={Icon} />
                <Typography text='+10K' />
                <Chevron />
              </Box>
              <Box className='flex'>
                <Image className='w-[20px] h-[20px]' src={Icon} />
                <Typography text='Join NerdBunnyFrontend.com' />
                <Image className='w-[20px] h-[20px]' src={Icon} />
                <Typography text='+1M' />
                <Chevron />
              </Box>
              <Box className='flex'>
                <Image className='w-[20px] h-[20px]' src={Icon} />
                <Typography text='BunnyUniverse-RT post' />
                <Image className='w-[20px] h-[20px]' src={Icon} />
                <Typography text='+150K' />
                <Chevron />
              </Box>
            </Box>
            <Box className='w-[320px] bg-[#3a74de] flex flex-col gap-4 mx-1 p-2'>
              <Box className='w-[320px] flex'>
                <Image className='w-[20px] h-[20px]' src={Icon} />
                <Typography text='Coin Hero' />
                <Image className='w-[20px] h-[20px]' src={Icon} />
                <Typography text='+50K' />
                <Chevron />
              </Box>
              <Box className='flex'>
                <Image className='w-[20px] h-[20px]' src={Icon} />
                <Typography text='Anouncement' />
                <Image className='w-[20px] h-[20px]' src={Icon} />
                <Typography text='+10K' />
                <Chevron />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}