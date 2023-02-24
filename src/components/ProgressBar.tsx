import { GlobalStyles } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import NProgress from 'nprogress';
import { useEffect, useMemo } from 'react';

export function ProgressBarStyle() {
  const theme = useTheme();

  return (
    <GlobalStyles
      styles={{
        '#nprogress': {
          pointerEvents: 'none',
          '& .bar': {
            top: 0,
            left: 0,
            height: 2,
            width: '100%',
            position: 'fixed',
            zIndex: theme.zIndex.tooltip,
            backgroundColor: theme.palette.primary.main,
            boxShadow: 'none',
          },
        },
      }}
    />
  );
}

export default function ProgressBar() {
  NProgress.configure({
    showSpinner: false,
  });

  useMemo(() => {
    NProgress.start();
  }, []);

  useEffect(() => {
    NProgress.done();
  }, []);

  return null;
}
