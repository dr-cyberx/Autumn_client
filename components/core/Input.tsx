import React, { FunctionComponent, memo, ReactNode, useState } from 'react';
import { IconButton, InputAdornment, SvgIconTypeMap, TextField } from '@mui/material';
import { useController } from 'react-hook-form';
import { UseControlledProps } from '@mui/utils/useControlled';
import { Visibility, VisibilityOff } from '@mui/icons-material';

type Icons = {
  shouldInclude: boolean;
  position: 'start' | 'end';
  icon: ReactNode;
};

interface iInput {
  name: string | any;
  label?: string;
  InputType?: 'text' | 'number' | 'password' | 'email' | 'tel';
  control?: any;
  required?: boolean;
  style?: React.CSSProperties;
  disabled?: boolean;
  size?: 'small' | 'medium';
  startIcon?: Icons;
  endIcon?: Icons;
}

const Input: FunctionComponent<iInput> = ({
  name,
  label,
  InputType,
  control,
  required,
  style,
  disabled,
  size,
  startIcon,
  endIcon
}): JSX.Element => {
  const {
    field: { onChange, value },
    fieldState: { error }
  } = useController<UseControlledProps>({
    name,
    control,
    rules: { required }
  });
  const [btnType, setBtnType] = useState<boolean>(false);

  const TogglePasswordIcons = (): JSX.Element => {
    return (
      <>
        {btnType
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setBtnType(true)}
                    edge="end">
                    <VisibilityOff />
                  </IconButton>
                </InputAdornment>
              )
            }
          : {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setBtnType(false)}
                    edge="end">
                    <Visibility />
                  </IconButton>
                </InputAdornment>
              )
            }}
      </>
    );
  };

  return (
    <>
      <TextField
        error={error ? true : false}
        // id="filled-basic"
        id="input-with-sx"
        label={label}
        value={value}
        type={InputType}
        variant="filled"
        style={style}
        disabled={disabled}
        onChange={onChange}
        helperText={error ? error.message : ''}
        size={size}
        InputProps={
          startIcon?.shouldInclude
            ? {
                startAdornment: (
                  <InputAdornment position={startIcon.position}>{startIcon.icon}</InputAdornment>
                )
              }
            : endIcon?.shouldInclude
            ? {
                endAdornment: (
                  <InputAdornment position={endIcon.position}>{endIcon.icon}</InputAdornment>
                )
              }
            : {}
        }
      />
    </>
  );
};

Input.defaultProps = {
  disabled: false,
  label: 'Autmn app',
  name: 'Autmn-btn',
  style: {},
  InputType: 'text',
  required: false,
  size: 'medium',
  startIcon: {
    icon: <></>,
    position: 'start',
    shouldInclude: false
  }
};

export default memo(Input);
