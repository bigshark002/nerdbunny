import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from '@/components/common';
import { SwitchProps } from './Switch.types';

const Switch: FC<SwitchProps> = ({ options, name, value, onChange }) => {
  const { t } = useTranslation();

  const handleClick = (val: string) => {
    if (val !== value) onChange(name, val);
  };

  return (
    <Box className='w-[240px] h-[36px] p-1 flex gap-2.5 bg-PurplePrimary rounded-[600px]' id={name}>
      {options?.map(item => (
        <Box 
          key={item?.key} 
          className={`w-[110px] h-[28px] font-Montserrat text-[12px] font-black px-2 py-1 flex items-center justify-center ${item.key === value ? 'bg-white text-BlackSecond rounded-[600px]': 'text-white'}`} 
          onClick={() => handleClick(item?.key)}
        >
          {t(item.value)}
        </Box>
      ))}
    </Box>
  );
};

export default Switch;