import { Box, Typography, Button } from '@/components/common';
import { ElipsisCircleOutline } from '@/components/icons';

const Header = () => {

  return (
    <Box
      className='h-[37px] font-Poppins flex px-4 justify-between items-center text-white'
    >
      <Typography className='font-semibold text-[17px] tracking-[-.44px]' text='Cancel' />
      <Typography className='font-semibold text-[17px] tracking-[-.44px]' text='NerdBunny' />
      <Button
        icon={<ElipsisCircleOutline width={22} height={22} />}
      />
    </Box>
  )
}

export default Header;