import { type FC, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInitData, type User } from '@telegram-apps/sdk-react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import { Box, Typography, Image, Button } from '@/components/common';
import { background, logoNerdBunny } from '@/components/images';
import { Title, Actions } from './Onboarding.constants';
import { UserProps } from './Onboarding.types';

const getUserData = (user: User): UserProps => {

  return {
    id: user?.id?.toString(),
    username: user?.username ?? '',
    firstName: user?.firstName ?? '',
    lastName: user?.lastName ?? '',
    photoUrl: user?.photoUrl ?? '',
    isBot: user?.isBot ?? false,
    isPremium: user?.isPremium ?? false,
    languageCode: user?.languageCode ?? 'en'
  }
}

export const OnboardingPage: FC = () => {
  const navigate = useNavigate();
  const initData = useInitData();
  const { t } = useTranslation();

  const user = useMemo<UserProps | undefined>(() => {
    return initData?.user ? getUserData(initData?.user) : undefined
  }, [initData]);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`/welcome`);
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Box
      className={`flex flex-col justify-between w-full relative z-0 bg-cover bg-center h-screen before:content-['']
        before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/80 before:via-black/30 before:to-black/80 before:z-[-5]`}
      background={background}
    >
      <Header />
      {user !== undefined &&
        <Typography
          text={`id: ${user.id} username: ${user?.username} firstname: ${user.firstName} lastname: ${user.lastName} photo: ${user.photoUrl} bot: ${user.isBot} premium: ${user.isPremium} lang: ${user.languageCode}`}
        />
      }
      <Box
        className='w-[400px] mx-auto flex flex-col items-center justify-center gap-8'
      >
        <Image src={logoNerdBunny} />
        <Typography
          className='font-Rowdies font-bold text-[17px] leading-[22px] tracking-[.5px] text-stroke-1 text-stroke-PurpleSecond text-PurplePrimary text-center border-PurpleSecond'
          text={t(Title)}
        />
      </Box>
      <Box
        className='w-[286px] mx-auto flex items-center justify-between gap-4 mb-[90px]'
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
  );
};