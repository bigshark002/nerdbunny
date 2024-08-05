import { Box, Typography, Button } from '@/components/common';
import { ElipsisCircleOutline } from '@/components/icons';

const Header = () => {

  return (
    <Box
      className='h-[37px] flex px-2 justify-between items-center text-white'
    >
      <Typography text='Cancel' />
      <Typography text='NerdBunny' />
      <Button
        icon={<ElipsisCircleOutline width={22} height={22} />}
      />
    </Box>
  )
}

export default Header;