import { type FC, useRef, RefObject } from 'react';
import { useClickOutSide } from '@/hooks';
import { Modal, Box, Button } from '@/components/common';

interface DailyTaskModalProps {
  open: boolean;
  onClose: () => void;
}

const DailyTaskModal: FC<DailyTaskModalProps> = ({ open, onClose }) => {
  const modalRef: RefObject<HTMLDivElement> = useRef(null);

  useClickOutSide(modalRef, onClose);

  return (
    <Modal isOpen={open}>
      <Box
        className='w-[343px] h-[314px] p-3 flex gap-4 rounded-[12px] bg-[#C58BFB]'
        containerRef={modalRef}
      >
        <Button content="DONE" />
      </Box>
    </Modal>
  )
}

export default DailyTaskModal;