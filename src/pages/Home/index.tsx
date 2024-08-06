import { type FC, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '@/components/Header'
import Mark from '@/components/Mark'
import HelpModal from '@/modals/HelpModal'
import { Box, Typography, Button, Image } from '@/components/common'
import { Next, BunnyPurple } from '@/components/icons'
import { background, bolt, star, medalBronze } from '@/components/images'
import { Title, Squad, Actions } from './Home.costants'

export const HomePage: FC = () => {
  const navigate = useNavigate();

  const [isNew, setIsNew] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsNew(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      className='flex flex-col w-full bg-cover bg-center h-screen'
      background={background}
    >
      <Header />
      <Box
        className='w-[330px] h-full font-Montserrat mx-auto flex flex-col gap-2.5'
      >
        <Box
          className='h-[45.46px] text-BluePrimary text-[14px] bg-YellowSecond shadow-YellowSecond flex justify-between items-center rounded-[20px] px-4 py-2.5 border-2 border-white'
        >
          <Box
            className='flex items-center gap-1'
          >
            <BunnyPurple width={28} height={28} />
            <Typography className='font-bold' text={Title} />
          </Box>
          <Next />
        </Box>
        <Box
          className='flex items-center justify-between'
        >
          <Box
            className='w-[214px] h-[75.46px] p-3 flex flex-col gap-2.5 bg-PurpleSecond shadow-PurpleSecond rounded-[20px] border-2 border-white'
            onClick={() => navigate(`/profile`)}
          >
            <Mark mark={1638} />
            <Box
              className='flex items-center justify-between'
            >
              <Box
                className='flex items-center gap-1.5'
              >
                <Image className='w-[20px] h-[18.5px]' src={star} />
                <Typography className='font-extrabold text-[12px]' text='15M' />
              </Box>
              <Box
                className='flex items-center gap-2'
              >
                <Image className='w-[18px] h-[22.62px]' src={medalBronze} />
                <Typography className='font-extrabold text-[12px]' text='Bronze' />
                <Next />
              </Box>
            </Box>
          </Box>
          <Box
            className='w-[107px] h-[75.46px] p-3 flex flex-col gap-1.5 items-center justify-center bg-PinkPrimary shadow-PinkPrimary rounded-[20px] border-2 border-white'
            onClick={() => navigate(`/${Squad.link}`)}
          >
            <Image src={Squad.image} />
            <Typography
              className='text-[12px] font-extrabold'
              text={Squad.text}
            />
          </Box>
        </Box>
      </Box>
      <Box
        className='w-[337px] h-[133px] mb-[25px] mx-auto p-3 flex flex-col gap-2.5 items-center bg-BluePrimary shadow-BluePrimary rounded-[20px] border-2 border-white'
      >
        <Box
          className='w-full flex px-5 items-center justify-between'
        >
          <Mark width='w-[200px]' type='energy' />
          <Typography className='text-[13px] text-extrabold text-YellowThird' text='4578' />
          <Image src={bolt} />
        </Box>
        <Box
          className='w-full flex items-center justify-between'
        >
          {Actions.map(item => (
            <Button
              key={item.id}
              className='w-[69.11px] h-[72.46px] pt-[6px] pb-[4px] flex flex-col gap-1.5 items-center justify-between text-[12px] text-bold rounded-[15px] bg-PurpleSecond border-2 border-white'
              image={item.image}
              content={item.text}
              onClick={() => navigate(`/${item.link}`)}
            />
          ))}
        </Box>
      </Box>
      <HelpModal open={isNew} onClose={() => setIsNew(false)} />
    </Box>
  );
};
