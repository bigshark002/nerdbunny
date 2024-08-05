import { type FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Box, Typography, Image, Button } from '@/components/common';
import { background, logoNerdBunny } from '@/components/images';
import { Title, Actions } from './Onboarding.constants';

export const OnboardingPage: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`/welcome`);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      className='flex flex-col justify-between w-full bg-cover bg-center h-screen'
      background={background}
    >
      <Header />
      <Box
        className='w-[300px] mx-auto flex flex-col items-center justify-center gap-8'
      >
        <Image src={logoNerdBunny} />
        <Typography
          className='font-bold text-[17px] text-PurplePrimary text-center border-PurpleSecond'
          text={Title}
        />
      </Box>
      <Box
        className='w-[286px] mx-auto flex items-center justify-between gap-4 mb-[80px]'
      >
        {Actions.map(item => (
          <Button
            key={item.id}
            className='w-[82px] h-[75.46px] flex items-center justify-center bg-PurpleSecond rounded-[15px] border-[2px] border-solid border-white'
            icon={item.icon}
            link={item.link}
          />
        ))}
      </Box>
    </Box>
  )
}