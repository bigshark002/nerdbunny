import { type FC, useRef, RefObject } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useClickOutSide } from '@/hooks';
import { Modal, Box, Button, Image, Typography } from '@/components/common';
import { connectWallet } from '@/components/images';
import { Shape } from '@/components/icons';


interface ConnectWalletModalProps {
  open: boolean
  onClose: () => void
}

const ConnectWalletModal: FC<ConnectWalletModalProps> = ({ open, onClose }) => {
  const navigate = useNavigate();
  const modalRef: RefObject<HTMLDivElement> = useRef(null);
  const { t } = useTranslation();

  useClickOutSide(modalRef, onClose);

  const handleConnect = () => {
    onClose();
    navigate(`/squad/NerdBunnyFrontend`);
  };

  return (
    <Modal isOpen={open}>
      <Box
        className='w-[327px] h-[290px] font-Montserrat px-1 flex flex-col items-center justify-center border-2 
        border-white rounded-[24px] bg-PurpleSecond shadow-PurpleSecond relative'
        containerRef={modalRef}
      >
        <Button
          className='absolute top-0 right-0 mt-5 mr-4'
          onClick={onClose}
        >
          <Shape width={15} height={15} />
        </Button>
        <Image className='w-[92px] h-[67px]' src={connectWallet} />
        <Typography
          className='font-extrabold mt-3 text-[20px] text-stroke-1 text-stroke-BluePrimary leading-5'
          text={t('ConnectWalletTitle')}
        />
        <Typography
          className='font-extrabold mt-2 text-[12px] leading-5 tracking-[.5px] spacing-[10px] text-center'
          text={t('ConnectWalletDescription')}
        />
        <Typography
          className='font-semibold mt-[30px] text-[12px] leading-5 tracking-[.5px]'
          text={t('TutorialVideo')}
        />
        <Button className='w-[306px] mx-auto h-[45.46px] p-3 flex items-center justify-center leading-5 
        text-stroke-1 text-stroke-PurpleSecond bg-YellowSecond rounded-[20px] shadow-YellowSecond 
        border-2 border-white text-[20px] tracking-[.5px] font-extrabold mt-[11px]'
          content={t('ConnectWalletTitle')}
          onClick={handleConnect}
        />
      </Box>
    </Modal>
  );
};

export default ConnectWalletModal;