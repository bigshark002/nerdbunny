import React, { type FC, RefObject } from 'react';

interface BoxProps {
  className?: string;
  background?: string;
  gradient?: string;
  left?: string;
  containerRef?: RefObject<HTMLDivElement>;
  id?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Box: FC<BoxProps> = ({ className = '', background = '', gradient = '', left = '', containerRef, id = '', children, onClick }) => {

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      e.stopPropagation();
      onClick();
    }
  };

  return (
    <div className={`${className}${onClick ? ' cursor-pointer' : ''}`} style={{ backgroundImage: background ? `url(${background})` : gradient || undefined, left: left || undefined }} id={id || undefined} ref={containerRef} onClick={handleClick}>
      {children}
    </div>
  );
};

export default Box;