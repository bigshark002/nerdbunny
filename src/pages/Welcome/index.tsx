import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import { Box, Button, Typography, Image } from '@/components/common';
import { background } from '@/components/images';
import { BunnyPurple } from '@/components/icons';
import { Title, TilteDescription, Contents, Actions } from './Welcome.constants';

export const WelcomePage: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Box
      className={`flex flex-col w-full relative z-0 bg-cover bg-center h-screen before:content-['']
        before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/80 before:via-black/30 before:to-black/80 before:z-[-5]`}
      background={background}
    >
      <Header />
      <Box
        className='flex flex-col items-center px-4 gap-2.5 mt-[8px] overflow-y-auto'
      >
        <Box
          className='w-[318px] mx-auto flex flex-col items-center justify-center gap-2.5'
        >
          <BunnyPurple width={55} height={55} />
          <Typography
            className='mt-2.5 font-Rowdies font-bold text-[16px] text-YellowSecond tracking-[.5px] text-stroke-1 text-stroke-Black'
            text={t(Title)}
          />
          <Typography
            className='font-Montserrat font-extrabold text-[12px] leading-[20px] tracking-[.5px] text-center text-stroke-0 text-stroke-BlueSecond'
            text={t(TilteDescription)}
          />
        </Box>
        <Box
          className='w-[330px] h-[251px] mt-4 flex flex-col px-7 py-5 mx-auto rounded-[25px] gap-7 bg-BluePrimary shadow-BluePrimary border-2 border-solid border-White'
        >
          <Typography
            className='font-Rowdies text-[14px] font-bold tracking-[.5px] text-stroke-1 text-stroke-Black'
            text={t('WelcomePlay')}
          />
          {Contents.map(item => (
            <Box
              key={item.id}
              className='relative flex items-center gap-3'
            >
              <Image className={item.size} src={item.image} />
              <Typography
                className='absolute pl-[40px] font-Montserrat font-extrabold leading-[20px] tracking-[.5px] text-[11px] text-stroke-0 text-stroke-BlueThird '
                text={t(item.text)}
              />
            </Box>
          ))}
        </Box>
        <Box
          className='w-[330px] grid grid-cols-2 gap-4 font-Rowdies text-[14px] font-bold'
        >
          {Actions.map(item => (
            <Button
              key={item.id}
              className={`w-[158.17px] h-[45.46px] rounded-[20px] flex gap-2 items-center justify-center ${item.bgColor} border-2 border-solid border-white`}
              icon={item.icon}
              content={t(item.text)}
            />
          ))}
        </Box>
        <Button
          className='w-[330px] py-3 my-[45px] font-Rowdies flex items-center justify-center bg-YellowSecond shadow-YellowSecond border-2 border-solid border-White leading-[20px] rounded-[20px] text-BluePrimary'
          content={t('StartPlaying')}
          onClick={() => navigate(`/home`)}
        />
      </Box>
    </Box>
  );
};