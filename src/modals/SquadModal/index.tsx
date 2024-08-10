import { type FC, useRef, RefObject, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useClickOutSide } from '@/hooks';
import SquadView from '@/components/SquadView';
import { Modal, Box, Button, Image, InputField, Typography } from '@/components/common';
import { Shape } from '@/components/icons';
import { joinSquad, bunnyGreen } from '@/components/images';
import { Title, Description } from './SquadModal.constants';

interface LevelUpModalProps {
  open: boolean;
  type?: string;
  onClose: () => void;
}

interface CreateSquadProps {
  link: string;
  handleChange: (name: string, value: string) => void;
}

const CreateSquad: FC<CreateSquadProps> = ({ link, handleChange }) => {
  const { t } = useTranslation();

  return (
    <Box
      className='w-full flex flex-col items-center gap-1'
    >
      <Image
        className={`w-[50px] h-[52.74px]`}
        src={joinSquad }
      />
      <Typography
        className='mt-2 text-[18px] font-extrabold text-stroke-1 text-stroke-BluePrimary'
        text={t(Title)}
      />
      <Typography
        className='w-[318px] text-[12px] font-extrabold leading-[20px] text-center'
        text={t(Description)}
      />
      <Box
        className='relative mt-4'
      >
        <InputField
          className='w-[306px] h-[44px] px-9 py-3 rounded-[18px] bg-PurpleThird outline-none placeholder-PurpleSixth'
          name='squad'
          value={link}
          placeholder='eg.NerdBunny'
          onChange={handleChange}
        />
        <Typography
          className='absolute top-[-10px] left-[20px] w-[52px] h-[21px] bg-BluePrimary rounded-[10px] text-[10px] font-extrabold flex items-center justify-center'
          text={t('Squad')}
        />
      </Box>
    </Box>
  );
};

const SquadModal: FC<LevelUpModalProps> = ({ open, type = 'new', onClose }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const modalRef: RefObject<HTMLDivElement> = useRef(null);
  const [link, setLink] = useState(type === 'new' ? '' : type);

  useClickOutSide(modalRef, onClose);

  useEffect(() => {
    setLink(type === 'new' ? '' : type);
  }, [type]);

  const handleJoin = () => {
    onClose();
    navigate(`/squad/${link}`);
  };

  const handleChange = (name: string, value: string) => {
    if (name !== '') setLink(value);
  };

  return (
    <Modal isOpen={open}>
      <Box
        className='relative font-Montserrat text-white w-[343px] min-h-[290px] px-2.5 py-5 flex flex-col items-center gap-4 rounded-[25px] bg-PurpleSecond shadow-PurpleSecond border-2 border-White'
        containerRef={modalRef}
      >
        <Button
          className='absolute top-0 right-0 mt-5 mr-4'
          icon={<Shape width={15} height={15} />}
          onClick={onClose}
        />
        {type === 'new' ?
          <CreateSquad link={link} handleChange={handleChange} />
          :
          <SquadView type='modal' image={bunnyGreen} name='NERDBUNNY' level='Platinum' memberCount={324537} link='platinum' />
        }
        <Button className='w-[306px] h-[45.46px] p-1 flex items-center justify-center bg-YellowSecond shadow-YellowSecond rounded-[20px] border-2 border-White text-[20px] font-extrabold text-stroke-1 text-stroke-PurpleSecond'
          content={t('Join')}
          onClick={handleJoin}
        />
      </Box>
    </Modal>
  );
};

export default SquadModal;