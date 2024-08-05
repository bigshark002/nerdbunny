import { type FC, useState } from 'react';
import Header from '@/components/Header';
import Switch from '@/components/Switch';
import Slider from '@/components/Slider';
import { Box, Typography } from '@/components/common';
import { PROFILE_TYPES, TIME_TYPES } from '@/constants/common';
import { INITIAL_STATE, PROFILE_STEPS } from '@/pages/Profile/Profile.constants';

import Background from '@/assets/images/bg_welcome.png';

export const ProfilePage: FC = () => {

  const [data, setData] = useState(INITIAL_STATE);

  const handleChange = (name: string, value: string | number) => {
    setData(prevState => ({ ...prevState, [name]: value }));
  }

  return (
    <Box
      className='flex flex-col w-full items-center bg-cover bg-center h-screen'
      background={Background}
    >
      <Header />
      <Switch
        options={PROFILE_TYPES}
        name='profile'
        value={data?.profile}
        onChange={handleChange}
      />
      <Slider
        options={PROFILE_STEPS}
        name='step'
        value={data?.step ?? 0}
        type={data?.profile}
        coin='1M'
        onChange={handleChange}
      />
      <Box
        className='w-[343px] h-[477px] bg-[#C58BFB] rounded-[12px] flex flex-col items-center py-4 gap-6'
      >
        <Switch
          options={TIME_TYPES}
          name='time'
          value={data?.time}
          onChange={handleChange}
        />
        <Box
          className='relative w-full h-[400px] overflow-y-auto flex flex-col items-center gap-4'
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
  )
}