import { useEffect, RefObject } from 'react';

const useClickOutSide = (ref: RefObject<HTMLDivElement>, callbackFn = () => { }) => {
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callbackFn();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });
}

export default useClickOutSide;