import { type FC, useRef, RefObject } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useClickOutSide } from '@/hooks';
import { Modal, Box, Button, Image, Typography } from '@/components/common';
import { shareLink } from '@/components/images';
import { Shape } from '@/components/icons';



interface InviteModalProps {
  open: boolean
  onClose: () => void
}

const InviteModal: FC<InviteModalProps> = ({ open, onClose }) => {
  const navigate = useNavigate();
  const modalRef: RefObject<HTMLDivElement> = useRef(null);
  const { t } = useTranslation();

  useClickOutSide(modalRef, onClose);

  const handleShare = () => {
    onClose();
    navigate(`/squad/NerdBunnyFrontend`);
  };

  return (
    <Modal isOpen={open}>
      <Box
        className='w-[327px] px-1 flex flex-col items-center font-Montserrat font-extrabold  rounded-[24px] border-2 border-white bg-PurpleSecond shadow-PurpleSecond relative'
        containerRef={modalRef}
      >
        <Button
          className='absolute top-0 right-0 mt-5 mr-4'
          onClick={onClose}
        >
          <Shape width={15} height={15} />
        </Button>
        <Image className='mt-[21px]' src={shareLink} />
        <Typography
          className='text-[18px] text-stroke-1 text-stroke-BluePrimary leading-5 mt-3'
          text={t('ShareInviteLink')}
        />
        <Typography
          className='mt-[3px] text-[12px] leading-5 tracking-[.5px]'
          text={t('ShareDescription')}
        />
        <Button
          className='w-[306px] mx-auto h-[45.46px] p-3 flex items-center justify-center leading-5 mt-[10px] text-stroke-1
        bg-YellowSecond rounded-[20px] shadow-YellowSecond border-2 border-white text-[20px] tracking-[.5px] text-stroke-BluePrimary'
          content={t('Share')}
          onClick={handleShare}
        />
        <Typography
          className='mt-[6px] text-[14px] leading-5 tracking-[.5px] text-stroke-1 
          text-stroke-BluePrimary'
          text={t('Or')}
        />
        <Typography
          className='w-[158px] h-[21px] absolute top-[242px] left-[29px] rounded-[10px] bg-BluePrimary text-[9px] 
          leading-5 tracking-[.5px] text-center'
          text={t('SecretKeyInvite')}
        />
        <Box
          className='w-[306px] h-[44px] rounded-[18px] bg-PurpleThird leading-5 mt-[13px] 
          tracking-[.5px] text-center text-[14px] flex items-center justify-center'
        >
          fxegd
        </Box>
        <Button
          className='w-[306px] mx-auto h-[45.46px] p-3 flex items-center justify-center leading-5 text-stroke-1 text-stroke-BluePrimary
        bg-YellowSecond rounded-[20px] shadow-YellowSecond border-2 border-white mt-[18px] text-[20px] tracking-[.5px]'
          content={t('Copy')}
        />
        <Typography
          className='w-[285px] text-center mt-3 text-[12px] leading-5 tracking-[.5px] mb-[10px]'
          text={t('CopyDescription')}
        />
      </Box>
    </Modal>
  );
};

export default InviteModal;