import React, { FunctionComponent } from 'react';
import { Mail, Lock } from '@mui/icons-material';
import { FieldValues, useForm } from 'react-hook-form';
import Input from '@core/Input';
import Button from '@core/Button';

const Login: FunctionComponent = (): JSX.Element => {
  const { control, handleSubmit } = useForm<FieldValues, any>();

  function onSubmit(data: any) {
    console.log('data -> ', data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input name="email" InputType="email" control={control} label={'Email'} required />
        <Input name="Password" InputType="password" control={control} label={'Password'} required />
        <Button
          onClick={() => console.log('hello')}
          label="Submit"
          variant="contained"
          btnSize="large"
          type="submit"
        />
      </form>
    </>
  );
};

export default Login;
