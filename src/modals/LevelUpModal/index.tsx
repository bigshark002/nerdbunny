import { type FC, useRef, RefObject } from 'react';
import { useTranslation } from 'react-i18next';
import { useClickOutSide } from '@/hooks';
import { Modal, Box, Button, Image, Typography } from '@/components/common';
import { Shape } from '@/components/icons';
import { Contents } from './LevelUpModal.constants';

interface LevelUpModalProps {
  open: boolean;
  type: string;
  onClose: () => void;
}

const LevelUpModal: FC<LevelUpModalProps> = ({ open, type, onClose }) => {
  const { t } = useTranslation();
  const modalRef: RefObject<HTMLDivElement> = useRef(null);
  const data = Contents[type as keyof typeof Contents];

  useClickOutSide(modalRef, onClose);

  return (
    <Modal isOpen={open}>
      <Box
        className={`relative w-[327px] ${type === 'pack' ? 'h-[593px] pt-[60px]' : 'h-[278.5px]'} font-Montserrat p-3 flex flex-col items-center gap-1.5 rounded-[25px] bg-PurpleSecond shadow-PurpleSecond border-2 border-White`}
        containerRef={modalRef}
      >
        <Button
          className='absolute top-0 right-0 mt-5 mr-4'
          icon={<Shape width={15} height={15} />}
          onClick={onClose}
        />
        <Image
          className={`${data?.imageSize ?? ''} ${type === 'pack' ? 'absolute top-[-20px]' : ''}`}
          src={data?.image ?? ''}
        />
        <Typography
          className='text-[18px] font-extrabold text-stroke-1 text-stroke-BluePrimary'
          text={t(data?.title ?? '')}
        />
        <Box
          className='flex flex-col gap-2 items-center'
        >
          {data?.description?.map((item, index) => (
            <>
              {index > 0 &&
                <Typography
                  className='text-[12px] leading-[20px] text-center'
                  text={`lvl ${index}:`}
                />
              }
              <Typography
                key={index}
                className={`text-[12px] font-extrabold leading-[20px] text-center ${index > 1 ? 'text-YellowFifth': ''}`}
                text={t(item)}
              />
            </>
          ))}
        </Box>
        <Typography
          className='mt-[6px] text-[25px] font-extrabold text-YellowPrimary leading-[20px] text-stroke-2 text-stroke-BluePrimary'
          text='200 / Lvl 1'
        />
        <Button
          className='mt-[14px] w-[306px] h-[45.46px] flex items-center justify-center rounded-[20px] bg-YellowSecond shadow-YellowSecond border-2 border-White text-[20px] font-extrabold text-stroke-1 text-stroke-PurpleSecond'
          content={t('Levelup')}
        />
      </Box>
    </Modal>
  );
};

export default LevelUpModal;