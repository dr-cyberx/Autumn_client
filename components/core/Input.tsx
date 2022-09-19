import React, { cloneElement, FunctionComponent, memo, ReactElement } from 'react';
import { Box, InputAdornment, TextField } from '@mui/material';
import { useController } from 'react-hook-form';
import { UseControlledProps } from '@mui/utils/useControlled';

type Icons = {
  shouldInclude: boolean;
  position: 'start' | 'end';
  icon: ReactElement;
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

  const showInputIcon = (icon: Icons['icon']): JSX.Element => {
    return (
      <>
        {cloneElement(icon, {
          sx: { color: error ? '#d32f2f' : 'action.active', mr: 1, my: 0.5 }
        })}
      </>
    );
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        {startIcon?.shouldInclude
          ? showInputIcon(startIcon.icon)
          : endIcon?.shouldInclude
          ? showInputIcon(endIcon.icon)
          : null}
        <TextField
          error={error ? true : false}
          name={name}
          id="input-with-sx"
          label={label}
          value={value}
          type={InputType}
          variant="standard"
          style={{ ...style, width: '100%' }}
          disabled={disabled}
          onChange={onChange}
          helperText={error ? error.message : ''}
          size={size}
        />
      </Box>
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

export default Input;
