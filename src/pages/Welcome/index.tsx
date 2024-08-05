import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Box, Button } from '@/components/common';
import { background } from '@/components/images';

export const WelcomePage: FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      className='flex flex-col w-full bg-cover bg-center h-screen'
      background={background}
    >
      <Header />
      <Box
        className='flex flex-col items-center px-4 gap-4'
      >
        {/* <Box
          className='w-[318px] mx-auto flex flex-col items-center justify-center gap-2'
        >
          <Image src={Icon} />
          <Typography text='Welcome to NerdBunnyFrontends' />
          <Typography className='text-[12px] text-center' text='Yes! Join a squad to swipe and earn together. Maximize profits and climb the rankings!' />
        </Box>
        <Box
          className='w-[340px] h-[224px] flex flex-col p-4 mx-auto rounded-lg gap-6 bg-[#C58BFB]'
        >
          <Typography text='HOW TO PLAY?' />
          <Box
            className='flex items-center gap-3'
          >
            <Image className='w-6 h-6' src={Icon} />
            <Typography className='text-[12px]' text='Swipe the screen to collect coins, get surprise chests too' />
          </Box>
          <Box
            className='flex items-center gap-3'
          >
            <Image className='w-6 h-6' src={Icon} />
            <Typography className='text-[12px]' text='Swipe the screen to collect coins, get surprise chests too' />
          </Box>
          <Box
            className='flex items-center gap-3'
          >
            <Image className='w-6 h-6' src={Icon} />
            <Typography className='text-[12px]' text='Upgrade various boosters to Earn coins' />
          </Box>
        </Box> */}
        <Box
          className='w-[340px] flex flex-col gap-5'
        >
          <Box className='flex items-center justify-between'>
            <Button className='w-[168px] h-[48px] flex items-center justify-center bg-[#F7FB8B] rounded-lg' content='CHANNEL' />
            <Button className='w-[168px] h-[48px] flex items-center justify-center bg-[#FAB65D] rounded-lg' content='X' />
          </Box>
          <Box className='flex items-center justify-between'>
            <Button className='w-[168px] h-[48px] flex items-center justify-center bg-[#5DB4F7] rounded-lg' content='CHAT 26' />
            <Button className='w-[168px] h-[48px] flex items-center justify-center bg-[#5DB4F7] rounded-lg' content='CHAT 26' />
          </Box>
        </Box>
      </Box>
      <Button 
        className='w-[340px] h-[48px] mx-auto mt-[80px] flex items-center justify-center bg-[#F7FB8B] rounded-lg text-black'
        content='START PLAYING'
        onClick={() => navigate(`/home`)}
      />
    </Box>
  )
}