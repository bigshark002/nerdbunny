import { type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LevelUpModal from '@/modals/LevelUpModal';
import Header from '@/components/Header';
import ProgressBar from '@/components/ProgressBar';
import { Box, Typography, Image, Button } from '@/components/common';
import { background, rocketSmoke } from '@/components/images';
import { BunnyPurple, Next } from '@/components/icons';
import { DailyBoosts, Actions } from './Build.constants';

export const BuildPage: FC = () => {
  const { t } = useTranslation();
  const [type, setType] = useState('');

  return (
    <Box
      className={`flex flex-col w-full bg-cover bg-center h-screen relative z-0 before:content-['']
        before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/80 before:via-black/30 before:to-black/80 before:z-[-5]`}      
      background={background}
    >
      <Header />
      <Box className='w-full mt-[30px] overflow-y-auto font-Montserrat'>
        <Box
          className='w-[343px] pb-[40px] mx-auto flex flex-col gap-8'
        >
          <Box
            className='flex flex-col items-center gap-2.5'
          >
            <Typography
              className='font-Rowdies text-[16px] text-YellowSecond text-stroke-1 text-stroke-Black'
              text={t('Balance')}
            />
            <Typography
              className='text-[30px] text-YellowPrimary text-stroke-2 text-stroke-BluePrimary'
              text="207, 105"
            />
            <Image src={rocketSmoke} />
            <Typography
              className='text-[18px] font-extrabold leading-[20px] spacing-[10px] text-stroke-1 text-stroke-BluePrimary'
              text={t('Boost')}
            />
          </Box>
          <Box
            className='mt-[4px] flex flex-col gap-2.5'
          >
            <Typography
              className='pl-2 text-[18px] font-extrabold text-White text-stroke-1 text-stroke-BluePrimary'
              text={t('FreeDailyBooster')}
            />
            <Box
              className='flex items-center justify-between'
            >
              {DailyBoosts.map(item => (
                <Box
                  key={item.id}
                  className={`w-[163.57px] h-[73.55px] p-3 flex items-center justify-between rounded-[20px] ${item.bgColor} border-2 border-white`}
                >
                  <Image className={item.imageSize} src={item.image} />
                  <Box
                    className='flex flex-col gap-1.5'
                  >
                    <Typography
                      className='font-extrabold text-[12px] leading-[20px] spacing-[10px]'
                      text={t(item.text)}
                    />
                    <ProgressBar width='w-[86px]' text='2/3' percent={66} />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
          <Box
            className='flex flex-col gap-3'
          >
            <Typography
              className='pl-2 text-[18px] font-extrabold spacing-[10px] text-stroke-1 text-stroke-BluePrimary'
              text={t('Booster')}
            />
            {Actions.map(item => (
              <Box
                key={item.id}
                className='w-[342px] h-[72px] px-4 py-2.5 rounded-[21px] bg-PurpleSecond shadow-PurpleSecond border-2 border-white flex gap-2 items-center'
                onClick={() => setType(item.type)}
              >
                <Button
                  className='w-[52px] h-[52px] rounded-[12px] bg-BluePrimary flex items-center justify-center'
                  image={item.image}
                  imageSize={item.imageSize}
                />
                <Box
                  className='flex flex-col gap-1.5'
                >
                  <Typography
                    className='pl-[5px] font-extrabold text-[13px] text-white leading-[20px]'
                    text={t(item.text)}
                  />
                  <Box
                    className='flex items-center gap-3'
                  >
                    <Button
                      className='w-[62px] px-2 py-0.5 flex items-center gap-1 text-white text-[13px] font-extrabold bg-PurplePrimary rounded-[80px] border border-White'
                      icon={<BunnyPurple width={17} height={17} />}
                      content='1K'
                    />
                    <Button
                      className='w-[62px] px-2 py-0.5 flex items-center justify-center gap-1 text-white text-[13px] font-extrabold bg-PurplePrimary rounded-[80px] border border-White'
                      content='Lvl 2'
                    />
                  </Box>
                </Box>
                <Box
                  className='ml-auto mr-0 text-White'
                >
                  <Next />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <LevelUpModal open={type !== ''} type={type} onClose={() => setType('')} />
    </Box>
  );
};