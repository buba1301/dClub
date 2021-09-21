import { useEffect } from 'react';

const useLockBodyScroll = (toggle: boolean) => {
  useEffect(() => {
    document.body.style.overflow = toggle ? 'hidden' : 'visible';

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [toggle]);
};

export default useLockBodyScroll;
