import { type FC, useState } from 'react';
import Header from '@/components/Header';
import DailyTaskModal from '@/modals/DailyTaskModal';
import { Box, Typography, Button } from '@/components/common';
import { Group, Chevron } from '@/components/icons';

import Background from '@/assets/images/bg_welcome.png';

export const DailyTaskPage: FC = () => {
  const [modal, setModal] = useState(false);

  return (
    <Box
      className='flex flex-col w-full bg-cover bg-center h-screen'
      background={Background}
    >
      <Header />
      <Box
        className='h-[681px] overflow-y-auto flex flex-col items-center gap-4'
      >
        <Box
          className='w-[343px] h-[60px] p-3 bg-[#4FB6EC] rounded-[21px] flex items-center justify-between'
        >
          <Group />
          <Typography text='CONNECT TON WALLET' />
          <Chevron />
        </Box>
        <Box
          className='w-[343px] flex flex-col items-center gap-3'
        >
          <Typography text='DAILY TASK' />
          <Typography className='w-[280px] text-[12px] text-center' text='Get lucky NuggsBox for logging into the app and learning crypto knowledge every day without skipping' />
        </Box>
        <Box
          className='w-[343px] h-[552px] bg-[#C58BFB] rounded-[12px] p-4 flex flex-col gap-6'
        >
          <Box
            className='flex items-center justify-between gap-3'
          >
            <Box
              className='flex flex-col gap-1 items-center'
              onClick={() => setModal(true)}
            >
              <Typography text='BIG DAY' />
              <Box
                className='w-[95px] h-[92px] rounded-[12px] px-3 py-2 bg-[#6A1AB4] flex flex-col items-center gap-1'
              >
                <Group width={24} height={24} />
                <Typography className='text-[12px]' text='5K-1M' />
                <Button className='w-[72px] h-[20px] rounded-[21px] text-[12px] p-3 bg-[#ECD04F] flex items-center justify-center' content='CLAIM' />
              </Box>
            </Box>
            <Box
              className='flex flex-col gap-1 items-center'
            >
              <Typography text='DAY 2' />
              <Box
                className='w-[95px] h-[92px] rounded-[12px] px-3 py-2 bg-[#6A1AB4] flex flex-col items-center gap-1'
              >
                <Group width={24} height={24} />
                <Typography className='text-[12px]' text='5K-1M' />
                <Button className='w-[72px] h-[20px] rounded-[21px] text-[12px] p-3 bg-[#ECD04F] flex items-center justify-center' content='CLAIM' />
              </Box>
            </Box>
            <Box
              className='flex flex-col gap-1 items-center'
            >
              <Typography text='DAY 3' />
              <Box
                className='w-[95px] h-[92px] rounded-[12px] px-3 py-2 bg-[#6A1AB4] flex flex-col items-center gap-1'
              >
                <Group width={24} height={24} />
                <Typography className='text-[12px]' text='5K-1M' />
                <Button className='w-[72px] h-[20px] rounded-[21px] text-[12px] p-3 bg-[#ECD04F] flex items-center justify-center' content='CLAIM' />
              </Box>
            </Box>
          </Box>
          <Box
            className='flex items-center justify-between gap-3'
          >
            <Box
              className='flex flex-col gap-1 items-center'
            >
              <Typography text='BIG DAY' />
              <Box
                className='w-[95px] h-[92px] rounded-[12px] px-3 py-2 bg-[#6A1AB4] flex flex-col items-center gap-1'
              >
                <Group width={24} height={24} />
                <Typography className='text-[12px]' text='5K-1M' />
                <Button className='w-[72px] h-[20px] rounded-[21px] text-[12px] p-3 bg-[#ECD04F] flex items-center justify-center' content='CLAIM' />
              </Box>
            </Box>
            <Box
              className='flex flex-col gap-1 items-center'
            >
              <Typography text='DAY 2' />
              <Box
                className='w-[95px] h-[92px] rounded-[12px] px-3 py-2 bg-[#6A1AB4] flex flex-col items-center gap-1'
              >
                <Group width={24} height={24} />
                <Typography className='text-[12px]' text='5K-1M' />
                <Button className='w-[72px] h-[20px] rounded-[21px] text-[12px] p-3 bg-[#ECD04F] flex items-center justify-center' content='CLAIM' />
              </Box>
            </Box>
            <Box
              className='flex flex-col gap-1 items-center'
            >
              <Typography text='DAY 3' />
              <Box
                className='w-[95px] h-[92px] rounded-[12px] px-3 py-2 bg-[#6A1AB4] flex flex-col items-center gap-1'
              >
                <Group width={24} height={24} />
                <Typography className='text-[12px]' text='5K-1M' />
                <Button className='w-[72px] h-[20px] rounded-[21px] text-[12px] p-3 bg-[#ECD04F] flex items-center justify-center' content='CLAIM' />
              </Box>
            </Box>
          </Box>
          <Box
            className='flex items-center justify-between gap-3'
          >
            <Box
              className='flex flex-col gap-1 items-center'
            >
              <Typography text='BIG DAY' />
              <Box
                className='w-[95px] h-[92px] rounded-[12px] px-3 py-2 bg-[#6A1AB4] flex flex-col items-center gap-1'
              >
                <Group width={24} height={24} />
                <Typography className='text-[12px]' text='5K-1M' />
                <Button className='w-[72px] h-[20px] rounded-[21px] text-[12px] p-3 bg-[#ECD04F] flex items-center justify-center' content='CLAIM' />
              </Box>
            </Box>
            <Box
              className='flex flex-col gap-1 items-center'
            >
              <Typography text='DAY 2' />
              <Box
                className='w-[95px] h-[92px] rounded-[12px] px-3 py-2 bg-[#6A1AB4] flex flex-col items-center gap-1'
              >
                <Group width={24} height={24} />
                <Typography className='text-[12px]' text='5K-1M' />
                <Button className='w-[72px] h-[20px] rounded-[21px] text-[12px] p-3 bg-[#ECD04F] flex items-center justify-center' content='CLAIM' />
              </Box>
            </Box>
            <Box
              className='flex flex-col gap-1 items-center'
            >
              <Typography text='DAY 3' />
              <Box
                className='w-[95px] h-[92px] rounded-[12px] px-3 py-2 bg-[#6A1AB4] flex flex-col items-center gap-1'
              >
                <Group width={24} height={24} />
                <Typography className='text-[12px]' text='5K-1M' />
                <Button className='w-[72px] h-[20px] rounded-[21px] text-[12px] p-3 bg-[#ECD04F] flex items-center justify-center' content='CLAIM' />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <DailyTaskModal open={modal} onClose={() => setModal(false)} />
    </Box>
  )
}