import { type FC, useRef, RefObject } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useClickOutSide } from '@/hooks';
import { Modal, Box, Button, Image, Typography } from '@/components/common';
import { frens, joinSquadThree } from '@/components/images';
import { Shape } from '@/components/icons';


interface ShareInviteModalProps {
  open: boolean
  onClose: () => void
  peopleToInvite: number
}

const ShareInviteModal: FC<ShareInviteModalProps> = ({ open, onClose, peopleToInvite = 1 }) => {
  const imageSrc = peopleToInvite > 1 ? joinSquadThree : frens;
  const navigate = useNavigate();
  const modalRef: RefObject<HTMLDivElement> = useRef(null);
  const { t } = useTranslation();

  useClickOutSide(modalRef, onClose);

  const handleInvite = () => {
    onClose();
    navigate(`/squad/NerdBunnyFrontend`);
  };

  return (
    <Modal isOpen={open}>
      <Box
        className='w-[327px] h-[250px] font-Montserrat font-extrabold px-1 flex flex-col items-center border-2 border-white rounded-[24px] bg-PurpleSecond shadow-PurpleSecond relative'
        containerRef={modalRef}
      >
        <Button
          className='absolute top-0 right-0 mt-5 mr-4'
          onClick={onClose}
        >
          <Shape width={15} height={15} />
        </Button>
        <Image className='mt-[39px]' src={imageSrc} />
        <Typography
          className='text-[18px] text-stroke-1 text-stroke-BluePrimary leading-5 mt-3'
          text={t(`INVITE ${peopleToInvite} ${peopleToInvite > 1 ? 'FRIENDS' : 'FRIEND'}`)}
        />
        <Typography
          className='mt-3 text-[12px] leading-5 tracking-[.5px]'
          text={t('ShareDescription')}
        />
        <Button className='w-[306px] mx-auto h-[45.46px] p-3 flex items-center text-stroke-1 text-stroke-BluePrimary justify-center leading-5
        bg-YellowSecond rounded-[20px] shadow-YellowSecond border-2 border-white mt-[18px] text-[20px] tracking-[.5px]'
          content={t('Claim')}
          onClick={handleInvite}
        />
      </Box>
    </Modal>
  );
};

export default ShareInviteModal;