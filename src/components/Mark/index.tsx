import { type FC } from 'react';
import ProgressBar from '@/components/ProgressBar';
import { Box, Typography } from '@/components/common';
import { BunnyGreen, BunnyPurple } from '@/components/icons';
import { MarkProps } from './Mark.types';

const Mark: FC<MarkProps> = ({ mark = 0, width = 'w-full', percent = 0, type = 'mark' }) => {

  const topPosition = type === 'mark' ? 'top-[-3px]' : 'top-[-5px]';

  return (
    <Box
      className={`relative ${width}`}
    >
      {type === 'mark' ?
        <Typography
          className={`font-Montserrat bg-BluePrimary rounded-[15px] h-[19px] flex items-center justify-center font-Montserrat text-[12px] font-extrabold`}
          text={mark.toString()}
        />
        :
        <ProgressBar type={type} height='h-[15px]' percent={percent} />
      }
      <Box
        className={`absolute ${topPosition}`}
        left={type === 'mark'? '': `${mark}px`}
      >
        {type === 'mark' ?
          <BunnyGreen width={25} height={25} />
          :
          <BunnyPurple width={25} height={25} />
        }
      </Box>
    </Box>
  );
};

export default Mark;