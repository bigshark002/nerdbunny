import { type FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import SquadView from '@/components/SquadView';
import LeaderBoard from '@/components/LeaderBoard';
import { Box, Button } from '@/components/common';
import { background, bunnyGreen } from '@/components/images';
import { Actions } from './SquadDetail.constants';

export const SquadDetailPage: FC = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  const [type, setType] = useState('day');

  const handleChange = (name: string, value: string) => {
    if (name) setType(value);
  };

  const handleLink = (link: string) => {
    console.log('link', link);
  };

  return (
    <Box
      className={`flex flex-col w-full relative z-0 bg-cover bg-center h-screen before:content-['']
        before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/80 before:via-black/30 before:to-black/80 before:z-[-5]`}
      background={background}
    >
      <Header />
      <Box
        className='w-[343px] font-Montserrat text-white mt-1 mx-auto flex flex-col items-center gap-6'
      >
        <SquadView image={bunnyGreen} name={id ?? ''} level='Platinum' memberCount={324537} link='Platinum' />
        <Box
          className='flex items-center justify-between gap-2'
        >
          {Actions.map(item => (
            <Button
              key={item.id}
              className={`w-[109px] h-[45.46px] text-[10px] ${item.bgColor} rounded-[15px] border-2 border-white text-[12px] font-extrabold flex items-center justify-center`}
              content={t(item.text)}
              onClick={() => handleLink(item.link)}
            />
          ))}
        </Box>
        <LeaderBoard type={type} height='h-[350px]' handleChange={handleChange} />
      </Box>
    </Box>
  );
};