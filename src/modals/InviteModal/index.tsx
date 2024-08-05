import { type FC, useRef, RefObject } from 'react';
import { useNavigate } from 'react-router-dom';
import { useClickOutSide } from '@/hooks';
import { Modal, Box, Button, Image, Typography } from '@/components/common';

import Icon from '@/assets/images/icon.png';

interface InviteModalProps {
  open: boolean;
  onClose: () => void;
}

const InviteModal: FC<InviteModalProps> = ({ open, onClose }) => {
  const navigate = useNavigate();
  const modalRef: RefObject<HTMLDivElement> = useRef(null);

  useClickOutSide(modalRef, onClose);

  const handleShare = () => {
    onClose();
    navigate(`/squad/NerdBunnyFrontend`);
  }

  return (
    <Modal isOpen={open}>
      <Box
        className='w-[343px] p-3 flex flex-col items-center gap-4 rounded-[12px] bg-[#C58BFB]'
        containerRef={modalRef}
      >
        <Image src={Icon} />
        <Typography text='SHARE INVITE LINK' />
        <Typography text='Reach this level to enjoy 50,999 coin award' />
        <Button className='w-[311px] mx-auto h-[48px] p-3 flex items-center justify-center bg-[#F8E773] rounded-[21px]' content="SHARE" onClick={handleShare} />
        <Typography text='OR' />
        <Typography text='Secret key to invite' />
        <Typography text='fxegd' />
        <Button className='w-[311px] mx-auto h-[48px] p-3 flex items-center justify-center bg-[#F8E773] rounded-[21px]' content="COPY" />
      </Box>
    </Modal>
  )
}

export default InviteModal;