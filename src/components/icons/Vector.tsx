import { type FC } from 'react';
import { SvgIconProps } from '@/types';

const SvgVector: FC<SvgIconProps> = ({ width = 26, height = 22 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3537 8.96087L21.6024 0.707211L25.2929 4.39766L13.3371 16.3535L12.6464 17.0441L9.29317 20.3974L5.25415 16.3537L5.25394 16.3535L0.707311 11.8068L4.39745 8.12097L8.93941 12.6629L9.29273 13.0162L9.64628 12.6632L13.3533 8.96122L13.3537 8.96087Z" fill="#C8E600" stroke="#43B75D" />
    </svg>

  );
};

export default SvgVector;