import React, { FunctionComponent, memo } from 'react';
import { TextField } from '@mui/material';
import { useController } from 'react-hook-form';
import { UseControlledProps } from '@mui/utils/useControlled';

interface iInput {
  name: string | any;
  label?: string;
  type?: 'text' | 'number' | 'password' | 'email' | 'tel';
  control?: any;
  required?: boolean;
  autoCapitalize?: boolean;
  style?: React.CSSProperties;
  disabled?: boolean;
}

const Input: FunctionComponent<iInput> = ({
  name,
  label,
  type,
  control,
  required,
  style,
  disabled
}): JSX.Element => {
  const {
    field: { onChange, value },
    fieldState: { error }
  } = useController<UseControlledProps>({
    name,
    control,
    rules: { required }
  });

  return (
    <>
      <TextField
        error={error ? true : false}
        id="filled-basic"
        label={label}
        value={value}
        type={type}
        variant="filled"
        style={style}
        disabled={disabled}
        onChange={onChange}
        helperText={error ? error.message : ''}
      />
    </>
  );
};

export default memo(Input);
