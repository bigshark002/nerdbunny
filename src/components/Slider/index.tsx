import { type FC, useState, useEffect } from 'react';
import { Box, Button, Typography } from '@/components/common';
import { SliderProps } from './Slider.types';
import { Next } from '@/components/icons';

const Slider: FC<SliderProps> = ({ options, name, value, type, coin, onChange }) => {
  const [option, setOption] = useState(options?.filter(item => item.id === value)[0]);

  useEffect(() => {
    setOption(options?.filter(item => item.id === value)[0]);
  }, [value]);

  const handleChange = (val: string) => {
    if (val === 'prev') {
      onChange(name, value - 1);
    } else {
      onChange(name, value + 1);
    }
  }

  return (
    <Box
      className='w-[318px] h-[120px] flex items-center justify-between'
    >
      <Button
        className={`w-[40px] h-[40px] p-0 bg-[#EDC53B] rounded-full rotate-180 flex items-center justify-center`}
        icon={<Next />}
        enabled={option?.id !== 0}
        onClick={() => handleChange('prev')}
      />
      <Box
        className='flex flex-col items-center gap-2'
      >
        {option?.icon}
        <Typography text={value === 0 ? '' : type === 'miner' ? `${coin} / ${option?.miner}` : `${coin} / ${option?.squad}`} />
      </Box>
      <Button
        className={`w-[40px] h-[40px] p-0 bg-[#EDC53B] rounded-full flex items-center justify-center`}
        icon={<Next />}
        enabled={option?.id !== 4}
        onClick={() => handleChange('next')}
      />
    </Box>
  )
}

export default Slider;