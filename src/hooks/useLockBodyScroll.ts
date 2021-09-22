import { useEffect } from 'react';

const useLockBodyScroll = (toggle: boolean, matchMediaValue: string) => {
  useEffect(() => {
    if (window.matchMedia(matchMediaValue).matches) {
      document.body.style.overflow = toggle ? 'hidden' : 'visible';
    }
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [toggle]);
};

export default useLockBodyScroll;
