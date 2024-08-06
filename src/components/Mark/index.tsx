import { type FC } from 'react'
import { Box, Typography } from '@/components/common'

import { BunnyGreen, BunnyPurple } from '@/components/icons'
import { MarkProps } from './Mark.types'

const Mark: FC<MarkProps> = ({ mark = 0, width = 'w-full', type = 'mark' }) => {
  return (
    <Box
      className='relative'
    >
      <Typography
        className={`${type === 'mark' ? 'bg-BluePrimary' : 'bg-GreenPrimary'} rounded-[15px] ${width} h-[19px] flex items-center justify-center font-Montserrat text-[12px]`}
        text={type === 'mark' ? mark.toString() : ''}
      />
      <Box
        className='absolute top-[-3px] left-0'
      >
        {type === 'mark' ?
          <BunnyGreen width={25} height={25} />
          :
          <BunnyPurple width={25} height={25} />
        }
      </Box>
    </Box>
  )
}

export default Mark