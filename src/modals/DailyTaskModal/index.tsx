import { type FC, useRef, RefObject, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useClickOutSide } from '@/hooks';
import { Modal, Box, Button, Image, Typography } from '@/components/common';
import { calendar, chest, chestOpenIcon } from '@/components/images';
import { Shape } from '@/components/icons';

interface DailyTaskModalProps {
  open: boolean
  onClose: () => void
}

const DailyTaskModal: FC<DailyTaskModalProps> = ({ open, onClose }) => {
  const modalRef: RefObject<HTMLDivElement> = useRef(null);
  const [isClaim, setIsClaim] = useState(false);
  const { t } = useTranslation();

  const handleClaimClick = () => {
    setIsClaim(true);
  };

  useClickOutSide(modalRef, onClose);

  useEffect(() => {
    if (!open) {
      setIsClaim(false);
    }
  }, [open]);


  return (
    <Modal isOpen={open}>
      <Box
        className='relative w-[340px] px-[17px] py-[22px] flex flex-col rounded-[26px] bg-PurpleSecond shadow-PurpleSecond border-2 border-white'
        containerRef={modalRef}
      >
        <Image className='w-[84px] h-[63px] absolute top-[-34px] left-[134px]' src={calendar} />
        <Button className='absolute right-[23px] top-[21px]' onClick={onClose}>
          <Shape />
        </Button>
        <Box className='flex flex-col items-center justify-center'>
          <Image
            className={`${isClaim ? 'w-[88px] h-[81px]' : 'w-[70px] h-[63px]'} mt-5`}
            src={isClaim ? chestOpenIcon : chest}
          />
          <Typography
            className='font-Montserrat mt-[9px] font-extrabold text-[16px] tracking-[.5px] leading-5 text-stroke-1 text-stroke-BluePrimary'
            text={t(isClaim ? 'LuckyReward' : 'ReceiveReward')}
          />
          <Typography
            className='mt-[16px] font-Montserrat font-extrabold text-[25px] tracking-[.5px] leading-5 text-YellowPrimary text-stroke-2 text-stroke-BluePrimary'
            text={isClaim ? '4091' : '5K-1M'}
          />
          {!isClaim && (
            <Button
              className='w-[306px] h-[45.46px] border-2 border-white bg-YellowSecond shadow-YellowSecond font-Montserrat 
            font-extrabold text-[20px] tracking-[.5px] leading-5 text-stroke-1 text-stroke-PurpleSecond rounded-[20px] mt-[17px]'
              content={t('Claim')}
              onClick={handleClaimClick}
            />
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default DailyTaskModal;