import { type FC, useState } from 'react';
import LevelUpModal from '@/modals/LevelUpModal';
import Header from '@/components/Header';
import { Box, Typography, Button, Image } from '@/components/common';

import Background from '@/assets/images/bg_welcome.png';
import BuildLogo from '@/assets/images/build_icon.png';

export const BuildPage: FC = () => {
  const [modal, setModal] = useState('');

  return (
    <Box
      className='flex flex-col w-full bg-cover bg-center h-screen'
      background={Background}
    >
      <Header />
      <Box className='w-full h-[718px] overflow-y-auto'>
        <Box
          className='w-[343px] pb-[80px] mx-auto flex flex-col gap-6'
        >
          <Box
            className='flex flex-col items-center'
          >
            <Typography text="Balance" />
            <Typography text="207, 105" />
            <Image src={BuildLogo} />
          </Box>
          <Box
            className='flex flex-col gap-4'
          >
            <Typography text='FREE DAILY BOOSTERS' />
            <Box
              className='flex items-center justify-between'
            >
              <Button className='w-[162px] h-[74px] bg-[#2773DA] flex items-center justify-center rounded-[21px] p-3' content='Chest' />
              <Button className='w-[162px] h-[74px] bg-[#EF9F2C] flex items-center justify-center rounded-[21px] p-3' content='Full recovery' />
            </Box>
          </Box>
          <Box
            className='flex flex-col gap-4'
          >
            <Typography text='BOOSTERS' />
            <Button className='w-[342px] h-[74px] bg-[#C58BFB] rounded-[21px] p-3 flex items-center justify-between' content='MultiValue' onClick={() => setModal('multi')}/>
            <Button className='w-[342px] h-[74px] bg-[#C58BFB] rounded-[21px] p-3 flex items-center justify-between' content='Coinlimit' />
            <Button className='w-[342px] h-[74px] bg-[#C58BFB] rounded-[21px] p-3 flex items-center justify-between' content='Fillrate' />
            <Button className='w-[342px] h-[74px] bg-[#C58BFB] rounded-[21px] p-3 flex items-center justify-between' content='Nerdpack' />
          </Box>
        </Box>
      </Box>
      <LevelUpModal open={modal !== ''} onClose={() => setModal('')} />
    </Box>
  )
}