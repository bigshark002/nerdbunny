import { type FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Switch from '@/components/Switch';
import { Box, Button, Typography } from '@/components/common';
import { TIME_TYPES } from '@/constants/common';

import Background from '@/assets/images/bg_welcome.png';

export const SquadDetailPage: FC = () => {
  const { id } = useParams();

  const [type, setType] = useState('day');

  const handleChange = (name: string, value: string) => {
    if (name) setType(value);
  }

  return (
    <Box
      className='flex flex-col w-full bg-cover bg-center h-screen'
      background={Background}
    >
      <Header />
      <Box
        className='w-[343px] mx-auto flex flex-col items-center gap-6'
      >
        <Typography text={id ?? 'NerdBunnyFrontend'} />
        <Box
          className='flex flex-wrap gap-[7px]'
        >
          <Button className='w-[168px] h-[82px] bg-[#C58BFB] rounded-[21px] flex items-center justify-center' content='PLATIUM' />
          <Button className='w-[168px] h-[82px] bg-[#C58BFB] rounded-[21px] flex items-center justify-center' content='PLATIUM' />
          <Button className='w-[168px] h-[82px] bg-[#C58BFB] rounded-[21px] flex items-center justify-center' content='PLATIUM' />
          <Button className='w-[168px] h-[82px] bg-[#C58BFB] rounded-[21px] flex items-center justify-center' content='PLATIUM' />
        </Box>
        <Box
          className='flex items-center justify-between gap-2'
        >
          <Button className='w-[109px] h-[48px] text-[10px] bg-[#EFEA6E] rounded-[21px]' content='INVITE FRIEND' />
          <Button className='w-[109px] h-[48px] text-[10px] bg-[#5AA5E4] rounded-[21px]' content='ADD SQUAD' />
          <Button className='w-[109px] h-[48px] text-[10px] bg-[#E4AE47] rounded-[21px]' content='LEAVE SQUAD' />
        </Box>
        <Box
          className='w-[343px] h-[337px] bg-[#C58BFB] rounded-[12px] flex flex-col items-center py-4 gap-6'
        >
          <Switch 
            options={TIME_TYPES}
            name='day'
            value={type}
            onChange={handleChange}
          />
          <Box
            className='w-full h-[256px] overflow-y-auto flex flex-col items-center gap-4'
          >
            <Box className='w-[311px] h-[52px] flex items-center gap-2'>
              <Typography text='1' />
              <Typography text='Multivalue' />
            </Box>
            <Box className='w-[311px] h-[52px] flex items-center gap-2'>
              <Typography text='2' />
              <Typography text='Multivalue' />
            </Box>
            <Box className='w-[311px] h-[52px] flex items-center gap-2'>
              <Typography text='3' />
              <Typography text='Multivalue' />
            </Box>
            <Box className='w-[311px] h-[52px] flex items-center gap-2'>
              <Typography text='4' />
              <Typography text='Multivalue' />
            </Box>
            <Box className='w-[311px] h-[52px] flex items-center gap-2'>
              <Typography text='5' />
              <Typography text='Multivalue' />
            </Box>
            <Box className='w-[311px] h-[52px] flex items-center gap-2'>
              <Typography text='6' />
              <Typography text='Multivalue' />
            </Box>
            <Box className='w-[311px] h-[52px] flex items-center gap-2'>
              <Typography text='7' />
              <Typography text='Multivalue' />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}