import { type FC } from 'react';
import Header from '@/components/Header';
import { Box } from '@/components/common';
import { background } from '@/components/images';

export const LeadPage: FC = () => {
  return (
    <Box
      className={`flex flex-col  w-full relative z-0 bg-cover bg-center h-screen before:content-['']
        before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/80 before:via-black/30 before:to-black/80 before:z-[-5]`}
      background={background}
    >
      <Header />
      Lead
    </Box>
  );
};