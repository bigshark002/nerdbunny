import { type FC, useState } from 'react';
import SquadModal from '@/modals/SquadModal';
import Header from '@/components/Header';
import { Box, Typography, Button } from '@/components/common';

import Background from '@/assets/images/bg_welcome.png';
import { Group, Chevron } from '@/components/icons';

export const JoinSquadPage: FC = () => {

  const [modal, setModal] = useState('');

  return (
    <Box
      className='flex flex-col w-full bg-cover bg-center h-screen'
      background={Background}
    >
      <Header />
      <Box
        className='w-full h-[829px] overflow-y-auto'
      >
        <Box
          className='w-[343px] mx-auto flex flex-col items-center gap-6 pb-[80px]'
        >
          <Box
            className='flex flex-col gap-4 items-center'
          >
            <Typography text="JOIN SQUAD" />
            <Typography className='w-[280px] text-[12px] text-center' text='Yes! Join a squad to swipe and earn together. Maximize profits and climb the rankings!' />
          </Box>
          <Button className='w-[311px] h-[48px] p-3 rounded-[21px] bg-[#F8E773] flex items-center justify-center' content='CREATE OR JOIN' onClick={() => setModal('squad')} />
          <Box
            className='flex flex-col gap-4'
          >
            <Typography text='Recommended Squad' />
            <Button className='w-[342px] h-[56px] bg-[#C58BFB] rounded-[21px] p-3 flex items-center gap-2' onClick={() => setModal('squad')}>
              <Group />
              <Typography text='TELEGRAM NEWS' />
              <Chevron />
            </Button>
            <Button className='w-[342px] h-[56px] bg-[#C58BFB] rounded-[21px] p-3 flex items-center gap-2'>
              <Group />
              <Typography text='TELEGRAM NEWS' />
              <Chevron />
            </Button>
            <Button className='w-[342px] h-[56px] bg-[#C58BFB] rounded-[21px] p-3 flex items-center gap-2'>
              <Group />
              <Typography text='TELEGRAM NEWS' />
              <Chevron />
            </Button>
            <Button className='w-[342px] h-[56px] bg-[#C58BFB] rounded-[21px] p-3 flex items-center gap-2'>
              <Group />
              <Typography text='TELEGRAM NEWS' />
              <Chevron />
            </Button>
            <Button className='w-[342px] h-[56px] bg-[#C58BFB] rounded-[21px] p-3 flex items-center gap-2'>
              <Group />
              <Typography text='TELEGRAM NEWS' />
              <Chevron />
            </Button>
            <Button className='w-[342px] h-[56px] bg-[#C58BFB] rounded-[21px] p-3 flex items-center gap-2'>
              <Group />
              <Typography text='TELEGRAM NEWS' />
              <Chevron />
            </Button>
            <Button className='w-[342px] h-[56px] bg-[#C58BFB] rounded-[21px] p-3 flex items-center gap-2'>
              <Group />
              <Typography text='TELEGRAM NEWS' />
              <Chevron />
            </Button>
            <Button className='w-[342px] h-[56px] bg-[#C58BFB] rounded-[21px] p-3 flex items-center gap-2'>
              <Group />
              <Typography text='TELEGRAM NEWS' />
              <Chevron />
            </Button>
            <Button className='w-[342px] h-[56px] bg-[#C58BFB] rounded-[21px] p-3 flex items-center gap-2'>
              <Group />
              <Typography text='TELEGRAM NEWS' />
              <Chevron />
            </Button>
            <Button className='w-[342px] h-[56px] bg-[#C58BFB] rounded-[21px] p-3 flex items-center gap-2'>
              <Group />
              <Typography text='TELEGRAM NEWS' />
              <Chevron />
            </Button>
          </Box>
        </Box>
      </Box>
      <SquadModal open={modal !== ''} onClose={() => setModal('')} />
    </Box>
  )
}