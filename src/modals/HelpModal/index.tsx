import { type FC, useRef, RefObject } from 'react';
import { useTranslation } from 'react-i18next';
import { useClickOutSide } from '@/hooks';
import { Modal, Box, Image, Typography } from '@/components/common';
import { swipe } from '@/components/images';

interface HelpModalProps {
  open: boolean;
  onClose: () => void;
}

const HelpModal: FC<HelpModalProps> = ({ open, onClose }) => {
  const { t } = useTranslation();
  const modalRef: RefObject<HTMLDivElement> = useRef(null);

  useClickOutSide(modalRef, onClose);

  return (
    <Modal isOpen={open}>
      <Box
        className='w-[295px] h-[210px] p-3 flex flex-col items-center justify-center gap-5 rounded-[25px] bg-PurpleSecond shadow-PurpleSecond border-2 border-white'
        containerRef={modalRef}
      >
        <Image className='w-[68px] h-[79.66px]' src={swipe} />
        <Typography
          className='w-[212px] font-Motserrat text-[18px] text-center font-extrabold text-stroke-1 text-stroke-BluePrimary spacing-[10px]'
          text={t('Help')}
        />
      </Box>
    </Modal>
  );
};

export default HelpModal;