import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import { Box, Image, Typography, Button, InputField } from '@/components/common';
import { background, secredCodeGift } from '@/components/images';

import { Title, ExpireTime, ExpireDescription, Contents, Actions, InputDescription } from './SecretCode.constants';

export const SecretCodePage: FC = () => {

  const { t } = useTranslation();

  return (
    <Box
      className={`flex flex-col  w-full relative z-0 bg-cover bg-center h-screen before:content-['']
        before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/80 before:via-black/30
      before:to-black/80 before:z-[-5] font-Montserrat font-extrabold overflow-y-auto`}
      background={background}
    >
      <Header />
      <Box className='flex flex-col justify-center items-center mt-[55px]'>
        <Image className='w-[60px] h-[60.71px]' src={secredCodeGift} />
        <Typography className='text-[18px] leading-5 text-stroke-1 text-stroke-BluePrimary mt-[19px]'
          text={t(Title)}
        />
        <Box className='flex gap-1'>
          <Typography className='mt-[6px] text-[12px] leading-[18px] tracking-[.5px] text-stroke-0 text-stroke-BlueSecond'
            text={t(ExpireDescription)}
          />
          <Typography
            className='mt-[6px] text-[12px] text-YellowPrimary leading-[18px] tracking-[.5px] text-stroke-0 text-stroke-BlueSecond'
            text={ExpireTime}
          />
        </Box>
        <InputField
          className='w-[298px] h-[38px] mt-[14px] px-4 py-[9px] rounded-[20px] text-[12px] leading-5 tracking-[.5px] bg-[#FFFFFFCC] text-[#7F7F7F]'
          value=''
          name=''
          placeholder={t(InputDescription)}
        />
        <Button
          className='w-[306px] h-[45.46px] text-stroke-1 text-stroke-PurpleSecond mt-[11px] border-2 border-white bg-YellowSecond shadow-YellowSecond rounded-[20px]'
          content={t('Claim')}
        />
      </Box>
      <Box className='flex flex-col mx-auto mt-[24px]'>
        <Typography
          className='text-[14px] pl-2 leading-5 tracking-[.5px] text-stroke-1 text-stroke-BluePrimary'
          text={t('SecretTitle')}
        />
        <Box className='w-[328px] h-[172.25px] p-4 rounded-[26px] border-2 border-white bg-PurpleSecond shadow-PurpleSecond'>
          {Contents.map(item => (
            <Box
              key={item.id}
              className='flex items-center gap-[13px] mb-[11px]'
            >
              <Image className={item.size} src={item.image} />
              <Typography className='text-[12px] spacing-[10px] leading-5' text={t(item.text)} />
            </Box>
          ))}
        </Box>
      </Box>
      <Box className='flex mx-auto gap-5 mt-4'>
        {Actions.map(item => (
          <Box
            key={item.id}
            className={`w-[161px] h-[42.21px] rounded-[20px] ${item.bgColor} 
            border-2 border-white p-3 flex items-center gap-3 justify-center`}
          >
            <Typography text={t(item.text)} />
            {item.icon}
          </Box>
        ))}
      </Box>
    </Box>
  );
};