import { type FC, useState } from 'react';
import Header from '@/components/Header';
import Switch from '@/components/Switch';
import Slider from '@/components/Slider';
import LeaderBoard from '@/components/LeaderBoard';
import { Box } from '@/components/common';
import { PROFILE_TYPES } from '@/constants/common';
import { background } from '@/components/images';
import { InitialState, ProfileSteps } from './Profile.constants';

export const ProfilePage: FC = () => {

  const [data, setData] = useState(InitialState);

  const handleChange = (name: string, value: string | number) => {
    setData(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <Box
      className={`flex flex-col w-full bg-cover bg-center h-screen relative z-0 before:content-['']
        before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/80 before:via-black/30 before:to-black/80 before:z-[-5]`}
      background={background}
    >
      <Header />
      <Box
        className='font-Montserrat w-[341px] mx-auto mt-[12px] flex flex-col items-center'
      >
        <Switch
          options={PROFILE_TYPES}
          name='profile'
          value={data?.profile}
          onChange={handleChange}
        />
        <Slider
          options={ProfileSteps}
          name='step'
          value={data?.step ?? 0}
          type={data?.profile}
          coin='1M'
          onChange={handleChange}
        />
        <LeaderBoard type={data.time} height='h-[577px]' handleChange={handleChange} />
      </Box>
    </Box>
  );
};