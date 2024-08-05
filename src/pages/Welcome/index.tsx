import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Box, Button, Typography, Image } from '@/components/common';
import { background } from '@/components/images';
import { BunnyPurple } from '@/components/icons';
import { Title, TilteDescription, Contents, Actions } from './Welcome.constants';

export const WelcomePage: FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      className={`flex flex-col justify-between w-full relative z-10 bg-cover bg-center h-screen before:content-['']
        before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/80 before:via-black/30 before:to-black/80 before:z-[-5]`}
      background={background}
    >
      <Header />
      <Box
        className='flex flex-col items-center px-4 gap-5 mt-[8px]'
      >
        <Box
          className='w-[318px] mx-auto flex flex-col items-center justify-center gap-2.5'
        >
          <BunnyPurple width={55} height={55} />
          <Typography
            className='font-Rowdies font-bold text-[16px] text-YellowSecond indent-1.5 tracking-[.5px] text-stroke-1 text-stroke-Black'
            text={Title}
          />
          <Typography
            className='font-Montserrat font-extrabold text-[12px] leading-[20px] indent-[10px] tracking-[.5px] text-center text-stroke-0 text-stroke-BlueSecond'
            text={TilteDescription}
          />
        </Box>
        <Box
          className='w-[330px] h-[251px] flex flex-col p-4 mx-auto rounded-[25px] gap-6 bg-BluePrimary border-2 border-solid border-White'
        >
          <Typography className='font-Rowdies text-[14px] font-bold indent-[6px] tracking-[.5px]' text='HOW TO PLAY?' />
          {Contents.map(item => (
            <Box
              key={item.id}
              className='flex items-center gap-3'
            >
              <Image className={item.size} src={item.image} />
              <Typography className='font-Montserrat h-[30px] font-extrabold indent-[10px] leading-[10px] tracking-[.5px] text-[11px]' text={item.text} />
            </Box>
          ))}
        </Box>
        <Box
          className='w-[330px] flex flex-col gap-5'
        >
          {Actions.map(item => (
            <Button 
              key={item.id}
              className={`w-[158.17px] h-[50px] rounded-[20px] flex gap-2 items-center justify-center bg-${item.bgColor} border-2 border-solid border-white`}
              icon={item.icon}
              content={item.text}
            />
          ))}
        </Box>
      </Box>
      <Button
        className='w-[340px] h-[48px] mx-auto mt-[80px] flex items-center justify-center bg-[#F7FB8B] rounded-lg text-black'
        content='START PLAYING'
        onClick={() => navigate(`/home`)}
      />
    </Box>
  )
}