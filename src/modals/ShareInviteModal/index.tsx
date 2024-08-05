import { type FC, useRef, RefObject } from 'react';
import { useNavigate } from 'react-router-dom';
import { useClickOutSide } from '@/hooks';
import { Modal, Box, Button, Image, Typography } from '@/components/common';

import Icon from '@/assets/images/icon.png';

interface ShareInviteModalProps {
  open: boolean;
  onClose: () => void;
}

const ShareInviteModal: FC<ShareInviteModalProps> = ({ open, onClose }) => {
  const navigate = useNavigate();
  const modalRef: RefObject<HTMLDivElement> = useRef(null);

  useClickOutSide(modalRef, onClose);

  const handleInvite = () => {
    onClose();
    navigate(`/squad/NerdBunnyFrontend`);
  }

  return (
    <Modal isOpen={open}>
      <Box
        className='w-[343px] h-[314px] p-3 flex flex-col items-center gap-4 rounded-[12px] bg-[#C58BFB]'
        containerRef={modalRef}
      >
        <Image src={Icon}/>
        <Typography text='INVITE 1 FRIEND'/>
        <Typography text='Reach this level to enjoy 50,999 coin award' />
        <Button className='w-[311px] mx-auto h-[48px] p-3 flex items-center justify-center bg-[#F8E773] rounded-[21px]' content="CLAIM" onClick={handleInvite} />
      </Box>
    </Modal>
  )
}

export default ShareInviteModal;