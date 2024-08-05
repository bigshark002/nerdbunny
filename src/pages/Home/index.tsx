import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Box, Typography, Button } from '@/components/common';
import { Chevron, Group } from '@/components/icons';

import Background from '@/assets/images/bg_welcome.png';

export const HomePage: FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      className='flex flex-col justify-between w-full bg-cover bg-center h-screen'
      background={Background}
    >
      <Header />
      <Box
        className='w-[343px] h-full mx-auto flex flex-col gap-3'
      >
        <Box
          className='h-[56px] bg-[#E7A35B] flex gap-6 items-center rounded-[21px] p-3'
        >
          <Group width={32} height={32} />
          <Typography text='Nerd Nuggets, special Event' />
          <Chevron />
        </Box>
        <Box
          className='flex items-center justify-between'
        >
          <Box
            className='w-[227px] h-[82px] p-3 flex bg-[#C58BFB] rounded-[21px]'
            onClick={() => navigate(`/profile`)}
          >
            <Typography text='Bronze' />
          </Box>
          <Box
            className='w-[104px] h-[82px] p-3 flex bg-[#C58BFB] rounded-[21px]'
            onClick={() => navigate(`/joinsquad`)}
          >
            <Typography text='Join' />
          </Box>
        </Box>
      </Box>
      <Box
        className='w-[343px] h-[132px] mx-auto p-3 flex items-center justify-between bg-[#C58BFB] rounded-[21px]'
      >
        <Button
          className='w-[68px] h-[64px] rounded-[12px] px-3 py-2 rounded-[12px] bg-[#F8E269]'
          content='EARN'
          onClick={() => navigate(`/earn`)}
        />
        <Button
          className='w-[68px] h-[64px] rounded-[12px] px-3 py-2 rounded-[12px] bg-[#F8E269]'
          content='FRENS'
          onClick={() => navigate(`/friend`)}
        />
        <Button
          className='w-[68px] h-[64px] rounded-[12px] px-3 py-2 rounded-[12px] bg-[#F8E269]'
          content='BUILD'
          onClick={() => navigate(`/build`)}
        />
        <Button
          className='w-[68px] h-[64px] rounded-[12px] px-3 py-2 rounded-[12px] bg-[#F8E269]'
          content='LEAD'
          onClick={() => navigate(`/lead`)}
        />
      </Box>
    </Box>
  );
};
