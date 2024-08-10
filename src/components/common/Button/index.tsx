import React, { type FC } from 'react';
import { ClipLoader } from 'react-spinners';

interface ButtonProps {
  className?: string;
  icon?: React.ReactElement;
  image?: string;
  imageSize?: string;
  content?: string;
  isLoading?: boolean;
  spinSize?: number;
  spinColor?: string;
  enabled?: boolean;
  cursor?: boolean;
  link?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ className = '', icon, image, imageSize = '', content = '', isLoading = false, spinSize = 14, spinColor = 'white', enabled = true, cursor = true, link = '', children, onClick }) => {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      e.stopPropagation();
      onClick();
    } else if (link) {
      e.stopPropagation();
      window.open(link, '_blank');
    }
  };

  return (
    <button className={`outline-none ${cursor ? 'cursor-pointer' : 'cursor-not-allowed'} ${className || 'bg-transparent'}`} disabled={!enabled || isLoading} onClick={handleClick}>
      {isLoading ?
        <ClipLoader size={spinSize} color={spinColor} />
        :
        <>
          {image && <img className={imageSize} src={image ?? ''} alt='' />}
          {icon ?? icon}
          {content ?? content}
          {children ?? children}
        </>
      }
    </button>
  );
};

export default Button;