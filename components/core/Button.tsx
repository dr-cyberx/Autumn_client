import React, { CSSProperties, FunctionComponent, memo, MouseEventHandler, ReactNode } from 'react';
import Btn from '@mui/material/Button';
import { createTheme, Theme, ThemeProvider } from '@mui/material';

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#03a9f4'
    },
    error: {
      main: '#ef5350'
    },
    success: {
      main: '#4caf50'
    }
  }
});

interface iButton {
  children: string;
  variant: 'text' | 'contained' | 'outlined';
  label: string;
  style?: CSSProperties;
  disabled?: boolean;
  color?: 'success' | 'primary' | 'success';
  startIcon?: ReactNode;
  onClick: MouseEventHandler<HTMLAnchorElement> | any;
  endIcon: ReactNode;
}

const Button: FunctionComponent<iButton> = ({
  children,
  variant,
  label,
  style,
  disabled,
  color,
  startIcon,
  onClick,
  endIcon
}): JSX.Element => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Btn
          variant={variant}
          style={style}
          disabled={disabled}
          color={color}
          onClick={onClick}
          startIcon={startIcon}
          endIcon={endIcon}>
          {label}
        </Btn>
      </ThemeProvider>
    </>
  );
};

export default memo(Button);
