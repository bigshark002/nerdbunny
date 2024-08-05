import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Box, Typography, Button } from '@/components/common';
import { Next, BunnyPurple } from '@/components/icons';
import { background } from '@/components/images';

export const HomePage: FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      className='flex flex-col w-full bg-cover bg-center h-screen'
      background={background}
    >
      <Header />
      <Box
        className='w-[330px] h-full mx-auto flex flex-col gap-2.5'
      >
        <Box
          className='h-[45.46px] font-Montserrat text-BluePrimary text-[14px] bg-YellowSecond shadow-YellowSecond flex justify-between items-center rounded-[20px] px-4 py-2.5 border-2 border-white'
        >
          <Box
            className='flex items-center gap-1'
          >
            <BunnyPurple width={28} height={28} />
            <Typography className='font-bold' text='Nerd Nuggets, special Event' />
          </Box>
          <Next />
        </Box>
        <Box
          className='flex items-center justify-between'
        >
          <Box
            className='w-[214px] h-[75.46px] font-Montserrat p-3 flex flex-col bg-PurpleSecond shadow-PurpleSecond rounded-[20px] border-2 border-white'
            onClick={() => navigate(`/profile`)}
          >
            <Typography text='Bronze' />
            <Box 
              className='flex items-center justify-between'
            >
              <Box 
                className='flex items-center gap-1.5'
              >
                <Typography className='font-extrabold text-[12px]' text='15M'/>
              </Box>
            </Box>
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
