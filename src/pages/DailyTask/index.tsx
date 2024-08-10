import { type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import DailyTaskModal from '@/modals/DailyTaskModal';
import { Box, Typography, Button, Image } from '@/components/common';
import { background, calendar } from '@/components/images';

import { Title, TilteDescription, Contents, Action } from './DailyTask.constants';

export const DailyTaskPage: FC = () => {
  const [modal, setModal] = useState(false);
  const { t } = useTranslation();

  return (
    <Box
      className='flex flex-col w-full bg-cover bg-center h-screen overflow-y-auto'
      background={background}
    >
      <Header />
      <Box
        className='overflow-y-auto flex flex-col items-center mt-1'
      >
        <Box
          className='w-[330px] h-[45.46px] p-3 bg-BlueThird border-2 border-white shadow-BlueThird rounded-[21px] flex items-center justify-between'
        >
          <Box className='flex gap-[29px] justify-center items-center'>
            {Action.icon}
            <Typography
              className='font-Montserrat font-bold leading-4 spacing-[6px] text-[14px] text-BluePrimary'
              text={t(Action.text)}
            />
          </Box>
          {Action.iconRight}
        </Box>
        <Box
          className='w-[343px] flex flex-col items-center mt-9'
        >
          <Image className='w-[84px] h-[63px]' src={calendar} />
          <Typography
            className='font-Montserrat font-extrabold leading-5 text-[18px] text-stroke-1 
            text-stroke-BluePrimary mt-4'
            text={t(Title)}
          />
          <Typography
            className='w-[280px] text-[12px] text-center tracking-[.5px] mt-1 font-Montserrat font-extrabold text-stroke-[.5px] text-stroke-BlueSecond'
            text={t(TilteDescription)}
          />
        </Box>
        <Box
          className='w-[341px] h-[527.67px] font-extrabold font-Montserrat bg-PurpleSecond rounded-[25px] border-2 border-white px-[14px] py-2 flex flex-col gap-6 mt-[14px] mb-[14px]'
        >
          <Box
            className='grid grid-cols-3 w-[312px] mx-auto'
          >
            {Contents.map(item => (
              <Box
                key={item.id}
                className='flex flex-col items-center'
                onClick={() => setModal(true)}
              >
                <Typography
                  className='text-[14px] leading-5 font-extrabold mb-[7px] mt-[13px]'
                  text={t(item.text)}
                />
                <Box
                  className='w-[94.9px] h-[125px] rounded-[12px] bg-BluePrimary flex flex-col items-center justify-center'
                >
                  <Image className={`${item.size} mt-[11px]`} src={item.image} />
                  <Box className='flex gap-2  mt-[11.3px] items-center justify-center'>
                    {item.icon}
                    <Typography className='text-[12px]' text={t(item.reward)} />
                  </Box>
                  <Button
                    className='w-[76px] h-[21.5px] rounded-[21px] text-[10px] p-3 text-BluePrimary bg-YellowSecond shadow-YellowSecondOne border-2 border-white flex items-center justify-center mt-[4px]'
                    content={t('Claim')}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <DailyTaskModal open={modal} onClose={() => setModal(false)} />
    </Box>
  );
};