import { type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SquadModal from '@/modals/SquadModal';
import Header from '@/components/Header';
import { Box, Typography, Button, Image } from '@/components/common';
import { Next } from '@/components/icons';
import { background } from '@/components/images';
import { Main, Contents } from './JoinSquad.constants';

export const JoinSquadPage: FC = () => {
  const { t } = useTranslation();

  const [modal, setModal] = useState('');

  return (
    <Box
      className={`flex flex-col  w-full relative z-0 bg-cover bg-center h-screen before:content-['']
        before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/80 before:via-black/30 before:to-black/80 before:z-[-5]`}
      background={background}
    >
      <Header />
      <Box
        className='font-Montserrat text-white w-full mt-[40px] overflow-y-auto'
      >
        <Box
          className='w-[342px] mx-auto flex flex-col items-center gap-7 pb-[40px]'
        >
          <Box
            className='flex flex-col gap-2.5 items-center'
          >
            <Image
              className='w-[50px] h-[52.74px]'
              src={Main.Image}
            />
            <Typography
              className='text-[18px] mt-1 font-extrabold leading-[20px] text-stroke-1 text-stroke-BluePrimary'
              text={t(Main.Title)}
            />
            <Typography
              className='w-[280px] text-[12px] leading-[18px] tracking-[0.5px] text-center text-stroke-0 text-stroke-BlueSecond'
              text={t(Main.Description)}
            />
          </Box>
          <Button
            className='w-[306px] h-[48px] p-3 text-[18px] font-extrabold text-stroke-1 text-stroke-PurpleSecond rounded-[21px] bg-YellowSecond flex items-center justify-center shadow-YellowSecond border-2 border-White'
            content={t(Main.Command)}
            onClick={() => setModal('new')}
          />
          <Box
            className='flex flex-col gap-2.5'
          >
            <Typography
              className='text-[18px] font-extrabold leading-[20px] pb-1.5 text-stroke-1 text-stroke-BluePrimary'
              text={t('RecommendedSquad')}
            />
            {Contents.map(item => (
              <Box
                key={item.id}
                className='w-[342px] h-[58px] px-4 py-3.5 bg-PurpleSecond shadow-PurpleFifth rounded-[15px] flex items-center gap-4 border-2 border-White'
                onClick={() => setModal(item.link)}
              >
                <Image
                  className='w-[27px] h-[27px]'
                  src={item.image}
                />
                <Typography
                  className='text-[18px] font-extrabold'
                  text={item.text}
                />
                <Button
                  className='ml-auto mr-0'
                  icon={<Next width={20} height={20} />}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <SquadModal open={modal !== ''} type={modal} onClose={() => setModal('')} />
    </Box>
  );
};