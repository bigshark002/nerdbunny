import { type FC, useRef, RefObject } from 'react';
import { useNavigate } from 'react-router-dom';
import { useClickOutSide } from '@/hooks';
import { Modal, Box, Button } from '@/components/common';

interface LevelUpModalProps {
  open: boolean;
  onClose: () => void;
}

const SquadModal: FC<LevelUpModalProps> = ({ open, onClose }) => {
  const navigate = useNavigate();
  const modalRef: RefObject<HTMLDivElement> = useRef(null);

  useClickOutSide(modalRef, onClose);

  const handleJoin = () => {
    onClose();
    navigate(`/squad/NerdBunnyFrontend`);
  }

  return (
    <Modal isOpen={open}>
      <Box
        className='w-[343px] h-[314px] p-3 flex items-center gap-4 rounded-[12px] bg-[#C58BFB]'
        containerRef={modalRef}
      >
        <Button className='w-[311px] mx-auto h-[48px] p-3 flex items-center justify-center bg-[#F8E773] rounded-[21px]' content="JOIN" onClick={handleJoin}/>
      </Box>
    </Modal>
  )
}

export default SquadModal;