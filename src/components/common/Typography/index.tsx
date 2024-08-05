import { type FC } from 'react';

interface TypographyProps {
  className?: string;
  text: string;
  onClick?: () => void;
}

const Typography: FC<TypographyProps> = ({ className = '', text, onClick }) => {

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (onClick) {
      e.stopPropagation();
      onClick();
    }
  }

  return (
    <span className={`${className} overflow-x-hidden text-ellipsis`} onClick={handleClick}>
      {text}
    </span>
  )
}

export default Typography;