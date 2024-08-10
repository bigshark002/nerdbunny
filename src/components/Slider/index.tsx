import { type FC, useState, useEffect } from 'react';
import { Box, Button, Image, Typography } from '@/components/common';
import { SliderProps } from './Slider.types';
import { Next } from '@/components/icons';

const Slider: FC<SliderProps> = ({ options, name, value, type, coin, onChange }) => {
  const [option, setOption] = useState(options?.filter(item => item.id === value)[0]);

  useEffect(() => {
    setOption(options?.filter(item => item.id === value)[0]);
  }, [value, options]);

  const handleChange = (val: string) => {
    if (val === 'prev') {
      onChange(name, value - 1);
    } else {
      onChange(name, value + 1);
    }
  };

  return (
    <Box
      className='w-[318px] h-[140px] flex items-center justify-between'
    >
      <Button
        className={`w-[35px] h-[35px] p-0 bg-YellowPrimary rounded-full rotate-180 flex items-center justify-center text-black`}
        cursor={option?.id !== 0}
        icon={<Next />}
        enabled={option?.id !== 0}
        onClick={() => handleChange('prev')}
      />
      <Box
        className='w-[230px] flex flex-col items-center gap-2'
      >
        <Image
          className={`${option?.imageSize} transition duration-500 ease-in-out`}
          src={option?.image}
        />
        <Typography
          className='h-[20px] text-[18px] font-extrabold'
          text={value === 0 ? '' : type === 'miner' ? `${coin} / ${option?.miner}` : `${coin} / ${option?.squad}`}
        />
      </Box>
      <Button
        className={`w-[35px] h-[35px] p-0 bg-YellowPrimary rounded-full flex items-center justify-center text-black`}
        cursor={option?.id !== 4}
        icon={<Next />}
        enabled={option?.id !== 4}
        onClick={() => handleChange('next')}
      />
    </Box>
  );
};

export default Slider;