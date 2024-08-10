import { type FC } from 'react';
import { Box, Typography } from '@/components/common';
import { ProgressBarProps } from './ProgressBar.types';

const ProgressBar: FC<ProgressBarProps> = ({ type = 'normal', width = 'w-full', height = 'h-[18.52px]', text = '', percent }) => {

  return (
    <Box
      className={`${width} ${height} rounded-[12px] flex items-center justify-center ${type === 'normal' ? 'border border-white' : ''}`}
      gradient={`linear-gradient(to right, ${type === 'normal' ? '#FFEA95' : '#C8E600'} ${percent}%, ${type === 'normal' ? '#08143E' : '#519154'} 0%)`}
    >
      <Typography
        className='font-Rubik font-black text-[12px] text-stroke-1 text-stroke-Black'
        text={text}
      />
    </Box>
  );
};

export default ProgressBar;