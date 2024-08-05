import { type FC } from 'react';
import { SvgIconProps } from '@/types';

const SvgChevron: FC<SvgIconProps> = ({ width = 24, height = 24 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.76355 5.64645L9.41 5.29289L9.05645 5.64645L7.64645 7.05645L7.29328 7.40961L7.64606 7.76317L11.8737 12L7.64606 16.2368L7.29328 16.5904L7.64645 16.9436L9.05645 18.3536L9.41 18.7071L9.76355 18.3536L15.7636 12.3536L16.1171 12L15.7636 11.6464L9.76355 5.64645Z" fill="white" stroke="black" />
    </svg>
  )
}

export default SvgChevron;