import React, { CSSProperties, FunctionComponent, memo, MouseEventHandler, ReactNode } from 'react';
import Btn from '@mui/material/Button';
import { createTheme, Theme, ThemeProvider } from '@mui/material';

export interface iButton {
  variant: 'text' | 'contained' | 'outlined';
  label: string;
  style?: CSSProperties;
  disabled?: boolean;
  fontWeight?: number;
  startIcon?: ReactNode;
  onClick: MouseEventHandler<HTMLAnchorElement> | any;
  endIcon?: ReactNode;
  type?: 'submit' | 'button' | 'reset';
  btnSize?: 'small' | 'large' | 'medium';
}

const Button: FunctionComponent<iButton> = ({
  variant,
  label,
  fontWeight,
  style,
  disabled,
  type,
  startIcon,
  onClick,
  endIcon,
  btnSize
}): JSX.Element => {
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <Btn
        variant={variant}
        style={{
          backgroundColor: variant !== 'text' ? 'rgb(239,88,36)' : 'transparent',
          borderRadius: '6px',
          fontWeight,
          ...style,
          width: '100%'
        }}
        disabled={disabled}
        type={type}
        onClick={onClick}
        startIcon={startIcon}
        size={btnSize}
        endIcon={endIcon}>
        {label}
      </Btn>
      {/* </ThemeProvider> */}
    </>
  );
};

Button.defaultProps = {
  variant: 'contained',
  btnSize: 'medium',
  disabled: false,
  endIcon: <></>,
  fontWeight: 550,
  startIcon: <></>,
  label: 'Autmn',
  type: 'button'
};

export default memo(Button);
