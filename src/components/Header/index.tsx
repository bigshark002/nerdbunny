import { useTranslation } from 'react-i18next';
import { Box, Typography, Button } from '@/components/common';
import { ElipsisCircleOutline } from '@/components/icons';

const Header = () => {

  const { t } = useTranslation();

  return (
    <Box
      className='w-[375px] mx-auto h-[37px] font-Poppins flex px-4 py-2.5 justify-between items-center text-white'
    >
      <Typography
        className='font-semibold text-[17px] tracking-[-.44px]'
        text={t('Cancel')}
      />
      <Typography
        className='font-semibold text-[17px] tracking-[-.44px] pr-[40px]'
        text={t('ProjectName')}
      />
      <Button
        icon={<ElipsisCircleOutline width={22} height={22} />}
      />
    </Box>
  );
};

export default Header;