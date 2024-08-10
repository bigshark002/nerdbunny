import { type FC } from 'react';
import Switch from '@/components/Switch';
import { Box, Typography, Button, Image } from '@/components/common';
import { BunnyPurple } from '@/components/icons';
import { trophyBronze, trophyGold, trophySilver } from '@/components/images';
import { TIME_TYPES } from '@/constants/common';
import { LeaderBoardProps, UserItemProps } from './LeaderBoard.types';
import { MockDatas } from './LeaderBoard.constants';

const UserItem: FC<UserItemProps> = ({ item, isMe = false }) => {
  return (
    <Box
      key={item.id}
      className={`${isMe ? 'w-[341px] bg-BlueThird h-[85px] px-[18px] py-2.5 rounded-[25px] border-2 border-white' : 'w-[300px]'} flex items-center gap-2`}
    >
      <Typography className='w-[25px]' text={`${item.rank}`} />
      <Button
        className='w-[52px] h-[52px] bg-BluePrimary rounded-[12px] flex items-center'
      />
      <Box
        className='flex flex-col gap-1.5'
      >
        <Typography className='text-[14px] font-extrabold leading-[20px]' text={item.name} />
        <Button
          className='w-[74px] px-2 py-0.5 flex items-center gap-1 text-white text-[13px] bg-PurplePrimary rounded-[80px] border border-White'
          icon={<BunnyPurple width={17} height={17} />}
          content={item.value.toString()}
        />
      </Box>
      {isMe &&
        <Typography className='ml-auto mr-0 text-[14px] font-extrabold text-BluePrimary' text='YOU' />
      }
      {!isMe && item.rank < 4 && item.rank > 0 &&
        <Box
          className='ml-auto mr-0'
        >
          <Image className='w-[28px] h-[30px]' src={item.rank === 1 ? trophyGold : item.rank === 2 ? trophySilver : trophyBronze} />
        </Box>
      }
    </Box>
  );
};

const LeaderBoard: FC<LeaderBoardProps> = ({ options = MockDatas, owner = MockDatas[2], type, height, handleChange }) => {

  return (
    <Box
      className={`w-[343px] ${height} text-White bg-PurpleSecond shadow-PurpleSecond border-2 border-White rounded-[25px] flex flex-col items-center pt-4`}
    >
      <Switch
        options={TIME_TYPES}
        name='time'
        value={type}
        onChange={handleChange}
      />
      <Box
        className='mt-4 pb-2 w-full h-[500px] overflow-y-auto overflow-x-hidden flex flex-col items-center gap-4'
      >
        {options.map(item => (
          <UserItem key={item.id} item={item} />
        ))}
      </Box>
      {owner && <UserItem item={owner} isMe={true} />}
    </Box>
  );
};

export default LeaderBoard;