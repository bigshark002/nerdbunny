import { type FC } from 'react'

interface ImageProps {
  src: string;
  className?: string;
  alt?: string;
}

const Image: FC<ImageProps> = ({ src, className = '', alt = '' }) => {

  return (
    <img className={className} src={src} alt={alt} />
  )
}

export default Image