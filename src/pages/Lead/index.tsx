import { type FC } from 'react';
import Header from '@/components/Header';
import { Box } from '@/components/common';

import Background from '@/assets/images/bg_welcome.png';

export const LeadPage: FC = () => {
  return (
    <Box
      className='flex flex-col w-full bg-cover bg-center h-screen'
      background={Background}
    >
      <Header />
      Lead
    </Box>
  )
}