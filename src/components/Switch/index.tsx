import { type FC } from 'react';
import { Box } from '@/components/common';
import { SwitchProps } from './Switch.types';

const Switch: FC<SwitchProps> = ({ options, name, value, onChange }) => {
  const handleClick = (val: string) => {
    if (val !== value) onChange(name, val);
  }

  return (
    <Box className='w-[240px] h-[36px] p-1 flex gap-2.5 bg-[#6A1AB4] rounded-[600px]' id={name}>
      {options?.map(item => (
        <Box 
          key={item?.key} 
          className={`w-[110px] h-[28px] px-2 py-1 flex items-center justify-center ${item.key === value ? 'bg-white text-black rounded-[600px]': 'text-white'}`} 
          onClick={() => handleClick(item?.key)}
        >
          {item.value}
        </Box>
      ))}
    </Box>
  )
}

export default Switch;