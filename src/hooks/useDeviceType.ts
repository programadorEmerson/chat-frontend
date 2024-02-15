import { useState, useEffect } from 'react';

import { useTheme } from 'styled-components';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia(theme.media.mobile.replace('@media ', '')).matches);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return { isMobile };
};

export default useIsMobile;
