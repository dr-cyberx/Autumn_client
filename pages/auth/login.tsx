import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../components/core/Input';
import { Mail } from '@mui/icons-material';

interface iLogin {}

const Login: FunctionComponent = (): JSX.Element => {
  const { control } = useForm();

  return (
    <>
      <Input
        name={'username'}
        label={'Password'}
        control={control}
        InputType={'password'}
        endIcon={{
          icon: <Mail />,
          position: 'end',
          shouldInclude: true
        }}
      />
    </>
  );
};

export default Login;
