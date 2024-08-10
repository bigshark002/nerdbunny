import { type FC, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Button, Image } from '@/components/common';
import { SquadViewProps } from './SquadView.types';
import { InitialData } from './SquadView.constants';

const SquadView: FC<SquadViewProps> = ({ type = 'normal', image, name, level, memberCount, link }) => {
  const { t } = useTranslation();

  const [data, setData] = useState(InitialData);

  useEffect(() => {
    const _data = [...InitialData];

    _data[0].text = level ?? '';
    _data[2].text = memberCount?.toString() ?? '';
    _data[3].link = link ?? '';

    setData(_data);
  }, [memberCount, link, level]);

  return (
    <Box
      className='flex flex-col items-center gap-2'
    >
      <Image
        className='w-[50px] h-[50px]'
        src={image}
      />
      <Typography
        className='text-[18px] font-extrabold text-stroke-1 text-stroke-BluePrimary'
        text={name}
      />
      <Box
        className={`${type === 'normal' ? 'w-[341px]' : 'w-[306px]'} mt-3 grid grid-cols-2 gap-4`}
      >
        {data.map(item => (
          <Button
            key={item.id}
            className={`${type === 'normal' ? 'w-[166px]' : 'w-[147px]'} h-[80px] text-[16px] font-extrabold rounded-[18px] flex flex-col gap-2 items-center justify-center ${type === 'normal' ? 'bg-PurpleSecond border-2 border-white' : 'bg-PurpleThird'}`}
            image={item.image}
            imageSize={item.imageSize}
            content={t(item.text)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SquadView;